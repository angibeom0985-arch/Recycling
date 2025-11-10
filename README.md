# ♻️ 분리수거 알리미 앱

## 🌟 프로젝트 개요

분리수거 알리미는 사용자의 동/읍/면을 설정하여 지역별 분리수거 일정을 확인하고, 품목별 배출 방법을 검색할 수 있는 실용적인 웹 애플리케이션입니다. 모든 기기와 화면 크기에서 완벽하게 작동하도록 반응형으로 설계되었습니다.

**배포 도메인**: [recycling.money-hotissue.com](https://recycling.money-hotissue.com)

---

## ✨ 주요 기능

### 🎯 **기본 기능**

#### 1. **지역별 맞춤 일정** 📍
- 시/도, 시/군/구, 동/읍/면 설정
- 설정한 지역의 분리수거 일정 자동 표시
- 오늘 배출해야 할 항목 알림
- 로컬스토리지 저장으로 재방문 시 유지

#### 2. **품목별 검색 기능** 🔍
- 14가지 이상의 품목 데이터베이스
- "건전지", "깨진 유리", "형광등" 등 헷갈리는 품목 검색
- 배출 방법과 실용적인 팁 제공
- 즉시 검색 결과 표시

**검색 가능 품목:**
- 유해 폐기물: 건전지, 형광등, 폐유, 의약품
- 재활용품: 스티로폼, 옷, 플라스틱, 비닐, 종이, 캔, 페트병, 우유팩
- 일반/대형: 깨진 유리, 전자제품

#### 3. **대형 폐기물 신고 연동** 🪑
- 사용자 지역 기반 자동 안내
- 해당 지역 구청 전화번호 제공
- 구청 홈페이지 바로가기 링크
- 배출 절차 안내

#### 4. **커스텀 알림 설정** 🔔
- 요일별 맞춤 알림 설정
- 시간 자유 선택 (예: 매주 수요일 오후 8시)
- 여러 개의 알림 동시 설정 가능
- 알림 활성화/비활성화 토글
- 로컬스토리지에 저장

#### 5. **반응형 디자인** 📱
- 375px (모바일) ~ 2560px (초대형 모니터) 모든 화면 지원
- **태블릿 완벽 지원**: 7인치, 10인치 모두 최적화
- 화면 방향 자동 감지 및 조정
- 터치 최적화 (탭 피드백, 스와이프 지원)

---

## 🎨 UI/UX 특징

### 모바일 최우선 디자인
```
✅ 더 작은 텍스트 - 모바일 화면 최적화
✅ 컴팩트한 여백 - 공간 효율성 극대화
✅ 터치 피드백 - 탭 시 스케일 애니메이션
✅ 빠른 반응 - 200ms 애니메이션
✅ 안전 영역 지원 - 노치/홈 인디케이터 대응
```

### 색상 시스템
- **배경**: 보라색 → 분홍색 그래디언트
- **종이류**: 파란색
- **플라스틱**: 초록색
- **유리**: 청록색
- **금속**: 노란색
- **의류**: 분홍색
- **음식물**: 주황색
- **일반쓰레기**: 회색

---

## 🛠️ 기술 스택

- **프레임워크**: Next.js 14.2.33
- **언어**: TypeScript
- **스타일링**: Tailwind CSS 3.4.1
- **런타임**: Node.js
- **패키지 매니저**: npm

---

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

### 3. 프로덕션 빌드
```bash
npm run build
npm start
```

### 4. 린트 검사
```bash
npm run lint
```

---

## 📁 프로젝트 구조

```
recycling/
├── app/
│   ├── globals.css          # 글로벌 스타일 (Tailwind)
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 페이지
├── components/
│   ├── RecyclingItem.tsx    # 분리수거 항목 컴포넌트
│   ├── ScheduleCalendar.tsx # 일정 캘린더 컴포넌트
│   └── NotificationCenter.tsx # 알림 센터 컴포넌트
├── package.json             # 의존성 설정
├── tailwind.config.ts       # Tailwind 설정
├── tsconfig.json            # TypeScript 설정
├── next.config.js           # Next.js 설정
└── README.md                # 문서
```

---

## 🎨 반응형 구간 (Breakpoints)

| 구간 | 크기 | 기기 |
|------|------|------|
| xs | 375px | 스마트폰 (세로) |
| sm | 640px | 스마트폰 (가로) |
| md | 768px | 7인치 태블릿 |
| lg | 1024px | 10인치 태블릿 |
| xl | 1280px | 데스크톱 |
| 2xl | 1536px | 큰 데스크톱 |

---

## 📱 UI 컴포넌트 설명

### RecyclingItem
각 분리수거 항목을 표시하는 카드 컴포넌트
- 아이콘, 이름, 설명, 배출일 표시
- 반응형 크기 조정 (p-3 xs:p-4 sm:p-5 md:p-6)
- Hover 효과

### ScheduleCalendar
주간 일정 관리 컴포넌트
- 요일별 버튼으로 선택 가능
- 선택된 항목 상세 정보 표시
- 분리수거 팁 제공

### NotificationCenter
오늘의 배출 정보 알림 컴포넌트
- 배출 항목의 아이콘과 정보 표시
- 애니메이션 효과 포함
- 반응형 레이아웃

---

## 🚀 배포 (Vercel)

Vercel에 배포하려면:

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel
```

커스텀 도메인 설정:
1. Vercel 대시보드에서 프로젝트 선택
2. Settings → Domains 에서 `recycling.money-hotissue.com` 추가
3. DNS 레코드 업데이트

---

## 🔧 커스터마이제이션

### 분리수거 일정 수정
`app/page.tsx`에서 `recyclingSchedule` 배열을 수정하세요:

```typescript
const recyclingSchedule: RecyclingData[] = [
  {
    type: '새로운 항목',
    day: '월요일',
    icon: '🔄',
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
    description: '설명',
  },
  // ...
];
```

### 색상 테마 변경
`app/globals.css`의 배경 그래디언트를 수정하세요:

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## 📊 성능 최적화

- ✅ Next.js 정적 사이트 생성 (SSG)
- ✅ Tailwind CSS로 번들 크기 최소화
- ✅ 이미지 최적화
- ✅ CSS-in-JS 제거로 인한 성능 향상

**First Load JS**: ~89.9 kB

---

## 🐛 알려진 이슈

현재 알려진 이슈가 없습니다.

---

## 🤝 기여

이 프로젝트에 기여하고 싶으신가요?

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 공개됩니다.

---

## 📞 연락처

질문이나 제안이 있으신가요?
- 이메일: support@money-hotissue.com
- 웹사이트: [recycling.money-hotissue.com](https://recycling.money-hotissue.com)

---

## 🙏 감사의 말

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

---

**마지막 업데이트**: 2025년 11월 10일
