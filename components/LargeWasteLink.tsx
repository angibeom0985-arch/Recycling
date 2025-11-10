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
        onClick={() => setIsOpen(true)}
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-3 xs:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-98 touch-manipulation"
      >
        <div className="flex items-center justify-center gap-2 xs:gap-3">
          <span className="text-xl xs:text-2xl">🪑</span>
          <span className="text-sm xs:text-base font-semibold">대형 폐기물 신고</span>
        </div>
      </button>

      {/* 정보 모달 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-4 xs:p-5 sm:p-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="text-center mb-4">
              <div className="text-4xl xs:text-5xl mb-2">🪑</div>
              <h2 className="text-lg xs:text-xl font-bold text-gray-800">
                대형 폐기물 배출 안내
              </h2>
            </div>

            {userRegion ? (
              <div className="space-y-3 xs:space-y-4">
                <div className="bg-purple-50 p-3 xs:p-4 rounded-lg">
                  <p className="text-xs xs:text-sm text-gray-600 mb-2">📍 설정된 지역</p>
                  <p className="text-base xs:text-lg font-bold text-purple-700">
                    {userRegion.name}
                  </p>
                </div>

                <div className="bg-gray-50 p-3 xs:p-4 rounded-lg">
                  <p className="text-xs xs:text-sm text-gray-600 mb-2">📞 신고 전화</p>
                  <p className="text-base xs:text-lg font-bold text-gray-800">
                    {userRegion.phone}
                  </p>
                </div>

                <div className="bg-blue-50 p-3 xs:p-4 rounded-lg">
                  <p className="text-[10px] xs:text-xs text-blue-800 mb-2">
                    💡 <strong>배출 방법</strong>
                  </p>
                  <ul className="text-[10px] xs:text-xs text-blue-700 space-y-1">
                    <li>1. 위 전화번호로 신고하세요</li>
                    <li>2. 스티커를 구매하세요</li>
                    <li>3. 스티커를 붙여 지정된 장소에 배출하세요</li>
                  </ul>
                </div>

                <a
                  href={userRegion.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 xs:py-3 rounded-lg text-center font-semibold text-sm hover:from-purple-600 hover:to-indigo-600 transition-all active:scale-95"
                >
                  🌐 구청 홈페이지 방문
                </a>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-2xl mb-2">📍</p>
                <p className="text-xs xs:text-sm text-gray-600 mb-4">
                  지역을 먼저 설정해주세요
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-purple-500 text-white px-4 xs:px-6 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors"
                >
                  확인
                </button>
              </div>
            )}

            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 xs:mt-4 text-xs xs:text-sm text-gray-500 hover:text-gray-700 py-2"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
