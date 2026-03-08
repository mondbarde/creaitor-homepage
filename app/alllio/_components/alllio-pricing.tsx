import AlllioHeader from './alllio-header'
import AlllioFooter from './alllio-footer'
import type { Lang } from '../_i18n/translations'
import { getTranslations } from '../_i18n/translations'

function Row({ label, value, valueColor }: { label: string; value: string; valueColor?: 'green' | 'purple' }) {
  const colorClass = valueColor === 'green' ? 'text-green-600' : valueColor === 'purple' ? 'text-purple-600' : 'text-gray-900'
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className={`font-medium ${colorClass}`}>{value}</span>
    </div>
  )
}

export default function AlllioPricing({ lang }: { lang: Lang }) {
  const t = getTranslations(lang)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <AlllioHeader lang={lang} />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.pricing.title}</h1>
          <p className="text-gray-600">{t.pricing.subtitle}</p>
        </div>

        {/* Plan Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Free Plan */}
          <div className="rounded-lg border bg-white shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{t.pricing.free}</h2>
            <p className="text-3xl font-bold text-gray-900 mb-6">$0</p>
            <div className="space-y-4">
              <Row label={t.pricing.items} value="200" />
              <Row label={t.pricing.fileSize} value="15MB" />
              <Row label={t.pricing.storage} value="300MB" />
              <Row label={t.pricing.ads} value={t.pricing.bannerAds} />
              <hr />
              <Row label={t.pricing.calendarSync} value={t.pricing.included} valueColor="green" />
              <Row label={t.pricing.chromeExt} value={t.pricing.included} valueColor="green" />
              <Row label={t.pricing.sharing} value={t.pricing.included} valueColor="green" />
            </div>
            <button className="w-full mt-8 h-12 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium cursor-default">
              {t.pricing.current}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-lg border-2 border-purple-300 bg-white shadow-md p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {t.pricing.launchPromo}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{t.pricing.pro}</h2>
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">$1.99</span>
              <span className="text-gray-500 text-sm">{t.pricing.perMonth}</span>
            </div>
            <div className="space-y-4">
              <Row label={t.pricing.items} value={t.pricing.unlimited} valueColor="purple" />
              <Row label={t.pricing.fileSize} value="100MB" />
              <Row label={t.pricing.storage} value="3GB" />
              <Row label={t.pricing.ads} value={t.pricing.none} valueColor="green" />
              <hr />
              <Row label={t.pricing.calendarSync} value={t.pricing.included} valueColor="green" />
              <Row label={t.pricing.chromeExt} value={t.pricing.included} valueColor="green" />
              <Row label={t.pricing.sharing} value={t.pricing.included} valueColor="green" />
            </div>
            <button className="w-full mt-8 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium transition-colors">
              {t.pricing.upgrade}
            </button>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="rounded-lg border bg-white shadow-sm p-8 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">{t.pricing.pro} - {t.pricing.upgrade}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-lg border p-4 text-center">
              <p className="text-sm text-gray-500 mb-1">{t.pricing.monthly}</p>
              <p className="text-2xl font-bold text-gray-900">$1.99<span className="text-sm font-normal text-gray-500">{t.pricing.perMonth}</span></p>
            </div>
            <div className="rounded-lg border-2 border-purple-300 p-4 text-center relative">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">37% {t.pricing.off}</div>
              <p className="text-sm text-gray-500 mb-1">{t.pricing.annual}</p>
              <p className="text-2xl font-bold text-gray-900">$14.99<span className="text-sm font-normal text-gray-500">{t.pricing.perYear}</span></p>
            </div>
            <div className="rounded-lg border p-4 text-center relative">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">{t.pricing.launchPromo}</div>
              <p className="text-sm text-gray-500 mb-1">{t.pricing.lifetime}</p>
              <p className="text-2xl font-bold text-gray-900">
                <span className="line-through text-gray-400 text-lg mr-1">$39.99</span>
                $9.99
              </p>
            </div>
          </div>
        </div>

        {/* Billing Note */}
        <p className="text-center text-sm text-gray-500">{t.pricing.billingNote}</p>
      </div>

      <AlllioFooter lang={lang} />
    </div>
  )
}
