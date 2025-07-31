import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Mail, Phone, MapPin, Code, Smartphone, Palette, Users, Menu } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Creaitor</span>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden lg:flex space-x-6">
                <a
                  href="/linknote"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Linknote
                </a>
                <a
                  href="mailto:jun.says.maktub@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </nav>
              {/* Mobile Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <a href="/linknote" className="flex items-center w-full">
                      Linknote
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="mailto:jun.says.maktub@gmail.com" className="flex items-center w-full">
                      Contact
                    </a>
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-500"></div>

          {/* Abstract lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M0,100 Q150,50 300,80 T600,60" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
            <path d="M100,200 Q250,150 400,180 T700,160" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur-sm">
            Web & App Development Studio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            크리에이아이터
            <br />
            <span className="text-blue-600">Creaitor</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            웹과 앱 서비스 개발 및 디자인을 전문으로 하는 크리에이티브 스튜디오입니다.
            <br />
            Creative solutions for web and mobile applications.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="mailto:jun.says.maktub@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              전문적인 웹과 모바일 솔루션을 통해 고객의 비즈니스 성장을 지원합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>반응형 웹사이트 및 웹 애플리케이션 개발</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• React, Next.js 기반 개발</li>
                  <li>• 반응형 디자인</li>
                  <li>• SEO 최적화</li>
                  <li>• 성능 최적화</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Mobile App Development</CardTitle>
                <CardDescription>iOS/Android 모바일 애플리케이션 개발</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• React Native 개발</li>
                  <li>• Flutter 개발</li>
                  <li>• 크로스 플랫폼 지원</li>
                  <li>• 네이티브 성능</li>
                  <li>• 앱스토어 배포</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>사용자 중심의 인터페이스 디자인</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 사용자 경험 설계</li>
                  <li>• 프로토타이핑</li>
                  <li>• 브랜드 아이덴티티</li>
                  <li>• 디자인 시스템</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Creaitor</h2>
              <p className="text-gray-600">
                크리에이아이터는 혁신적인 디지털 솔루션을 제공하는 전문 개발 스튜디오입니다.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  최신 기술과 창의적인 아이디어를 결합하여 고객의 비즈니스 목표를 달성할 수 있는 맞춤형 디지털 솔루션을
                  제공합니다. 사용자 경험을 최우선으로 하는 제품 개발을 통해 고객의 성공을 함께 만들어갑니다.
                </p>
                <div className="flex items-center space-x-4">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Customer-Centric Approach</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">회사명:</span>
                    <span className="ml-2 text-gray-600">크리에이아이터 (Creaitor)</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">대표자:</span>
                    <span className="ml-2 text-gray-600">임준섭 (Lim Junseop)</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">사업자등록번호:</span>
                    <span className="ml-2 text-gray-600">891-65-00123</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">업종:</span>
                    <span className="ml-2 text-gray-600">웹/앱 서비스 개발 및 디자인</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-8">프로젝트 문의나 협업 제안이 있으시면 언제든 연락주세요.</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <Mail className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600 text-sm">jun.says.maktub@gmail.com</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <Phone className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-600 text-sm">+82-10-4396-4595</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <MapPin className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600 text-sm">Seoul, South Korea</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="font-semibold">Creaitor</span>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>© 2024 크리에이아이터 (Creaitor). All rights reserved.</p>
              <p className="mt-1">사업자등록번호: 891-65-00123 | 대표: 임준섭</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
