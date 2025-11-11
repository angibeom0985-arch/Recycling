'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function RecyclingGuidePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-teal-600 to-blue-500">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
          {/* 헤더 */}
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-5 xs:p-6 sticky top-0 z-10">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl xs:text-2xl font-bold mb-2">
                  ♻️ 분리수거 완벽 가이드
                </h1>
                <p className="text-sm xs:text-base opacity-90">
                  요일별 배출 품목 및 지역별 차이점
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
          <div className="p-5 xs:p-6 space-y-6 max-h-[calc(100vh-180px)] overflow-y-auto">
            {/* 요일별 배출 품목 */}
            <section>
              <h2 className="text-lg xs:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                📅 일반적인 분리수거 요일별 품목
              </h2>
              <p className="text-xs xs:text-sm text-gray-600 mb-4">
                많은 도시와 아파트 단지에서 채택하고 있는 요일별 순환 배출 방식입니다.
              </p>
              
              <div className="space-y-3">
                {[
                  { day: '월요일', emoji: '📰', category: '종이류', items: '신문지, 책, 박스, 종이 쇼핑백, 우유팩', color: 'from-blue-500 to-blue-600' },
                  { day: '화요일', emoji: '🧴', category: '플라스틱 (PET 포함)', items: '생수병, 음료수병, 플라스틱 용기 (깨끗하게 세척)', color: 'from-green-500 to-green-600' },
                  { day: '수요일', emoji: '🍾', category: '병 (유리)', items: '소주병, 맥주병, 유리병, 스티로폼 (깨끗한 것)', color: 'from-amber-500 to-amber-600' },
                  { day: '목요일', emoji: '🥫', category: '캔/고철류', items: '음료수 캔, 통조림 캔, 부탄가스 (구멍 뚫기), 철사', color: 'from-gray-500 to-gray-600' },
                  { day: '금요일', emoji: '🛍️', category: '비닐류', items: '과자 봉지, 라면 봉지, 빵 봉지, 비닐봉투 (깨끗하게)', color: 'from-purple-500 to-purple-600' },
                  { day: '토/일요일', emoji: '📦', category: '잔재물', items: '다른 요일에 미처 배출하지 못한 품목', color: 'from-pink-500 to-pink-600' },
                ].map((item, index) => (
                  <div key={index} className={`bg-gradient-to-r ${item.color} text-white rounded-xl p-4 shadow-md`}>
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <div className="flex-1">
                        <h3 className="font-bold text-base xs:text-lg mb-1">
                          {item.day} - {item.category}
                        </h3>
                        <p className="text-xs xs:text-sm opacity-90">
                          {item.items}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
                <p className="text-xs xs:text-sm text-green-800">
                  💡 <strong>핵심 조언:</strong> 재활용품은 반드시 내용물을 비우고 깨끗하게 세척한 후, 
                  물기를 제거하여 배출해야 재활용 가치가 있습니다. 오염된 경우 일반 쓰레기로 처리하세요.
                </p>
              </div>
            </section>

            {/* 지역별 차이점 */}
            <section>
              <h2 className="text-lg xs:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🌏 지역별로 달라지는 주요 차이점
              </h2>

              {/* 배출 요일 및 시간 */}
              <div className="bg-blue-50 rounded-xl p-4 mb-4">
                <h3 className="font-bold text-sm xs:text-base text-blue-900 mb-3">
                  📍 #1. 배출 요일 및 시간의 차이
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-sm text-blue-800 mb-1">요일제 방식</h4>
                    <p className="text-xs text-gray-700">
                      특정 품목을 요일별로 지정하여 수거 (주로 아파트 단지)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-sm text-blue-800 mb-1">통합 배출제</h4>
                    <p className="text-xs text-gray-700">
                      모든 재활용 품목을 특정 요일에 한꺼번에 배출 (주로 단독주택, 빌라)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-sm text-blue-800 mb-1">배출 시간</h4>
                    <p className="text-xs text-gray-700">
                      수거 전날 일몰 후부터 수거 당일 새벽 사이. 시간을 어기면 과태료 대상!
                    </p>
                  </div>
                </div>
              </div>

              {/* 특정 품목 처리 */}
              <div className="bg-amber-50 rounded-xl p-4 mb-4">
                <h3 className="font-bold text-sm xs:text-base text-amber-900 mb-3">
                  🔍 #2. 특정 품목의 처리 방식 차이
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-sm text-amber-800 mb-1">스티로폼 (EPS)</h4>
                    <p className="text-xs text-gray-700">
                      깨끗한 포장재는 재활용, 오염된 것은 일반 쓰레기로 분류
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-sm text-amber-800 mb-1">폐형광등 / 폐건전지</h4>
                    <p className="text-xs text-gray-700">
                      별도 수거함(아파트, 주민센터)에 배출. 일반 쓰레기와 절대 섞지 말 것!
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-sm text-amber-800 mb-1">재활용 불가 품목</h4>
                    <p className="text-xs text-gray-700">
                      깨진 유리, 도자기, 고무장갑, 칫솔 등은 일반 쓰레기로 처리
                    </p>
                  </div>
                </div>
              </div>

              {/* 음식물 쓰레기 */}
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-bold text-sm xs:text-base text-green-900 mb-3">
                  🍽️ #3. 음식물 쓰레기 처리 방식
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-sm text-green-800 mb-1">칩(RFID) 방식</h4>
                    <p className="text-xs text-gray-700">
                      무게 측정하여 수수료 부과 (주로 수도권 아파트)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <h4 className="font-semibold text-sm text-green-800 mb-1">전용 봉투 방식</h4>
                    <p className="text-xs text-gray-700">
                      규격 봉투 구입 후 배출 (주로 단독주택, 지방)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 지역별 차이가 큰 3대 항목 */}
            <section>
              <h2 className="text-lg xs:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🌎 지역별 차이가 큰 분리수거 3대 항목
              </h2>

              <div className="space-y-4">
                {/* 폐비닐 */}
                <div className="border-l-4 border-purple-500 bg-purple-50 rounded-r-xl p-4">
                  <h3 className="font-bold text-base text-purple-900 mb-2">
                    1️⃣ 폐비닐 (봉투, 랩, 포장재)
                  </h3>
                  <ul className="space-y-2 text-xs xs:text-sm text-gray-700">
                    <li>✅ <strong>재활용:</strong> 깨끗한 비닐 (라면 봉지, 과자 봉지 등)</li>
                    <li>❌ <strong>일반 쓰레기:</strong> 음식물로 오염된 비닐</li>
                    <li>📍 일부 지역은 특정 요일에 플라스틱과 통합 배출</li>
                  </ul>
                </div>

                {/* 투명 페트병 */}
                <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl p-4">
                  <h3 className="font-bold text-base text-blue-900 mb-2">
                    2️⃣ 투명 페트병 (PET) 분리 배출
                  </h3>
                  <ul className="space-y-2 text-xs xs:text-sm text-gray-700">
                    <li>🏢 <strong>아파트:</strong> 2020년 12월부터 전국 의무화</li>
                    <li>🏠 <strong>단독주택:</strong> 2021년 12월부터 전국 의무화</li>
                    <li>📋 <strong>처리 방법:</strong> ① 비우기 → ② 헹구기 → ③ 라벨 제거 → ④ 찌그러뜨려 뚜껑 닫기</li>
                  </ul>
                </div>

                {/* 음식물 쓰레기 */}
                <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-4">
                  <h3 className="font-bold text-base text-green-900 mb-2">
                    3️⃣ 음식물 쓰레기 처리 방식
                  </h3>
                  <ul className="space-y-2 text-xs xs:text-sm text-gray-700">
                    <li>🏙️ <strong>수도권:</strong> 무게 측정(RFID) 방식</li>
                    <li>🌾 <strong>지방:</strong> 전용 봉투 또는 납부 필증 방식</li>
                    <li>⚠️ 달걀 껍데기, 뼈, 패류 껍데기는 지역별 차이 발생</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 기타 지역별 차이 */}
            <section>
              <h2 className="text-lg xs:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                📝 기타 지역별 차이 품목
              </h2>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">💊 폐의약품</h4>
                  <p className="text-xs text-gray-600">약국·보건소 수거함</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">❄️ 아이스팩</h4>
                  <p className="text-xs text-gray-600">지역별 별도 수거 or 일반 쓰레기</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">🔨 깨진 유리</h4>
                  <p className="text-xs text-gray-600">신문지로 감싸 종량제 봉투</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">💡 폐형광등</h4>
                  <p className="text-xs text-gray-600">별도 수거함 (주민센터)</p>
                </div>
              </div>
            </section>

            {/* 행동 지침 */}
            <section className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-5">
              <h3 className="text-base xs:text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
                🌟 가장 확실한 확인 방법
              </h3>
              <ol className="space-y-2 text-xs xs:text-sm text-gray-800 list-decimal list-inside">
                <li><strong>거주 형태 확인:</strong> 아파트(관리사무소) vs 단독주택(구청)</li>
                <li><strong>관할 구청 웹사이트:</strong> '청소', '폐기물', '분리수거' 검색</li>
                <li><strong>대표 전화 문의:</strong> 청소과(환경과)에 주소지 말하고 문의</li>
              </ol>
            </section>
          </div>

          {/* 하단 버튼 */}
          <div className="sticky bottom-0 bg-white border-t p-4 xs:p-5">
            <button
              onClick={() => router.push('/')}
              className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-teal-600 active:scale-95 transition-all"
            >
              메인으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
