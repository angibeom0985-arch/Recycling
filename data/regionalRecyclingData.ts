// 지역별 분리수거 일정 데이터
export interface RecyclingScheduleData {
  region: string;
  scheduleType: 'daily' | 'weekly' | 'specific'; // 배출 방식
  description: string;
  items: {
    [key: string]: {
      days: string[]; // 배출 요일
      description: string;
    };
  };
}

export const regionalRecyclingData: { [key: string]: RecyclingScheduleData } = {
  '서울특별시': {
    region: '서울특별시',
    scheduleType: 'weekly',
    description: '요일제 방식 - 품목별로 지정된 요일에 배출',
    items: {
      '종이류': {
        days: ['월요일'],
        description: '신문지, 책, 박스, 종이 쇼핑백, 우유팩'
      },
      '플라스틱': {
        days: ['화요일', '금요일'],
        description: '생수병, 음료수병, 플라스틱 용기 (깨끗하게 세척)'
      },
      '유리': {
        days: ['수요일'],
        description: '소주병, 맥주병, 유리병 (깨끗하게 세척)'
      },
      '금속': {
        days: ['수요일'],
        description: '음료수 캔, 통조림 캔, 부탄가스 (구멍 뚫기)'
      },
      '비닐': {
        days: ['화요일', '금요일'],
        description: '과자 봉지, 라면 봉지, 비닐봉투 (깨끗하게)'
      },
      '음식물': {
        days: ['월요일', '수요일', '금요일'],
        description: '음식물 쓰레기 (RFID 칩 방식 또는 전용 봉투)'
      },
      '일반쓰레기': {
        days: ['화요일', '목요일', '토요일'],
        description: '종량제 봉투 사용'
      }
    }
  },
  '부산광역시': {
    region: '부산광역시',
    scheduleType: 'weekly',
    description: '구·군별로 요일제 또는 통합 배출제 운영',
    items: {
      '종이류': {
        days: ['월요일'],
        description: '신문지, 책, 박스, 우유팩'
      },
      '플라스틱': {
        days: ['화요일'],
        description: '페트병, 플라스틱 용기 (깨끗하게 세척)'
      },
      '유리': {
        days: ['수요일'],
        description: '유리병 (깨끗하게 세척)'
      },
      '금속': {
        days: ['목요일'],
        description: '캔류, 고철'
      },
      '비닐': {
        days: ['금요일'],
        description: '비닐류 (깨끗하게)'
      },
      '음식물': {
        days: ['매일'],
        description: '전용 봉투 방식'
      },
      '일반쓰레기': {
        days: ['매일'],
        description: '종량제 봉투 사용'
      }
    }
  },
  '대구광역시': {
    region: '대구광역시',
    scheduleType: 'weekly',
    description: '여기로 앱 연동 - 요일제 방식',
    items: {
      '종이류': {
        days: ['월요일'],
        description: '신문, 박스, 책'
      },
      '플라스틱': {
        days: ['화요일'],
        description: '페트병, 플라스틱 용기'
      },
      '유리': {
        days: ['수요일'],
        description: '유리병류'
      },
      '금속': {
        days: ['목요일'],
        description: '캔, 고철'
      },
      '비닐': {
        days: ['금요일'],
        description: '비닐류'
      },
      '음식물': {
        days: ['매일'],
        description: '전용 봉투'
      },
      '일반쓰레기': {
        days: ['매일'],
        description: '종량제 봉투'
      }
    }
  },
  '인천광역시': {
    region: '인천광역시',
    scheduleType: 'weekly',
    description: '구별 요일제 방식 - 빼기 앱 일부 지역',
    items: {
      '종이류': {
        days: ['월요일'],
        description: '신문, 박스, 종이류'
      },
      '플라스틱': {
        days: ['화요일'],
        description: '플라스틱 용기류'
      },
      '유리': {
        days: ['수요일'],
        description: '유리병'
      },
      '금속': {
        days: ['목요일'],
        description: '캔, 고철'
      },
      '비닐': {
        days: ['금요일'],
        description: '비닐류'
      },
      '음식물': {
        days: ['매일'],
        description: 'RFID 칩 방식 또는 전용 봉투'
      },
      '일반쓰레기': {
        days: ['매일'],
        description: '종량제 봉투'
      }
    }
  },
  '광주광역시': {
    region: '광주광역시',
    scheduleType: 'weekly',
    description: '자치구별 시설관리공단 운영',
    items: {
      '종이류': {
        days: ['월요일'],
        description: '종이류 전반'
      },
      '플라스틱': {
        days: ['화요일'],
        description: '플라스틱 용기'
      },
      '유리': {
        days: ['수요일'],
        description: '유리병'
      },
      '금속': {
        days: ['목요일'],
        description: '캔, 금속류'
      },
      '비닐': {
        days: ['금요일'],
        description: '비닐류'
      },
      '음식물': {
        days: ['매일'],
        description: '전용 봉투'
      },
      '일반쓰레기': {
        days: ['매일'],
        description: '종량제 봉투'
      }
    }
  },
  '대전광역시': {
    region: '대전광역시',
    scheduleType: 'weekly',
    description: '구청별 홈페이지 또는 여기로 앱',
    items: {
      '종이류': {
        days: ['월요일'],
        description: '종이류'
      },
      '플라스틱': {
        days: ['화요일'],
        description: '플라스틱'
      },
      '유리': {
        days: ['수요일'],
        description: '유리병'
      },
      '금속': {
        days: ['목요일'],
        description: '캔, 고철'
      },
      '비닐': {
        days: ['금요일'],
        description: '비닐류'
      },
      '음식물': {
        days: ['매일'],
        description: '전용 봉투'
      },
      '일반쓰레기': {
        days: ['매일'],
        description: '종량제 봉투'
      }
    }
  },
  '울산광역시': {
    region: '울산광역시',
    scheduleType: 'weekly',
    description: '여기로 앱 연동',
    items: {
      '종이류': {
        days: ['월요일'],
        description: '종이류'
      },
      '플라스틱': {
        days: ['화요일'],
        description: '플라스틱'
      },
      '유리': {
        days: ['수요일'],
        description: '유리병'
      },
      '금속': {
        days: ['목요일'],
        description: '캔류'
      },
      '비닐': {
        days: ['금요일'],
        description: '비닐류'
      },
      '음식물': {
        days: ['매일'],
        description: '전용 봉투'
      },
      '일반쓰레기': {
        days: ['매일'],
        description: '종량제 봉투'
      }
    }
  },
  '세종특별자치시': {
    region: '세종특별자치시',
    scheduleType: 'weekly',
    description: '시설관리공단 웹사이트',
    items: {
      '종이류': {
        days: ['월요일'],
        description: '종이류'
      },
      '플라스틱': {
        days: ['화요일'],
        description: '플라스틱'
      },
      '유리': {
        days: ['수요일'],
        description: '유리병'
      },
      '금속': {
        days: ['목요일'],
        description: '캔, 고철'
      },
      '비닐': {
        days: ['금요일'],
        description: '비닐류'
      },
      '음식물': {
        days: ['매일'],
        description: '전용 봉투'
      },
      '일반쓰레기': {
        days: ['매일'],
        description: '종량제 봉투'
      }
    }
  },
  '경기도': {
    region: '경기도',
    scheduleType: 'weekly',
    description: '시·군별로 상이 - 각 지자체 확인 필요',
    items: {
      '종이류': {
        days: ['월요일', '목요일'],
        description: '종이류 (시·군별 차이 있음)'
      },
      '플라스틱': {
        days: ['화요일', '금요일'],
        description: '플라스틱'
      },
      '유리': {
        days: ['수요일'],
        description: '유리병'
      },
      '금속': {
        days: ['수요일'],
        description: '캔, 고철'
      },
      '비닐': {
        days: ['화요일', '금요일'],
        description: '비닐류'
      },
      '음식물': {
        days: ['월요일', '수요일', '금요일'],
        description: 'RFID 칩 방식 (대부분)'
      },
      '일반쓰레기': {
        days: ['화요일', '목요일', '토요일'],
        description: '종량제 봉투'
      }
    }
  },
  // 기본값 (지역 선택 안 됨)
  '기본': {
    region: '기본',
    scheduleType: 'weekly',
    description: '일반적인 분리수거 요일 (참고용)',
    items: {
      '종이류': {
        days: ['월요일'],
        description: '신문, 박스, 책'
      },
      '플라스틱': {
        days: ['화요일'],
        description: '페트병, 플라스틱 용기'
      },
      '유리': {
        days: ['수요일'],
        description: '유리병'
      },
      '금속': {
        days: ['목요일'],
        description: '캔, 고철'
      },
      '비닐': {
        days: ['금요일'],
        description: '비닐류'
      },
      '음식물': {
        days: ['토요일'],
        description: '음식물 쓰레기'
      },
      '일반쓰레기': {
        days: ['일요일'],
        description: '종량제 봉투'
      }
    }
  }
};

// 지역별 데이터 가져오기
export function getRegionalSchedule(region: string): RecyclingScheduleData {
  return regionalRecyclingData[region] || regionalRecyclingData['기본'];
}

// 오늘의 배출 품목 가져오기
export function getTodayItems(region: string): string[] {
  const schedule = getRegionalSchedule(region);
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const today = days[new Date().getDay()];
  
  const todayItems: string[] = [];
  Object.entries(schedule.items).forEach(([itemName, itemData]) => {
    if (itemData.days.includes(today) || itemData.days.includes('매일')) {
      todayItems.push(itemName);
    }
  });
  
  return todayItems;
}
