'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RecyclingItem } from '@/components/RecyclingItem';
import { ScheduleCalendar } from '@/components/ScheduleCalendar';
import { NotificationCenter } from '@/components/NotificationCenter';
import LocationSettings from '@/components/LocationSettings';
import ItemSearch from '@/components/ItemSearch';
import NotificationSettings from '@/components/NotificationSettings';
import LargeWasteLink from '@/components/LargeWasteLink';

interface RecyclingData {
  type: string;
  day: string;
  icon: string;
  color: string;
  description: string;
}

export default function Home() {
  const [currentDay, setCurrentDay] = useState<string>('');
  const [isPortrait, setIsPortrait] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const recyclingSchedule: RecyclingData[] = [
    {
      type: '종이류',
      day: '월요일',
      icon: '📰',
      color: 'bg-gradient-to-br from-blue-400 to-blue-600',
      description: '신문, 잡지, 상자',
    },
    {
      type: '플라스틱',
      day: '화요일',
      icon: '🥤',
      color: 'bg-gradient-to-br from-green-400 to-green-600',
      description: '음료수병, 용기',
    },
    {
      type: '유리',
      day: '수요일',
      icon: '🍾',
      color: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
      description: '유리병, 유리 제품',
    },
    {
      type: '금속',
      day: '목요일',
      icon: '🥫',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      description: '캔, 금속 제품',
    },
    {
      type: '의류',
      day: '금요일',
      icon: '👕',
      color: 'bg-gradient-to-br from-pink-400 to-pink-600',
      description: '의류, 신발',
    },
    {
      type: '음식물',
      day: '토요일',
      icon: '🍌',
      color: 'bg-gradient-to-br from-orange-400 to-orange-600',
      description: '남은 음식, 찌꺼기',
    },
    {
      type: '일반쓰레기',
      day: '일요일',
      icon: '🗑️',
      color: 'bg-gradient-to-br from-gray-400 to-gray-600',
      description: '분류되지 않는 쓰레기',
    },
  ];

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

  const getTodayRecycling = () => {
    return recyclingSchedule.find((item) => item.day === currentDay);
  };

  const getTodayNotification = () => {
    const today = getTodayRecycling();
    if (today) {
      return `오늘은 ${today.type} 배출일입니다!`;
    }
    return '';
  };

  return (
    <>
      {/* 위치 설정 버튼 (우측 상단) */}
      <LocationSettings />

      {/* 품목 검색 버튼 (우측 하단 위) */}
      <ItemSearch />

      {/* 알림 설정 버튼 (우측 하단) */}
      <NotificationSettings />

      <main className="min-h-screen w-full p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 pb-safe pb-24">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 - 모바일 최적화 */}
          <div className="text-center mb-3 xs:mb-4 sm:mb-6 md:mb-8 mt-12 xs:mt-0">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2 sm:mb-3 drop-shadow-lg">
              ♻️ 분리수거 알리미
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/90">
              우리 동네 분리수거 일정을 확인하세요
            </p>
          </div>

          {/* 알림 배너 */}
          <NotificationCenter message={getTodayNotification()} recyclingItem={getTodayRecycling()} />

          {/* 대형 폐기물 신고 버튼 */}
          <div className="mb-3 xs:mb-4 sm:mb-5">
            <LargeWasteLink />
          </div>

          {/* 모바일 우선 레이아웃 */}
          <div className="flex flex-col gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            {/* 분리수거 스케줄 그리드 - 모바일 2열, 태블릿+ 3열 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4">
              {recyclingSchedule.map((item) => (
                <div key={item.type} className="aspect-square">
                  <RecyclingItem {...item} />
                </div>
              ))}
            </div>

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
