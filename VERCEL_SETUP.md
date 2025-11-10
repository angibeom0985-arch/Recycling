# ♻️ Recycling App - 배포 완료 설정 가이드

## 🎯 현재 상태 요약

### ✅ 프로젝트 완성
- **프레임워크**: Next.js 14.2.33
- **언어**: TypeScript
- **스타일**: Tailwind CSS 3.4.1
- **배포 플랫폼**: Vercel
- **커스텀 도메인**: `recycling.money-hotissue.com`

### ✅ 로컬 저장소 준비
```
✓ Git 저장소 초기화
✓ 모든 파일 커밋 완료 (1 commit)
✓ 원격 저장소 설정: https://github.com/angibeom0985/Recycling.git
✓ Credential Manager 설정 완료
```

### ⏳ 다음 단계 (GitHub 푸시)
```
[ ] GitHub Personal Access Token 생성
[ ] git push origin main 실행
[ ] Vercel 자동 배포 확인
```

---

## 🔐 GitHub Personal Access Token 생성 (필수)

### 단계별 가이드

#### Step 1: GitHub 접속
```
https://github.com/login
→ angibeom0985 로그인
```

#### Step 2: Personal Access Token 페이지 이동
```
GitHub Profile → Settings → Developer settings → Personal access tokens → Tokens (classic)
```

또는 직접 접속:
```
https://github.com/settings/tokens
```

#### Step 3: 새 토큰 생성
1. "Generate new token (classic)" 클릭
2. **Token name**: `recycling-deploy`
3. **Expiration**: 90 days (권장) 또는 No expiration
4. **Select scopes** 섹션에서:
   - ✅ `repo` (Full control of private repositories 선택하면 모두 포함)
   - ✅ `workflow` (GH Actions 실행권한)

5. 페이지 하단 "Generate token" 클릭

#### Step 4: 토큰 복사
```
⚠️ 주의: 이 페이지를 벗어나면 다시 볼 수 없습니다!
토큰을 안전한 곳에 복사해두세요
```

---

## 🚀 GitHub에 코드 푸시하기

### PowerShell에서 실행

```powershell
# 프로젝트 디렉토리로 이동
cd c:\KB\Website\Recycling

# 상태 확인
git status

# 원격 저장소 확인
git remote -v

# GitHub에 푸시
git push -u origin main
```

### 인증 정보 입력

프롬프트가 나타나면:

```
Username for 'https://github.com': angibeom0985
Password for 'https://angibeom0985@github.com': [위에서 복사한 Personal Access Token 붙여넣기]
```

### 푸시 성공 메시지
```
Enumerating objects: 16, done.
Counting objects: 100% (16/16), done.
Delta compression using up to 8 threads
Compressing objects: 100% (15/15), done.
Writing objects: 100% (16/16), ...
...
To https://github.com/angibeom0985/Recycling.git
 * [new branch]      main -> main
Branch 'main' set up to track 'origin/main'.
```

---

## ✅ Vercel 자동 배포 확인

### Vercel 대시보드에서 확인

1. **Vercel 접속**
   ```
   https://vercel.com → Dashboard
   ```

2. **프로젝트 선택**
   ```
   Website → recycling 클릭
   ```

3. **배포 상태 확인**
   ```
   Deployments 탭 → 최신 배포 확인
   ```

4. **배포 상태**
   - 🔄 Building... → ✅ Ready
   - 예상 소요 시간: 2-3분

### 성공 화면
```
✅ Deployment
   Status: Ready
   Duration: 1m 23s
   URL: https://recycling-git-main-angibeom0985.vercel.app
   Production: https://recycling.money-hotissue.com (DNS 설정 필요)
```

---

## 🌐 커스텀 도메인 설정 (DNS)

### Vercel 설정

1. **Vercel 프로젝트 > Settings > Domains**

2. **Add Domain 클릭**
   ```
   Domain: recycling.money-hotissue.com
   ```

3. **DNS 설정 옵션 확인**
   Vercel이 다음 중 하나를 제안합니다:
   ```
   Option 1: Nameserver (권장)
   Option 2: CNAME Record
   ```

### DNS 호스팅 설정 (CNAME 방식)

도메인 호스팅 제공자 (money-hotissue.com 관리자)에서:

1. **DNS 레코드 추가**
   ```
   Type: CNAME
   Name: recycling
   Value: recycling-six-tau.vercel.app
   TTL: 3600
   ```

2. **저장**

3. **DNS 전파 대기**
   ```
   ⏱️ 보통 5분-24시간 소요
   https://dns.google 에서 확인 가능
   ```

### 확인 방법

```bash
# 터미널에서 DNS 확인
nslookup recycling.money-hotissue.com

# 예상 결과
Name:    recycling.money-hotissue.com
Address: 76.76.19.132 (Vercel IP)
```

---

## 📱 배포 후 테스트

### Step 1: 기본 접속 테스트
```
✅ https://recycling.money-hotissue.com 접속
✅ 페이지 로드 완료
```

### Step 2: UI 테스트
```
✅ 분리수거 항목 표시
✅ 오늘의 알림 배너 표시
✅ 주간 캘린더 기능
```

