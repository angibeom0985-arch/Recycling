# ♻️ 분리수거 알리미 - 최종 배포 가이드

## 🎯 현재 상태

### ✅ 완료된 사항
- ✅ Next.js 프로젝트 생성 및 구축
- ✅ 반응형 디자인 구현 (모든 화면 크기 지원)
- ✅ 화면 방향 감지 및 자동 조정 기능
- ✅ 분리수거 일정 관리 시스템
- ✅ 알림 센터 및 주간 캘린더
- ✅ TypeScript + Tailwind CSS 적용
- ✅ 빌드 및 테스트 완료 (오류 0, 경고 0)
- ✅ Git 저장소 초기화 및 커밋
- ✅ Vercel + GitHub 연동 준비

### ⏳ 남은 작업 (5분 소요)

1. **GitHub Personal Access Token 생성** (2분)
2. **Git Push** (1분)
3. **Vercel 배포 확인** (2분)

---

## 🔑 Step 1: GitHub Personal Access Token 생성

### 온라인에서 실행

1. **GitHub 접속**
   ```
   https://github.com/settings/tokens
   ```

2. **"Generate new token (classic)" 클릭**

3. **정보 입력**
   - Token name: `recycling-deploy`
   - Expiration: `90 days`
   - Select scopes:
     - ✅ `repo` (전체)
     - ✅ `workflow`

4. **"Generate token" 클릭**

5. **⚠️ 토큰 복사 및 저장**
   ```
   ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

---

## 🚀 Step 2: GitHub에 코드 푸시

### PowerShell에서 실행

```powershell
# 1. 프로젝트 디렉토리로 이동
cd c:\KB\Website\Recycling

# 2. 상태 확인
git status

# 3. GitHub에 푸시
git push -u origin main
```

### 인증 정보 입력

```
Username for 'https://github.com': angibeom0985
Password for 'https://angibeom0985@github.com': [토큰 붙여넣기]
```

### 성공 메시지 예시
```
Enumerating objects: 16, done.
Counting objects: 100% (16/16), done.
...
To https://github.com/angibeom0985/Recycling.git
 * [new branch]      main -> main
```

---

## ✅ Step 3: Vercel 배포 확인

### Vercel 대시보드

1. **접속**
   ```
   https://vercel.com/dashboard
   ```

2. **프로젝트 선택**
   ```
   Website → recycling
   ```

3. **배포 상태 확인**
   - Deployments 탭
   - 최신 배포의 상태를 "Ready" ✅ 로 확인
   - 예상 시간: 2-3분

4. **테스트 URL**
   ```
   https://recycling-git-main-angibeom0985.vercel.app
   ```

---

## 🌐 Step 4: 커스텀 도메인 설정 (DNS)

### Vercel에서

1. **Settings → Domains**
2. **"Add Domain" → `recycling.money-hotissue.com`**
3. **DNS 설정 방법 확인**

### DNS 호스팅에서

도메인 관리자에게 다음 추가 요청:

```
Type: CNAME
Name: recycling
Value: cname.vercel-dns.com (또는 Vercel이 제공한 값)
TTL: 3600
```

### 확인 (5분~24시간 후)

```
https://recycling.money-hotissue.com
```

---

## 📱 기능 테스트

### 필수 테스트

#### 1️⃣ 페이지 로드
- [ ] `https://recycling.money-hotissue.com` 접속
- [ ] 제목, 항목, 캘린더 표시 확인

#### 2️⃣ 분리수거 항목
- [ ] 7가지 항목 모두 표시
- [ ] 아이콘과 텍스트 표시
- [ ] 배출 요일 표시

#### 3️⃣ 오늘의 알림
- [ ] 오늘 날짜에 해당하는 배출 정보 표시
- [ ] 알림 배너 시각화

#### 4️⃣ 주간 캘린더
- [ ] 7개 요일 버튼 표시
- [ ] 요일 클릭 시 상세 정보 표시
- [ ] 분리수거 팁 표시

#### 5️⃣ 반응형 테스트

**Desktop (1280px+)**
- [ ] 2열 레이아웃 (좌: 항목, 우: 캘린더)
- [ ] 충분한 여백

**Tablet (768px - 1279px)**
- [ ] 적절한 레이아웃
- [ ] 터치 버튼 크기 적절

**Mobile (375px - 767px)**
- [ ] 1열 레이아웃
- [ ] 텍스트 가독성
- [ ] 터치 가능한 크기

