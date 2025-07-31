'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Shield, Clock, AlertTriangle, Globe, ArrowLeft, FileText, RefreshCw, Menu, Users } from "lucide-react"
import Link from "next/link"

export default function AccountDeletionPage() {
  const emailSubject = encodeURIComponent("[LinKnote] 계정 삭제 요청")
  const emailBody = encodeURIComponent(`안녕하세요,

LinKnote 계정 삭제를 요청합니다.

계정 정보:
- 이메일 주소: [귀하의 계정 이메일 주소를 입력해주세요]
- 삭제 요청 일시: ${new Date().toLocaleString('ko-KR')}

삭제 절차에 대한 안내를 받고 싶습니다.

감사합니다.`)
  
  const emailLink = `mailto:support@linknote.my?subject=${emailSubject}&body=${emailBody}`

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
              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                    <Globe className="h-4 w-4" />
                    <span className="hidden sm:inline ml-2">한국어</span>
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
                    <Link href="/linknote" className="flex items-center w-full">
                      Linknote 홈
                    </Link>
                  </DropdownMenuItem>
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
          href="/linknote" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Linknote로 돌아가기
        </Link>

        {/* Page Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur-sm">
            계정 관리
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            계정 삭제 요청
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LinKnote 계정 및 관련 데이터의 완전한 삭제를 요청하실 수 있습니다.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>중요:</strong> 계정 삭제는 되돌릴 수 없는 작업입니다. 
            30일 내에만 복구 가능하며, 이후에는 모든 데이터가 영구적으로 삭제됩니다.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Deletion Process */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                삭제 절차 안내
              </CardTitle>
              <CardDescription>
                계정 삭제는 안전을 위해 단계적으로 진행됩니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">삭제 요청 접수</h4>
                  <p className="text-sm text-gray-600">이메일로 삭제 요청을 보내주시면 확인 후 처리됩니다.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-orange-600">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">계정 비활성화</h4>
                  <p className="text-sm text-gray-600">즉시 앱 접근이 차단되며, 30일간 복구 가능 상태로 유지됩니다.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-red-600">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">완전 삭제</h4>
                  <p className="text-sm text-gray-600">30일 후 모든 데이터가 완전히 삭제되며 복구 불가능합니다.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Gets Deleted */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-red-600" />
                삭제되는 데이터
              </CardTitle>
              <CardDescription>
                계정 삭제 시 다음 데이터들이 완전히 제거됩니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  저장된 모든 링크 및 노트
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  카테고리 및 태그 설정
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  개인 프로필 정보
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  알림 설정 및 로그
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  사용 기록 및 통계
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  계정과 연결된 모든 데이터
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
              복구 가능 기간
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4">
              <p className="text-blue-900 mb-3">
                <strong>30일 내 복구 가능:</strong> 계정 비활성화 후 30일 이내에는 복구 요청이 가능합니다.
              </p>
              <p className="text-sm text-blue-700">
                복구를 원하시면 같은 이메일 주소(support@linknote.my)로 복구 요청을 보내주세요. 
                30일이 지나면 모든 데이터가 영구적으로 삭제되어 복구가 불가능합니다.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Email Request Section */}
        <Card className="border-0 shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-purple-600" />
              계정 삭제 요청하기
            </CardTitle>
            <CardDescription>
              아래 버튼을 클릭하면 삭제 요청 이메일이 자동으로 작성됩니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-gray-900 mb-2">요청 전 확인사항:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 계정에 등록된 이메일 주소를 정확히 기재해주세요</li>
                <li>• 삭제 이유를 간단히 설명해주시면 서비스 개선에 도움이 됩니다</li>
                <li>• 요청 처리까지 1-2 영업일이 소요될 수 있습니다</li>
              </ul>
            </div>
            
            <a 
              href={emailLink}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md px-8 w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <Mail className="mr-2 h-4 w-4" />
              계정 삭제 요청 이메일 보내기
            </a>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              이메일 클라이언트가 열리지 않는 경우, 
              <a href="mailto:support@linknote.my" className="text-blue-600 hover:underline ml-1">
                support@linknote.my
              </a>로 직접 연락해주세요.
            </p>
          </CardContent>
        </Card>

        {/* Legal Information */}
        <Card className="border-0 shadow-lg mt-8 bg-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900">
              <Shield className="h-5 w-5 mr-2" />
              법적 고지
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                본 계정 삭제 절차는 GDPR(유럽 일반 데이터 보호 규정) 및 개인정보보호법을 준수합니다.
              </p>
              <p>
                계정 삭제와 관련된 자세한 내용은 
                <Link href="/linknote/privacy" className="text-blue-600 hover:underline mx-1">
                  개인정보처리방침
                </Link>
                및
                <Link href="/linknote/terms" className="text-blue-600 hover:underline mx-1">
                  이용약관
                </Link>
                을 참고해주세요.
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
            계정 삭제에 관한 문의사항이 있으시면 언제든 연락해주세요.
          </p>
          <div className="text-sm text-gray-400">
            <a
              href="mailto:support@linknote.my"
              className="hover:text-white transition-colors"
            >
              지원팀: support@linknote.my
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}