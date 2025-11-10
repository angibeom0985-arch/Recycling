import React from 'react';

interface RecyclingItemProps {
  type: string;
  day: string;
  icon: string;
  color: string;
  description: string;
}

export const RecyclingItem: React.FC<RecyclingItemProps> = ({
  type,
  day,
  icon,
  color,
  description,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-2 xs:p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl ${color} shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 w-full h-full touch-manipulation`}
    >
      <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-1 xs:mb-2 sm:mb-3">{icon}</div>
      <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white text-center mb-1">
        {type}
      </h3>
      <p className="text-[10px] xs:text-xs sm:text-sm text-white/90 text-center mb-1 xs:mb-2 line-clamp-1">
        {description}
      </p>
      <div className="text-[10px] xs:text-xs sm:text-sm font-semibold text-white bg-black/20 px-2 py-0.5 xs:py-1 rounded-full mt-auto">
        {day}
      </div>
    </div>
  );
};
