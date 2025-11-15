'use client';

import React, { useState, useEffect } from 'react';

interface NotificationSetting {
  days: number[]; // 복수 요일 선택 가능 (교대근무 지원)
  time: string;
  enabled: boolean;
  label: string;
}

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState<NotificationSetting[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    const saved = localStorage.getItem('notifications');
    if (saved) {
      setNotifications(JSON.parse(saved));
    }
  }, []);

  const addNotification = () => {
    const newNotification: NotificationSetting = {
      days: [1], // 기본값: 월요일
      time: '20:00',
      enabled: true,
      label: '분리수거',
    };
    const updated = [...notifications, newNotification];
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  const updateNotification = (index: number, field: keyof NotificationSetting, value: any) => {
    const updated = [...notifications];
    updated[index] = { ...updated[index], [field]: value };
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  const toggleDay = (index: number, day: number) => {
    const updated = [...notifications];
    const currentDays = updated[index].days;
    
    if (currentDays.includes(day)) {
      // 이미 선택된 요일이면 제거 (단, 최소 1개는 유지)
      if (currentDays.length > 1) {
        updated[index].days = currentDays.filter(d => d !== day);
      }
    } else {
      // 선택되지 않은 요일이면 추가
      updated[index].days = [...currentDays, day].sort();
    }
    
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  const deleteNotification = (index: number) => {
    const updated = notifications.filter((_, i) => i !== index);
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  return (
    <>
      {/* 알림 설정 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-orange-400 to-red-500 text-white p-3 xs:p-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 touch-manipulation"
      >
        <span className="text-xl xs:text-2xl">🔔</span>
      </button>

      {/* 알림 설정 모달 */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center">
          <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl w-full sm:max-w-lg max-h-[85vh] overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-4">
            <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 xs:p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg xs:text-xl font-bold">
                  🔔 알림 설정
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1"
                >
                  <span className="text-xl">✕</span>
                </button>
              </div>
              <p className="text-xs xs:text-sm text-white/80 mt-1">
                원하는 요일과 시간에 알림을 받아보세요
              </p>
            </div>

            <div className="overflow-y-auto p-4 xs:p-5 max-h-[60vh]">
              {notifications.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <p className="text-3xl mb-2">📭</p>
                  <p className="text-xs xs:text-sm">설정된 알림이 없습니다</p>
                  <p className="text-[10px] xs:text-xs mt-1 text-gray-400">
                    아래 버튼을 눌러 알림을 추가하세요
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-3 xs:p-4 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-start gap-2 xs:gap-3">
                        <input
                          type="checkbox"
                          checked={notification.enabled}
                          onChange={(e) => updateNotification(index, 'enabled', e.target.checked)}
                          className="mt-1 w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
                        />
                        
                        <div className="flex-1 space-y-2">
                          <input
                            type="text"
                            value={notification.label}
                            onChange={(e) => updateNotification(index, 'label', e.target.value)}
                            placeholder="알림 제목"
                            className="w-full px-2 xs:px-3 py-1 xs:py-1.5 text-xs xs:text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                          
                          {/* 요일 선택 (교대근무 지원) */}
                          <div className="space-y-2">
                            <p className="text-[10px] xs:text-xs text-gray-600 font-medium">
                              📅 알림받을 요일 선택 (복수 선택 가능)
                            </p>
                            <div className="grid grid-cols-7 gap-1">
                              {days.map((day, dayIndex) => (
                                <button
                                  key={dayIndex}
                                  type="button"
                                  onClick={() => toggleDay(index, dayIndex)}
                                  className={`
                                    px-1 py-1.5 text-[10px] xs:text-xs font-medium rounded transition-all
                                    ${notification.days.includes(dayIndex)
                                      ? 'bg-orange-500 text-white shadow-md'
                                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}
                                  `}
                                >
                                  {day}
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex gap-2 items-center">
                            <span className="text-[10px] xs:text-xs text-gray-600">⏰</span>
                            <input
                              type="time"
                              value={notification.time}
                              onChange={(e) => updateNotification(index, 'time', e.target.value)}
                              className="flex-1 px-2 py-1.5 text-xs xs:text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                        </div>

                        <button
                          onClick={() => deleteNotification(index)}
                          className="text-red-500 hover:text-red-700 p-1 mt-1"
                        >
                          <span className="text-lg">🗑️</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={addNotification}
                className="w-full mt-4 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 xs:py-3 rounded-lg font-semibold text-sm hover:from-orange-500 hover:to-red-600 transition-all active:scale-95"
              >
                ➕ 알림 추가
              </button>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-[10px] xs:text-xs text-blue-800">
                  ℹ️ 브라우저 알림 권한을 허용해야 알림을 받을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
