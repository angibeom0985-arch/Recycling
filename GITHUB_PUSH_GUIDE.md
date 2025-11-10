#!/bin/bash
# Recycling App - 배포 설정 가이드

## 📌 중요: 다음 단계를 수행하세요

### 1️⃣ GitHub Personal Access Token 생성

1. GitHub 로그인 (https://github.com/login)
2. Settings > Developer settings > Personal access tokens > Tokens (classic)
3. "Generate new token" 클릭
4. 토큰 이름: `recycling-deploy`
5. Scopes 선택:
   - ☑️ repo (전체)
   - ☑️ workflow
6. "Generate token" 클릭
7. **토큰 복사** (다시 볼 수 없음)

### 2️⃣ git 설정 (Windows)

```powershell
# Windows Credential Manager 사용
git config --global credential.helper wincred

# 이후 git push 시 username과 token을 입력하면 저장됨
```

### 3️⃣ GitHub에 푸시 (PowerShell)

```powershell
cd c:\KB\Website\Recycling
git remote set-url origin https://github.com/angibeom0985/Recycling.git
git push -u origin main

# 프롬프트:
# Username for 'https://github.com': angibeom0985
# Password for 'https://angibeom0985@github.com': <Personal Access Token을 여기에 붙여넣기>
```

### 4️⃣ Vercel 자동 배포 확인

1. Vercel 대시보드 (https://vercel.com)
2. Projects > recycling
3. Deployments 탭 확인
4. 새 배포가 자동으로 시작되면 성공

### 5️⃣ 커스텀 도메인 설정

#### Vercel에서:
1. Settings > Domains
2. "Add Domain" 클릭
3. `recycling.money-hotissue.com` 입력
4. DNS 설정 방법 확인 (Vercel이 CNAME 값 제공)

#### DNS 호스팅에서:
도메인 호스팅 제공자 (예: Namecheap, GoDaddy 등)에서:
```
Type: CNAME
Name: recycling
Value: recycling-six-tau.vercel.app (Vercel이 제공한 값)
TTL: 3600
```

### 6️⃣ 배포 완료 확인

```
✅ https://recycling.money-hotissue.com
✅ 모든 페이지 정상 작동
✅ 반응형 디자인 확인
✅ 화면 방향 전환 테스트
```

---

## 📦 프로젝트 구조 (최종)

```
recycling/
├── app/
│   ├── globals.css          # Tailwind 글로벌 스타일
│   ├── layout.tsx           # 메타데이터, 뷰포트 설정
│   └── page.tsx             # 메인 페이지 (반응형 레이아웃)
├── components/
│   ├── RecyclingItem.tsx    # 분리수거 항목 카드
│   ├── ScheduleCalendar.tsx # 주간 일정 캘린더
│   └── NotificationCenter.tsx # 오늘의 알림
├── .github/
│   └── workflows/           # GitHub Actions (선택사항)
├── public/                  # 정적 파일 (추가 가능)
├── next.config.js           # Next.js 설정
├── tailwind.config.ts       # Tailwind 설정
├── package.json             # 의존성
├── README.md                # 프로젝트 문서
└── DEPLOYMENT.md            # 배포 가이드
```

---

## 🔄 앞으로의 개발 워크플로우

```bash
# 1. 변경사항 작업
# ... 코드 수정 ...

# 2. 로컬에서 테스트
npm run dev
npm run build

# 3. Git에 커밋
git add .
git commit -m "feat: 새로운 기능 추가"

# 4. GitHub에 푸시
git push origin main

# 5. ✅ Vercel이 자동으로 배포
# https://recycling.money-hotissue.com 에 반영됨
```

---

## 🆘 문제 해결

### "Repository not found"
- ✅ 저장소 이름 확인: `Recycling`
- ✅ Personal Access Token 유효성 확인
- ✅ Token에 `repo` scope 포함 확인

### "Permission denied (publickey)"
- SSH 키 대신 HTTPS + Token 사용
- Credential Manager를 통해 자격증명 저장

### Vercel에서 빌드 실패
1. 로컬에서 `npm run build` 테스트
2. Vercel > Deployments > 실패한 배포 > Logs 확인
3. 필요시 Environment Variables 설정

---

## 📊 체크리스트

- [ ] GitHub Personal Access Token 생성
- [ ] `git push origin main` 성공
- [ ] Vercel에서 자동 배포 확인
- [ ] 커스텀 도메인 DNS 설정
- [ ] `https://recycling.money-hotissue.com` 접속 테스트
- [ ] 모바일/태블릿 반응형 테스트
- [ ] 화면 방향 전환 테스트

---

**이 가이드를 따라 배포를 완료하면 준비 완료입니다!** 🚀
