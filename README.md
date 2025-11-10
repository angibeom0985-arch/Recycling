# ♻️ 분리수거 알리미 앱

## 🌟 프로젝트 개요

분리수거 알리미는 사용자가 지역의 분리수거 일정을 쉽게 확인하고 관리할 수 있도록 도와주는 웹 애플리케이션입니다. 모든 기기와 화면 크기에서 완벽하게 작동하도록 반응형으로 설계되었습니다.

**배포 도메인**: [recycling.money-hotissue.com](https://recycling.money-hotissue.com)

---

## ✨ 주요 기능

### 1. **반응형 디자인 (Responsive Design)**
- ✅ 7인치 태블릿부터 10인치 태블릿까지 모든 화면 크기 지원
- ✅ 스마트폰, 태블릿, 데스크톱 모두 최적화
- ✅ Tailwind CSS로 구현된 완벽한 반응형 레이아웃

### 2. **화면 방향 감지 (Orientation Detection)**
- ✅ 포트레이트(세로) 모드 자동 최적화
- ✅ 랜드스케이프(가로) 모드 자동 최적화
- ✅ 화면 전환 시 UI/UX 자동 조정
- ✅ 모든 요소 크기 자동 맞춤

### 3. **분리수거 일정 관리**
- 📰 종이류 - 월요일
- 🥤 플라스틱 - 화요일
- 🍾 유리 - 수요일
- 🥫 금속 - 목요일
- 👕 의류 - 금요일
- 🍌 음식물 - 토요일
- 🗑️ 일반쓰레기 - 일요일

### 4. **알림 시스템 (Notification Center)**
- 오늘의 분리수거 배출 정보 실시간 표시
- 시각적으로 눈에 띄는 알림 배너
- 배출 일정과 상세 정보 제공

### 5. **상호작용적 일정 캘린더**
- 주간 일정 시각화
- 요일별 선택 기능
- 선택된 항목의 상세 정보 표시
- 분리수거 팁 제공

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
