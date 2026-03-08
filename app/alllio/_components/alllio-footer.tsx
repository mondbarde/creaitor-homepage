import Link from 'next/link'
import type { Lang } from '../_i18n/translations'
import { getTranslations, getLangPrefix } from '../_i18n/translations'

export default function AlllioFooter({ lang }: { lang: Lang }) {
  const t = getTranslations(lang)
  const prefix = getLangPrefix(lang)

  return (
    <footer className="border-t bg-white/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <Link href={`${prefix}/privacy`} className="hover:text-gray-700 transition-colors">{t.nav.privacy}</Link>
            <Link href={`${prefix}/terms`} className="hover:text-gray-700 transition-colors">{t.nav.terms}</Link>
            <Link href={`${prefix}/account-deletion`} className="hover:text-gray-700 transition-colors">{t.nav.accountDeletion}</Link>
          </div>
          <p className="text-gray-400 text-xs">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