#### 6️⃣ 화면 방향 (모바일/태블릿)
- [ ] **세로(Portrait)**: 항목 위에 캘린더 아래
- [ ] **가로(Landscape)**: 항목 좌측, 캘린더 우측
- [ ] **회전 시**: 자동 레이아웃 변경

---

## 📊 프로젝트 정보

### 기술 스택
```
Framework:  Next.js 14.2.33
Language:   TypeScript 5.3.3
Styling:    Tailwind CSS 3.4.1
Runtime:    Node.js
Package:    npm
```

### 구조
```
recycling/
├── app/
│   ├── globals.css              # 글로벌 스타일
│   ├── layout.tsx               # 레이아웃
│   └── page.tsx                 # 메인 페이지
├── components/
│   ├── RecyclingItem.tsx        # 항목 카드
│   ├── ScheduleCalendar.tsx     # 캘린더
│   └── NotificationCenter.tsx   # 알림
├── next.config.js
├── tailwind.config.ts
├── package.json
└── README.md
```

### 빌드 크기
```
First Load JS: 89.9 kB
Route (app):  2.72 kB
```

---

## 🔄 향후 개발 워크플로우

### 변경사항 추가

```powershell
# 1. 코드 수정
# ... 파일 편집 ...

# 2. 로컬 테스트
npm run dev
npm run build

# 3. 커밋
git add .
git commit -m "feat: 새 기능"

# 4. 푸시
git push origin main

# 5. ✅ Vercel 자동 배포 (2-3분)
```

---

## 🆘 문제 해결

### GitHub Push 실패
```
문제: "Repository not found"
해결:
1. Personal Access Token 확인
2. 저장소명 확인: Recycling (대문자)
3. 계정명 확인: angibeom0985
```

### Vercel 배포 실패
```
문제: "Build failed"
해결:
1. Vercel 대시보드 > Logs 확인
2. 로컬에서 `npm run build` 실행
3. 필요시 Environment Variables 설정
```

### 커스텀 도메인 미작동
```
문제: 도메인 접속 불가
해결:
1. DNS 레코드 전파 대기 (5분-24시간)
2. nslookup으로 확인:
   nslookup recycling.money-hotissue.com
3. Vercel Settings > Domains 재확인
```

---

## ✨ 완성된 기능

### 🎨 디자인
- ✅ 그래디언트 배경 (보라색/분홍색)
- ✅ 아이콘 기반 UI
- ✅ 부드러운 애니메이션
- ✅ 호버 및 터치 효과

### 📱 반응형
- ✅ 375px - 2560px 모든 크기 지원
- ✅ 자동 레이아웃 조정
- ✅ 화면 방향 감지 및 최적화
- ✅ 요소 크기 자동 맞춤

### 🔔 기능
- ✅ 오늘의 배출 정보 알림
- ✅ 주간 일정 조회
- ✅ 상세 정보 및 팁 제공
- ✅ 인터랙티브 캘린더

### ⚡ 성능
- ✅ 정적 사이트 생성 (SSG)
- ✅ ~90KB 번들 크기
- ✅ 빠른 로딩 속도
- ✅ 최적화된 이미지

---

## 📋 최종 체크리스트

```
배포 단계:
[ ] Step 1: GitHub Personal Access Token 생성
[ ] Step 2: git push origin main 실행
[ ] Step 3: Vercel 배포 완료 확인
[ ] Step 4: 커스텀 도메인 DNS 설정

테스트:
[ ] https://recycling.money-hotissue.com 접속
[ ] 모든 기능 작동 확인
[ ] 반응형 테스트 (Desktop/Tablet/Mobile)
[ ] 화면 방향 전환 테스트

확인:
[ ] 배포 성공
[ ] 성능 최적화 확인
[ ] 모바일 호환성 확인
```

---

## 📞 문서 참고

- **README.md**: 프로젝트 개요 및 기능
- **DEPLOYMENT.md**: 배포 프로세스
- **VERCEL_SETUP.md**: Vercel 상세 설정
- **GITHUB_PUSH_GUIDE.md**: GitHub 푸시 상세 가이드

---

## 🎉 배포 준비 완료!

```
모든 준비가 완료되었습니다.
이제 GitHub에 푸시하면 Vercel이 자동으로 배포합니다.

1. Personal Access Token 생성 (GitHub)
2. git push origin main (PowerShell)
3. Vercel 배포 확인
4. 테스트 및 완료

예상 시간: 5-10분
```

---

**최종 업데이트**: 2025년 11월 10일  
**상태**: 🚀 배포 준비 완료  
**다음 단계**: GitHub Personal Access Token 생성 후 푸시