### Step 3: 반응형 디자인 테스트

#### Desktop (1024px 이상)
- [ ] 2열 레이아웃 (좌: 항목, 우: 캘린더)
- [ ] 요소 크기 적절
- [ ] 마우스 호버 효과

#### Tablet (768px - 1023px)
- [ ] 1열 또는 2열 레이아웃
- [ ] 터치 버튼 크기 적절
- [ ] 스크롤 작동

#### Smartphone (375px - 767px)
- [ ] 1열 레이아웃
- [ ] 각 요소 터치 가능
- [ ] 텍스트 가독성

### Step 4: 화면 방향 테스트 (모바일/태블릿)

#### 세로모드 (Portrait)
```
✅ 단일 열 레이아웃
✅ 항목 그리드: 2×3 or 3×2
✅ 하단에 캘린더
```

#### 가로모드 (Landscape)
```
✅ 2열 레이아웃
✅ 좌측 항목 그리드
✅ 우측 캘린더
```

#### 화면 회전 시
```
✅ 자동 레이아웃 변경
✅ 요소 크기 자동 조정
✅ 부드러운 전환
```

---

## 📊 성능 확인

### Vercel Analytics
1. Vercel Dashboard > recycling > Analytics
2. 성능 지표 확인:
   - FCP (First Contentful Paint)
   - LCP (Largest Contentful Paint)
   - CLS (Cumulative Layout Shift)

### Lighthouse 테스트
```
Chrome DevTools > Lighthouse
1. Performance
2. Accessibility
3. Best Practices
4. SEO
```

---

## 🔄 앞으로의 워크플로우

### 변경사항 적용 방법

```powershell
# 1. 로컬에서 코드 수정
# ... 파일 편집 ...

# 2. 변경사항 확인
git status

# 3. 커밋
git add .
git commit -m "feat: 새로운 기능 추가"

# 4. GitHub에 푸시
git push origin main

# 5. ✅ Vercel이 자동으로 배포
# https://recycling.money-hotissue.com 에 반영 (2-3분 후)
```

---

## 📋 체크리스트

### 배포 준비
- [ ] GitHub Personal Access Token 생성
- [ ] `git push origin main` 실행
- [ ] Vercel 배포 성공 확인

### 커스텀 도메인
- [ ] DNS CNAME 레코드 추가
- [ ] DNS 전파 대기 (5분-24시간)
- [ ] `recycling.money-hotissue.com` 접속 확인

### 기능 테스트
- [ ] 분리수거 일정 표시
- [ ] 오늘의 알림 작동
- [ ] 주간 캘린더 상호작용
- [ ] Desktop 반응형 테스트
- [ ] Tablet 반응형 테스트
- [ ] Mobile 반응형 테스트
- [ ] 세로/가로 모드 전환 테스트

### 성능 확인
- [ ] Vercel Analytics 확인
- [ ] Lighthouse 점수 확인 (90점 이상 권장)

---

## 🆘 문제 해결

### GitHub Push 실패

#### "fatal: repository 'https://github.com/angibeom0985/Recycling.git/' not found"
- ✅ 저장소 이름 확인 (Recycling - 대문자)
- ✅ 계정명 확인 (angibeom0985)
- ✅ Personal Access Token 확인

#### "fatal: 'origin' does not appear to be a 'git' repository"
```powershell
# 원격 저장소 다시 설정
git remote add origin https://github.com/angibeom0985/Recycling.git
```

### Vercel 배포 실패

#### 빌드 에러
1. Vercel Dashboard > Deployments > 실패한 배포
2. "Logs" 탭에서 에러 메시지 확인
3. 로컬에서 동일한 에러 재현:
   ```powershell
   npm run build
   ```

#### 환경 변수 필요
```
Vercel > Settings > Environment Variables
NODE_ENV: production
```

### 커스텀 도메인 미작동

#### DNS 미전파
```powershell
# 전파 상태 확인
nslookup recycling.money-hotissue.com

# 또는 온라인 도구
https://dns.google
https://mxtoolbox.com
```

#### Vercel 설정 오류
1. Settings > Domains 확인
2. DNS 레코드 재확인
3. 호스팅 제공자에 문의

---

## 📞 지원 및 리소스

### 공식 문서
- [Vercel 문서](https://vercel.com/docs)
- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)

### GitHub 관련
- [GitHub Docs](https://docs.github.com)
- [Personal Access Tokens](https://github.com/settings/tokens)

### DNS 관련
- [Google DNS Checker](https://dns.google)
- [MX Toolbox](https://mxtoolbox.com)

---

## 📝 마지막 확인

```
배포 준비 완료! 🎉

✅ 로컬 프로젝트 구축 완료
✅ Git 커밋 완료
✅ 원격 저장소 설정 완료
✅ Credential Manager 설정 완료

다음: GitHub Personal Access Token 생성 후 `git push origin main` 실행
```

---

**생성일**: 2025년 11월 10일
**상태**: 배포 준비 완료
**다음 단계**: GitHub 푸시
