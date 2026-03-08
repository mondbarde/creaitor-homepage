import Link from 'next/link'
import AlllioHeader from './alllio-header'
import AlllioFooter from './alllio-footer'
import type { Lang } from '../_i18n/translations'
import { getTranslations, getLangPrefix } from '../_i18n/translations'

const featureIcons: Record<string, React.ReactNode> = {
  save: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />,
  calendar: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />,
  tag: <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />,
  share: <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />,
  chrome: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />,
  offline: <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />,
}

const featureKeys = ['save', 'calendar', 'tag', 'share', 'chrome', 'offline'] as const

export default function AlllioLanding({ lang }: { lang: Lang }) {
  const t = getTranslations(lang)
  const prefix = getLangPrefix(lang)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <AlllioHeader lang={lang} />

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero */}
        <section className="text-center mb-20">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t.landing.tagline}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">{t.landing.subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z"/></svg>
              {t.landing.downloadIOS}
            </a>
            <a href="#" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.395l2.473 1.431c.547.316.547 1.198 0 1.514l-2.178 1.26-2.534-2.534 2.239-1.671zM5.864 2.658L16.8 8.991l-2.302 2.302-8.634-8.635z"/></svg>
              {t.landing.downloadAndroid}
            </a>
            <a href="#" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 3.301A7.144 7.144 0 0 1 12 4.893c1.5 0 2.881.466 4.025 1.259l3.303-3.303A11.95 11.95 0 0 0 12 0zm9.368 2.632L18.065 5.935A7.103 7.103 0 0 1 19.107 9H24c0-2.467-.746-4.755-2.021-6.658L21.368 2.632zM19.107 15a7.103 7.103 0 0 1-1.042 3.065l3.303 3.303A11.95 11.95 0 0 0 24 15h-4.893zM12 19.107a7.144 7.144 0 0 1-5.415-2.493l-3.953 3.301A11.944 11.944 0 0 0 12 24c2.467 0 4.755-.746 6.658-2.021l-3.303-3.303A7.103 7.103 0 0 1 12 19.107zM5.415 7.802A7.144 7.144 0 0 0 4.893 12c0 1.5.466 2.881 1.259 4.025l-3.52 3.343A11.944 11.944 0 0 1 0 12c0-2.467.746-4.755 2.021-6.658l3.394 2.46zM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5z"/></svg>
              {t.landing.chromeExtension}
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureKeys.map((key) => (
              <div key={key} className="rounded-lg border bg-white shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    {featureIcons[key]}
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.landing.features[key].title}</h3>
                <p className="text-sm text-gray-600">{t.landing.features[key].desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="text-center rounded-lg border bg-white shadow-sm p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.landing.pricingTeaser}</h2>
          <Link
            href={`${prefix}/pricing`}
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium transition-colors"
          >
            {t.landing.viewPricing}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </section>
      </div>

      <AlllioFooter lang={lang} />
    </div>
  )
}
