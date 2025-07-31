# 계정 삭제 및 데이터 삭제 가이드

> **📋 개요**: LinKnote 앱의 구글 플레이스토어 정책 준수를 위한 계정 삭제 시스템 구현 가이드

## 🎯 목적

- 구글 플레이스토어 정책 준수 (계정 삭제 기능 제공 필수)
- GDPR 및 개인정보보호법 준수
- 단계적 삭제를 통한 실수 방지
- 사용자 데이터 완전 삭제 보장

## 📊 DB 스키마

### users 테이블 추가 필드

| 필드명                   | 타입        | 기본값 | 설명                                        |
| ------------------------ | ----------- | ------ | ------------------------------------------- |
| `is_active`              | BOOLEAN     | true   | 계정 활성화 상태 (false시 앱 접근 차단)     |
| `deactivated_at`         | TIMESTAMPTZ | NULL   | 계정 비활성화된 시간                        |
| `deactivation_reason`    | VARCHAR(50) | NULL   | 비활성화 이유                               |
| `scheduled_deletion_at`  | TIMESTAMPTZ | NULL   | 완전 삭제 예정 시간 (보통 비활성화 후 30일) |
| `deletion_request_notes` | TEXT        | NULL   | 삭제 요청 관련 메모 (CS팀용)                |

### 비활성화 이유 (deactivation_reason)

- `user_request`: 사용자 요청
- `admin_action`: 관리자 조치
- `policy_violation`: 정책 위반
- `inactivity`: 비활성

## 🔧 주요 함수들

### 1. 계정 비활성화

```sql
SELECT deactivate_user_account(
  target_user_id UUID,           -- 대상 사용자 ID
  reason VARCHAR(50) DEFAULT 'user_request',  -- 비활성화 이유
  deletion_delay_days INTEGER DEFAULT 30      -- 삭제까지 대기 일수
);
```

**동작:**

- 계정을 즉시 비활성화 (앱 접근 차단)
- 30일 후 삭제 예정일 설정
- audit_logs에 기록

### 2. 계정 재활성화 (복구)

```sql
SELECT reactivate_user_account(target_user_id UUID);
```

**동작:**

- 30일 내에만 복구 가능
- 삭제 예정일이 지나면 복구 불가
- 모든 비활성화 관련 필드 초기화

### 3. 삭제 예정 계정 조회

```sql
SELECT * FROM get_accounts_pending_deletion();
```

**반환 정보:**

- user_id, email, deactivated_at
- scheduled_deletion_at, deactivation_reason
- days_until_deletion (남은 일수)

### 4. 삭제 대상 계정 조회

```sql
SELECT * FROM get_accounts_ready_for_deletion();
```

**조건:** 30일이 지나 삭제 대상이 된 계정들

### 5. 완전 삭제 실행

```sql
SELECT permanently_delete_user_data(
  target_user_id UUID,
  confirm_deletion BOOLEAN DEFAULT false  -- 안전장치: 반드시 true 설정
);
```

**주의사항:**

- `confirm_deletion`을 `true`로 설정해야만 실행됨
- 활성화된 계정은 삭제 불가
- 삭제된 데이터 통계 반환

### 6. 삭제 통계 조회

```sql
SELECT get_deletion_statistics();
```

**반환 정보:**

- 전체 사용자 수, 활성 사용자 수
- 비활성화된 사용자 수
- 삭제 예정 계정 수, 삭제 대상 계정 수

## 🔒 안전장치

### 1. 다단계 확인

- ✅ 계정 비활성화 → 30일 대기 → 완전 삭제
- ✅ `confirm_deletion = true` 필수 설정
- ✅ 활성화된 계정은 완전 삭제 불가

### 2. 감사 추적

- ✅ 모든 작업이 `audit_logs` 테이블에 기록
- ✅ 삭제 통계 반환으로 추적 가능
- ✅ 사용자 이메일 및 시간 기록

### 3. 데이터 완전성

- ✅ 관련 테이블 모든 데이터 연쇄 삭제
- ✅ GDPR 준수를 위한 완전 삭제
- ✅ 외래키 제약조건 고려한 삭제 순서

## 📧 수동 처리 플로우

### 사용자 계정 삭제 요청 시

#### 1단계: 요청 접수

```
이메일 제목: [LinKnote] 계정 삭제 요청
내용: 사용자 이메일 주소 확인
```

#### 2단계: 계정 비활성화

```sql
-- 사용자 ID 확인
SELECT id, email FROM auth.users WHERE email = 'user@example.com';

-- 계정 비활성화 (즉시 앱 접근 차단)
SELECT deactivate_user_account(
  'user_uuid',
  'user_request',
  30  -- 30일 후 완전 삭제
);
```

