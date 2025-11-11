'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LargeWasteLink() {
  const router = useRouter();
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      const location = JSON.parse(savedLocation);
      setHasLocation(!!location.region);
    }
  }, []);

  const handleButtonClick = () => {
    if (hasLocation) {
      router.push('/large-waste');
    } else {
      alert('지역을 먼저 설정해주세요!');
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-3 xs:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] touch-manipulation"
    >
      <div className="flex items-center justify-center gap-2 xs:gap-3">
        <span className="text-xl xs:text-2xl">🪑</span>
        <span className="text-sm xs:text-base font-semibold">대형 폐기물 신고</span>
      </div>
    </button>
  );
}
