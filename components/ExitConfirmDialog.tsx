'use client';

import React, { useEffect } from 'react';

interface ExitConfirmDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ExitConfirmDialog({ isOpen, onConfirm, onCancel }: ExitConfirmDialogProps) {
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      // 광고 로드
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4">
        {/* 광고 영역 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 border-b">
          <p className="text-[10px] text-gray-500 text-center mb-2">광고</p>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2686975437928535"
            data-ad-slot="5928627481"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        {/* 확인 메시지 */}
        <div className="p-5 xs:p-6 text-center">
          <div className="text-4xl xs:text-5xl mb-3 xs:mb-4">👋</div>
          <h2 className="text-lg xs:text-xl font-bold text-gray-800 mb-2">
            앱을 종료하시겠습니까?
          </h2>
          <p className="text-xs xs:text-sm text-gray-600">
            다음에 또 만나요!
          </p>
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-2 p-4 xs:p-5 pt-0">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-3 text-sm xs:text-base bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 active:scale-95 transition-all touch-manipulation"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 text-sm xs:text-base bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 active:scale-95 transition-all touch-manipulation"
          >
            종료
          </button>
        </div>
      </div>
    </div>
  );
}
