import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowLeft, FileText, Users, AlertTriangle, CreditCard, Ban, Globe } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Creaitor</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/linknote/ja" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Linknoteに戻る</span>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">日本語</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/terms" className="flex items-center">
                      <span className="mr-2">🇰🇷</span>
                      한국어
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/en/terms" className="flex items-center">
                      <span className="mr-2">🇺🇸</span>
                      English
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/ja/terms" className="flex items-center">
                      <span className="mr-2">🇯🇵</span>
                      日本語
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">利用規約</h1>
          <p className="text-gray-600">リンクノート（Linknote）利用規約</p>
          <div className="text-sm text-gray-500 mt-2">
            最終更新日：2025年7月21日
          </div>
        </div>

        <div className="space-y-8">
          {/* 第1条 目的 */}
          <Card>
            <CardHeader>
              <CardTitle>第1条（目的）</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                この規約は、リンクノート（以下「サービス」）の利用条件および手順、会社とユーザーの権利、義務、責任事項その他必要な事項を規定することを目的とします。
              </p>
            </CardContent>
          </Card>

          {/* 第2条 定義 */}
          <Card>
            <CardHeader>
              <CardTitle>第2条（定義）</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>「サービス」</strong>とは、リンクノートが提供するリンク保存および管理サービスを意味します。</li>
                <li><strong>「ユーザー」</strong>とは、この規約に従ってサービスを利用する会員および非会員を意味します。</li>
                <li><strong>「会員」</strong>とは、サービスに個人情報を提供して会員登録をした者で、サービスの情報を継続的に提供され、サービスを継続的に利用できる者を意味します。</li>
              </ul>
            </CardContent>
          </Card>

          {/* 第3条 規約の効力および変更 */}
          <Card>
            <CardHeader>
              <CardTitle>第3条（規約の効力および変更）</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>この規約は、サービスを利用しようとするすべてのユーザーに対してその効力を発生します。</li>
                <li>会社は必要であると認められる場合、この規約を変更することができ、変更された規約はサービス内のお知らせを通じて告知します。</li>
                <li>変更された規約に同意しないユーザーは、サービス利用を中断し退会することができます。</li>
              </ol>
            </CardContent>
          </Card>

          {/* 第4条 サービスの提供 */}
          <Card>
            <CardHeader>
              <CardTitle>第4条（サービスの提供）</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-2">1. 会社は以下のサービスを提供します：</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Webリンクの保存および管理</li>
                    <li>リンクの分類およびタグ機能</li>
                    <li>リンク検索機能</li>
                    <li>AIベースリンク要約サービス</li>
                    <li>リマインダーおよび通知サービス</li>
                    <li>地域別トレンド情報提供</li>
                    <li>カスタムカテゴリ作成および管理</li>
                    <li>その他会社が定めるサービス</li>
                  </ul>
                </div>
                <ol start={2} className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>サービスは年中無休、1日24時間提供することを原則とします。</li>
                  <li>会社はシステム点検、保守またはその他必要な場合、サービスの全部または一部を一時中断することができます。</li>
                  <li>AI要約サービスは外部AIサービス提供者の可用性により制限される場合があります。</li>
                  <li>会社はサービス品質維持およびセキュリティのため、API呼び出し制限（Rate Limiting）を適用することができます。</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* 第5条 会員登録 */}
          <Card>
            <CardHeader>
              <CardTitle>第5条（会員登録）</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">1. ユーザーは会社が定めた登録フォームに従って会員情報を記入した後、この規約に同意するという意思表示をすることにより会員登録を申請します。</p>
                <div>
                  <p className="text-gray-700 mb-2">2. 会社は第1項のとおり会員として登録することを申請したユーザーのうち、次の各号に該当しない限り会員として登録します：</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>登録申請者がこの規約により以前に会員資格を失ったことがある場合</li>
                    <li>登録内容に虚偽、記載漏れ、誤記がある場合</li>
                    <li>その他会員として登録することが会社の技術上著しく支障があると判断される場合</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 第6条 会員退会および資格喪失 */}
          <Card>
            <CardHeader>
              <CardTitle>第6条（会員退会および資格喪失）</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">1. 会員はいつでも退会を要請することができ、会社は直ちに会員退会を処理します。</p>
                <div>
                  <p className="text-gray-700 mb-2">2. 会員が次の各号の事由に該当する場合、会社は会員資格を制限および停止させることができます：</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>登録申請時に虚偽内容を登録した場合</li>
                    <li>他人のサービス利用を妨害したり、その情報を盗用するなど電子商取引秩序を脅かす場合</li>
                    <li>サービスを利用して法令またはこの規約が禁止したり公序良俗に反する行為をする場合</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 第7条 個人情報保護 */}
          <Card>
            <CardHeader>
              <CardTitle>第7条（個人情報保護）</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>会社はユーザーの個人情報を保護するため個人情報処理方針を策定し、これを遵守します。</li>
                <li>個人情報の収集、利用、提供に関する詳細な内容はプライバシーポリシーをご参照ください。</li>
              </ol>
            </CardContent>
          </Card>

          {/* 第8条 会社の義務 */}
          <Card>
            <CardHeader>
              <CardTitle>第8条（会社の義務）</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>会社は法令とこの規約が禁止したり公序良俗に反する行為をせず、この規約が定めるところに従って継続的で、安定的にサービスを提供するため努力します。</li>
                <li>会社はユーザーが安全にインターネットサービスを利用できるよう、ユーザーの個人情報保護のためのセキュリティシステムを構築します。</li>
              </ol>
            </CardContent>
          </Card>

          {/* 第9条 ユーザーの義務 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-purple-600" />
                第9条（ユーザーの義務）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-gray-700 mb-2">1. ユーザーは次の行為をしてはなりません：</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>申請または変更時の虚偽内容の登録</li>
                  <li>他人の情報盗用</li>
                  <li>会社が掲示した情報の変更</li>
                  <li>会社が定めた情報以外の情報（コンピュータプログラムなど）などの送信または掲示</li>
                  <li>会社その他第三者の著作権など知的財産権に対する侵害</li>
                  <li>会社その他第三者の名誉を損傷させたり業務を妨害する行為</li>
                  <li>わいせつまたは暴力的なメッセージ、画像、音声、その他公序良俗に反する情報をサービスに公開または掲示する行為</li>
                  <li>サービスを利用した自動化された大量要請または悪意的攻撃</li>
                  <li>AI要約機能を通じて違法または有害なコンテンツ生成試行</li>
                  <li>他のユーザーの個人情報が含まれたリンクの無断収集または共有</li>
                  <li>API呼び出し制限を迂回する試行</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 第10条 著作権の帰属および利用制限 */}
          <Card>
            <CardHeader>
              <CardTitle>第10条（著作権の帰属および利用制限）</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>会社が作成した著作物に対する著作権その他知的財産権は会社に帰属します。</li>
                <li>ユーザーはサービスを利用することにより得た情報のうち会社に知的財産権が帰属された情報を会社の事前承諾なしに複製、送信、出版、配布、放送その他の方法により営利目的で利用したり第三者に利用させてはなりません。</li>
                <li>ユーザーが保存したリンクおよび関連メタデータの著作権は原著作者にあり、会社はサービス提供目的でのみこれを利用します。</li>
                <li>AIが生成したリンク要約の著作権は会社に帰属し、ユーザーは個人的用途でのみこれを使用できます。</li>
                <li>ユーザーが作成したタグ、メモ、カテゴリなどのコンテンツに対する権利は該当ユーザーにありますが、会社はサービス運営および改善のためこれを匿名化して使用することができます。</li>
              </ol>
            </CardContent>
          </Card>

          {/* 第11条 損害賠償 */}
          <Card>
            <CardHeader>
              <CardTitle>第11条（損害賠償）</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">会社は無料で提供されるサービスと関連して会員にいかなる損害が発生しても、その損害が会社の故意または重大な過失による場合を除いて、これに対して責任を負いません。</p>
            </CardContent>
          </Card>

          {/* 第12条 免責条項 */}
          <Card>
            <CardHeader>
              <CardTitle>第12条（免責条項）</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>会社は天災地変またはこれに準じる不可抗力によりサービスを提供できない場合にはサービス提供に関する責任が免除されます。</li>
                <li>会社は会員の帰責事由によるサービス利用の障害に対しては責任を負いません。</li>
                <li>会社は会員がサービスを利用して期待する収益を上失したことに対して責任を負わず、その他サービスを通じて得た資料による損害に関して責任を負いません。</li>
                <li>会社はAI要約サービスが生成した内容の正確性、完全性、有用性について保証せず、AIが生成した内容による損害について責任を負いません。</li>
                <li>会社は外部AIサービス提供者のサービス中断、エラーなどによるサービス障害について責任を負いません。</li>
                <li>会社はユーザーが保存したリンクの原本Webサイトが削除されたり変更される場合、これについて責任を負いません。</li>
                <li>会社は通知サービスの遅延、未送信などによる損害について責任を負いません。</li>
              </ol>
            </CardContent>
          </Card>

          {/* 第13条 AIサービス利用 */}
          <Card>
            <CardHeader>
              <CardTitle>第13条（AIサービス利用）</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>AIリンク要約サービスはユーザーの明示的要請がある場合にのみ提供されます。</li>
                <li>AIが生成した要約は参考用であり、原本内容を完全に代替しません。</li>
                <li>会社はAIサービス品質向上のため匿名化されたデータを活用することができます。</li>
                <li>AIサービス利用時に発生する費用は会社が負担しますが、今後有料化される可能性があります。</li>
              </ol>
            </CardContent>
          </Card>

          {/* 第14条 データ処理および分析 */}
          <Card>
            <CardHeader>
              <CardTitle>第14条（データ処理および分析）</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>会社はサービス品質向上のためユーザーのサービス利用パターンを分析することができます。</li>
                <li>地域別トレンド分析のためユーザーの言語設定（ロケール）情報を活用することができます。</li>
                <li>すべての分析データは匿名化されて処理され、個人を識別できない形態でのみ使用されます。</li>
                <li>ユーザーは設定を通じてデータ分析参加を拒否することができます。</li>
              </ol>
            </CardContent>
          </Card>

          {/* 第15条 サービス利用制限 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ban className="h-5 w-5 mr-2 text-purple-600" />
                第15条（サービス利用制限）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-2">1. 会社はサービスの安定的運営のため次の制限を設けることができます：</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>時間当たりAPI呼び出し回数制限</li>
                    <li>1日AI要約生成回数制限</li>
                    <li>保存可能リンク数制限</li>
                    <li>アップロード可能データ容量制限</li>
                  </ul>
                </div>
                <ol start={2} className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>制限を超過する場合、一時的にサービス利用が制限される場合があります。</li>
                  <li>悪意的利用が確認される場合、永続的にサービス利用が制限される場合があります。</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* 第16条 紛争解決 */}
          <Card>
            <CardHeader>
              <CardTitle>第16条（紛争解決）</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>会社はユーザーが提起する正当な意見や苦情を反映し、その被害を補償処理するため被害補償処理機構を設置・運営します。</li>
                <li>会社とユーザー間に発生した電子商取引紛争に関する訴訟は大韓民国の法を適用し、会社の本社所在地を管轄する法院を管轄法院とします。</li>
              </ol>
            </CardContent>
          </Card>

          {/* お問い合わせ先 */}
          <Card>
            <CardHeader>
              <CardTitle>お問い合わせ先</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">利用規約に関するお問い合わせがございましたら下記までご連絡ください。</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>メール:</strong> support@linknote.my</li>
                  <li><strong>アプリ名:</strong> リンクノート（Linknote）</li>
                  <li><strong>開発者:</strong> 林 俊燮（イム・ジュンソプ）</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild variant="outline">
              <Link href="/linknote/ja">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Linknoteに戻る
              </Link>
            </Button>
            <Button asChild>
              <Link href="/linknote/ja/privacy">
                プライバシーポリシーを見る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}