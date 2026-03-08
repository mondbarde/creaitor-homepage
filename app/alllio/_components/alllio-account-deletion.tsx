'use client'

import AlllioHeader from './alllio-header'
import AlllioFooter from './alllio-footer'
import type { Lang } from '../_i18n/translations'
import { getTranslations } from '../_i18n/translations'

function Step({ num, color, title, desc }: { num: number; color: 'purple' | 'red'; title: string; desc: string }) {
  const bgColor = color === 'purple' ? 'bg-purple-100 text-purple-700' : 'bg-red-100 text-red-700'
  return (
    <div className="flex gap-4">
      <div className={`flex-shrink-0 w-8 h-8 ${bgColor} rounded-full flex items-center justify-center font-bold text-sm`}>{num}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{desc}</p>
      </div>
    </div>
  )
}

export default function AlllioAccountDeletion({ lang }: { lang: Lang }) {
  const t = getTranslations(lang)

  const sendDeletionEmail = () => {
    const subject = encodeURIComponent(t.deletion.emailSubject)
    const body = encodeURIComponent(t.deletion.emailBody)
    window.location.href = `mailto:support@alll.io?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <AlllioHeader lang={lang} />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <svg className="h-12 w-12 text-red-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" /></svg>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.deletion.title}</h1>
          <p className="text-gray-600">{t.deletion.subtitle}</p>
        </div>

        {/* Warning */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <div className="flex gap-3">
            <svg className="h-5 w-5 text-red-500 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
            <div>
              <p className="text-red-800 font-semibold text-sm">{t.deletion.warning}</p>
              <p className="text-red-700 text-sm mt-1">{t.deletion.warningDetail}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Process */}
          <div className="rounded-lg border bg-white shadow-sm">
            <div className="p-6"><h2 className="text-2xl font-semibold leading-none tracking-tight">{t.deletion.processTitle}</h2></div>
            <div className="p-6 pt-0">
              <div className="space-y-6">
                <Step num={1} color="purple" title={t.deletion.step1Title} desc={t.deletion.step1Desc} />
                <Step num={2} color="purple" title={t.deletion.step2Title} desc={t.deletion.step2Desc} />
                <Step num={3} color="red" title={t.deletion.step3Title} desc={t.deletion.step3Desc} />
              </div>
            </div>
          </div>

          {/* Data */}
          <div className="rounded-lg border bg-white shadow-sm">
            <div className="p-6"><h2 className="text-2xl font-semibold leading-none tracking-tight">{t.deletion.dataTitle}</h2></div>
            <div className="p-6 pt-0">
              <p className="text-gray-700 leading-relaxed mb-3">{t.deletion.dataIntro}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {t.deletion.dataItems.map((item: string, i: number) => <li key={i}>{item}</li>)}
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4">
                <p className="text-amber-800 text-sm">{t.deletion.subscriptionNote}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg border-2 border-red-200 bg-white shadow-sm">
            <div className="p-8 text-center space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">{t.deletion.ctaTitle}</h2>
              <p className="text-gray-600 text-sm">{t.deletion.ctaDesc}</p>
              <button
                onClick={sendDeletionEmail}
                className="inline-flex items-center justify-center gap-2 h-12 px-8 py-3 rounded-md bg-red-600 hover:bg-red-700 text-sm font-medium text-white transition-colors"
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                {t.deletion.ctaButton}
              </button>
              <p className="text-gray-400 text-xs">support@alll.io</p>
            </div>
          </div>
        </div>

        {/* GDPR Note */}
        <p className="text-center text-gray-500 text-xs mt-8">{t.deletion.gdprNote}</p>
      </div>

      <AlllioFooter lang={lang} />
    </div>
  )
}
