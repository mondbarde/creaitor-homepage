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
    const subject = encodeURIComponent("[LinKnote] Account Deletion Request")
    const body = encodeURIComponent(`Hello,

I would like to request the deletion of my LinKnote account.

Account Information:
- Email Address: [Please enter your account email address]
- Deletion Request Date: ${new Date().toLocaleString('en-US')}

I would like to receive guidance on the deletion process.

Thank you.`)
    
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
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hidden sm:flex">
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">English</span>
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="md:hidden border-gray-300 hover:bg-gray-50"
                  >
                    <Menu className="h-5 w-5 text-gray-700" />
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
                    <Link href="/linknote/en" className="flex items-center w-full">
                      Linknote Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/en/privacy" className="flex items-center w-full">
                      <Shield className="h-4 w-4 mr-2" />
                      Privacy Policy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/linknote/en/terms" className="flex items-center w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Terms of Service
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
                      日本語
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
          href="/linknote/en" 
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Linknote
        </Link>

        {/* Page Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 bg-white/80 backdrop-blur-sm">
            Account Management
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Account Deletion Request
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You can request the complete deletion of your LinKnote account and related data.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Important:</strong> Account deletion is irreversible. 
            Recovery is only possible within 30 days, after which all data will be permanently deleted.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Deletion Process */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Deletion Process
              </CardTitle>
              <CardDescription>
                Account deletion proceeds in stages for security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Request Received</h4>
                  <p className="text-sm text-gray-600">Send deletion request via email and we will process it after verification.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-orange-600">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Account Deactivation</h4>
                  <p className="text-sm text-gray-600">App access is immediately blocked, and account remains recoverable for 30 days.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs font-bold text-red-600">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Permanent Deletion</h4>
                  <p className="text-sm text-gray-600">After 30 days, all data is permanently deleted and cannot be recovered.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Gets Deleted */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-red-600" />
                Data to be Deleted
              </CardTitle>
              <CardDescription>
                The following data will be completely removed upon account deletion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  All saved links and notes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  Categories and tag settings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  Personal profile information
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  Notification settings and logs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  Usage history and statistics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  All data associated with the account
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
              Recovery Period
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4">
              <p className="text-blue-900 mb-3">
                <strong>Recovery possible within 30 days:</strong> Account recovery requests are possible within 30 days of deactivation.
              </p>
              <p className="text-sm text-blue-700">
                If you wish to recover your account, send a recovery request to the same email address (support@linknote.my). 
                After 30 days, all data will be permanently deleted and recovery will be impossible.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Email Request Section */}
        <Card className="border-0 shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-purple-600" />
              Request Account Deletion
            </CardTitle>
            <CardDescription>
              Click the button below to automatically compose a deletion request email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Before requesting, please check:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Please provide the exact email address registered to your account</li>
                <li>• A brief explanation of the deletion reason would help us improve our service</li>
                <li>• Request processing may take 1-2 business days</li>
              </ul>
            </div>
            
            <Button 
              onClick={handleSendEmail}
              size="lg" 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Account Deletion Request Email
            </Button>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              If your email client doesn't open, please contact us directly at
              <a href="mailto:support@linknote.my" className="text-blue-600 hover:underline ml-1">
                support@linknote.my
              </a>.
            </p>
          </CardContent>
        </Card>

        {/* Legal Information */}
        <Card className="border-0 shadow-lg mt-8 bg-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900">
              <Shield className="h-5 w-5 mr-2" />
              Legal Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                This account deletion process complies with GDPR (General Data Protection Regulation) and personal data protection laws.
              </p>
              <p>
                For detailed information about account deletion, please refer to our
                <Link href="/linknote/en/privacy" className="text-blue-600 hover:underline mx-1">
                  Privacy Policy
                </Link>
                and
                <Link href="/linknote/en/terms" className="text-blue-600 hover:underline mx-1">
                  Terms of Service
                </Link>.
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
            If you have any questions about account deletion, please contact us anytime.
          </p>
          <div className="text-sm text-gray-400">
            <a
              href="mailto:support@linknote.my"
              className="hover:text-white transition-colors"
            >
              Support Team: support@linknote.my
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}