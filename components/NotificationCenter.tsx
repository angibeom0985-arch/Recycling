'use client';

import React from 'react';

interface NotificationCenterProps {
  message: string;
  recyclingItem?: {
    type: string;
    icon: string;
    color: string;
  } | undefined;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  message,
  recyclingItem,
}) => {
  if (!message) return null;

  return (
    <div
      className={`w-full mb-3 xs:mb-4 sm:mb-6 md:mb-8 p-2 xs:p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm ${
        recyclingItem?.color || 'bg-gradient-to-r from-purple-500 to-pink-500'
      }`}
    >
      <div className="flex items-center justify-between gap-2 xs:gap-3">
        <div className="flex items-center gap-2 xs:gap-3">
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl flex-shrink-0">
            {recyclingItem?.icon || '📢'}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-white truncate">
              🔔 오늘 알림
            </p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-white drop-shadow-md truncate">
              {message}
            </p>
          </div>
        </div>
        <div className="hidden xs:flex items-center justify-center text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce flex-shrink-0">
          ⏰
        </div>
      </div>
    </div>
  );
};
