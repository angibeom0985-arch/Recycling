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
      className={`w-full mb-4 xs:mb-6 sm:mb-8 md:mb-10 p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm ${
        recyclingItem?.color || 'bg-gradient-to-r from-purple-500 to-pink-500'
      }`}
    >
      <div className="flex items-center justify-between gap-2 xs:gap-3 sm:gap-4">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
            {recyclingItem?.icon || '📢'}
          </div>
          <div>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white">
              🔔 오늘 알림
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow-md">
              {message}
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-center text-xl xs:text-2xl sm:text-3xl md:text-4xl animate-bounce">
          ⏰
        </div>
      </div>
    </div>
  );
};
