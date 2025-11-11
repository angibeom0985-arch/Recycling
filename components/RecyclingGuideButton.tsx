'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function RecyclingGuideButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/recycling-guide')}
      className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white p-3 xs:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] touch-manipulation"
    >
      <div className="flex items-center justify-center gap-2 xs:gap-3">
        <span className="text-xl xs:text-2xl">♻️</span>
        <span className="text-sm xs:text-base font-semibold">분리수거 완벽 가이드</span>
        <span className="text-xs opacity-75">(요일별 품목)</span>
      </div>
    </button>
  );
}
