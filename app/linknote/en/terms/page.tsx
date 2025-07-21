import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Users, AlertTriangle, CreditCard, Ban } from "lucide-react"
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
            <Link href="/linknote/en" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Linknote</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Linknote Terms of Service</p>
          <div className="text-sm text-gray-500 mt-2">
            Last Updated: July 21, 2025
          </div>
        </div>

        <div className="space-y-8">
          {/* Article 1: Purpose */}
          <Card>
            <CardHeader>
              <CardTitle>Article 1 (Purpose)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                These terms aim to stipulate the conditions and procedures for using Linknote (the "Service"), the rights, obligations, and responsibilities of the company and users, and other necessary matters.
              </p>
            </CardContent>
          </Card>

          {/* Article 2: Definitions */}
          <Card>
            <CardHeader>
              <CardTitle>Article 2 (Definitions)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>"Service"</strong> means the link storage and management service provided by Linknote.</li>
                <li><strong>"User"</strong> means members and non-members who use the service according to these terms.</li>
                <li><strong>"Member"</strong> means a person who has registered as a member by providing personal information to the service, continuously receives service information, and can continuously use the service.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Article 3: Effectiveness and Changes of Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Article 3 (Effectiveness and Changes of Terms)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>These terms become effective for all users who wish to use the service.</li>
                <li>The company may change these terms when deemed necessary, and changed terms will be announced through in-service notices.</li>
                <li>Users who do not agree to the changed terms may stop using the service and withdraw their membership.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Article 4: Provision of Service */}
          <Card>
            <CardHeader>
              <CardTitle>Article 4 (Provision of Service)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-2">1. The company provides the following services:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Web link storage and management</li>
                    <li>Link classification and tagging functions</li>
                    <li>Link search functions</li>
                    <li>AI-based link summarization services</li>
                    <li>Reminder and notification services</li>
                    <li>Regional trend information provision</li>
                    <li>Custom category creation and management</li>
                    <li>Other services determined by the company</li>
                  </ul>
                </div>
                <ol start={2} className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Services are provided 24 hours a day, 365 days a year in principle.</li>
                  <li>The company may temporarily suspend all or part of the service for system maintenance, repair, or other necessary reasons.</li>
                  <li>AI summarization services may be limited depending on the availability of external AI service providers.</li>
                  <li>The company may apply API call limiting (Rate Limiting) to maintain service quality and security.</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Article 5: Member Registration */}
          <Card>
            <CardHeader>
              <CardTitle>Article 5 (Member Registration)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">1. Users apply for membership registration by filling out member information according to the registration form determined by the company and expressing their intention to agree to these terms.</p>
                <div>
                  <p className="text-gray-700 mb-2">2. The company registers as members those who apply for membership registration as in paragraph 1, except in the following cases:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>When the applicant has previously lost membership qualification under these terms</li>
                    <li>When there are false statements, omissions, or errors in the registration content</li>
                    <li>When the company determines that registering as a member would cause significant technical difficulties</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article 6: Member Withdrawal and Loss of Qualification */}
          <Card>
            <CardHeader>
              <CardTitle>Article 6 (Member Withdrawal and Loss of Qualification)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">1. Members may request withdrawal at any time, and the company will immediately process the member withdrawal.</p>
                <div>
                  <p className="text-gray-700 mb-2">2. When a member falls under any of the following reasons, the company may restrict and suspend membership qualification:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Registering false information when applying for membership</li>
                    <li>Interfering with others' service use or stealing their information, threatening e-commerce order</li>
                    <li>Using the service to engage in acts prohibited by laws or these terms or contrary to public order and morals</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Article 7: Personal Information Protection */}
          <Card>
            <CardHeader>
              <CardTitle>Article 7 (Personal Information Protection)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>The company establishes and complies with a personal information processing policy to protect users' personal information.</li>
                <li>For detailed information on the collection, use, and provision of personal information, please refer to the privacy policy.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Article 8: Company's Obligations */}
          <Card>
            <CardHeader>
              <CardTitle>Article 8 (Company's Obligations)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>The company shall not engage in acts prohibited by laws and these terms or contrary to public order and morals, and shall strive to provide services continuously and stably according to these terms.</li>
                <li>The company shall establish a security system for protecting users' personal information so that users can safely use internet services.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Article 9: Users' Obligations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-purple-600" />
                Article 9 (Users' Obligations)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-gray-700 mb-2">1. Users shall not engage in the following acts:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Registering false information when applying or making changes</li>
                  <li>Stealing others' information</li>
                  <li>Changing information posted by the company</li>
                  <li>Transmitting or posting information other than that determined by the company (such as computer programs)</li>
                  <li>Infringing on copyrights and other intellectual property rights of the company and third parties</li>
                  <li>Damaging the reputation of the company and third parties or interfering with their business</li>
                  <li>Publicly posting or publishing obscene or violent messages, images, sounds, and other information contrary to public order and morals in the service</li>
                  <li>Automated mass requests or malicious attacks using the service</li>
                  <li>Attempting to generate illegal or harmful content through AI summarization features</li>
                  <li>Unauthorized collection or sharing of links containing other users' personal information</li>
                  <li>Attempting to circumvent API call limitations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Article 10: Attribution and Use Restrictions of Copyrights */}
          <Card>
            <CardHeader>
              <CardTitle>Article 10 (Attribution and Use Restrictions of Copyrights)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Copyrights and other intellectual property rights for works created by the company belong to the company.</li>
                <li>Users shall not use information with intellectual property rights belonging to the company obtained through service use for commercial purposes by reproduction, transmission, publication, distribution, broadcasting, or other methods, or allow third parties to use it without the company's prior consent.</li>
                <li>Copyrights of links saved by users and related metadata belong to the original copyright holders, and the company uses them only for service provision purposes.</li>
                <li>Copyrights of AI-generated link summaries belong to the company, and users may use them only for personal purposes.</li>
                <li>Rights to content such as tags, memos, and categories created by users belong to the respective users, but the company may use them anonymously for service operation and improvement.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Article 11: Compensation for Damages */}
          <Card>
            <CardHeader>
              <CardTitle>Article 11 (Compensation for Damages)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">The company shall not be liable for any damages incurred by members in relation to the free service, except when such damages are caused by the company's intentional or gross negligence.</p>
            </CardContent>
          </Card>

          {/* Article 12: Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle>Article 12 (Disclaimer)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>The company is exempt from liability for service provision when unable to provide services due to natural disasters or equivalent force majeure.</li>
                <li>The company is not liable for service use disruptions caused by members' fault.</li>
                <li>The company is not liable for members' loss of expected profits from service use and other damages caused by materials obtained through the service.</li>
                <li>The company does not guarantee the accuracy, completeness, or usefulness of content generated by AI summarization services and is not liable for damages caused by AI-generated content.</li>
                <li>The company is not liable for service disruptions caused by external AI service providers' service interruptions, errors, etc.</li>
                <li>The company is not liable when original websites of links saved by users are deleted or changed.</li>
                <li>The company is not liable for damages caused by delays or non-transmission of notification services.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Article 13: AI Service Use */}
          <Card>
            <CardHeader>
              <CardTitle>Article 13 (AI Service Use)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>AI link summarization services are provided only when there is an explicit request from users.</li>
                <li>Summaries generated by AI are for reference and do not completely replace original content.</li>
                <li>The company may utilize anonymized data to improve AI service quality.</li>
                <li>Costs incurred from AI service use are borne by the company but may be charged in the future.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Article 14: Data Processing and Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Article 14 (Data Processing and Analysis)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>The company may analyze users' service usage patterns to improve service quality.</li>
                <li>User language setting (locale) information may be utilized for regional trend analysis.</li>
                <li>All analysis data is processed anonymously and used only in forms that cannot identify individuals.</li>
                <li>Users may refuse to participate in data analysis through settings.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Article 15: Service Use Restrictions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ban className="h-5 w-5 mr-2 text-purple-600" />
                Article 15 (Service Use Restrictions)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-2">1. The company may impose the following restrictions for stable service operation:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Hourly API call frequency limits</li>
                    <li>Daily AI summary generation frequency limits</li>
                    <li>Limits on the number of saveable links</li>
                    <li>Limits on uploadable data capacity</li>
                  </ul>
                </div>
                <ol start={2} className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Service use may be temporarily restricted when limits are exceeded.</li>
                  <li>Service use may be permanently restricted when malicious use is confirmed.</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Article 16: Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle>Article 16 (Dispute Resolution)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>The company establishes and operates a damage compensation processing organization to reflect legitimate opinions or complaints raised by users and compensate for damages.</li>
                <li>Lawsuits regarding e-commerce disputes between the company and users shall apply Korean law, and the court with jurisdiction over the company's headquarters location shall be the competent court.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">If you have any inquiries about the terms of service, please contact us below.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Email:</strong> support@linknote.my</li>
                  <li><strong>App Name:</strong> Linknote</li>
                  <li><strong>Developer:</strong> Jun-seop Lim</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild variant="outline">
              <Link href="/linknote/en">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Linknote
              </Link>
            </Button>
            <Button asChild>
              <Link href="/linknote/en/privacy">
                View Privacy Policy
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}