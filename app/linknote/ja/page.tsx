import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, Star, Share2, BookOpen, Link as LinkIcon, Smartphone, Shield, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function LinknnotePage() {
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
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">日本語</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/linknote" className="flex items-center">
                      <span className="mr-2">🇰🇷</span>
                      한국어
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/en" className="flex items-center">
                      <span className="mr-2">🇺🇸</span>
                      English
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/ja" className="flex items-center">
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

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur-sm">
            モバイルアプリ
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">Linknote</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            スマートなリンク管理とノート作成が一つに。
            <br />
            あなたのデジタルライフをより体系的にしましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              App Storeでダウンロード
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Google Playで入手
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主な機能</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              リンクの保存からノート作成まで、一つのアプリですべてを管理できます。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <LinkIcon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>スマートリンク管理</CardTitle>
                <CardDescription>重要なリンクをカテゴリ別に体系的に管理</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 自動リンクプレビュー</li>
                  <li>• タグベース分類</li>
                  <li>• お気に入り機能</li>
                  <li>• 検索・フィルター</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>統合ノートシステム</CardTitle>
                <CardDescription>リンクと一緒に保存される個人メモ機能</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Markdownサポート</li>
                  <li>• 画像添付</li>
                  <li>• チェックリスト作成</li>
                  <li>• リアルタイム同期</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>簡単シェア</CardTitle>
                <CardDescription>重要なコンテンツを友達と簡単に共有</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• ワンクリック共有</li>
                  <li>• ソーシャルメディア連携</li>
                  <li>• 共有リンク生成</li>
                  <li>• 権限管理</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">ダウンロード</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600 flex items-center justify-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                App Store評価
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5K+</div>
              <div className="text-gray-600">アクティブユーザー</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">使用方法</h2>
            <p className="text-gray-600">3ステップで始めるスマートなリンク管理</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">リンク保存</h3>
              <p className="text-gray-600">ブラウザや他のアプリから共有機能を通じてリンクを簡単に保存。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ノート作成</h3>
              <p className="text-gray-600">保存したリンクに個人的なメモや考えを追加。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">体系的管理</h3>
              <p className="text-gray-600">タグとカテゴリを活用してコンテンツを体系的に整理。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">今すぐ始めましょう！</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            無料でダウンロードして、よりスマートな情報管理体験を始めましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <Download className="mr-2 h-4 w-4" />
              無料ダウンロード
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">L</span>
                </div>
                <span className="font-semibold">Linknote</span>
              </div>
              <p className="text-sm text-gray-400">
                スマートなリンク管理とノート作成アプリ
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">アプリダウンロード</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <Smartphone className="h-4 w-4 mr-2" />
                    iOS App Store
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Google Play Store
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">カスタマーサポート</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">よくある質問</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">ユーザーガイド</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">法的事項</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/linknote/ja/privacy" className="hover:text-white transition-colors flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/linknote/ja/terms" className="hover:text-white transition-colors flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>© 2024 Creaitor. All rights reserved.</p>
            </div>
            <div className="text-sm text-gray-400">
              <a
                href="mailto:jun.says.maktub@gmail.com"
                className="hover:text-white transition-colors"
              >
                お問い合わせ: jun.says.maktub@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}