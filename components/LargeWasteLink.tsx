'use client';

import React, { useState, useEffect } from 'react';

interface Region {
  name: string;
  phone: string;
  website: string;
}

const regions: Record<string, Region> = {
  '서울특별시': { name: '서울특별시', phone: '☎️ 120', website: 'https://eclass.seoul.go.kr' },
  '경기도': { name: '경기도', phone: '☎️ 031-120', website: 'https://www.gg.go.kr' },
  '인천광역시': { name: '인천광역시', phone: '☎️ 032-120', website: 'https://www.incheon.go.kr' },
  '부산광역시': { name: '부산광역시', phone: '☎️ 051-120', website: 'https://www.busan.go.kr' },
  '대구광역시': { name: '대구광역시', phone: '☎️ 053-120', website: 'https://www.daegu.go.kr' },
  '광주광역시': { name: '광주광역시', phone: '☎️ 062-120', website: 'https://www.gwangju.go.kr' },
  '대전광역시': { name: '대전광역시', phone: '☎️ 042-120', website: 'https://www.daejeon.go.kr' },
  '울산광역시': { name: '울산광역시', phone: '☎️ 052-120', website: 'https://www.ulsan.go.kr' },
};

export default function LargeWasteLink() {
  const [userRegion, setUserRegion] = useState<Region | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      const location = JSON.parse(savedLocation);
      if (location.region && regions[location.region]) {
        setUserRegion(regions[location.region]);
      }
    }
  }, []);

  return (
    <>
      {/* 대형 폐기물 버튼 */}
      <button
        onClick={() => {
          if (userRegion) {
            window.location.href = userRegion.website;
          } else {
            alert('지역을 먼저 설정해주세요!');
          }
        }}
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-3 xs:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] touch-manipulation"
      >
        <div className="flex items-center justify-center gap-2 xs:gap-3">
          <span className="text-xl xs:text-2xl">🪑</span>
          <span className="text-sm xs:text-base font-semibold">대형 폐기물 신고</span>
          {userRegion && <span className="text-xs opacity-75">({userRegion.phone})</span>}
        </div>
      </button>
    </>
  );
}