#### 3단계: 사용자 통지

```
이메일 제목: [LinKnote] 계정 비활성화 완료
내용:
- 계정이 비활성화되었습니다
- 30일 내 복구 가능
- 30일 후 모든 데이터가 완전 삭제됩니다
```

#### 4단계: 완전 삭제 (30일 후)

```sql
-- 삭제 대상 계정 확인
SELECT * FROM get_accounts_ready_for_deletion();

-- 완전 삭제 실행
SELECT permanently_delete_user_data('user_uuid', true);
```

#### 5단계: 삭제 완료 통지

```
이메일 제목: [LinKnote] 계정 삭제 완료
내용: 모든 데이터가 완전 삭제되었습니다
```

### 복구 요청 시 (30일 내)

```sql
-- 복구 가능 여부 확인
SELECT * FROM get_accounts_pending_deletion()
WHERE user_id = 'user_uuid';

-- 계정 재활성화
SELECT reactivate_user_account('user_uuid');
```

## 🏗️ 구현된 데이터 삭제 범위

### 완전 삭제 시 제거되는 데이터

1. **링크 관련**

   - `user_links`: 사용자 저장 링크
   - `user_link_categories`: 링크-카테고리 연결
   - `link_tags`: 링크 태그

2. **카테고리 관련**

   - `user_category_preferences`: 카테고리 설정
   - `user_categories`: 커스텀 카테고리

3. **태그 데이터**

   - `tags`: 사용자 태그

4. **요약 관련**

   - `link_summary_subscriptions`: 요약 구독
   - `subscription_schedules`: 요약 스케줄
   - `summary_generation_queue`: 요약 생성 큐
   - `summary_generation_history`: 요약 생성 이력

5. **알림 관련**

   - `notification_preferences`: 알림 설정
   - `notification_logs`: 알림 로그
   - `reminder_settings`: 리마인더 설정

6. **기타**
   - `rate_limits`: API 사용 제한
   - `users`: 사용자 프로필

## 🔍 모니터링 및 관리

### 정기적 확인 (일간)

```sql
-- 삭제 예정 계정 현황
SELECT get_deletion_statistics();

-- 삭제 대상 계정 확인
SELECT * FROM get_accounts_ready_for_deletion();
```

### 정기적 삭제 (주간)

```sql
-- 30일이 지난 계정들을 완전 삭제
DO $$
DECLARE
    user_record RECORD;
BEGIN
    FOR user_record IN
        SELECT * FROM get_accounts_ready_for_deletion()
    LOOP
        PERFORM permanently_delete_user_data(user_record.user_id, true);
    END LOOP;
END $$;
```

## 📋 체크리스트

### 계정 삭제 요청 처리 시

- [ ] 사용자 이메일 주소 확인
- [ ] 계정 비활성화 실행
- [ ] 사용자에게 비활성화 통지
- [ ] 30일 후 완전 삭제 스케줄 확인
- [ ] audit_logs 기록 확인

### 복구 요청 처리 시

- [ ] 30일 내 요청인지 확인
- [ ] 계정 재활성화 실행
- [ ] 사용자에게 복구 완료 통지
- [ ] audit_logs 기록 확인

### 완전 삭제 실행 시

- [ ] 삭제 대상 계정 목록 확인
- [ ] 각 계정별 삭제 실행
- [ ] 삭제 통계 확인
- [ ] 사용자에게 삭제 완료 통지
- [ ] audit_logs 기록 확인

## ⚠️ 주의사항

1. **실수 방지**

   - 삭제 함수 실행 시 반드시 `confirm_deletion = true` 설정
   - 사용자 이메일 주소 정확히 확인
   - 복구 불가능함을 사용자에게 명확히 안내

2. **법적 준수**

   - GDPR 요구사항에 따라 30일 내 삭제 완료
   - 모든 관련 데이터 완전 삭제 보장
   - 삭제 과정 문서화 및 감사 추적

3. **데이터 백업**
   - 삭제 전 필요시 데이터 백업
   - 법적 요구사항이 있는 경우에만 익명화 보관
   - 백업 데이터도 동일한 삭제 정책 적용

## 🔗 관련 문서

- [개인정보처리방침](privacy-policy.html)
- [서비스 약관](terms-of-service.html)
- [보안 및 배포 가이드라인](../README.md#보안-및-배포-가이드라인)

---

**최종 업데이트**: 2025년 1월 29일  
**작성자**: AI Assistant  
**검토**: 필요시 개발팀 리뷰
