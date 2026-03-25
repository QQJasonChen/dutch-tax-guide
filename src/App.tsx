import { useState } from 'react'
import { ScenarioSelector } from './components/ScenarioSelector'
import { ScenarioDetail } from './components/ScenarioDetail'
import { TaxStepGuide } from './components/TaxStepGuide'
import { Glossary } from './components/Glossary'
import type { Scenario } from './data/scenarios'

type Tab = 'guide' | 'glossary'

function App() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('guide')
  const [started, setStarted] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#154273] text-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇳🇱</span>
            <div>
              <h1 className="text-2xl font-bold">荷蘭報稅指南</h1>
              <p className="text-blue-200 text-sm">Nederlandse Belastingaangifte Guide</p>
            </div>
          </div>
          <p className="mt-3 text-blue-100 text-sm">
            專為在荷蘭的華人設計 — 每個荷蘭文欄位都有中文翻譯和白話解釋
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-4 py-2.5 rounded-t-lg text-sm font-medium transition-colors ${
                activeTab === 'guide'
                  ? 'bg-gray-50 text-[#154273]'
                  : 'text-blue-200 hover:text-white hover:bg-white/10'
              }`}
            >
              📋 報稅步驟指引
            </button>
            <button
              onClick={() => setActiveTab('glossary')}
              className={`px-4 py-2.5 rounded-t-lg text-sm font-medium transition-colors ${
                activeTab === 'glossary'
                  ? 'bg-gray-50 text-[#154273]'
                  : 'text-blue-200 hover:text-white hover:bg-white/10'
              }`}
            >
              📖 荷中稅務詞彙表
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {activeTab === 'glossary' ? (
          <Glossary />
        ) : (
          <div className="space-y-6">
            <ScenarioSelector
              selectedId={selectedScenario?.id ?? null}
              onSelect={(s) => {
                setSelectedScenario(s)
                setStarted(false)
              }}
            />

            {selectedScenario && (
              <>
                <ScenarioDetail scenario={selectedScenario} />

                {!started ? (
                  <div className="text-center">
                    <button
                      onClick={() => setStarted(true)}
                      className="px-8 py-3 bg-[#e17000] text-white rounded-xl font-bold text-lg hover:bg-[#c96200] transition-colors shadow-lg hover:shadow-xl"
                    >
                      開始報稅指引 →
                    </button>
                  </div>
                ) : (
                  <TaxStepGuide scenario={selectedScenario} />
                )}
              </>
            )}

            {/* Info box */}
            {!selectedScenario && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-800">
                <h3 className="font-bold mb-2">📌 2025 年報稅重要日期</h3>
                <ul className="space-y-1">
                  <li>• <strong>3 月 1 日起</strong>：可以開始申報 2025 年所得稅</li>
                  <li>• <strong>5 月 1 日前</strong>：申報截止日（可申請延期）</li>
                  <li>• <strong>延期至 9 月 1 日</strong>：需要在 5 月 1 日前申請</li>
                  <li>• <strong>登入方式</strong>：使用 DigiD 登入 Mijn Belastingdienst</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-400">
          <p>本指南僅供參考，不構成稅務建議。如有疑問，請諮詢專業稅務顧問。</p>
          <p className="mt-1">Dit is alleen een gids, geen belastingadvies.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
