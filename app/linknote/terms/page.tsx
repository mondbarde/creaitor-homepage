import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ArrowLeft, FileText, Users, AlertTriangle, CreditCard, Ban, Globe, Menu, Shield } from "lucide-react"
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
              <Link href="/linknote" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors hidden md:flex">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Linknote로 돌아가기</span>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hidden sm:flex">
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">한국어</span>
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
              {/* Mobile Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="default" 
                    className="block lg:hidden bg-white border-2 border-gray-400 hover:bg-gray-100 p-2"
                  >
                    <Menu className="h-6 w-6 text-gray-800" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/" className="flex items-center w-full">
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote" className="flex items-center w-full">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Linknote로 돌아가기
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/privacy" className="flex items-center w-full">
                      <Shield className="h-4 w-4 mr-2" />
                      개인정보처리방침
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/account-deletion" className="flex items-center w-full">
                      계정 삭제 요청
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/terms" className="flex items-center w-full">
                      <span className="mr-2">🇰🇷</span>
                      한국어
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/en/terms" className="flex items-center w-full">
                      <span className="mr-2">🇺🇸</span>
                      English
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/ja/terms" className="flex items-center w-full">
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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">이용약관</h1>
          <p className="text-gray-600">링크노트(Linknote) 이용약관</p>
          <div className="text-sm text-gray-500 mt-2">
            최종 업데이트: 2025년 7월 21일
          </div>
        </div>

        <div className="space-y-8">
          {/* 제1조 목적 */}
          <Card>
            <CardHeader>
              <CardTitle>제1조 (목적)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                이 약관은 링크노트(이하 "서비스")의 이용조건 및 절차, 회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </CardContent>
          </Card>

          {/* 제2조 정의 */}
          <Card>
            <CardHeader>
              <CardTitle>제2조 (정의)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>"서비스"</strong>란 링크노트가 제공하는 링크 저장 및 관리 서비스를 의미합니다.</li>
                <li><strong>"이용자"</strong>란 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 의미합니다.</li>
                <li><strong>"회원"</strong>이란 서비스에 개인정보를 제공하여 회원등록을 한 자로서, 서비스의 정보를 지속적으로 제공받으며, 서비스를 계속적으로 이용할 수 있는 자를 의미합니다.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 제3조 약관의 효력 및 변경 */}
          <Card>
            <CardHeader>
              <CardTitle>제3조 (약관의 효력 및 변경)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</li>
                <li>회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지합니다.</li>
                <li>변경된 약관에 동의하지 않는 이용자는 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
              </ol>
            </CardContent>
          </Card>

          {/* 제4조 서비스의 제공 */}
          <Card>
            <CardHeader>
              <CardTitle>제4조 (서비스의 제공)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-2">1. 회사는 다음과 같은 서비스를 제공합니다:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>웹 링크 저장 및 관리</li>
                    <li>링크 분류 및 태그 기능</li>
                    <li>링크 검색 기능</li>
                    <li>AI 기반 링크 요약 서비스</li>
                    <li>리마인더 및 알림 서비스</li>
                    <li>지역별 트렌드 정보 제공</li>
                    <li>커스텀 카테고리 생성 및 관리</li>
                    <li>기타 회사가 정하는 서비스</li>
                  </ul>
                </div>
                <ol start={2} className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</li>
                  <li>회사는 시스템 점검, 보수 또는 기타 필요한 경우 서비스의 전부 또는 일부를 일시 중단할 수 있습니다.</li>
                  <li>AI 요약 서비스는 외부 AI 서비스 제공자의 가용성에 따라 제한될 수 있습니다.</li>
                  <li>회사는 서비스의 품질 유지 및 보안을 위해 API 호출 제한(Rate Limiting)을 적용할 수 있습니다.</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* 제5조 회원가입 */}
          <Card>
            <CardHeader>
              <CardTitle>제5조 (회원가입)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</p>
                <div>
                  <p className="text-gray-700 mb-2">2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                    <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                    <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 제6조 회원탈퇴 및 자격 상실 */}
          <Card>
            <CardHeader>
              <CardTitle>제6조 (회원탈퇴 및 자격 상실)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">1. 회원은 언제든지 탈퇴를 요청할 수 있으며, 회사는 즉시 회원탈퇴를 처리합니다.</p>
                <div>
                  <p className="text-gray-700 mb-2">2. 회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                    <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                    <li>서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 제7조 개인정보보호 */}
          <Card>
            <CardHeader>
              <CardTitle>제7조 (개인정보보호)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다.</li>
                <li>개인정보의 수집, 이용, 제공에 관한 자세한 내용은 개인정보처리방침을 참조하시기 바랍니다.</li>
              </ol>
            </CardContent>
          </Card>

          {/* 제8조 회사의 의무 */}
          <Card>
            <CardHeader>
              <CardTitle>제8조 (회사의 의무)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며, 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하기 위해서 노력합니다.</li>
                <li>회사는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보보호를 위한 보안 시스템을 구축합니다.</li>
              </ol>
            </CardContent>
          </Card>

          {/* 제9조 이용자의 의무 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-purple-600" />
                제9조 (이용자의 의무)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-gray-700 mb-2">1. 이용자는 다음 행위를 하여서는 안 됩니다:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>신청 또는 변경 시 허위 내용의 등록</li>
                  <li>타인의 정보 도용</li>
                  <li>회사가 게시한 정보의 변경</li>
                  <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                  <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                  <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                  <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                  <li>서비스를 이용한 자동화된 대량 요청 또는 악의적인 공격</li>
                  <li>AI 요약 기능을 통해 불법적이거나 유해한 콘텐츠 생성 시도</li>
                  <li>다른 이용자의 개인정보가 포함된 링크의 무단 수집 또는 공유</li>
                  <li>API 호출 제한을 우회하려는 시도</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 제10조 저작권의 귀속 및 이용제한 */}
          <Card>
            <CardHeader>
              <CardTitle>제10조 (저작권의 귀속 및 이용제한)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.</li>
                <li>이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</li>
                <li>이용자가 저장한 링크 및 관련 메타데이터의 저작권은 원저작자에게 있으며, 회사는 서비스 제공 목적으로만 이를 이용합니다.</li>
                <li>AI가 생성한 링크 요약의 저작권은 회사에 귀속되며, 이용자는 개인적 용도로만 이를 사용할 수 있습니다.</li>
                <li>이용자가 생성한 태그, 메모, 카테고리 등의 콘텐츠에 대한 권리는 해당 이용자에게 있으나, 회사는 서비스 운영 및 개선을 위해 이를 익명화하여 사용할 수 있습니다.</li>
              </ol>
            </CardContent>
          </Card>

          {/* 제11조 손해배상 */}
          <Card>
            <CardHeader>
              <CardTitle>제11조 (손해배상)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">회사는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 동 손해가 회사의 고의 또는 중대한 과실에 의한 경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다.</p>
            </CardContent>
          </Card>

          {/* 제12조 면책조항 */}
          <Card>
            <CardHeader>
              <CardTitle>제12조 (면책조항)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
                <li>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
                <li>회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
                <li>회사는 AI 요약 서비스가 생성한 내용의 정확성, 완전성, 유용성에 대해 보증하지 않으며, AI가 생성한 내용으로 인한 손해에 대해 책임을 지지 않습니다.</li>
                <li>회사는 외부 AI 서비스 제공자의 서비스 중단, 오류 등으로 인한 서비스 장애에 대해 책임을 지지 않습니다.</li>
                <li>회사는 이용자가 저장한 링크의 원본 웹사이트가 삭제되거나 변경되는 경우 이에 대해 책임을 지지 않습니다.</li>
                <li>회사는 알림 서비스의 지연, 미전송 등으로 인한 손해에 대해 책임을 지지 않습니다.</li>
              </ol>
            </CardContent>
          </Card>

          {/* 제13조 AI 서비스 이용 */}
          <Card>
            <CardHeader>
              <CardTitle>제13조 (AI 서비스 이용)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>AI 링크 요약 서비스는 이용자의 명시적 요청이 있을 경우에만 제공됩니다.</li>
                <li>AI가 생성한 요약은 참고용이며, 원본 내용을 완전히 대체하지 않습니다.</li>
                <li>회사는 AI 서비스의 품질 향상을 위해 익명화된 데이터를 활용할 수 있습니다.</li>
                <li>AI 서비스 이용 시 발생하는 비용은 회사가 부담하나, 향후 유료화될 수 있습니다.</li>
              </ol>
            </CardContent>
          </Card>

          {/* 제14조 데이터 처리 및 분석 */}
          <Card>
            <CardHeader>
              <CardTitle>제14조 (데이터 처리 및 분석)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>회사는 서비스 품질 향상을 위해 이용자의 서비스 이용 패턴을 분석할 수 있습니다.</li>
                <li>지역별 트렌드 분석을 위해 이용자의 언어 설정(locale) 정보를 활용할 수 있습니다.</li>
                <li>모든 분석 데이터는 익명화되어 처리되며, 개인을 식별할 수 없는 형태로만 사용됩니다.</li>
                <li>이용자는 설정을 통해 데이터 분석 참여를 거부할 수 있습니다.</li>
              </ol>
            </CardContent>
          </Card>

          {/* 제15조 서비스 이용 제한 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ban className="h-5 w-5 mr-2 text-purple-600" />
                제15조 (서비스 이용 제한)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-2">1. 회사는 서비스의 안정적 운영을 위해 다음과 같은 제한을 둘 수 있습니다:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>시간당 API 호출 횟수 제한</li>
                    <li>일일 AI 요약 생성 횟수 제한</li>
                    <li>저장 가능한 링크 수 제한</li>
                    <li>업로드 가능한 데이터 용량 제한</li>
                  </ul>
                </div>
                <ol start={2} className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>제한을 초과하는 경우 일시적으로 서비스 이용이 제한될 수 있습니다.</li>
                  <li>악의적인 이용이 확인되는 경우 영구적으로 서비스 이용이 제한될 수 있습니다.</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* 제16조 분쟁해결 */}
          <Card>
            <CardHeader>
              <CardTitle>제16조 (분쟁해결)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</li>
                <li>회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 대한민국의 법을 적용하며, 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.</li>
              </ol>
            </CardContent>
          </Card>

          {/* 문의처 */}
          <Card>
            <CardHeader>
              <CardTitle>문의처</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">이용약관에 관한 문의사항이 있으시면 아래로 연락해 주시기 바랍니다.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>이메일:</strong> support@linknote.my</li>
                  <li><strong>앱 이름:</strong> 링크노트 (Linknote)</li>
                  <li><strong>개발자:</strong> 임준섭</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild variant="outline">
              <Link href="/linknote">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Linknote로 돌아가기
              </Link>
            </Button>
            <Button asChild>
              <Link href="/linknote/privacy">
                개인정보처리방침 보기
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}