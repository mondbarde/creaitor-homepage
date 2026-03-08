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
  const titleMap: Record<string, string> = { ko: '제15조 (연락처)', en: '10. Contact', ja: '第4条 (お問い合わせ)' }
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

function KoTerms() {
  return (
    <>
      <Card title="제1조 (목적)"><p className="text-gray-700 leading-relaxed">본 약관은 Alllio(이하 &quot;서비스&quot;)의 이용에 관한 조건과 절차, 이용자와 서비스 제공자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p></Card>
      <Card title="제2조 (정의)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li><strong>&quot;서비스&quot;</strong>란 Alllio가 제공하는 모바일 애플리케이션, 크롬 확장 프로그램, 웹 서비스 및 관련된 모든 기능을 말합니다.</li>
          <li><strong>&quot;이용자&quot;</strong>란 본 약관에 동의하고 서비스에 가입하여 이용하는 자를 말합니다.</li>
          <li><strong>&quot;콘텐츠&quot;</strong>란 이용자가 서비스 내에 저장, 업로드, 공유하는 텍스트, 링크, 이미지, 동영상, 파일, 일정, 할 일 등 모든 형태의 정보를 말합니다.</li>
          <li><strong>&quot;유료 서비스&quot;</strong>란 별도의 결제를 통해 이용할 수 있는 구독 상품(Pro, Ultra, Max)을 말합니다.</li>
        </ol>
      </Card>
      <Card title="제3조 (약관의 효력 및 변경)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>본 약관은 서비스 화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
          <li>서비스는 합리적인 사유가 있는 경우 약관을 변경할 수 있으며, 변경된 약관은 시행일 7일 전 공지합니다.</li>
          <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
        </ol>
      </Card>
      <Card title="제4조 (서비스 가입)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>서비스 가입은 Google 또는 Apple 계정을 통한 소셜 로그인으로 이루어집니다.</li>
          <li>만 14세 미만의 아동은 서비스에 가입할 수 없습니다.</li>
          <li>가입 시 본 약관 및 개인정보처리방침에 동의한 것으로 간주합니다.</li>
        </ol>
      </Card>
      <Card title="제5조 (서비스의 내용)">
        <p className="text-gray-700 leading-relaxed mb-3">서비스는 다음의 기능을 제공합니다:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>메모, 링크, 미디어(사진/동영상), 파일의 저장 및 관리</li>
          <li>일정 관리 및 캘린더 동기화 (기기 캘린더, Google Calendar)</li>
          <li>할 일 관리 및 동기화 (Google Tasks, iOS 미리 알림)</li>
          <li>태그 기반 분류 및 검색</li>
          <li>공유 링크 생성 (비밀번호 설정, 만료일 지정 가능)</li>
          <li>태그 공유 및 협업</li>
          <li>크롬 확장 프로그램을 통한 웹 브라우저 연동</li>
          <li>오프라인 모드 및 자동 동기화</li>
        </ul>
      </Card>
      <Card title="제6조 (무료 및 유료 서비스)">
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900">6-1. 무료(Free) 이용</h3>
          <Table headers={['항목', '제한']} rows={[['아이템 수','최대 200개'],['파일당 크기','최대 15MB'],['총 저장 용량','최대 300MB'],['광고','배너 광고 표시']]} />
          <div className="bg-purple-50 p-3 rounded-lg"><p className="text-purple-800 text-sm">캘린더/미리알림 동기화, 크롬 확장, 공유 기능은 무료 이용에 포함됩니다.</p></div>
          <h3 className="text-base font-semibold text-gray-900 pt-2">6-2. 유료(Pro) 이용</h3>
          <Table headers={['항목', '내용']} rows={[['아이템 수','무제한'],['파일당 크기','최대 100MB'],['총 저장 용량','최대 3GB'],['광고','없음']]} />
          <h3 className="text-base font-semibold text-gray-900 pt-2">6-3. 결제 및 구독</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>유료 서비스는 Apple App Store 또는 Google Play Store를 통해 결제됩니다.</li>
            <li>구독은 월간, 연간, 평생(일회성) 옵션으로 제공됩니다.</li>
            <li>월간/연간 구독은 만료일 최소 24시간 전에 해지하지 않으면 자동으로 갱신됩니다.</li>
            <li>자동 갱신을 해지하려면 Apple/Google 계정의 구독 설정에서 직접 관리해야 합니다.</li>
            <li>평생 구독은 일회성 결제이며, 자동 갱신되지 않습니다.</li>
          </ol>
          <h3 className="text-base font-semibold text-gray-900 pt-2">6-4. 환불</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>환불은 Apple App Store 또는 Google Play Store의 환불 정책에 따릅니다.</li>
            <li>서비스 제공자에게 직접 환불을 요청하는 것은 불가합니다.</li>
          </ol>
        </div>
      </Card>
      <Card title="제7조 (이용자의 의무)">
        <p className="text-gray-700 leading-relaxed mb-3">이용자는 다음 행위를 해서는 안 됩니다:</p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>타인의 계정을 도용하거나 타인의 개인정보를 무단으로 수집하는 행위</li>
          <li>서비스를 이용하여 법령에 위반되는 콘텐츠를 저장, 유통하는 행위</li>
          <li>서비스의 정상적 운영을 방해하는 행위(해킹, 역공학, API 남용 등)</li>
          <li>타인의 저작권, 상표권 등 지적재산권을 침해하는 행위</li>
          <li>자동화된 수단으로 대량의 데이터를 수집하거나 서비스에 과부하를 주는 행위</li>
          <li>허위 정보를 유포하거나 타인에게 불쾌감을 주는 콘텐츠를 공유하는 행위</li>
        </ol>
      </Card>
      <Card title="제8조 (콘텐츠에 대한 권리)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>이용자가 서비스에 저장하는 콘텐츠의 지적재산권은 이용자에게 귀속됩니다.</li>
          <li>서비스는 이용자의 콘텐츠를 서비스 제공 목적으로만 사용하며, 동의 없이 외부에 공개하지 않습니다.</li>
          <li>&quot;공유&quot; 기능을 통해 콘텐츠를 공개한 경우, 공유 설정에 따라 제3자에게 접근 가능합니다.</li>
          <li>서비스는 법적 요청, 약관 위반 조사, 서비스 보호를 위해 필요한 경우 콘텐츠에 접근할 수 있습니다.</li>
        </ol>
      </Card>
      <Card title="제9조 (서비스 변경 및 중단)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>서비스는 운영상 필요에 의해 서비스의 전부 또는 일부를 변경할 수 있습니다.</li>
          <li>서비스 변경 시 변경 내용과 적용일을 사전에 공지합니다.</li>
          <li>천재지변, 시스템 장애 등 불가항력적 사유로 서비스가 중단될 수 있습니다.</li>
          <li>서비스를 완전히 종료하는 경우, 최소 30일 전에 공지하며 데이터 내보내기 기간을 제공합니다.</li>
        </ol>
      </Card>
      <Card title="제10조 (외부 서비스 연동)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Google Calendar, Google Tasks, iOS 캘린더, iOS 미리 알림 등 외부 서비스와의 연동 기능을 제공합니다.</li>
          <li>외부 서비스와의 연동은 이용자가 명시적으로 권한을 부여한 경우에만 활성화됩니다.</li>
          <li>외부 서비스의 장애, 정책 변경 등으로 인한 연동 기능의 제한에 대해 서비스는 책임을 지지 않습니다.</li>
          <li>이용자는 언제든지 앱 설정에서 외부 서비스 연결을 해제할 수 있습니다.</li>
        </ol>
      </Card>
      <Card title="제11조 (공유 기능)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>이용자는 태그 또는 개별 콘텐츠에 대한 공유 링크를 생성할 수 있습니다.</li>
          <li>공유 링크를 통해 공개된 콘텐츠에 대한 책임은 해당 콘텐츠를 공유한 이용자에게 있습니다.</li>
          <li>서비스는 법령 위반 콘텐츠가 공유되는 경우, 사전 통지 없이 공유 링크를 비활성화할 수 있습니다.</li>
        </ol>
      </Card>
      <Card title="제12조 (책임의 제한)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>서비스는 이용자의 콘텐츠 내용에 대해 검열하지 않으며, 정확성, 적법성에 대한 책임을 지지 않습니다.</li>
          <li>서비스는 이용자 간 또는 이용자와 제3자 간의 분쟁에 개입하지 않습니다.</li>
          <li>무료 서비스에 대해서는 고의 또는 중과실을 제외하고 손해에 대한 책임을 지지 않습니다.</li>
          <li>유료 서비스의 경우, 책임은 이용자가 해당 기간에 지불한 금액을 한도로 합니다.</li>
        </ol>
      </Card>
      <Card title="제13조 (계정 해지 및 탈퇴)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>이용자는 언제든지 앱 설정을 통해 탈퇴할 수 있습니다.</li>
          <li>탈퇴 시 모든 콘텐츠와 개인정보가 삭제됩니다. 법령에 따라 보존이 필요한 정보는 해당 기간 보관 후 삭제합니다.</li>
          <li>본 약관을 위반한 경우, 서비스는 사전 통지 후 계정을 정지하거나 해지할 수 있습니다.</li>
          <li>유료 구독 중 탈퇴하는 경우, 남은 구독 기간에 대한 환불은 각 스토어의 정책을 따릅니다.</li>
        </ol>
      </Card>
      <Card title="제14조 (분쟁 해결)">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>본 약관과 관련한 분쟁은 대한민국 법률을 준거법으로 합니다.</li>
          <li>서비스 이용과 관련한 분쟁은 서비스 제공자의 소재지를 관할하는 법원을 관할 법원으로 합니다.</li>
        </ol>
      </Card>
    </>
  )
}

