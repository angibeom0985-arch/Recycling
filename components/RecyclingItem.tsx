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
      className={`flex flex-col items-center justify-center p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl ${color} shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full`}
    >
      <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl mb-2 xs:mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white text-center mb-1 xs:mb-2">
        {type}
      </h3>
      <p className="text-xs xs:text-sm sm:text-base text-white/90 text-center mb-2 xs:mb-3 line-clamp-2">
        {description}
      </p>
      <div className="text-xs xs:text-sm sm:text-base font-semibold text-white bg-black/20 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full mt-auto">
        {day}
      </div>
    </div>
  );
};
