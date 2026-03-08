import AlllioHeader from './alllio-header'
import AlllioFooter from './alllio-footer'
import type { Lang } from '../_i18n/translations'

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="p-6"><h2 className="text-2xl font-semibold leading-none tracking-tight">{title}</h2></div>
      <div className="p-6 pt-0">{children}</div>
    </div>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-50">
          <tr>{headers.map((h, i) => <th key={i} className="border border-gray-300 px-3 py-2 text-left">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j} className="border border-gray-300 px-3 py-2">{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ContactSection({ lang }: { lang: string }) {
  const titleMap: Record<string, string> = {
    ko: '12. 개인정보 보호책임자 및 연락처',
    en: '10. Contact',
    ja: '4. お問い合わせ',
  }
  const labels = {
    ko: { service: '서비스명', dev: '개발사', email: '이메일', web: '웹사이트' },
    en: { service: 'Service', dev: 'Developer', email: 'Email', web: 'Website' },
    ja: { service: 'サービス', dev: '開発者', email: 'メール', web: 'ウェブサイト' },
  }
  const l = labels[lang as keyof typeof labels] || labels.en

  return (
    <div className="rounded-lg border bg-white shadow-sm mt-6">
      <div className="p-6"><h2 className="text-2xl font-semibold leading-none tracking-tight">{titleMap[lang] || titleMap.en}</h2></div>
      <div className="p-6 pt-0">
        <ul className="text-gray-700 space-y-1">
          <li><strong>{l.service}:</strong> Alllio</li>
          <li><strong>{l.dev}:</strong> Creaitor</li>
          <li><strong>{l.email}:</strong> <a href="mailto:support@alll.io" className="text-purple-600 hover:underline">support@alll.io</a></li>
          <li><strong>{l.web}:</strong> <a href="https://alll.io" className="text-purple-600 hover:underline">https://alll.io</a></li>
        </ul>
      </div>
    </div>
  )
}

function KoPrivacy() {
  return (
    <>
      <Card title="1. 수집하는 개인정보 항목">
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900">1-1. 회원가입 시 수집 항목</h3>
          <Table headers={['항목', '수집 방법', '필수 여부']} rows={[
            ['이메일 주소', 'Google/Apple 로그인', '필수'],
            ['이름(닉네임)', 'Google/Apple 계정 정보', '선택'],
            ['프로필 이미지 URL', 'Google/Apple 계정 정보', '선택'],
          ]} />
          <h3 className="text-base font-semibold text-gray-900 pt-2">1-2. 서비스 이용 과정에서 생성되는 정보</h3>
          <Table headers={['항목', '설명']} rows={[
            ['사용자 콘텐츠', '메모, 링크, 사진, 동영상, 파일, 일정, 할 일 등'],
            ['태그 및 분류', '이용자가 생성한 태그, 카테고리 정보'],
            ['캘린더/미리알림', '동기화를 허용한 기기 캘린더, Google Calendar, Google Tasks, iOS 미리 알림'],
            ['링크 메타데이터', '저장된 URL의 제목, 설명, 미리보기 이미지(OG 태그)'],
            ['위치 정보', '일정에 직접 입력한 장소 정보(자동 수집 아님)'],
            ['파일 메타데이터', '파일명, 크기, 형식, 이미지/동영상 해상도'],
            ['구독 정보', '구독 티어, 결제 상태, 결제 주기, 만료일'],
          ]} />
          <h3 className="text-base font-semibold text-gray-900 pt-2">1-3. 자동 수집 항목</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>서비스 이용 기록, 접속 로그(서버 로그)</li>
            <li>기기 정보(OS 종류, 앱 버전) - 광고 표시 목적</li>
          </ul>
        </div>
      </Card>
      <Card title="2. 개인정보의 수집 및 이용 목적">
        <Table headers={['목적', '상세']} rows={[
          ['서비스 제공', '콘텐츠 저장, 동기화, 검색, 공유 기능 제공'],
          ['회원 관리', '본인 확인, 계정 인증, 로그인 상태 유지'],
          ['캘린더/할일 동기화', '외부 캘린더 및 할 일 서비스와의 양방향 동기화'],
          ['구독 관리', '결제 처리, 구독 상태 확인, 기능 접근 관리'],
          ['광고 게재', '무료 이용자 대상 배너 광고 표시 (Google AdMob)'],
          ['서비스 개선', '오류 분석, 서비스 안정성 향상'],
        ]} />
      </Card>
      <Card title="3. 개인정보의 제3자 제공">
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">서비스는 이용자의 개인정보를 외부에 판매하지 않습니다. 다음의 경우에 한해 제3자에게 정보가 제공됩니다:</p>
          <Table headers={['제공받는 자', '제공 항목', '목적']} rows={[
            ['Supabase (미국)', '계정 정보, 콘텐츠, 파일', '클라우드 데이터 저장 및 인증'],
            ['Google (미국)', '이메일, 캘린더/할일 데이터', 'OAuth 인증, 캘린더/할일 동기화'],
            ['Apple (미국)', '이메일, 이름', 'Apple 로그인 인증'],
            ['RevenueCat (미국)', '사용자 ID, 구독 상태', '인앱 결제 및 구독 관리'],
            ['Google AdMob (미국)', '기기 식별자, 광고 상호작용', '광고 게재 (무료 이용자만)'],
          ]} />
          <p className="text-gray-700 leading-relaxed">법령에 의한 요청이 있는 경우, 관계 법령에 따라 정보를 제공할 수 있습니다.</p>
        </div>
      </Card>
      <Card title="4. 개인정보의 보유 및 이용 기간">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>회원 탈퇴 시:</strong> 즉시 파기 (단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 보관)</li>
          <li><strong>사용자 콘텐츠:</strong> 계정 유지 기간 동안 보관. 삭제 요청 시 30일 이내 파기</li>
          <li><strong>서버 로그:</strong> 최대 90일 보관 후 자동 삭제</li>
          <li><strong>결제 기록:</strong> 전자상거래법에 따라 5년간 보관</li>
        </ul>
      </Card>
      <Card title="5. 개인정보의 파기 절차 및 방법">
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>전자적 파일:</strong> 복구 불가능한 방법으로 삭제</li>
            <li><strong>클라우드 저장소:</strong> Supabase 스토리지에서 완전 삭제</li>
          </ul>
        </div>
      </Card>
      <Card title="6. 이용자의 권리와 행사 방법">
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">이용자는 다음의 권리를 행사할 수 있습니다:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>개인정보 열람, 정정, 삭제, 처리 정지 요청</li>
            <li>계정 삭제(회원 탈퇴) 요청</li>
            <li>데이터 이동권(보유 데이터 내보내기)</li>
            <li>광고 개인화 거부 (기기 설정에서 광고 추적 제한)</li>
            <li>캘린더/미리알림 동기화 연결 해제</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">권리 행사는 앱 내 설정 또는 아래 연락처를 통해 가능합니다.</p>
        </div>
      </Card>
      <Card title="7. 쿠키 및 추적 기술">
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">Alllio 모바일 앱은 쿠키를 사용하지 않습니다. 크롬 확장 프로그램은 로그인 세션 유지를 위해 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">chrome.storage.local</code>을 사용하며, 이 데이터는 기기에만 저장됩니다.</p>
          <p className="text-gray-700 leading-relaxed">Google AdMob은 광고 제공을 위해 기기 식별자를 수집할 수 있으며, 이용자는 기기의 광고 설정에서 개인 맞춤 광고를 비활성화할 수 있습니다.</p>
        </div>
      </Card>
      <Card title="8. 개인정보의 안전성 확보 조치">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>데이터 전송 시 TLS/SSL 암호화 적용</li>
          <li>데이터베이스 Row Level Security(RLS) 정책 적용</li>
          <li>인증 토큰 기반 접근 제어</li>
          <li>공유 링크 비밀번호 해시 처리(원문 미저장)</li>
          <li>결제 정보는 RevenueCat/App Store/Google Play에서 직접 처리 (서비스가 카드 정보를 수집하지 않음)</li>
        </ul>
      </Card>
      <Card title="9. 아동의 개인정보 보호">
        <p className="text-gray-700 leading-relaxed">Alllio는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다. 만 14세 미만 아동의 개인정보가 수집된 사실을 인지한 경우, 해당 정보를 즉시 삭제합니다.</p>
      </Card>
      <Card title="10. 국외 이전">
        <p className="text-gray-700 leading-relaxed">서비스 제공을 위해 개인정보가 미국 소재 서버(Supabase, Google, Apple, RevenueCat)로 이전될 수 있습니다. 이전되는 정보는 본 방침에 명시된 목적으로만 사용되며, 적절한 보호 조치가 적용됩니다.</p>
      </Card>
      <Card title="11. 개인정보처리방침의 변경">
        <p className="text-gray-700 leading-relaxed">본 방침이 변경되는 경우, 시행일 7일 전 앱 내 공지 또는 이메일을 통해 안내합니다. 중요한 변경 사항은 30일 전 사전 고지합니다.</p>
      </Card>
    </>
  )
}

function EnPrivacy() {
  return (
    <>
      <Card title="1. Information We Collect">
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900">Account Information</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Email address (via Google or Apple Sign-In)</li>
            <li>Display name (optional, from Google/Apple account)</li>
            <li>Profile image URL (optional)</li>
          </ul>
          <h3 className="text-base font-semibold text-gray-900 pt-2">User Content</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Text notes, links, photos, videos, files, events, and tasks you create or upload</li>
            <li>Tags and categories you create</li>
            <li>Link metadata (titles, descriptions, preview images fetched from URLs)</li>
            <li>Location data you manually enter for events</li>
            <li>File metadata (name, size, type, dimensions)</li>
          </ul>
          <h3 className="text-base font-semibold text-gray-900 pt-2">Calendar and Task Data</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Calendar events and reminders from device calendars, Google Calendar, and Google Tasks (only when you enable sync)</li>
            <li>iOS Reminders (only when you grant permission)</li>
          </ul>
          <h3 className="text-base font-semibold text-gray-900 pt-2">Subscription Data</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Subscription tier, billing period, payment status, and expiration date</li>
            <li>We do NOT collect or store credit card or payment instrument details</li>
          </ul>
          <h3 className="text-base font-semibold text-gray-900 pt-2">Automatically Collected</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Server logs (access timestamps, error logs)</li>
            <li>Device information (OS type, app version) for ad serving</li>
          </ul>
        </div>
      </Card>
      <Card title="2. How We Use Your Information">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Service delivery:</strong> Store, sync, search, and share your content</li>
          <li><strong>Authentication:</strong> Verify identity and maintain login sessions</li>
          <li><strong>Calendar/task sync:</strong> Bidirectional sync with external calendar and task services you authorize</li>
          <li><strong>Subscription management:</strong> Process payments and manage feature access</li>
          <li><strong>Advertising:</strong> Display banner ads to free-tier users via Google AdMob</li>
          <li><strong>Service improvement:</strong> Error analysis and stability improvements</li>
        </ul>
      </Card>
      <Card title="3. Third-Party Services">
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">We do not sell your personal information. We share data with the following services as necessary:</p>
          <Table headers={['Service', 'Data Shared', 'Purpose']} rows={[
            ['Supabase', 'Account data, content, files', 'Cloud storage and authentication'],
            ['Google', 'Email, calendar/task data', 'OAuth, calendar/task sync'],
            ['Apple', 'Email, name', 'Apple Sign-In'],
            ['RevenueCat', 'User ID, subscription status', 'In-app purchase management'],
            ['Google AdMob', 'Device identifiers, ad interactions', 'Ad serving (free users only)'],
          ]} />
        </div>
      </Card>
      <Card title="4. Data Retention">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Account deletion:</strong> Data deleted immediately upon request</li>
          <li><strong>User content:</strong> Retained while account is active; deleted within 30 days of request</li>
          <li><strong>Server logs:</strong> Automatically deleted after 90 days</li>
          <li><strong>Payment records:</strong> Retained for 5 years as required by law</li>
        </ul>
      </Card>
      <Card title="5. Your Rights">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Access, correct, or delete your personal data</li>
          <li>Delete your account</li>
          <li>Export your data</li>
          <li>Opt out of personalized advertising (via device settings)</li>
          <li>Disconnect calendar/reminder sync at any time</li>
        </ul>
      </Card>
      <Card title="6. Security">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>TLS/SSL encryption for all data in transit</li>
          <li>Row Level Security (RLS) on database</li>
          <li>Token-based access control</li>
          <li>Shared link passwords are hashed (never stored in plain text)</li>
          <li>Payment details handled entirely by App Store / Google Play / RevenueCat</li>
        </ul>
      </Card>
      <Card title="7. Children's Privacy">
        <p className="text-gray-700 leading-relaxed">Alllio does not knowingly collect personal information from children under 14. If we learn that we have collected such information, we will delete it immediately.</p>
      </Card>
      <Card title="8. International Transfers">
        <p className="text-gray-700 leading-relaxed">Your data may be transferred to servers in the United States (Supabase, Google, Apple, RevenueCat). Transferred data is used only for the purposes described in this policy with appropriate safeguards.</p>
      </Card>
      <Card title="9. Changes to This Policy">
        <p className="text-gray-700 leading-relaxed">We will notify you of changes at least 7 days before they take effect via in-app notice or email. Material changes will be communicated 30 days in advance.</p>
      </Card>
    </>
  )
}

function JaPrivacy() {
  return (
    <>
      <Card title="1. 収集する個人情報">
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900">アカウント情報</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>メールアドレス（Google/Appleログイン経由）</li>
            <li>表示名（任意、Google/Appleアカウントから取得）</li>
            <li>プロフィール画像URL（任意）</li>
          </ul>
          <h3 className="text-base font-semibold text-gray-900 pt-2">ユーザーコンテンツ</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>メモ、リンク、写真、動画、ファイル、予定、タスク</li>
            <li>タグとカテゴリ</li>
            <li>リンクメタデータ（タイトル、説明、プレビュー画像）</li>
            <li>手動入力した位置情報（自動収集ではありません）</li>
            <li>ファイルメタデータ（名前、サイズ、種類、解像度）</li>
          </ul>
          <h3 className="text-base font-semibold text-gray-900 pt-2">カレンダー・タスクデータ</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>デバイスカレンダー、Googleカレンダー、Google Tasks（同期を許可した場合のみ）</li>
            <li>iOSリマインダー（権限を付与した場合のみ）</li>
          </ul>
          <h3 className="text-base font-semibold text-gray-900 pt-2">サブスクリプションデータ</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>サブスクリプション階層、請求期間、支払い状況、有効期限</li>
            <li>クレジットカード情報は収集・保存しません</li>
          </ul>
        </div>
      </Card>
      <Card title="2. 情報の利用目的">
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>サービス提供:</strong> コンテンツの保存、同期、検索、共有</li>
          <li><strong>認証:</strong> 本人確認とログインセッションの維持</li>
          <li><strong>カレンダー/タスク同期:</strong> 許可された外部サービスとの双方向同期</li>
          <li><strong>サブスクリプション管理:</strong> 決済処理と機能アクセス管理</li>
          <li><strong>広告表示:</strong> 無料ユーザー向けバナー広告（Google AdMob）</li>
          <li><strong>サービス改善:</strong> エラー分析と安定性向上</li>
        </ul>
      </Card>
      <Card title="3. 第三者提供">
        <div className="space-y-3">
          <p className="text-gray-700 leading-relaxed">当サービスはお客様の個人情報を販売しません。以下のサービスに必要な範囲で情報を提供します：</p>
          <Table headers={['提供先', '提供項目', '目的']} rows={[
            ['Supabase', 'アカウント、コンテンツ、ファイル', 'クラウドストレージと認証'],
            ['Google', 'メール、カレンダー/タスク', 'OAuth、カレンダー同期'],
            ['Apple', 'メール、氏名', 'Appleサインイン'],
            ['RevenueCat', 'ユーザーID、サブスク状態', 'アプリ内課金管理'],
            ['Google AdMob', 'デバイス識別子', '広告配信（無料ユーザーのみ）'],
          ]} />
        </div>
      </Card>
    </>
  )
}

export default function AlllioPrivacy({ lang }: { lang: Lang }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <AlllioHeader lang={lang} />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <svg className="h-12 w-12 text-purple-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.251 2.251 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg>
          {lang === 'ko' && <h1 className="text-4xl font-bold text-gray-900 mb-4">개인정보처리방침</h1>}
          {lang === 'en' && <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>}
          {lang === 'ja' && <h1 className="text-4xl font-bold text-gray-900 mb-4">プライバシーポリシー</h1>}
          {lang === 'ko' && <p className="text-gray-600">시행일: 2026년 3월 15일 | 최종 수정: 2026년 3월 8일</p>}
          {lang === 'en' && <p className="text-gray-600">Effective: March 15, 2026 | Last Updated: March 8, 2026</p>}
          {lang === 'ja' && <p className="text-gray-600">施行日: 2026年3月15日 | 最終更新: 2026年3月8日</p>}
        </div>

        {/* Intro Box */}
        {lang === 'ko' && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8">
            <p className="text-purple-800 text-sm leading-relaxed">Alllio(이하 &quot;서비스&quot;)는 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본 개인정보처리방침은 서비스가 수집하는 정보, 이용 목적, 보호 방법을 안내합니다.</p>
          </div>
        )}
        {lang === 'en' && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8">
            <p className="text-purple-800 text-sm leading-relaxed">Alllio (&quot;Service&quot;) values your privacy and complies with applicable data protection laws. This Privacy Policy explains what information we collect, how we use it, and how we protect it.</p>
          </div>
        )}
        {lang === 'ja' && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8">
            <p className="text-purple-800 text-sm leading-relaxed">Alllio（以下「サービス」）は、ユーザーの個人情報を大切に取り扱い、関連法令を遵守します。本プライバシーポリシーは、サービスが収集する情報、利用目的、保護方法についてご案内します。</p>
          </div>
        )}

        <div className="space-y-6">
          {lang === 'ko' && <KoPrivacy />}
          {lang === 'en' && <EnPrivacy />}
          {lang === 'ja' && <JaPrivacy />}
        </div>

        <ContactSection lang={lang} />
      </div>

      <AlllioFooter lang={lang} />
    </div>
  )
}
