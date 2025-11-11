'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Region {
  name: string;
  phone: string;
  website: string;
  description: string;
  methods: string[];
  appInfo?: string;
}

const regions: Record<string, Region> = {
  '서울특별시': { 
    name: '서울특별시', 
    phone: '☎️ 120', 
    website: 'https://www.15990903.or.kr/',
    description: '지자체별 홈페이지 또는 폐가전 무상수거 서비스 이용',
    methods: [
      '각 구청별 대형폐기물 신고 시스템 이용',
      '폐가전제품: 무상 방문 수거 (1599-0903)',
      '온라인 신청 후 수수료 결제',
      '배출 번호 부착 후 지정 장소 배출'
    ],
    appInfo: '폐가전 무상수거 서비스'
  },
  '부산광역시': { 
    name: '부산광역시', 
    phone: '☎️ 051-120', 
    website: 'https://www.busan.go.kr',
    description: '지자체별 홈페이지 또는 모바일 앱 이용',
    methods: [
      '각 구·군청 홈페이지에서 신청',
      '대형폐기물 신고 메뉴 이용',
      '수수료 결제 후 배출 신고',
      '지정 일시에 배출'
    ]
  },
  '대구광역시': { 
    name: '대구광역시', 
    phone: '☎️ 053-120', 
    website: 'https://www.yeogiro24.co.kr/',
    description: '모바일 앱 "여기로" 또는 웹사이트 이용',
    methods: [
      '여기로 앱 다운로드 또는 웹사이트 접속',
      '배출 품목 선택 및 수수료 확인',
      '온라인 결제 및 배출 예약',
      '배출 번호 부착 후 배출'
    ],
    appInfo: '여기로 앱'
  },
  '인천광역시': { 
    name: '인천광역시', 
    phone: '☎️ 032-120', 
    website: 'https://www.incheon.go.kr',
    description: '지자체별 홈페이지 또는 모바일 앱 "빼기" 이용',
    methods: [
      '각 구청 홈페이지에서 신청',
      '빼기 앱 사용 (일부 지역)',
      '수수료 결제 및 배출 신고',
      '지정 장소에 배출'
    ],
    appInfo: '빼기 앱'
  },
  '광주광역시': { 
    name: '광주광역시', 
    phone: '☎️ 062-120', 
    website: 'https://www.gwangju.go.kr',
    description: '지자체별 전화 또는 웹사이트 이용',
    methods: [
      '각 자치구 시설관리공단 홈페이지 이용',
      '전화 신고 가능',
      '자원회수센터 문의',
      '수수료 결제 후 배출'
    ]
  },
  '대전광역시': { 
    name: '대전광역시', 
    phone: '☎️ 042-120', 
    website: 'https://www.daejeon.go.kr',
    description: '지자체별 홈페이지, 모바일 앱 "여기로" 또는 행정복지센터 방문',
    methods: [
      '각 구청 홈페이지에서 신청',
      '여기로 앱 사용 가능 (일부 지역)',
      '행정복지센터 방문 신고',
      '수수료 결제 후 배출'
    ],
    appInfo: '여기로 앱 (일부 지역)'
  },
  '울산광역시': { 
    name: '울산광역시', 
    phone: '☎️ 052-120', 
    website: 'https://yeogiro24.co.kr/',
    description: '모바일 앱 "여기로" 또는 웹사이트 이용',
    methods: [
      '여기로 앱 다운로드 또는 웹사이트 접속',
      '배출 품목 및 수수료 확인',
      '온라인 결제 및 예약',
      '배출 번호 부착 후 배출'
    ],
    appInfo: '여기로 앱'
  },
  '세종특별자치시': { 
    name: '세종특별자치시', 
    phone: '☎️ 044-120', 
    website: 'https://www.sjwaste.kr/wst/category.do?menuId=MENU00304',
    description: '세종시시설관리공단 웹사이트 이용',
    methods: [
      '시설관리공단 홈페이지 접속',
      '대형폐기물 신고 메뉴 이용',
      '수수료 결제',
      '지정 일시에 배출'
    ]
  },
  '경기도': { 
    name: '경기도', 
    phone: '☎️ 031-120', 
    website: 'https://www.gg.go.kr',
    description: '지자체별 인터넷 신고센터 또는 모바일 앱 이용',
    methods: [
      '각 시·군별 신고 시스템 확인',
      '온라인 신고센터 이용',
      '수수료 결제 및 배출 예약',
      '배출 번호 부착 후 배출'
    ]
  },
  '강원특별자치도': { 
    name: '강원특별자치도', 
    phone: '☎️ 033-120', 
    website: 'https://www.provin.gangwon.kr',
    description: '지자체별 인터넷 신고센터 이용',
    methods: [
      '각 시·군별 홈페이지 확인',
      '대형폐기물 신고 메뉴 이용',
      '수수료 결제',
      '지정 장소에 배출'
    ]
  },
  '충청북도': { 
    name: '충청북도', 
    phone: '☎️ 043-120', 
    website: 'https://www.chungbuk.go.kr',
    description: '지자체별 대형폐기물 관리 시스템 이용',
    methods: [
      '각 시·군청 홈페이지 확인',
      '온라인 신고 시스템 이용',
      '수수료 결제',
      '배출 번호 부착 후 배출'
    ]
  },
  '충청남도': { 
    name: '충청남도', 
    phone: '☎️ 041-120', 
    website: 'https://www.chungnam.go.kr',
    description: '지자체별 인터넷 신고센터 이용',
    methods: [
      '각 시·군청 홈페이지 확인',
      '대형폐기물 신고 시스템 이용',
      '수수료 결제',
      '지정 일시에 배출'
    ]
  },
  '전북특별자치도': { 
    name: '전북특별자치도', 
    phone: '☎️ 063-120', 
    website: 'https://bbegi.com/',
    description: '모바일 앱 "빼기" 및 인터넷 신청, 스티커 구매',
    methods: [
      '빼기 앱 다운로드 또는 웹사이트 이용',
      '배출 품목 선택',
      '스티커 구매 또는 온라인 결제',
      '배출 신고 후 배출'
    ],
    appInfo: '빼기 앱'
  },
  '전라남도': { 
    name: '전라남도', 
    phone: '☎️ 061-120', 
    website: 'https://yeogiro24.co.kr/',
    description: '읍·면사무소 전화/방문 또는 온라인 앱/웹사이트 이용',
    methods: [
      '읍·면사무소 전화 또는 방문',
      '여기로 앱 사용 (일부 지역)',
      '수수료 결제',
      '배출 신고 후 배출'
    ],
    appInfo: '여기로 앱 (일부 지역)'
  },
  '경상북도': { 
    name: '경상북도', 
    phone: '☎️ 054-120', 
    website: 'https://www.15990903.or.kr/',
    description: '지자체별 홈페이지 또는 폐가전 무상수거 이용',
    methods: [
      '각 시·군별 신고 방법 확인',
      '폐가전제품: 무상 방문 수거 (1599-0903)',
      '온라인 또는 전화 신고',
      '수수료 결제 후 배출'
    ],
    appInfo: '폐가전 무상수거 서비스'
  },
  '경상남도': { 
    name: '경상남도', 
    phone: '☎️ 055-120', 
    website: 'https://www.gyeongnam.go.kr',
    description: '지자체별 인터넷 배출 신고, 모바일 앱 "빼기" 이용',
    methods: [
      '각 시·군청 홈페이지 확인',
      '빼기 앱 사용 (일부 지역)',
      '수수료 결제 및 배출 신고',
      '지정 장소에 배출'
    ],
    appInfo: '빼기 앱 (일부 지역)'
  },
  '제주특별자치도': { 
    name: '제주특별자치도', 
    phone: '☎️ 064-120', 
    website: 'https://www.jeju.go.kr',
    description: '제주도 대형폐기물 홈페이지 이용',
    methods: [
      '제주시/서귀포시 홈페이지 접속',
      '대형폐기물 신고 메뉴 이용',
      '수수료 결제',
      '지정 일시에 배출'
    ]
  },
};

