'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RecyclingItem } from '@/components/RecyclingItem';
import { ScheduleCalendar } from '@/components/ScheduleCalendar';
import { NotificationCenter } from '@/components/NotificationCenter';
import LocationSettings from '@/components/LocationSettings';
import ItemSearch from '@/components/ItemSearch';
import NotificationSettings from '@/components/NotificationSettings';
import LargeWasteLink from '@/components/LargeWasteLink';
import RecyclingGuideButton from '@/components/RecyclingGuideButton';
import ExitConfirmDialog from '@/components/ExitConfirmDialog';
import { getRegionalSchedule, getTodayItems } from '@/data/regionalRecyclingData';

interface RecyclingData {
  type: string;
  day: string;
  icon: string;
  color: string;
  description: string;
}

export default function Home() {
  const [currentDay, setCurrentDay] = useState<string>('');
  const [userRegion, setUserRegion] = useState<string>('기본');
  const [recyclingSchedule, setRecyclingSchedule] = useState<RecyclingData[]>([]);
  const [isPortrait, setIsPortrait] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [backPressCount, setBackPressCount] = useState(0);

  // 아이콘 매핑
  const iconMap: { [key: string]: { icon: string; color: string } } = {
    '종이류': { icon: '📰', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    '플라스틱': { icon: '🥤', color: 'bg-gradient-to-br from-green-400 to-green-600' },
    '유리': { icon: '🍾', color: 'bg-gradient-to-br from-cyan-400 to-cyan-600' },
    '금속': { icon: '🥫', color: 'bg-gradient-to-br from-yellow-400 to-yellow-600' },
    '비닐': { icon: '🛍️', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
    '음식물': { icon: '�', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    '일반쓰레기': { icon: '🗑️', color: 'bg-gradient-to-br from-gray-400 to-gray-600' },
  };

  // 지역 설정 로드
  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      const location = JSON.parse(savedLocation);
      setUserRegion(location.region || '기본');
    }
  }, []);

  // 지역별 일정 로드
  useEffect(() => {
    const regionalData = getRegionalSchedule(userRegion);
    const schedule: RecyclingData[] = [];
    
    Object.entries(regionalData.items).forEach(([itemName, itemData]) => {
      const iconData = iconMap[itemName] || { icon: '�', color: 'bg-gradient-to-br from-gray-400 to-gray-600' };
      schedule.push({
        type: itemName,
        day: itemData.days.join(', '),
        icon: iconData.icon,
        color: iconData.color,
        description: itemData.description,
      });
    });
    
    setRecyclingSchedule(schedule);
  }, [userRegion]);

  // 지역 변경 이벤트 리스너
  useEffect(() => {
    const handleLocationChange = () => {
      const savedLocation = localStorage.getItem('userLocation');
      if (savedLocation) {
        const location = JSON.parse(savedLocation);
        setUserRegion(location.region || '기본');
      }
    };

    window.addEventListener('locationChanged', handleLocationChange);
    return () => {
      window.removeEventListener('locationChanged', handleLocationChange);
    };
  }, []);

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsPortrait(window.innerHeight > window.innerWidth);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const today = new Date().getDay();
    setCurrentDay(days[today]);
  }, []);

  // 뒤로가기 감지 (브라우저 히스토리)
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      setShowExitDialog(true);
      // 히스토리를 다시 푸시하여 뒤로가기 방지
      window.history.pushState(null, '', window.location.href);
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    // 초기 히스토리 상태 추가
    window.history.pushState(null, '', window.location.href);
    
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleExitConfirm = () => {
    setShowExitDialog(false);
    // 실제 앱 종료 (PWA의 경우)
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  };

  const handleExitCancel = () => {
    setShowExitDialog(false);
  };

  const getTodayRecycling = () => {
    const todayItems = getTodayItems(userRegion);
    if (todayItems.length > 0) {
      // 오늘 배출 가능한 첫 번째 품목 반환
      const firstItem = todayItems[0];
      return recyclingSchedule.find((item) => item.type === firstItem);
    }
    return undefined;
  };

  const getTodayNotification = () => {
    const todayItems = getTodayItems(userRegion);
    if (todayItems.length > 0) {
      if (todayItems.length === 1) {
        return `오늘은 ${todayItems[0]} 배출일입니다!`;
      } else {
        return `오늘은 ${todayItems.join(', ')} 배출일입니다!`;
      }
    }
    return '오늘은 배출일이 아닙니다.';
  };

  return (
    <>
      {/* 종료 확인 다이얼로그 with 광고 */}
      <ExitConfirmDialog
        isOpen={showExitDialog}
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />

      {/* 품목 검색 버튼 (우측 하단 위) */}
      <ItemSearch />

      {/* 알림 설정 버튼 (우측 하단) */}
      <NotificationSettings />

      <main className="min-h-screen w-full p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 pb-safe pb-20 landscape:py-2 portrait:py-4">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 - 반응형 최적화 */}
          <div className="text-center mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 landscape:mb-2">
            <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 xs:mb-1.5 sm:mb-2 md:mb-2.5 drop-shadow-lg landscape:text-2xl landscape:mb-1">
              ♻️ 분리수거 알리미
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/90 landscape:text-sm">
              우리 동네 분리수거 일정을 확인하세요
            </p>
          </div>

          {/* 1. 지역 설정 버튼 */}
          <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5">
            <LocationSettings />
          </div>

          {/* 2. 오늘의 배출 알림 */}
          <NotificationCenter message={getTodayNotification()} recyclingItem={getTodayRecycling()} />

          {/* 3. 분리수거 완벽 가이드 버튼 */}
          <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5">
            <RecyclingGuideButton />
          </div>

          {/* 4. 대형 폐기물 신고 버튼 */}
          <div className="mb-2 xs:mb-3 sm:mb-4 md:mb-5">
            <LargeWasteLink />
          </div>

          {/* 반응형 레이아웃 */}
          <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 md:gap-5 landscape:gap-2">
            {/* 달력과 상세 정보 */}
            <div className="w-full">
              <ScheduleCalendar recyclingSchedule={recyclingSchedule} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
