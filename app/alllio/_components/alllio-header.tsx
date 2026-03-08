'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Globe, Menu, Shield, Users } from 'lucide-react'
import type { Lang } from '../_i18n/translations'
import { getTranslations, getLangPrefix } from '../_i18n/translations'

const langLabels: Record<Lang, string> = { ko: '한국어', en: 'English', ja: '日本語' }

export default function AlllioHeader({ lang }: { lang: Lang }) {
  const t = getTranslations(lang)
  const prefix = getLangPrefix(lang)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={prefix} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-gray-900">Alllio</span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-6">
              <Link href={prefix} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t.nav.home}</Link>
              <Link href={`${prefix}/pricing`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t.nav.pricing}</Link>
              <Link href={`${prefix}/privacy`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t.nav.privacy}</Link>
              <Link href={`${prefix}/terms`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t.nav.terms}</Link>
              <Link href={`${prefix}/account-deletion`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t.nav.accountDeletion}</Link>
            </nav>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hidden md:flex">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{langLabels[lang]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/alllio" className="flex items-center">
                    <span className="mr-2">🇰🇷</span>한국어
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/alllio/en" className="flex items-center">
                    <span className="mr-2">🇺🇸</span>English
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/alllio/ja" className="flex items-center">
                    <span className="mr-2">🇯🇵</span>日本語
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/" className="flex items-center w-full">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={prefix} className="flex items-center w-full">Alllio {t.nav.home}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={`${prefix}/pricing`} className="flex items-center w-full">{t.nav.pricing}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`${prefix}/privacy`} className="flex items-center w-full">
                    <Shield className="h-4 w-4 mr-2" />{t.nav.privacy}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`${prefix}/terms`} className="flex items-center w-full">
                    <Users className="h-4 w-4 mr-2" />{t.nav.terms}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`${prefix}/account-deletion`} className="flex items-center w-full">{t.nav.accountDeletion}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/alllio" className="flex items-center w-full"><span className="mr-2">🇰🇷</span>한국어</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/alllio/en" className="flex items-center w-full"><span className="mr-2">🇺🇸</span>English</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/alllio/ja" className="flex items-center w-full"><span className="mr-2">🇯🇵</span>日本語</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
