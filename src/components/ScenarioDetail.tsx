import type { Scenario } from '../data/scenarios'

interface Props {
  scenario: Scenario
}

export function ScenarioDetail({ scenario }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-4xl">{scenario.emoji}</span>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{scenario.title}</h2>
          <p className="text-gray-500 text-sm">{scenario.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="font-bold text-green-800 mb-2">✅ 重點摘要</h3>
          <ul className="space-y-1.5">
            {scenario.highlights.map((h, i) => (
              <li key={i} className="text-sm text-green-700 flex gap-2">
                <span className="shrink-0">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-amber-50 rounded-lg p-4">
          <h3 className="font-bold text-amber-800 mb-2">⚠️ 注意事項</h3>
          <ul className="space-y-1.5">
            {scenario.warnings.map((w, i) => (
              <li key={i} className="text-sm text-amber-700 flex gap-2">
                <span className="shrink-0">•</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
