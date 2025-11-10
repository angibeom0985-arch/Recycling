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
      {/* 주간 일정 그리드 */}
      <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-lg mb-4 xs:mb-5 sm:mb-6">
        <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 xs:mb-4 sm:mb-5">
          📅 주간 일정
        </h2>

        <div className="grid grid-cols-7 gap-1 xs:gap-2 sm:gap-3">
          {days.map((day) => {
            const recycling = getDayRecycling(day);
            const isSelected = selectedDay === day;

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(isSelected ? null : day)}
                className={`
                  aspect-square flex flex-col items-center justify-center rounded-lg sm:rounded-xl
                  transition-all duration-300 cursor-pointer p-1 xs:p-2 sm:p-3
                  ${
                    isSelected
                      ? 'ring-4 ring-white scale-105 shadow-xl'
                      : 'hover:scale-105'
                  }
                  ${recycling?.color || 'bg-white/10 hover:bg-white/20'}
                  text-white
                `}
              >
                <div className="text-base xs:text-lg sm:text-2xl md:text-3xl mb-0.5 xs:mb-1">
                  {recycling?.icon || '🗓️'}
                </div>
                <span className="text-xs xs:text-sm font-bold text-center leading-none">
                  {day}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 선택된 요일의 상세 정보 */}
      {selectedRecycling && (
        <div
          className={`rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg animate-in fade-in slide-in-from-bottom-4 ${selectedRecycling.color}`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 xs:gap-4 sm:gap-6">
            <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl">
              {selectedRecycling.icon}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 xs:mb-2">
                {selectedRecycling.type}
              </h3>
              <p className="text-sm xs:text-base sm:text-lg text-white/90 mb-2 xs:mb-3">
                배출일: <span className="font-semibold">{selectedRecycling.day}</span>
              </p>
              <p className="text-xs xs:text-sm sm:text-base text-white/80">
                {selectedRecycling.description}
              </p>
              <div className="mt-3 xs:mt-4 sm:mt-5 pt-3 xs:pt-4 sm:pt-5 border-t border-white/30">
                <p className="text-xs xs:text-sm text-white/80">💡 팁:</p>
                <ul className="text-xs xs:text-sm text-white/90 mt-1 xs:mt-2 space-y-1">
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
        <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 text-center text-white/70">
          <p className="text-sm xs:text-base sm:text-lg">
            👆 위의 요일을 선택하여 상세 정보를 확인하세요
          </p>
        </div>
      )}
    </div>
  );
};
