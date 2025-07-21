import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Lock, Trash2, Mail } from "lucide-react"
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
            <Link href="/linknote" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Linknote로 돌아가기</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">개인정보처리방침</h1>
          <p className="text-gray-600">링크노트(Linknote) 개인정보처리방침</p>
          <div className="text-sm text-gray-500 mt-2">
            최종 업데이트: 2025년 7월 21일 | 시행일: 2025년 7월 21일
          </div>
        </div>

        <div className="space-y-8">
          {/* 1. 개인정보의 처리목적 */}
          <Card>
            <CardHeader>
              <CardTitle>1. 개인정보의 처리목적</CardTitle>
              <CardDescription>링크노트(이하 "서비스")는 다음의 목적을 위하여 개인정보를 처리합니다:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li><strong>서비스 제공:</strong> 링크 저장, 관리, 동기화 서비스 제공</li>
                <li><strong>AI 기능 제공:</strong> AI 기반 링크 요약 및 분석 서비스 제공</li>
                <li><strong>알림 서비스:</strong> 리마인더 및 푸시 알림 서비스 제공</li>
                <li><strong>트렌드 분석:</strong> 지역별 인기 링크 및 트렌드 정보 제공</li>
                <li><strong>계정 관리:</strong> 회원가입, 로그인, 인증, 계정 관리</li>
                <li><strong>서비스 개선:</strong> 앱 기능 개선 및 사용성 향상</li>
                <li><strong>광고 서비스:</strong> 개인화된 광고 제공 (Google AdMob)</li>
                <li><strong>보안 및 안정성:</strong> 서비스 보안 강화 및 부정 이용 방지</li>
                <li><strong>문의 및 지원:</strong> 고객 지원 및 문의사항 처리</li>
                <li><strong>법적 의무 이행:</strong> 관련 법령에 따른 의무 이행</li>
              </ul>
            </CardContent>
          </Card>

          {/* 2. 수집하는 개인정보 항목 */}
          <Card>
            <CardHeader>
              <CardTitle>2. 수집하는 개인정보 항목</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.1. 직접 수집하는 정보</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-3 py-2 text-left">수집 방법</th>
                          <th className="border border-gray-300 px-3 py-2 text-left">수집 항목</th>
                          <th className="border border-gray-300 px-3 py-2 text-left">수집 목적</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">Google OAuth 로그인</td>
                          <td className="border border-gray-300 px-3 py-2">이메일 주소, 프로필 이름, 프로필 사진 URL</td>
                          <td className="border border-gray-300 px-3 py-2">계정 생성 및 인증</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">서비스 이용</td>
                          <td className="border border-gray-300 px-3 py-2">저장된 링크 URL, 메모, 카테고리, 태그</td>
                          <td className="border border-gray-300 px-3 py-2">링크 관리 서비스 제공</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">공유 기능</td>
                          <td className="border border-gray-300 px-3 py-2">다른 앱에서 공유된 URL</td>
                          <td className="border border-gray-300 px-3 py-2">링크 저장 기능 제공</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">설정 정보</td>
                          <td className="border border-gray-300 px-3 py-2">언어 설정, 앱 환경설정, 알림 설정, 리마인더 시간</td>
                          <td className="border border-gray-300 px-3 py-2">개인화된 서비스 제공</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">AI 요약 요청</td>
                          <td className="border border-gray-300 px-3 py-2">링크 요약 요청 내역, 생성된 요약 내용</td>
                          <td className="border border-gray-300 px-3 py-2">AI 링크 요약 서비스 제공</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">태그 정보</td>
                          <td className="border border-gray-300 px-3 py-2">사용자가 생성한 태그, 태그 사용 내역</td>
                          <td className="border border-gray-300 px-3 py-2">링크 분류 및 검색 기능 제공</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.2. 자동으로 수집하는 정보</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>기기 정보:</strong> 운영체제(iOS/Android), 앱 버전, 기기 식별자, 기기 언어 설정(locale)</li>
                    <li><strong>서비스 이용 기록:</strong> 접속 시간, 이용 기록, 오류 로그, API 호출 내역</li>
                    <li><strong>광고 식별자:</strong> AdMob 광고 제공을 위한 광고 ID</li>
                    <li><strong>시스템 로그:</strong> 서비스 안정성을 위한 감사 로그, 성능 지표</li>
                    <li><strong>사용 패턴:</strong> 기능 사용 빈도, 사용 시간대 (익명화되어 수집)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.3. 외부 서비스에서 수집하는 정보</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>메타데이터:</strong> 저장된 링크의 제목, 설명, 이미지 (공개 웹사이트에서 추출)</li>
                    <li><strong>플랫폼 정보:</strong> 링크가 속한 플랫폼 정보 (YouTube, Instagram 등)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. 개인정보의 처리 및 보유기간 */}
          <Card>
            <CardHeader>
              <CardTitle>3. 개인정보의 처리 및 보유기간</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left">정보 유형</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">보유기간</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">삭제 시점</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">계정 정보</td>
                      <td className="border border-gray-300 px-3 py-2">회원탈퇴 시까지</td>
                      <td className="border border-gray-300 px-3 py-2">회원탈퇴 요청 즉시</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">서비스 이용 기록</td>
                      <td className="border border-gray-300 px-3 py-2">회원탈퇴 시까지</td>
                      <td className="border border-gray-300 px-3 py-2">회원탈퇴 후 즉시 삭제</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">저장된 링크 및 메모</td>
                      <td className="border border-gray-300 px-3 py-2">회원탈퇴 시까지</td>
                      <td className="border border-gray-300 px-3 py-2">회원탈퇴 후 즉시 삭제</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">광고 관련 정보</td>
                      <td className="border border-gray-300 px-3 py-2">Google AdMob 정책에 따름</td>
                      <td className="border border-gray-300 px-3 py-2">서비스 종료 시</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">법정 보관 의무 정보</td>
                      <td className="border border-gray-300 px-3 py-2">관련 법령에 따른 보관기간</td>
                      <td className="border border-gray-300 px-3 py-2">법정 기간 경과 후</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 4. 개인정보의 제3자 제공 */}
          <Card>
            <CardHeader>
              <CardTitle>4. 개인정보의 제3자 제공</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">링크노트는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>사용자의 사전 동의가 있는 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  <li>서비스 제공을 위한 업무처리 위탁의 경우 (아래 5항 참조)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 5. 개인정보 처리의 위탁 */}
          <Card>
            <CardHeader>
              <CardTitle>5. 개인정보 처리의 위탁</CardTitle>
              <CardDescription>링크노트는 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left">위탁업체</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">위탁업무</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">위탁하는 개인정보 항목</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">보유 및 이용기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Supabase Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">데이터베이스 호스팅 및 인증 서비스</td>
                        <td className="border border-gray-300 px-3 py-2">사용자 계정 정보, 저장된 링크 데이터</td>
                        <td className="border border-gray-300 px-3 py-2">회원탈퇴 시까지</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Google Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">OAuth 로그인 인증 서비스</td>
                        <td className="border border-gray-300 px-3 py-2">Google 계정 정보</td>
                        <td className="border border-gray-300 px-3 py-2">서비스 이용 중</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Google AdMob</td>
                        <td className="border border-gray-300 px-3 py-2">광고 제공 서비스</td>
                        <td className="border border-gray-300 px-3 py-2">광고 식별자, 기기 정보</td>
                        <td className="border border-gray-300 px-3 py-2">광고 서비스 제공 중</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">OpenAI Inc. / Anthropic</td>
                        <td className="border border-gray-300 px-3 py-2">AI 링크 요약 서비스</td>
                        <td className="border border-gray-300 px-3 py-2">링크 URL, 웹페이지 내용 (개인정보 제외)</td>
                        <td className="border border-gray-300 px-3 py-2">요약 생성 시점</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-medium text-sm">
                    <strong>위탁업체 관리:</strong> 위탁계약 체결 시 개인정보보호법에 따라 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 6. 정보주체의 권리·의무 및 행사방법 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-purple-600" />
                6. 정보주체의 권리·의무 및 행사방법
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">사용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6.1. 권리의 내용</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>개인정보 처리현황 통지 요구</strong></li>
                    <li><strong>개인정보 열람 요구</strong></li>
                    <li><strong>개인정보 정정·삭제 요구</strong></li>
                    <li><strong>개인정보 처리정지 요구</strong></li>
                    <li><strong>손해배상 청구</strong></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6.2. 권리 행사 방법</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>앱 내 설정 메뉴에서 직접 수정 및 삭제</li>
                    <li>개인정보보호책임자에게 이메일로 요청</li>
                    <li>개인정보보호위원회 개인정보보호 종합지원 포털(privacy.go.kr) 신고센터 신고</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 7. 개인정보의 안전성 확보조치 */}
          <Card>
            <CardHeader>
              <CardTitle>7. 개인정보의 안전성 확보조치</CardTitle>
              <CardDescription>링크노트는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.1. 관리적 조치</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>내부관리계획 수립 및 시행</li>
                    <li>개인정보 처리 직원의 최소화 및 교육</li>
                    <li>개인정보 처리시스템 접근권한 관리</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.2. 기술적 조치</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>개인정보처리시스템 등의 접근권한 관리</li>
                    <li>접근통제시스템 설치</li>
                    <li>개인정보의 암호화</li>
                    <li>보안프로그램 설치 및 갱신</li>
                    <li>HTTPS 통신 암호화</li>
                    <li>API 호출 제한(Rate Limiting)을 통한 무단 접근 방지</li>
                    <li>실시간 보안 모니터링 및 이상 탐지 시스템 운영</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.3. 물리적 조치</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>전산실, 자료보관실 등의 접근통제</li>
                    <li>클라우드 서비스 보안 관리 (Supabase 보안 정책 준수)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 8. 개인정보의 국외이전 */}
          <Card>
            <CardHeader>
              <CardTitle>8. 개인정보의 국외이전</CardTitle>
              <CardDescription>링크노트는 서비스 제공을 위해 다음과 같이 개인정보를 국외로 이전하고 있습니다:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left">이전받는 자</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">이전되는 국가</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">이전되는 개인정보 항목</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">이전목적</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">보유·이용기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Supabase Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">미국</td>
                        <td className="border border-gray-300 px-3 py-2">사용자 계정 정보, 저장된 링크 데이터</td>
                        <td className="border border-gray-300 px-3 py-2">클라우드 데이터베이스 서비스 제공</td>
                        <td className="border border-gray-300 px-3 py-2">회원탈퇴 시까지</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Google Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">미국</td>
                        <td className="border border-gray-300 px-3 py-2">Google OAuth 인증 정보</td>
                        <td className="border border-gray-300 px-3 py-2">인증 서비스 및 광고 제공</td>
                        <td className="border border-gray-300 px-3 py-2">서비스 이용 중</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-medium text-sm">
                    <strong>국외이전 안전성:</strong> 이전받는 업체들은 국제적인 데이터 보호 인증을 보유하고 있으며, 적절한 수준의 개인정보 보호 조치를 취하고 있습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 9. 개인정보 자동 수집 장치의 설치·운영 및 거부 */}
          <Card>
            <CardHeader>
              <CardTitle>9. 개인정보 자동 수집 장치의 설치·운영 및 거부</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.1. 광고 식별자 사용</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>앱은 개인화된 광고 제공을 위해 기기의 광고 식별자를 사용합니다.</li>
                    <li>사용자는 기기 설정에서 광고 식별자를 재설정하거나 개인화된 광고를 거부할 수 있습니다.</li>
                    <li><strong>Android:</strong> 설정 &gt; Google &gt; 광고 &gt; 광고 맞춤설정 재설정</li>
                    <li><strong>iOS:</strong> 설정 &gt; 개인정보 보호 및 보안 &gt; Apple 광고 &gt; 개인화된 광고</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.2. 앱 권한 관리</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>네트워크 접근:</strong> 서비스 제공을 위한 필수 권한</li>
                    <li><strong>외부 앱 연동:</strong> 다른 앱에서 링크 공유 시 사용</li>
                    <li><strong>알림 권한:</strong> 리마인더 및 중요 알림 전송 (선택 권한)</li>
                    <li>사용자는 기기 설정에서 언제든지 권한을 변경할 수 있습니다</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.3. AI 서비스 이용 안내</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>링크 요약 기능은 사용자가 명시적으로 요청한 경우에만 작동합니다</li>
                    <li>AI 처리 시 개인정보가 포함된 링크는 자동으로 필터링됩니다</li>
                    <li>생성된 요약은 서비스 품질 향상을 위해 익명화되어 분석될 수 있습니다</li>
                    <li>AI 요약 기능은 설정에서 비활성화할 수 있습니다</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 10. 아동의 개인정보 보호 */}
          <Card>
            <CardHeader>
              <CardTitle>10. 아동의 개인정보 보호</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>링크노트는 만 14세 미만 아동의 개인정보를 수집하지 않습니다</li>
                <li>만 14세 미만 아동이 개인정보를 제공한 것으로 확인될 경우, 즉시 해당 정보를 삭제합니다</li>
                <li>만 14세 미만 아동의 개인정보 수집이 확인된 경우 support@linknote.my로 연락바랍니다</li>
              </ul>
            </CardContent>
          </Card>

          {/* 11. 개인정보처리방침의 변경 */}
          <Card>
            <CardHeader>
              <CardTitle>11. 개인정보처리방침의 변경</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>이 개인정보처리방침은 시행일로부터 적용됩니다</li>
                <li>법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 앱 내 공지사항을 통하여 고지합니다</li>
                <li>단, 수집하는 개인정보의 항목, 이용목적의 변경 등과 같이 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다</li>
              </ul>
            </CardContent>
          </Card>

          {/* 12. 개인정보보호책임자 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-600" />
                12. 개인정보보호책임자 및 담당부서
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">링크노트는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다:</p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">개인정보보호책임자</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>성명:</strong> 임준섭</li>
                    <li><strong>직책:</strong> 개발자</li>
                    <li><strong>연락처:</strong> support@linknote.my</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 text-sm">정보주체께서는 링크노트의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보보호책임자에게 문의하실 수 있습니다. 링크노트는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.</p>
              </div>
            </CardContent>
          </Card>

          {/* 13. 권익침해 구제방법 */}
          <Card>
            <CardHeader>
              <CardTitle>13. 권익침해 구제방법</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">개인정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 개인정보보호위원회 등에 분쟁해결이나 상담 등을 신청할 수 있습니다:</p>
                
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>개인정보분쟁조정위원회:</strong> (국번없이) 1833-6972 (privacy.go.kr)</li>
                  <li><strong>개인정보보호 종합지원 포털:</strong> privacy.go.kr</li>
                  <li><strong>대검찰청:</strong> (국번없이) 1301 (www.spo.go.kr)</li>
                  <li><strong>경찰청:</strong> (국번없이) 182 (ecrm.cyber.go.kr)</li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">문의처</h4>
                  <p className="text-gray-700 text-sm mb-2">개인정보 처리에 관한 문의사항이 있으시면 아래로 연락해 주시기 바랍니다.</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>이메일:</strong> support@linknote.my</li>
                    <li><strong>앱 이름:</strong> 링크노트 (Linknote)</li>
                    <li><strong>개발자:</strong> 임준섭</li>
                    <li><strong>패키지명:</strong> com.creaitor.linknote</li>
                  </ul>
                </div>
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
              <Link href="/linknote/terms">
                이용약관 보기
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}