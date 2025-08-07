# Vercel 배포 가이드

## 완료된 설정

1. **vercel.json** - app-ads.txt를 plain text로 제공하기 위한 헤더 설정 완료
2. **next.config.mjs** - Vercel 배포에 맞게 수정 완료
3. **package.json** - GitHub Pages용 postbuild 스크립트 제거 완료

## Vercel 배포 단계

### 1. Vercel 계정 생성 (이미 있다면 건너뛰기)
- https://vercel.com/signup 방문
- GitHub 계정으로 로그인

### 2. 프로젝트 Import
1. https://vercel.com/new 방문
2. "Import Git Repository" 클릭
3. GitHub 리포지토리 선택: `creaitor-homepage`

### 3. 프로젝트 설정
- **Framework Preset**: Next.js (자동 감지됨)
- **Root Directory**: `./` (기본값)
- **Build Command**: `pnpm build` 또는 `npm run build`
- **Output Directory**: 자동 설정됨
- **Install Command**: `pnpm install` 또는 `npm install`

### 4. 환경 변수 (필요한 경우)
환경 변수가 필요하다면 Vercel 대시보드에서 추가

### 5. 도메인 설정
1. 배포 완료 후 Settings > Domains 방문
2. `creaitor.co` 도메인 추가
3. DNS 설정:
   - A 레코드: `76.76.21.21`
   - CNAME 레코드: `cname.vercel-dns.com`

### 6. 확인사항
배포 후 다음 URL들이 정상 작동하는지 확인:
- https://creaitor.co/app-ads.txt (Content-Type: text/plain 확인)
- https://creaitor.co/ads.txt (Content-Type: text/plain 확인)

## 로컬 테스트
```bash
# 개발 서버 실행
pnpm dev

# 빌드 테스트
pnpm build

# 프로덕션 서버 실행
pnpm start
```

## 트러블슈팅

### app-ads.txt가 여전히 text/plain이 아닌 경우
1. Vercel 대시보드에서 Functions 탭 확인
2. 재배포 시도 (Redeploy 버튼 클릭)
3. vercel.json의 headers 설정 확인

### 도메인 연결 문제
1. DNS 전파 시간 대기 (최대 48시간)
2. Vercel 대시보드에서 도메인 상태 확인
3. SSL 인증서 자동 발급 대기

## GitHub에서 Vercel로 자동 배포
- main 브랜치에 푸시하면 자동으로 프로덕션 배포
- PR을 만들면 프리뷰 배포 생성

## 롤백
문제 발생 시 Vercel 대시보드에서 이전 배포로 즉시 롤백 가능