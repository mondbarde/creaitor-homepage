import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowLeft, Shield, Eye, Lock, Trash2, Mail, Globe } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
                    <Link href="/linknote/privacy" className="flex items-center">
                      <span className="mr-2">🇰🇷</span>
                      한국어
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/en/privacy" className="flex items-center">
                      <span className="mr-2">🇺🇸</span>
                      English
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/ja/privacy" className="flex items-center">
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
            <Shield className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">プライバシーポリシー</h1>
          <p className="text-gray-600">リンクノート（Linknote）プライバシーポリシー</p>
          <div className="text-sm text-gray-500 mt-2">
            最終更新日：2025年7月21日 | 施行日：2025年7月21日
          </div>
        </div>

        <div className="space-y-8">
          {/* 1. 個人情報の処理目的 */}
          <Card>
            <CardHeader>
              <CardTitle>1. 個人情報の処理目的</CardTitle>
              <CardDescription>リンクノート（以下「サービス」）は以下の目的のために個人情報を処理いたします：</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li><strong>サービス提供：</strong> リンク保存、管理、同期サービスの提供</li>
                <li><strong>AI機能提供：</strong> AIベースのリンク要約および分析サービスの提供</li>
                <li><strong>通知サービス：</strong> リマインダーおよびプッシュ通知サービスの提供</li>
                <li><strong>トレンド分析：</strong> 地域別人気リンクおよびトレンド情報の提供</li>
                <li><strong>アカウント管理：</strong> 会員登録、ログイン、認証、アカウント管理</li>
                <li><strong>サービス改善：</strong> アプリ機能改善および使いやすさの向上</li>
                <li><strong>広告サービス：</strong> パーソナライズ広告の提供（Google AdMob）</li>
                <li><strong>セキュリティと安定性：</strong> サービスセキュリティ強化および不正利用防止</li>
                <li><strong>お問い合わせ・サポート：</strong> カスタマーサポートおよびお問い合わせ対応</li>
                <li><strong>法的義務履行：</strong> 関連法令に基づく義務履行</li>
              </ul>
            </CardContent>
          </Card>

          {/* 2. 収集する個人情報項目 */}
          <Card>
            <CardHeader>
              <CardTitle>2. 収集する個人情報項目</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.1. 直接収集する情報</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-3 py-2 text-left">収集方法</th>
                          <th className="border border-gray-300 px-3 py-2 text-left">収集項目</th>
                          <th className="border border-gray-300 px-3 py-2 text-left">収集目的</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">Google OAuthログイン</td>
                          <td className="border border-gray-300 px-3 py-2">メールアドレス、プロフィール名、プロフィール写真URL</td>
                          <td className="border border-gray-300 px-3 py-2">アカウント作成および認証</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">サービス利用</td>
                          <td className="border border-gray-300 px-3 py-2">保存されたリンクURL、メモ、カテゴリ、タグ</td>
                          <td className="border border-gray-300 px-3 py-2">リンク管理サービス提供</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">共有機能</td>
                          <td className="border border-gray-300 px-3 py-2">他のアプリから共有されたURL</td>
                          <td className="border border-gray-300 px-3 py-2">リンク保存機能提供</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">設定情報</td>
                          <td className="border border-gray-300 px-3 py-2">言語設定、アプリ環境設定、通知設定、リマインダー時間</td>
                          <td className="border border-gray-300 px-3 py-2">パーソナライズサービス提供</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">AI要約リクエスト</td>
                          <td className="border border-gray-300 px-3 py-2">リンク要約リクエスト履歴、生成された要約内容</td>
                          <td className="border border-gray-300 px-3 py-2">AIリンク要約サービス提供</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">タグ情報</td>
                          <td className="border border-gray-300 px-3 py-2">ユーザーが作成したタグ、タグ使用履歴</td>
                          <td className="border border-gray-300 px-3 py-2">リンク分類および検索機能提供</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.2. 自動的に収集する情報</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>デバイス情報：</strong> オペレーティングシステム（iOS/Android）、アプリバージョン、デバイス識別子、デバイス言語設定（ロケール）</li>
                    <li><strong>サービス利用記録：</strong> アクセス時間、利用記録、エラーログ、API呼び出し履歴</li>
                    <li><strong>広告識別子：</strong> AdMob広告提供のための広告ID</li>
                    <li><strong>システムログ：</strong> サービス安定性のための監査ログ、パフォーマンス指標</li>
                    <li><strong>使用パターン：</strong> 機能使用頻度、使用時間帯（匿名化して収集）</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.3. 外部サービスから収集する情報</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>メタデータ：</strong> 保存されたリンクのタイトル、説明、画像（公開Webサイトから抽出）</li>
                    <li><strong>プラットフォーム情報：</strong> リンクが属するプラットフォーム情報（YouTube、Instagramなど）</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. 個人情報の処理および保有期間 */}
          <Card>
            <CardHeader>
              <CardTitle>3. 個人情報の処理および保有期間</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left">情報タイプ</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">保有期間</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">削除時点</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">アカウント情報</td>
                      <td className="border border-gray-300 px-3 py-2">会員退会まで</td>
                      <td className="border border-gray-300 px-3 py-2">退会申請と同時に</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">サービス利用記録</td>
                      <td className="border border-gray-300 px-3 py-2">会員退会まで</td>
                      <td className="border border-gray-300 px-3 py-2">退会後即座に削除</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">保存されたリンクおよびメモ</td>
                      <td className="border border-gray-300 px-3 py-2">会員退会まで</td>
                      <td className="border border-gray-300 px-3 py-2">退会後即座に削除</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">広告関連情報</td>
                      <td className="border border-gray-300 px-3 py-2">Google AdMobポリシーに従う</td>
                      <td className="border border-gray-300 px-3 py-2">サービス終了時</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">法定保管義務情報</td>
                      <td className="border border-gray-300 px-3 py-2">関連法令による保管期間</td>
                      <td className="border border-gray-300 px-3 py-2">法定期間経過後</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 4. 個人情報の第三者提供 */}
          <Card>
            <CardHeader>
              <CardTitle>4. 個人情報の第三者提供</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">リンクノートは原則として、ユーザーの個人情報を第三者に提供いたしません。ただし、以下の場合は例外といたします：</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>ユーザーの事前同意がある場合</li>
                  <li>法令の規定により、または捜査目的で法令に定められた手続きと方法により捜査機関の要求がある場合</li>
                  <li>サービス提供のための業務処理委託の場合（下記5項参照）</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 5. 個人情報処理の委託 */}
          <Card>
            <CardHeader>
              <CardTitle>5. 個人情報処理の委託</CardTitle>
              <CardDescription>リンクノートはサービス提供のため、以下のとおり個人情報処理を委託しています：</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left">委託先</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">委託業務</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">委託する個人情報項目</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">保有・利用期間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Supabase Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">データベースホスティングおよび認証サービス</td>
                        <td className="border border-gray-300 px-3 py-2">ユーザーアカウント情報、保存されたリンクデータ</td>
                        <td className="border border-gray-300 px-3 py-2">会員退会まで</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Google Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">OAuth ログイン認証サービス</td>
                        <td className="border border-gray-300 px-3 py-2">Googleアカウント情報</td>
                        <td className="border border-gray-300 px-3 py-2">サービス利用中</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Google AdMob</td>
                        <td className="border border-gray-300 px-3 py-2">広告提供サービス</td>
                        <td className="border border-gray-300 px-3 py-2">広告識別子、デバイス情報</td>
                        <td className="border border-gray-300 px-3 py-2">広告サービス提供中</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">OpenAI Inc. / Anthropic</td>
                        <td className="border border-gray-300 px-3 py-2">AIリンク要約サービス</td>
                        <td className="border border-gray-300 px-3 py-2">リンクURL、Webページ内容（個人情報除く）</td>
                        <td className="border border-gray-300 px-3 py-2">要約生成時点</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-medium text-sm">
                    <strong>委託先管理：</strong> 委託契約締結時、個人情報保護法に従って個人情報が安全に管理されるよう必要な事項を規定しています。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 6. 情報主体の権利・義務および行使方法 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-purple-600" />
                6. 情報主体の権利・義務および行使方法
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">ユーザーは個人情報主体として、以下の権利を行使できます：</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6.1. 権利の内容</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>個人情報処理現況通知要求</strong></li>
                    <li><strong>個人情報閲覧要求</strong></li>
                    <li><strong>個人情報訂正・削除要求</strong></li>
                    <li><strong>個人情報処理停止要求</strong></li>
                    <li><strong>損害賠償請求</strong></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6.2. 権利行使方法</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>アプリ内設定メニューで直接修正・削除</li>
                    <li>個人情報保護責任者にメールで要請</li>
                    <li>個人情報保護委員会個人情報保護総合支援ポータル（privacy.go.kr）申告センターへの申告</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 7. 個人情報の安全性確保措置 */}
          <Card>
            <CardHeader>
              <CardTitle>7. 個人情報の安全性確保措置</CardTitle>
              <CardDescription>リンクノートは個人情報の安全性確保のため、以下の措置を講じています：</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.1. 管理的措置</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>内部管理計画の策定・施行</li>
                    <li>個人情報処理スタッフの最小化・教育</li>
                    <li>個人情報処理システムのアクセス権限管理</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.2. 技術的措置</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>個人情報処理システムなどのアクセス権限管理</li>
                    <li>アクセス制御システムの設置</li>
                    <li>個人情報の暗号化</li>
                    <li>セキュリティプログラムの設置・更新</li>
                    <li>HTTPS通信暗号化</li>
                    <li>API呼び出し制限（Rate Limiting）による不正アクセス防止</li>
                    <li>リアルタイムセキュリティ監視および異常検知システムの運用</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.3. 物理的措置</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>コンピュータ室、資料保管室などのアクセス統制</li>
                    <li>クラウドサービスセキュリティ管理（Supabaseセキュリティポリシー準拠）</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 8. 個人情報の国外移転 */}
          <Card>
            <CardHeader>
              <CardTitle>8. 個人情報の国外移転</CardTitle>
              <CardDescription>リンクノートはサービス提供のため、以下のとおり個人情報を国外に移転しています：</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left">移転先</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">移転国</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">移転される個人情報項目</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">移転目的</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">保有・利用期間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Supabase Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">アメリカ</td>
                        <td className="border border-gray-300 px-3 py-2">ユーザーアカウント情報、保存されたリンクデータ</td>
                        <td className="border border-gray-300 px-3 py-2">クラウドデータベースサービス提供</td>
                        <td className="border border-gray-300 px-3 py-2">会員退会まで</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Google Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">アメリカ</td>
                        <td className="border border-gray-300 px-3 py-2">Google OAuth認証情報</td>
                        <td className="border border-gray-300 px-3 py-2">認証サービスおよび広告提供</td>
                        <td className="border border-gray-300 px-3 py-2">サービス利用中</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-medium text-sm">
                    <strong>国外移転の安全性：</strong> 移転先企業は国際的なデータ保護認証を保有しており、適切なレベルの個人情報保護措置を講じています。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 9. 個人情報自動収集装置の設置・運営及び拒否 */}
          <Card>
            <CardHeader>
              <CardTitle>9. 個人情報自動収集装置の設置・運営及び拒否</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.1. 広告識別子の使用</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>アプリはパーソナライズ広告提供のため、デバイスの広告識別子を使用します。</li>
                    <li>ユーザーはデバイス設定で広告識別子をリセットしたり、パーソナライズ広告を拒否することができます。</li>
                    <li><strong>Android:</strong> 設定 &gt; Google &gt; 広告 &gt; 広告のカスタマイズをリセット</li>
                    <li><strong>iOS:</strong> 設定 &gt; プライバシーとセキュリティ &gt; Apple広告 &gt; パーソナライズ広告</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.2. アプリ権限管理</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>ネットワークアクセス:</strong> サービス提供のための必須権限</li>
                    <li><strong>外部アプリ連携:</strong> 他のアプリからリンク共有時に使用</li>
                    <li><strong>通知権限:</strong> リマインダーおよび重要通知送信（選択権限）</li>
                    <li>ユーザーはデバイス設定でいつでも権限を変更できます</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.3. AIサービス利用案内</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>リンク要約機能はユーザーが明示的にリクエストした場合のみ作動します</li>
                    <li>AI処理時、個人情報が含まれたリンクは自動的にフィルタリングされます</li>
                    <li>生成された要約はサービス品質向上のため匿名化されて分析される場合があります</li>
                    <li>AI要約機能は設定で非活性化できます</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 10. 児童の個人情報保護 */}
          <Card>
            <CardHeader>
              <CardTitle>10. 児童の個人情報保護</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>リンクノートは満14歳未満の児童の個人情報を収集しません</li>
                <li>満14歳未満の児童が個人情報を提供したことが確認された場合、直ちに該当情報を削除します</li>
                <li>満14歳未満の児童の個人情報収集が確認された場合、support@linknote.my までご連絡ください</li>
              </ul>
            </CardContent>
          </Card>

          {/* 11. プライバシーポリシーの変更 */}
          <Card>
            <CardHeader>
              <CardTitle>11. プライバシーポリシーの変更</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>このプライバシーポリシーは施行日から適用されます</li>
                <li>法令および方針による変更内容の追加、削除および訂正がある場合には、変更事項の施行7日前からアプリ内お知らせを通じて告知します</li>
                <li>ただし、収集する個人情報の項目、利用目的の変更等のようにユーザー権利の重要な変更がある場合には最低30日前に告知します</li>
              </ul>
            </CardContent>
          </Card>

          {/* 12. お問い合わせ先 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-600" />
                お問い合わせ先および個人情報保護責任者
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">リンクノートは個人情報処理に関する業務を総括して責任を負い、個人情報処理に関する情報主体の苦情処理および被害救済のため、以下のとおり個人情報保護責任者を指定しています：</p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">個人情報保護責任者</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>氏名：</strong> 林 俊燮（イム・ジュンソプ）</li>
                    <li><strong>役職：</strong> 開発者</li>
                    <li><strong>連絡先：</strong> support@linknote.my</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 text-sm">情報主体の皆様は、リンクノートのサービスを利用されて発生したすべての個人情報保護関連のお問い合わせ、苦情処理、被害救済などに関する事項を個人情報保護責任者までお問い合わせいただけます。リンクノートは情報主体のお問い合わせに対して遅滞なく回答・処理いたします。</p>
              </div>
            </CardContent>
          </Card>

          {/* 13. 権益侵害救済方法 */}
          <Card>
            <CardHeader>
              <CardTitle>13. 権益侵害救済方法</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">個人情報主体は個人情報侵害による救済を受けるために、個人情報紛争調停委員会、個人情報保護委員会などに紛争解決や相談等を申請することができます：</p>
                
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>個人情報紛争調停委員会：</strong> +82-1833-6972（韓国、国内では市外局番不要） privacy.go.kr</li>
                  <li><strong>個人情報保護総合支援ポータル：</strong> privacy.go.kr</li>
                  <li><strong>大検察庁：</strong> +82-1301（韓国、国内では市外局番不要） www.spo.go.kr</li>
                  <li><strong>警察庁：</strong> +82-182（韓国、国内では市外局番不要） ecrm.cyber.go.kr</li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">お問い合わせ先</h4>
                  <p className="text-gray-700 text-sm mb-2">個人情報処理に関するお問い合わせがございましたら、下記までご連絡ください。</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>メール：</strong> support@linknote.my</li>
                    <li><strong>アプリ名：</strong> リンクノート（Linknote）</li>
                    <li><strong>開発者：</strong> 林 俊燮（イム・ジュンソップ）</li>
                    <li><strong>パッケージ名：</strong> com.creaitor.linknote</li>
                  </ul>
                </div>
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
              <Link href="/linknote/ja/terms">
                利用規約を見る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}