function EnTerms() {
  return (
    <>
      <Card title="1. Acceptance of Terms"><p className="text-gray-700 leading-relaxed">By creating an account or using Alllio (&quot;Service&quot;), you agree to these Terms of Service and our Privacy Policy. If you do not agree, do not use the Service.</p></Card>
      <Card title="2. Description of Service">
        <p className="text-gray-700 leading-relaxed mb-3">Alllio is a personal content management service that allows you to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Save and organize notes, links, photos, videos, files, events, and tasks</li>
          <li>Sync with device calendars, Google Calendar, Google Tasks, and iOS Reminders</li>
          <li>Create shared links and collaborate via shared tags</li>
          <li>Access content via mobile app and Chrome extension</li>
        </ul>
      </Card>
      <Card title="3. Account Registration">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>You must sign in using a Google or Apple account.</li>
          <li>You must be at least 14 years of age to use the Service.</li>
          <li>You are responsible for maintaining the security of your account.</li>
        </ol>
      </Card>
      <Card title="4. Free and Paid Plans">
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900">Free Plan</h3>
          <Table headers={['Feature','Limit']} rows={[['Items','Up to 200'],['File size','Up to 15MB per file'],['Storage','Up to 300MB total'],['Ads','Banner ads displayed']]} />
          <h3 className="text-base font-semibold text-gray-900 pt-2">Pro Plan</h3>
          <Table headers={['Feature','Limit']} rows={[['Items','Unlimited'],['File size','Up to 100MB per file'],['Storage','Up to 3GB total'],['Ads','None']]} />
          <h3 className="text-base font-semibold text-gray-900 pt-2">Subscriptions and Payments</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Paid plans are billed through Apple App Store or Google Play Store.</li>
            <li>Subscriptions are available as monthly, annual, or lifetime (one-time) options.</li>
            <li>Monthly and annual subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.</li>
            <li>To cancel auto-renewal, manage your subscription in your Apple or Google account settings.</li>
            <li>Lifetime subscriptions are a one-time purchase and do not auto-renew.</li>
          </ol>
          <h3 className="text-base font-semibold text-gray-900 pt-2">Refunds</h3>
          <p className="text-gray-700 leading-relaxed">Refunds are handled by Apple App Store or Google Play Store according to their respective refund policies. We cannot process refunds directly.</p>
        </div>
      </Card>
      <Card title="5. User Conduct">
        <p className="text-gray-700 leading-relaxed mb-3">You agree not to:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Use another person&apos;s account without authorization</li>
          <li>Store or distribute content that violates applicable laws</li>
          <li>Interfere with the normal operation of the Service (hacking, reverse engineering, API abuse)</li>
          <li>Infringe on intellectual property rights of others</li>
          <li>Use automated means to collect data or overload the Service</li>
          <li>Share content that is harmful, offensive, or misleading via public share links</li>
        </ul>
      </Card>
      <Card title="6. Your Content">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>You retain all intellectual property rights to content you store in the Service.</li>
          <li>We use your content only to provide the Service and do not share it without your consent.</li>
          <li>Content you make public through share links is accessible to others according to your sharing settings.</li>
          <li>We may access content when required by law, to investigate violations, or to protect the Service.</li>
        </ol>
      </Card>
      <Card title="7. Limitation of Liability">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>We do not monitor or censor your content and are not responsible for its accuracy or legality.</li>
          <li>For free services, we are not liable for damages except in cases of willful misconduct or gross negligence.</li>
          <li>For paid services, our liability is limited to the amount you paid for the relevant subscription period.</li>
        </ol>
      </Card>
      <Card title="8. Account Termination">
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>You may delete your account at any time through app settings.</li>
          <li>Upon deletion, all content and personal data will be removed, except information required by law.</li>
          <li>We may suspend or terminate accounts that violate these Terms after notice.</li>
          <li>Refunds for remaining subscription periods follow each store&apos;s refund policy.</li>
        </ol>
      </Card>
      <Card title="9. Governing Law"><p className="text-gray-700 leading-relaxed">These Terms are governed by the laws of the Republic of Korea. Disputes shall be resolved in the courts of the jurisdiction where the Service provider is located.</p></Card>
    </>
  )
}

