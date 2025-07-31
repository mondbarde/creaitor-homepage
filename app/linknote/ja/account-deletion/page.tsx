'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Shield, Clock, AlertTriangle, Globe, ArrowLeft, FileText, RefreshCw, Menu, Users } from "lucide-react"
import Link from "next/link"

export default function AccountDeletionPage() {
  const handleSendEmail = () => {
    const subject = encodeURIComponent("[LinKnote] アカウント削除リクエスト")
    const body = encodeURIComponent(`こんにちは、

LinKnoteアカウントの削除をリクエストいたします。

アカウント情報:
- メールアドレス: [アカウントのメールアドレスを入力してください]
- 削除リクエスト日時: ${new Date().toLocaleString('ja-JP')}

削除手続きについてのご案内をお願いいたします。

よろしくお願いいたします。`)
    
    window.location.href = `mailto:support@linknote.my?subject=${subject}&body=${body}`
  }

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
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  ホーム
                </Link>
                <a
                  href="mailto:jun.says.maktub@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  お問い合わせ
                </a>
              </nav>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hidden sm:flex">
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">日本語</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/account-deletion" className="flex items-center">
                      <span className="mr-2">🇰🇷</span>
                      한국어
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/en/account-deletion" className="flex items-center">
                      <span className="mr-2">🇺🇸</span>
                      English
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/ja/account-deletion" className="flex items-center">
                      <span className="mr-2">🇯🇵</span>
                      日本語
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Mobile Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/" className="flex items-center w-full">
                      ホーム
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="mailto:jun.says.maktub@gmail.com" className="flex items-center w-full">
                      お問い合わせ
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/ja" className="flex items-center w-full">
                      Linknoteホーム
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/ja/privacy" className="flex items-center w-full">
                      <Shield className="h-4 w-4 mr-2" />
                      プライバシーポリシー
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/ja/terms" className="flex items-center w-full">
                      <Users className="h-4 w-4 mr-2" />
                      利用規約
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/account-deletion" className="flex items-center w-full">
                      <span className="mr-2">🇰🇷</span>
                      한국어
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/en/account-deletion" className="flex items-center w-full">
                      <span className="mr-2">🇺🇸</span>
                      English
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/ja/account-deletion" className="flex items-center w-full">
                      <span className="mr-2">🇯🇵</span>
                      日본語
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/linknote/ja" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Linknoteに戻る
        </Link>

        {/* Page Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur-sm">
            アカウント管理
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            アカウント削除リクエスト
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LinKnoteアカウントおよび関連データの完全な削除をリクエストできます。
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>重要:</strong> アカウント削除は取り消せない操作です。
            30日以内のみ復旧可能で、その後はすべてのデータが永続的に削除されます。
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Deletion Process */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                削除手続きのご案内
              </CardTitle>
              <CardDescription>
                安全のため、アカウント削除は段階的に進められます
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">削除リクエスト受付</h4>
                  <p className="text-sm text-gray-600">メールで削除リクエストをお送りいただき、確認後に処理いたします。</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-orange-600">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">アカウント非活性化</h4>
                  <p className="text-sm text-gray-600">直ちにアプリへのアクセスが遮断され、30日間復旧可能な状態で維持されます。</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-red-600">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">完全削除</h4>
                  <p className="text-sm text-gray-600">30日後にすべてのデータが完全に削除され、復旧不可能になります。</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Gets Deleted */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-red-600" />
                削除されるデータ
              </CardTitle>
              <CardDescription>
                アカウント削除時に以下のデータが完全に削除されます
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  保存されたすべてのリンクとノート
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  カテゴリおよびタグ設定
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  個人プロフィール情報
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  通知設定およびログ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  使用履歴および統計
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  アカウントに関連するすべてのデータ
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Recovery Information */}
        <Card className="border-0 shadow-lg mt-8 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-900">
              <RefreshCw className="h-5 w-5 mr-2" />
              復旧可能期間
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4">
              <p className="text-blue-900 mb-3">
                <strong>30日以内復旧可能:</strong> アカウント非活性化後30日以内であれば復旧リクエストが可能です。
              </p>
              <p className="text-sm text-blue-700">
                復旧をご希望の場合は、同じメールアドレス（support@linknote.my）に復旧リクエストをお送りください。
                30日を過ぎると、すべてのデータが永続的に削除され、復旧が不可能になります。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Email Request Section */}
        <Card className="border-0 shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-purple-600" />
              アカウント削除をリクエストする
            </CardTitle>
            <CardDescription>
              下のボタンをクリックすると、削除リクエストメールが自動的に作成されます
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-gray-900 mb-2">リクエスト前の確認事項:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• アカウントに登録されているメールアドレスを正確に記載してください</li>
                <li>• 削除理由を簡単にご説明いただければ、サービス改善に役立ちます</li>
                <li>• リクエスト処理まで1-2営業日かかる場合があります</li>
              </ul>
            </div>
            
            <Button 
              onClick={handleSendEmail}
              size="lg" 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <Mail className="mr-2 h-4 w-4" />
              アカウント削除リクエストメールを送信
            </Button>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              メールクライアントが開かない場合は、
              <a href="mailto:support@linknote.my" className="text-blue-600 hover:underline ml-1">
                support@linknote.my
              </a>に直接ご連絡ください。
            </p>
          </CardContent>
        </Card>

        {/* Legal Information */}
        <Card className="border-0 shadow-lg mt-8 bg-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900">
              <Shield className="h-5 w-5 mr-2" />
              法的事項
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                本アカウント削除手続きは、GDPR（欧州一般データ保護規則）および個人情報保護法を遵守しています。
              </p>
              <p>
                アカウント削除に関する詳細については、
                <Link href="/linknote/ja/privacy" className="text-blue-600 hover:underline mx-1">
                  プライバシーポリシー
                </Link>
                および
                <Link href="/linknote/ja/terms" className="text-blue-600 hover:underline mx-1">
                  利用規約
                </Link>
                をご参照ください。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="font-semibold">Linknote</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            アカウント削除に関するご質問がございましたら、いつでもお気軽にお問い合わせください。
          </p>
          <div className="text-sm text-gray-400">
            <a
              href="mailto:support@linknote.my"
              className="hover:text-white transition-colors"
            >
              サポートチーム: support@linknote.my
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}