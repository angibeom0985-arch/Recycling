'use client';

import React, { useState, useEffect } from 'react';

interface LocationData {
  region: string;
  district: string;
  dong: string;
}

interface RecyclingSchedule {
  plastic: string[];
  vinyl: string[];
  glass: string[];
  paper: string[];
  can: string[];
  food: string[];
  general: string[];
}

export default function LocationSettings() {
  const [location, setLocation] = useState<LocationData>({
    region: '',
    district: '',
    dong: '',
  });
  const [schedule, setSchedule] = useState<RecyclingSchedule | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // 로컬스토리지에서 위치 정보 불러오기
  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
    }
  }, []);

  const saveLocation = () => {
    localStorage.setItem('userLocation', JSON.stringify(location));
    // 실제로는 API를 호출하여 해당 지역의 배출 일정을 가져와야 합니다
    // 여기서는 예시 데이터를 사용합니다
    const exampleSchedule: RecyclingSchedule = {
      plastic: ['화요일', '금요일'],
      vinyl: ['화요일', '금요일'],
      glass: ['수요일'],
      paper: ['월요일', '목요일'],
      can: ['수요일'],
      food: ['월요일', '수요일', '금요일'],
      general: ['화요일', '목요일', '토요일'],
    };
    setSchedule(exampleSchedule);
    setIsOpen(false);
    alert('지역 설정이 저장되었습니다!');
  };

  return (
    <>
      {/* 위치 설정 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-md text-white px-3 xs:px-4 py-2 rounded-lg shadow-lg hover:bg-white/30 transition-all active:scale-95 touch-manipulation"
      >
        <span className="text-xs xs:text-sm">📍 {location.dong || '지역 설정'}</span>
      </button>

      {/* 모달 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-4 xs:p-5 sm:p-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-lg xs:text-xl font-bold text-gray-800 mb-4">
              📍 우리 동네 설정
            </h2>

            <div className="space-y-3 xs:space-y-4">
              <div>
                <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                  시/도
                </label>
                <select
                  value={location.region}
                  onChange={(e) => setLocation({ ...location, region: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">선택하세요</option>
                  <option value="서울특별시">서울특별시</option>
                  <option value="경기도">경기도</option>
                  <option value="인천광역시">인천광역시</option>
                  <option value="부산광역시">부산광역시</option>
                  <option value="대구광역시">대구광역시</option>
                  <option value="광주광역시">광주광역시</option>
                  <option value="대전광역시">대전광역시</option>
                  <option value="울산광역시">울산광역시</option>
                </select>
              </div>

              <div>
                <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                  시/군/구
                </label>
                <input
                  type="text"
                  value={location.district}
                  onChange={(e) => setLocation({ ...location, district: e.target.value })}
                  placeholder="예: 강남구"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                  동/읍/면
                </label>
                <input
                  type="text"
                  value={location.dong}
                  onChange={(e) => setLocation({ ...location, dong: e.target.value })}
                  placeholder="예: 역삼동"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-2 xs:gap-3 mt-4 xs:mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 xs:py-2.5 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors active:scale-95"
              >
                취소
              </button>
              <button
                onClick={saveLocation}
                className="flex-1 px-4 py-2 xs:py-2.5 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all active:scale-95"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