function JaTerms() {
  return (
    <>
      <Card title="第1条 (サービスの概要)">
        <p className="text-gray-700 leading-relaxed mb-3">Alllioは以下の機能を提供するコンテンツ管理サービスです：</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>メモ、リンク、写真、動画、ファイル、予定、タスクの保存と管理</li>
          <li>デバイスカレンダー、Googleカレンダー、Google Tasks、iOSリマインダーとの同期</li>
          <li>共有リンクの作成とタグベースのコラボレーション</li>
          <li>Chrome拡張機能によるブラウザ連携</li>
        </ul>
      </Card>
      <Card title="第2条 (無料・有料プラン)">
        <div className="space-y-4">
          <Table headers={['項目','無料','Pro']} rows={[['アイテム数','最大200件','無制限'],['ファイルサイズ','15MB/件','100MB/件'],['ストレージ','300MB','3GB'],['広告','あり','なし']]} />
          <p className="text-gray-700 leading-relaxed">有料プランはApp StoreまたはGoogle Play Store経由で決済されます。月額・年額サブスクリプションは期間終了の24時間前までに解約しない限り自動更新されます。</p>
        </div>
      </Card>
      <Card title="第3条 (禁止事項)">
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>他人のアカウントの不正使用</li>
          <li>法令に違反するコンテンツの保存・配布</li>
          <li>サービスの正常な運営を妨げる行為</li>
          <li>知的財産権の侵害</li>
          <li>自動化手段によるデータ大量収集</li>
        </ul>
      </Card>
    </>
  )
}

export default function AlllioTerms({ lang }: { lang: Lang }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <AlllioHeader lang={lang} />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <svg className="h-12 w-12 text-purple-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
          {lang === 'ko' && <h1 className="text-4xl font-bold text-gray-900 mb-4">이용약관</h1>}
          {lang === 'en' && <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>}
          {lang === 'ja' && <h1 className="text-4xl font-bold text-gray-900 mb-4">利用規約</h1>}
          {lang === 'ko' && <p className="text-gray-600">시행일: 2026년 3월 15일 | 최종 수정: 2026년 3월 8일</p>}
          {lang === 'en' && <p className="text-gray-600">Effective: March 15, 2026 | Last Updated: March 8, 2026</p>}
          {lang === 'ja' && <p className="text-gray-600">施行日: 2026年3月15日 | 最終更新: 2026年3月8日</p>}
        </div>

        <div className="space-y-6">
          {lang === 'ko' && <KoTerms />}
          {lang === 'en' && <EnTerms />}
          {lang === 'ja' && <JaTerms />}
        </div>

        <ContactSection lang={lang} />
      </div>

      <AlllioFooter lang={lang} />
    </div>
  )
}
