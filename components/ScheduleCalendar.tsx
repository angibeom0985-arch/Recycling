'use client';

import React, { useState, useMemo, useCallback } from 'react';

interface RecyclingData {
  type: string;
  day: string;
  icon: string;
  color: string;
  description: string;
}

interface ScheduleCalendarProps {
  recyclingSchedule: RecyclingData[];
}

export const ScheduleCalendar: React.FC<ScheduleCalendarProps> = ({
  recyclingSchedule,
}) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const days = useMemo(() => ['일', '월', '화', '수', '목', '금', '토'], []);

  const getDayRecycling = useCallback((dayName: string) => {
    const fullDays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const fullDayName = fullDays[days.indexOf(dayName)];
    return recyclingSchedule.find((item) => item.day === fullDayName);
  }, [recyclingSchedule, days]);

  const selectedRecycling = useMemo(() => {
    if (!selectedDay) return null;
    return getDayRecycling(selectedDay);
  }, [selectedDay, getDayRecycling]);

  return (
    <div className="w-full">
      {/* 주간 일정 그리드 - 모바일 최적화 */}
      <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 shadow-lg mb-3 xs:mb-4 sm:mb-5">
        <h2 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
          📅 주간 일정
        </h2>

        <div className="grid grid-cols-7 gap-1 xs:gap-1.5 sm:gap-2">
          {days.map((day) => {
            const recycling = getDayRecycling(day);
            const isSelected = selectedDay === day;

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(isSelected ? null : day)}
                className={`
                  aspect-square flex flex-col items-center justify-center rounded-md sm:rounded-lg
                  transition-all duration-200 touch-manipulation active:scale-95
                  ${
                    isSelected
                      ? 'ring-2 xs:ring-3 ring-white scale-105 shadow-xl'
                      : 'hover:scale-105 active:scale-95'
                  }
                  ${recycling?.color || 'bg-white/10 active:bg-white/30'}
                  text-white p-0.5 xs:p-1 sm:p-2
                `}
              >
                <div className="text-sm xs:text-base sm:text-xl md:text-2xl mb-0 xs:mb-0.5">
                  {recycling?.icon || '🗓️'}
                </div>
                <span className="text-[10px] xs:text-xs sm:text-sm font-bold text-center leading-none">
                  {day}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 선택된 요일의 상세 정보 - 모바일 최적화 */}
      {selectedRecycling && (
        <div
          className={`rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200 ${selectedRecycling.color}`}
        >
          <div className="flex flex-col items-center text-center gap-2 xs:gap-3 sm:gap-4">
            <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl">
              {selectedRecycling.icon}
            </div>
            <div className="w-full">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 xs:mb-2">
                {selectedRecycling.type}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-white/90 mb-2">
                배출일: <span className="font-semibold">{selectedRecycling.day}</span>
              </p>
              <p className="text-xs xs:text-sm sm:text-base text-white/80">
                {selectedRecycling.description}
              </p>
              <div className="mt-2 xs:mt-3 sm:mt-4 pt-2 xs:pt-3 sm:pt-4 border-t border-white/30">
                <p className="text-xs xs:text-sm text-white/80 font-semibold mb-1 xs:mb-2">💡 분리수거 팁</p>
                <ul className="text-[10px] xs:text-xs sm:text-sm text-white/90 space-y-0.5 xs:space-y-1 text-left max-w-md mx-auto">
                  <li>• 분리수거 규칙을 준수해주세요</li>
                  <li>• 깨끗이 씻어서 배출하세요</li>
                  <li>• 정해진 시간에 배출해주세요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {!selectedRecycling && (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 text-center text-white/70">
          <p className="text-xs xs:text-sm sm:text-base">
            👆 위의 요일을 탭하여 상세 정보를 확인하세요
          </p>
        </div>
      )}
    </div>
  );
};
