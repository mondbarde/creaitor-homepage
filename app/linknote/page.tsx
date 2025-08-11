import { Button } from "@/components/ui/button"
import { AppStoreBadge, GooglePlayBadge } from "@/components/app-badges"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Download, Star, Share2, BookOpen, Link as LinkIcon, Smartphone, Shield, Users, Globe, Menu } from "lucide-react"
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
                  Home
                </Link>
                <a
                  href="mailto:jun.says.maktub@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </nav>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hidden md:flex">
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">한국어</span>
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
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="mailto:jun.says.maktub@gmail.com" className="flex items-center w-full">
                      Contact
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/privacy" className="flex items-center w-full">
                      <Shield className="h-4 w-4 mr-2" />
                      개인정보처리방침
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/terms" className="flex items-center w-full">
                      <Users className="h-4 w-4 mr-2" />
                      이용약관
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/account-deletion" className="flex items-center w-full">
                      계정 삭제 요청
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
            Mobile App
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">Linknote</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            스마트한 링크 관리와 노트 작성이 하나로. 
            <br />
            당신의 디지털 라이프를 더욱 체계적으로 만들어보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/kr/app/linknote/id6747297830" target="_blank" rel="noopener noreferrer" aria-label="App Store">
              <AppStoreBadge className="h-10 w-auto" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=my.linknote.app" target="_blank" rel="noopener noreferrer" aria-label="Google Play">
              <GooglePlayBadge className="h-10 w-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 기능</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              링크 저장부터 노트 작성까지, 하나의 앱으로 모든 것을 관리하세요.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <LinkIcon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>스마트 링크 관리</CardTitle>
                <CardDescription>중요한 링크들을 카테고리별로 체계적으로 관리</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 자동 링크 미리보기</li>
                  <li>• 태그 기반 분류</li>
                  <li>• 즐겨찾기 기능</li>
                  <li>• 검색 및 필터</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>통합 노트 시스템</CardTitle>
                <CardDescription>링크와 함께 저장되는 개인 메모 기능</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 마크다운 지원</li>
                  <li>• 이미지 첨부</li>
                  <li>• 체크리스트 생성</li>
                  <li>• 실시간 동기화</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>간편한 공유</CardTitle>
                <CardDescription>중요한 컨텐츠를 친구들과 쉽게 공유</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 원클릭 공유</li>
                  <li>• 소셜 미디어 연동</li>
                  <li>• 공유 링크 생성</li>
                  <li>• 권한 관리</li>
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
              <div className="text-gray-600">다운로드</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600 flex items-center justify-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                앱 스토어 평점
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5K+</div>
              <div className="text-gray-600">활성 사용자</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">사용 방법</h2>
            <p className="text-gray-600">3단계로 시작하는 스마트한 링크 관리</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">링크 저장</h3>
              <p className="text-gray-600">브라우저나 다른 앱에서 공유 기능을 통해 링크를 간단히 저장하세요.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">노트 작성</h3>
              <p className="text-gray-600">저장한 링크에 개인적인 메모와 생각을 추가해보세요.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">체계적 관리</h3>
              <p className="text-gray-600">태그와 카테고리를 활용해 컨텐츠를 체계적으로 정리하세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">지금 바로 시작해보세요!</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            무료로 다운로드하고 더 스마트한 정보 관리 경험을 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/kr/app/linknote/id6747297830" target="_blank" rel="noopener noreferrer" aria-label="App Store">
              <AppStoreBadge className="h-12 w-auto" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=my.linknote.app" target="_blank" rel="noopener noreferrer" aria-label="Google Play">
              <GooglePlayBadge className="h-12 w-auto" />
            </a>
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
                스마트한 링크 관리와 노트 작성 앱
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">앱 다운로드</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://apps.apple.com/kr/app/linknote/id6747297830" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                    <Smartphone className="h-4 w-4 mr-2" />
                    iOS App Store
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=my.linknote.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Google Play Store
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">지원</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">고객 지원</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">사용자 가이드</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">법적 고지</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/linknote/privacy" className="hover:text-white transition-colors flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="/linknote/terms" className="hover:text-white transition-colors flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link href="/linknote/account-deletion" className="hover:text-white transition-colors">
                    계정 삭제 요청
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>© 2024 크리에이아이터 (Creaitor). All rights reserved.</p>
            </div>
            <div className="text-sm text-gray-400">
              <a
                href="mailto:jun.says.maktub@gmail.com"
                className="hover:text-white transition-colors"
              >
                문의: jun.says.maktub@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}