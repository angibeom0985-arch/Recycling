'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RecyclingItem } from '@/components/RecyclingItem';
import { ScheduleCalendar } from '@/components/ScheduleCalendar';
import { NotificationCenter } from '@/components/NotificationCenter';

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
    <main className="min-h-screen w-full p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-4 xs:mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 drop-shadow-lg">
            ♻️ 분리수거 알리미
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90">
            자신의 지역 분리수거 일정을 확인하세요
          </p>
        </div>

        {/* 알림 배너 */}
        <NotificationCenter message={getTodayNotification()} recyclingItem={getTodayRecycling()} />

        {/* 레이아웃: 포트레이트는 단일 열, 랜드스케이프는 2열 */}
        <div className={`${isPortrait ? 'flex flex-col' : 'grid grid-cols-2'} gap-4 xs:gap-5 sm:gap-6 md:gap-8`}>
          {/* 왼쪽: 분리수거 스케줄 그리드 */}
          <div
            className={`${
              isPortrait ? 'w-full' : 'col-span-1'
            } grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-5`}
          >
            {recyclingSchedule.map((item) => (
              <div key={item.type} className="aspect-square">
                <RecyclingItem {...item} />
              </div>
            ))}
          </div>

          {/* 오른쪽: 달력과 상세 정보 */}
          <div className={`${isPortrait ? 'w-full' : 'col-span-1'} flex flex-col gap-4 xs:gap-5 sm:gap-6`}>
            <ScheduleCalendar recyclingSchedule={recyclingSchedule} />
          </div>
        </div>
      </div>
    </main>
  );
}
