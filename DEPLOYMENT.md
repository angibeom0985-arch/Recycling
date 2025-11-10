# Recycling App - GitHub & Vercel Deployment Guide

## 📋 현재 상태

### GitHub
- ✅ Repository: `angibeom0985/Recycling`
- ✅ Branch: `main`
- 📊 5 commits
- 🔗 로컬 저장소와 연동 준비 완료

### Vercel
- ✅ Project: `recycling`
- ✅ Connected Git Repository: `angibeom0985-arch/Recycling`
- ✅ Auto-deploy 설정 완료
- 🌐 Custom Domain: `recycling.money-hotissue.com`

---

## 🚀 Vercel 배포 프로세스

### 방법 1: GitHub 푸시로 자동 배포 (권장)
```bash
# 로컬에서 변경 후
git add .
git commit -m "Update: your changes"
git push origin main

# ✅ Vercel이 자동으로 감지하고 배포합니다
```

### 방법 2: Vercel CLI로 수동 배포
```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

---

## 🔧 배포 전 확인사항

- ✅ 프로젝트 빌드 성공
- ✅ 모든 테스트 통과
- ✅ ESLint 검사 완료 (경고 0개)
- ✅ TypeScript 타입 검사 완료
- ✅ `.gitignore` 설정 완료
- ✅ `package.json` 설정 완료
- ✅ `next.config.js` 설정 완료

---

## 📝 Vercel Environment Variables (필요시)

Vercel 프로젝트 > Settings > Environment Variables에서 추가:
```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://recycling.money-hotissue.com
```

---

## 🌐 커스텀 도메인 설정

### Vercel에서
1. Project > Settings > Domains
2. "Add Domain" 클릭
3. `recycling.money-hotissue.com` 입력
4. DNS 설정 지시사항 확인

### DNS 레코드 (호스팅 제공자)
```
Type: CNAME
Name: recycling
Value: recycling-six-tau.vercel.app
TTL: 3600
```

---

## 📊 배포 후 모니터링

### Vercel Dashboard
- Deployments: 배포 상태 확인
- Analytics: 성능 지표
- Logs: 배포 로그 확인

### 주소
- 🌐 Production: https://recycling.money-hotissue.com
- 🔗 Vercel Preview: https://recycling-git-main-angibeom0985.vercel.app

---

## 🐛 배포 문제 해결

### 빌드 실패
```bash
# 로컬에서 빌드 테스트
npm run build

# 의존성 재설치
rm -r node_modules package-lock.json
npm install
npm run build
```

### 배포 후 흰 화면
1. 브라우저 캐시 삭제
2. 다시 로드 (Ctrl + Shift + R)
3. Vercel 배포 로그 확인

---

## 📞 리소스

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app)
- [Custom Domain on Vercel](https://vercel.com/docs/concepts/projects/custom-domains)

---

**마지막 업데이트**: 2025년 11월 10일