export default function LargeWastePage() {
  const router = useRouter();
  const [userRegion, setUserRegion] = useState<Region | null>(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      const location = JSON.parse(savedLocation);
      if (location.region && regions[location.region]) {
        setUserRegion(regions[location.region]);
      } else {
        // 지역 설정이 없으면 메인으로 돌아가기
        alert('지역을 먼저 설정해주세요!');
        router.push('/');
      }
    } else {
      alert('지역을 먼저 설정해주세요!');
      router.push('/');
    }
  }, [router]);

  if (!userRegion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-4">🔄</div>
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500">
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* 헤더 */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
          {/* 상단 헤더 */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-5 xs:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl xs:text-2xl font-bold mb-2">
                  🪑 대형 폐기물 신고 방법
                </h1>
                <p className="text-sm xs:text-base opacity-90">
                  {userRegion.name}
                </p>
              </div>
              <button
                onClick={() => router.push('/')}
                className="text-white/80 hover:text-white text-3xl leading-none -mt-1"
              >
                ×
              </button>
            </div>
          </div>

          {/* 내용 */}
          <div className="p-5 xs:p-6 space-y-5">
            {/* 신고 방법 개요 */}
            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-purple-900 mb-2">
                📋 신고 방법
              </h3>
              <p className="text-sm text-purple-800">
                {userRegion.description}
              </p>
            </div>

            {/* 앱 정보 (있는 경우) */}
            {userRegion.appInfo && (
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">
                  📱 추천 앱
                </h3>
                <p className="text-sm text-blue-800">
                  {userRegion.appInfo}
                </p>
              </div>
            )}

            {/* 신고 절차 */}
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-3">
                🔍 신고 절차
              </h3>
              <div className="space-y-2">
                {userRegion.methods.map((method, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 rounded-lg p-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <p className="text-sm text-gray-700 flex-1">
                      {method}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 중요 안내사항 */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">
                ⚠️ 중요 안내
              </h3>
              <ul className="space-y-1 text-xs text-amber-800">
                <li>• 폐가전제품(냉장고, 세탁기, TV 등)은 1599-0903으로 무상 수거 가능</li>
                <li>• 배출 번호를 반드시 부착해야 수거됩니다</li>
                <li>• 지정된 날짜와 시간에 배출해주세요</li>
                <li>• 수수료는 품목과 크기에 따라 다릅니다</li>
              </ul>
            </div>

            {/* 연락처 */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                📞 문의 전화
              </h3>
              <p className="text-lg font-bold text-gray-800">
                {userRegion.phone}
              </p>
            </div>
          </div>

          {/* 하단 버튼 */}
          <div className="sticky bottom-0 bg-white border-t p-4 xs:p-5 flex gap-2">
            <button
              onClick={() => router.push('/')}
              className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 active:scale-95 transition-all"
            >
              닫기
            </button>
            <button
              onClick={() => window.location.href = userRegion.website}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 active:scale-95 transition-all"
            >
              신고 바로가기 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
