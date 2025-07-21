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
              <Link href="/linknote/en" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Linknote</span>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">English</span>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Linknote Privacy Policy</p>
          <div className="text-sm text-gray-500 mt-2">
            Last Updated: July 21, 2025 | Effective Date: July 21, 2025
          </div>
        </div>

        <div className="space-y-8">
          {/* 1. Purpose of Personal Information Processing */}
          <Card>
            <CardHeader>
              <CardTitle>1. Purpose of Personal Information Processing</CardTitle>
              <CardDescription>Linknote (the "Service") processes personal information for the following purposes:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Service Provision:</strong> Providing link storage, management, and synchronization services</li>
                <li><strong>AI Features:</strong> Providing AI-based link summarization and analysis services</li>
                <li><strong>Notification Services:</strong> Providing reminder and push notification services</li>
                <li><strong>Trend Analysis:</strong> Providing regional popular links and trend information</li>
                <li><strong>Account Management:</strong> User registration, login, authentication, and account management</li>
                <li><strong>Service Improvement:</strong> App feature improvement and usability enhancement</li>
                <li><strong>Advertising Services:</strong> Providing personalized advertisements (Google AdMob)</li>
                <li><strong>Security and Stability:</strong> Service security enhancement and prevention of unauthorized use</li>
                <li><strong>Customer Support:</strong> Customer support and inquiry handling</li>
                <li><strong>Legal Compliance:</strong> Fulfilling obligations under relevant laws</li>
              </ul>
            </CardContent>
          </Card>

          {/* 2. Personal Information Items Collected */}
          <Card>
            <CardHeader>
              <CardTitle>2. Personal Information Items Collected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.1. Information Directly Collected</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-3 py-2 text-left">Collection Method</th>
                          <th className="border border-gray-300 px-3 py-2 text-left">Collection Items</th>
                          <th className="border border-gray-300 px-3 py-2 text-left">Collection Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">Google OAuth Login</td>
                          <td className="border border-gray-300 px-3 py-2">Email address, profile name, profile photo URL</td>
                          <td className="border border-gray-300 px-3 py-2">Account creation and authentication</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">Service Usage</td>
                          <td className="border border-gray-300 px-3 py-2">Saved link URLs, memos, categories, tags</td>
                          <td className="border border-gray-300 px-3 py-2">Link management service provision</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">Share Feature</td>
                          <td className="border border-gray-300 px-3 py-2">URLs shared from other apps</td>
                          <td className="border border-gray-300 px-3 py-2">Link saving feature provision</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">Settings Information</td>
                          <td className="border border-gray-300 px-3 py-2">Language settings, app preferences, notification settings, reminder times</td>
                          <td className="border border-gray-300 px-3 py-2">Personalized service provision</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">AI Summary Requests</td>
                          <td className="border border-gray-300 px-3 py-2">Link summary request history, generated summary content</td>
                          <td className="border border-gray-300 px-3 py-2">AI link summarization service provision</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2">Tag Information</td>
                          <td className="border border-gray-300 px-3 py-2">User-created tags, tag usage history</td>
                          <td className="border border-gray-300 px-3 py-2">Link classification and search feature provision</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.2. Automatically Collected Information</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Device Information:</strong> Operating system (iOS/Android), app version, device identifier, device language settings (locale)</li>
                    <li><strong>Service Usage Records:</strong> Access time, usage records, error logs, API call history</li>
                    <li><strong>Advertising Identifier:</strong> Advertising ID for AdMob advertising provision</li>
                    <li><strong>System Logs:</strong> Audit logs, performance metrics for service stability</li>
                    <li><strong>Usage Patterns:</strong> Feature usage frequency, usage time (collected anonymously)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.3. Information Collected from External Services</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Metadata:</strong> Title, description, image of saved links (extracted from public websites)</li>
                    <li><strong>Platform Information:</strong> Platform information where links belong (YouTube, Instagram, etc.)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Personal Information Processing and Retention Period */}
          <Card>
            <CardHeader>
              <CardTitle>3. Personal Information Processing and Retention Period</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left">Information Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Retention Period</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Deletion Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Account Information</td>
                      <td className="border border-gray-300 px-3 py-2">Until account withdrawal</td>
                      <td className="border border-gray-300 px-3 py-2">Immediately upon withdrawal request</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Service Usage Records</td>
                      <td className="border border-gray-300 px-3 py-2">Until account withdrawal</td>
                      <td className="border border-gray-300 px-3 py-2">Immediately deleted after withdrawal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Saved Links and Memos</td>
                      <td className="border border-gray-300 px-3 py-2">Until account withdrawal</td>
                      <td className="border border-gray-300 px-3 py-2">Immediately deleted after withdrawal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Advertising Related Information</td>
                      <td className="border border-gray-300 px-3 py-2">According to Google AdMob policy</td>
                      <td className="border border-gray-300 px-3 py-2">Upon service termination</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Legally Required Information</td>
                      <td className="border border-gray-300 px-3 py-2">Retention period according to relevant laws</td>
                      <td className="border border-gray-300 px-3 py-2">After legal period expires</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 4. Provision of Personal Information to Third Parties */}
          <Card>
            <CardHeader>
              <CardTitle>4. Provision of Personal Information to Third Parties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">Linknote does not provide users' personal information to third parties in principle. However, exceptions are made in the following cases:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>When users have given prior consent</li>
                  <li>When required by law or when investigative agencies request it according to procedures and methods stipulated by law for investigation purposes</li>
                  <li>When outsourcing business processing for service provision (refer to section 5 below)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 5. Outsourcing of Personal Information Processing */}
          <Card>
            <CardHeader>
              <CardTitle>5. Outsourcing of Personal Information Processing</CardTitle>
              <CardDescription>Linknote outsources personal information processing as follows for service provision:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left">Outsourcing Company</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Outsourced Tasks</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Outsourced Personal Information Items</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Retention and Use Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Supabase Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">Database hosting and authentication services</td>
                        <td className="border border-gray-300 px-3 py-2">User account information, saved link data</td>
                        <td className="border border-gray-300 px-3 py-2">Until account withdrawal</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Google Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">OAuth login authentication services</td>
                        <td className="border border-gray-300 px-3 py-2">Google account information</td>
                        <td className="border border-gray-300 px-3 py-2">During service use</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Google AdMob</td>
                        <td className="border border-gray-300 px-3 py-2">Advertising services</td>
                        <td className="border border-gray-300 px-3 py-2">Advertising identifier, device information</td>
                        <td className="border border-gray-300 px-3 py-2">During advertising service provision</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">OpenAI Inc. / Anthropic</td>
                        <td className="border border-gray-300 px-3 py-2">AI link summarization services</td>
                        <td className="border border-gray-300 px-3 py-2">Link URLs, webpage content (excluding personal information)</td>
                        <td className="border border-gray-300 px-3 py-2">During summary generation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-medium text-sm">
                    <strong>Outsourcing Company Management:</strong> When concluding outsourcing contracts, we stipulate necessary matters in accordance with the Personal Information Protection Act to ensure that personal information is managed safely.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 6. Rights and Obligations of Data Subjects and How to Exercise Them */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-purple-600" />
                6. Rights and Obligations of Data Subjects and How to Exercise Them
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">Users can exercise the following rights as data subjects:</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6.1. Content of Rights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Request for notification of personal information processing status</strong></li>
                    <li><strong>Request for access to personal information</strong></li>
                    <li><strong>Request for correction and deletion of personal information</strong></li>
                    <li><strong>Request for suspension of personal information processing</strong></li>
                    <li><strong>Request for damage compensation</strong></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6.2. How to Exercise Rights</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Direct modification and deletion in app settings menu</li>
                    <li>Email request to personal information protection officer</li>
                    <li>Report to Personal Information Protection Commission's comprehensive support portal (privacy.go.kr) report center</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 7. Measures to Ensure Safety of Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>7. Measures to Ensure Safety of Personal Information</CardTitle>
              <CardDescription>Linknote takes the following measures to ensure the safety of personal information:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.1. Administrative Measures</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Establishment and implementation of internal management plans</li>
                    <li>Minimization and training of personal information processing staff</li>
                    <li>Management of access rights to personal information processing systems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.2. Technical Measures</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Access rights management for personal information processing systems</li>
                    <li>Installation of access control systems</li>
                    <li>Encryption of personal information</li>
                    <li>Installation and update of security programs</li>
                    <li>HTTPS communication encryption</li>
                    <li>Prevention of unauthorized access through API call limiting (Rate Limiting)</li>
                    <li>Operation of real-time security monitoring and anomaly detection systems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7.3. Physical Measures</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Access control to computer rooms and data storage rooms</li>
                    <li>Cloud service security management (compliance with Supabase security policies)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 8. International Transfer of Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>8. International Transfer of Personal Information</CardTitle>
              <CardDescription>Linknote transfers personal information internationally as follows for service provision:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left">Recipient</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Country of Transfer</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Transferred Personal Information Items</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Transfer Purpose</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Retention and Use Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Supabase Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">United States</td>
                        <td className="border border-gray-300 px-3 py-2">User account information, saved link data</td>
                        <td className="border border-gray-300 px-3 py-2">Cloud database service provision</td>
                        <td className="border border-gray-300 px-3 py-2">Until account withdrawal</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2">Google Inc.</td>
                        <td className="border border-gray-300 px-3 py-2">United States</td>
                        <td className="border border-gray-300 px-3 py-2">Google OAuth authentication information</td>
                        <td className="border border-gray-300 px-3 py-2">Authentication services and advertising provision</td>
                        <td className="border border-gray-300 px-3 py-2">During service use</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-medium text-sm">
                    <strong>International Transfer Safety:</strong> The recipient companies hold international data protection certifications and take appropriate levels of personal information protection measures.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 9. Installation, Operation, and Refusal of Automatic Personal Information Collection Devices */}
          <Card>
            <CardHeader>
              <CardTitle>9. Installation, Operation, and Refusal of Automatic Personal Information Collection Devices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.1. Use of Advertising Identifiers</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>The app uses device advertising identifiers to provide personalized advertisements.</li>
                    <li>Users can reset advertising identifiers or refuse personalized advertisements in device settings.</li>
                    <li><strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Reset advertising ID</li>
                    <li><strong>iOS:</strong> Settings &gt; Privacy & Security &gt; Apple Advertising &gt; Personalized Ads</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.2. App Permission Management</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Network Access:</strong> Essential permission for service provision</li>
                    <li><strong>External App Integration:</strong> Used when sharing links from other apps</li>
                    <li><strong>Notification Permission:</strong> For sending reminders and important notifications (optional permission)</li>
                    <li>Users can change permissions at any time in device settings</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">9.3. AI Service Usage Guide</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Link summarization feature operates only when explicitly requested by users</li>
                    <li>Links containing personal information are automatically filtered during AI processing</li>
                    <li>Generated summaries may be analyzed anonymously for service quality improvement</li>
                    <li>AI summarization feature can be disabled in settings</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 10. Protection of Children's Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>10. Protection of Children's Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Linknote does not collect personal information from children under 14 years of age</li>
                <li>If it is confirmed that a child under 14 has provided personal information, we will immediately delete that information</li>
                <li>If collection of personal information from children under 14 is confirmed, please contact support@linknote.my</li>
              </ul>
            </CardContent>
          </Card>

          {/* 11. Changes to Privacy Policy */}
          <Card>
            <CardHeader>
              <CardTitle>11. Changes to Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>This privacy policy is effective from the implementation date</li>
                <li>If there are additions, deletions, and corrections of changes according to laws and policies, we will notify through in-app notices 7 days before the implementation of changes</li>
                <li>However, in case of important changes to user rights such as changes in personal information collection items or purposes of use, we will notify at least 30 days in advance</li>
              </ul>
            </CardContent>
          </Card>

          {/* 12. Personal Information Protection Officer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-600" />
                12. Personal Information Protection Officer and Department
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">Linknote designates a personal information protection officer as follows to take overall responsibility for personal information processing and to handle complaints and damage relief related to personal information processing:</p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information Protection Officer</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Name:</strong> Jun-seop Lim</li>
                    <li><strong>Position:</strong> Developer</li>
                    <li><strong>Contact:</strong> support@linknote.my</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 text-sm">Data subjects can contact the personal information protection officer for all personal information protection-related inquiries, complaint handling, damage relief, and other matters that arise while using Linknote services. Linknote will respond to and process data subjects' inquiries without delay.</p>
              </div>
            </CardContent>
          </Card>

          {/* 13. Remedy for Rights Violations */}
          <Card>
            <CardHeader>
              <CardTitle>13. Remedy for Rights Violations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">Data subjects can apply for dispute resolution or consultation to the Personal Information Dispute Mediation Committee, Personal Information Protection Commission, etc. to receive relief for personal information violations:</p>
                
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Personal Information Dispute Mediation Committee:</strong> (no area code) 1833-6972 (privacy.go.kr)</li>
                  <li><strong>Personal Information Protection Comprehensive Support Portal:</strong> privacy.go.kr</li>
                  <li><strong>Supreme Prosecutors' Office:</strong> (no area code) 1301 (www.spo.go.kr)</li>
                  <li><strong>National Police Agency:</strong> (no area code) 182 (ecrm.cyber.go.kr)</li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <p className="text-gray-700 text-sm mb-2">If you have any inquiries about personal information processing, please contact us below.</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Email:</strong> support@linknote.my</li>
                    <li><strong>App Name:</strong> Linknote</li>
                    <li><strong>Developer:</strong> Jun-seop Lim</li>
                    <li><strong>Package Name:</strong> com.creaitor.linknote</li>
                  </ul>
                </div>
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
              <Link href="/linknote/en/terms">
                View Terms of Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}