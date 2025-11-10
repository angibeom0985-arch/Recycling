'use client';

import React, { useState } from 'react';

interface SearchItem {
  name: string;
  category: string;
  method: string;
  tip: string;
}

const searchDatabase: SearchItem[] = [
  { name: '건전지', category: '유해 폐기물', method: '주민센터나 마트의 폐건전지 수거함에 배출', tip: '테이프로 양극을 감싸서 버리면 안전합니다' },
  { name: '형광등', category: '유해 폐기물', method: '주민센터나 대형마트의 폐형광등 수거함에 배출', tip: '깨지지 않도록 구입 시 포장재에 넣어 배출하세요' },
  { name: '깨진 유리', category: '일반 쓰레기', method: '신문지에 싸서 "위험" 표시 후 일반쓰레기로 배출', tip: '재활용이 불가능하므로 일반쓰레기입니다' },
  { name: '스티로폼', category: '재활용', method: '이물질을 제거하고 깨끗이 씻어서 재활용품으로 배출', tip: '테이프, 스티커는 반드시 제거하세요' },
  { name: '폐유', category: '유해 폐기물', method: '주유소나 정비소에서 무상 수거', tip: '절대 하수구에 버리지 마세요' },
  { name: '의약품', category: '유해 폐기물', method: '약국의 폐의약품 수거함에 배출', tip: '포장을 제거하고 알약만 배출하세요' },
  { name: '옷', category: '재활용', method: '헌옷 수거함에 배출하거나 재사용 가능하면 기부', tip: '깨끗하게 세탁해서 배출하세요' },
  { name: '플라스틱', category: '재활용', method: '이물질 제거 후 분리배출', tip: 'PET, PE, PP, PS 표시 확인 후 배출' },
  { name: '비닐', category: '재활용', method: '깨끗한 비닐만 모아서 배출', tip: '음식물이 묻은 비닐은 일반쓰레기' },
  { name: '종이', category: '재활용', method: '비닐 코팅 제거 후 배출', tip: '젖은 종이는 재활용 불가' },
  { name: '캔', category: '재활용', method: '내용물 비우고 압착해서 배출', tip: '부탄가스는 구멍 뚫어 배출' },
  { name: '페트병', category: '재활용', method: '라벨 제거, 내용물 비우고 압착', tip: '뚜껑은 분리해서 버리세요' },
  { name: '우유팩', category: '재활용', method: '물로 씻어 펼쳐서 말린 후 배출', tip: '일반 종이보다 높은 가격에 재활용' },
  { name: '전자제품', category: '대형 폐기물', method: '주민센터에 신고 후 배출 또는 무상 방문수거', tip: '소형 전자제품은 주민센터 수거함 이용' },
];

export default function ItemSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 0) {
      const results = searchDatabase.filter((item) =>
        item.name.includes(term) || item.category.includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      {/* 검색 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-50 bg-gradient-to-r from-green-400 to-green-600 text-white p-3 xs:p-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 touch-manipulation"
      >
        <span className="text-xl xs:text-2xl">🔍</span>
      </button>

      {/* 검색 모달 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center">
          <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl w-full sm:max-w-lg max-h-[80vh] overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-4">
            <div className="sticky top-0 bg-white border-b p-4 xs:p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg xs:text-xl font-bold text-gray-800">
                  🔍 품목 검색
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <span className="text-xl">✕</span>
                </button>
              </div>
              
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="예: 건전지, 깨진 유리, 옷"
                className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                autoFocus
              />
            </div>

            <div className="overflow-y-auto p-4 xs:p-5 max-h-[60vh]">
              {searchTerm.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <p className="text-2xl mb-2">🗑️</p>
                  <p className="text-xs xs:text-sm">버리는 방법이 궁금한 품목을 검색해보세요</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 xs:p-4 rounded-lg border border-green-200"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base xs:text-lg font-bold text-gray-800">
                          {item.name}
                        </h3>
                        <span className="text-[10px] xs:text-xs bg-green-500 text-white px-2 py-1 rounded-full whitespace-nowrap">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs xs:text-sm text-gray-700 mb-2">
                        <span className="font-semibold">배출 방법:</span> {item.method}
                      </p>
                      <p className="text-[10px] xs:text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                        💡 {item.tip}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p className="text-2xl mb-2">😕</p>
                  <p className="text-xs xs:text-sm">검색 결과가 없습니다</p>
                  <p className="text-[10px] xs:text-xs mt-2 text-gray-400">
                    다른 키워드로 검색해보세요
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
