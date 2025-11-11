'use client';

import React, { useState, useEffect } from 'react';
import { getRegions, getDistricts, getDongs } from '@/data/regionHierarchy';

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
  const [hasLocation, setHasLocation] = useState(false);
  
  // 드롭다운 옵션
  const [regions, setRegions] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [dongs, setDongs] = useState<string[]>([]);

  // 컴포넌트 마운트 시 지역 목록 로드
  useEffect(() => {
    setRegions(getRegions());
  }, []);

  // 로컬스토리지에서 위치 정보 불러오기
  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      const parsed = JSON.parse(savedLocation);
      setLocation(parsed);
      setHasLocation(!!parsed.dong);
      
      // 저장된 위치가 있으면 드롭다운 옵션 로드
      if (parsed.region) {
        setDistricts(getDistricts(parsed.region));
      }
      if (parsed.region && parsed.district) {
        setDongs(getDongs(parsed.region, parsed.district));
      }
    }
  }, []);

  // 시/도 변경 시
  const handleRegionChange = (newRegion: string) => {
    setLocation({
      region: newRegion,
      district: '',
      dong: '',
    });
    setDistricts(getDistricts(newRegion));
    setDongs([]);
  };

  // 시/군/구 변경 시
  const handleDistrictChange = (newDistrict: string) => {
    setLocation(prev => ({
      ...prev,
      district: newDistrict,
      dong: '',
    }));
    setDongs(getDongs(location.region, newDistrict));
  };

  // 동/읍/면 변경 시
  const handleDongChange = (newDong: string) => {
    setLocation(prev => ({
      ...prev,
      dong: newDong,
    }));
  };

  const saveLocation = () => {
    if (!location.region || !location.district || !location.dong) {
      alert('모든 정보를 입력해주세요!');
      return;
    }
    
    localStorage.setItem('userLocation', JSON.stringify(location));
    setHasLocation(!!location.dong);
    setIsOpen(false);
    
    // 지역 변경 이벤트 발생
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('locationChanged'));
    }
    
    alert(`지역 설정이 저장되었습니다!\n${location.region} ${location.district} ${location.dong}`);
  };

  return (
    <>
      {/* 위치 설정 버튼 - 가로로 넓게 */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-xl shadow-lg hover:bg-white/30 transition-all active:scale-[0.98] touch-manipulation flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="text-base xs:text-lg">📍</span>
          <div className="text-left">
            <div className="text-xs text-white/70">지역 설정</div>
            <div className="text-sm xs:text-base font-semibold">
              {location.dong ? `${location.region} ${location.district} ${location.dong}` : '지역을 선택해주세요'}
            </div>
          </div>
        </div>
        <span className="text-xl">›</span>
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
                  onChange={(e) => handleRegionChange(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">선택하세요</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                  시/군/구
                </label>
                <select
                  value={location.district}
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  disabled={!location.region}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {location.region ? '선택하세요' : '시/도를 먼저 선택하세요'}
                  </option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                  동/읍/면
                </label>
                <select
                  value={location.dong}
                  onChange={(e) => handleDongChange(e.target.value)}
                  disabled={!location.district}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {location.district ? '선택하세요' : '시/군/구를 먼저 선택하세요'}
                  </option>
                  {dongs.map((dong) => (
                    <option key={dong} value={dong}>
                      {dong}
                    </option>
                  ))}
                </select>
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
