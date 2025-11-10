# 🚀 분리수거 알리미 - 즉시 배포 가이드 (한국어)

> **5분 안에 배포 완료하기!**

---

## 📋 현재 상태

✅ **완료**: Next.js 프로젝트, 반응형 디자인, 모든 기능  
⏳ **남은 것**: GitHub 푸시 + Vercel 배포 확인

---

## 🎯 3단계 배포 프로세스

### 1️⃣ GitHub Personal Access Token 생성 (2분)

**온라인에서 실행:**

1. https://github.com/settings/tokens 접속
2. "Generate new token (classic)" 클릭
3. 정보 입력:
   - **Token name**: `recycling-deploy`
   - **Select scopes**: 
     - ✅ `repo`
     - ✅ `workflow`
4. "Generate token" 클릭
5. **⚠️ 토큰 복사** (다시 볼 수 없음)

---

### 2️⃣ PowerShell에서 Git Push (1분)

```powershell
cd c:\KB\Website\Recycling
git push -u origin main
```

**프롬프트에 입력:**
```
Username: angibeom0985
Password: [위의 토큰 붙여넣기]
```

---

### 3️⃣ Vercel 배포 확인 (2분)

1. https://vercel.com/dashboard 접속
2. **Website > recycling** 클릭
3. **Deployments** 탭에서 상태 확인
   - 🔄 Building... → ✅ Ready
   - 예상 시간: 2-3분
4. **테스트 URL**: https://recycling-git-main-angibeom0985.vercel.app

---

## ✨ 그게 전부입니다!

✅ GitHub에 코드 푸시됨  
✅ Vercel이 자동으로 배포 시작  
✅ https://recycling.money-hotissue.com 에서 확인 가능 (DNS 설정 후)

---

## 📱 테스트 확인 항목

- [ ] 분리수거 항목 표시 (7개)
- [ ] 오늘의 알림 배너
- [ ] 주간 캘린더 상호작용
- [ ] Desktop 반응형
- [ ] Tablet 반응형 (7인치, 10인치)
- [ ] Mobile 반응형
- [ ] 세로/가로 모드 전환

---

## 🆘 뭔가 안 되면?

### GitHub 토큰 생성 실패
→ https://github.com/settings/tokens 다시 확인

### Git Push 실패
→ PowerShell에서 정확히 입력했는지 확인 (Username: angibeom0985)

### Vercel에 배포 안 됨
→ https://vercel.com/dashboard 에서 Deployments 탭 확인 및 Logs 보기

---

## 📚 상세 가이드

더 자세한 정보는 다음 파일을 참고하세요:

- **DEPLOY_NOW.md** - 완전한 배포 가이드
- **VERCEL_SETUP.md** - Vercel 상세 설정
- **README.md** - 프로젝트 정보

---

**준비 완료!** 🎉  
GitHub 푸시하고 Vercel이 자동 배포하도록 놔두면 됩니다.

---

**현재 상태**: 로컬 완성 + Git 커밋 완료  
**다음**: GitHub Personal Access Token 생성 → git push
