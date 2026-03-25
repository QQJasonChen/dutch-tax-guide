import { scenarios } from '../data/scenarios'
import type { Scenario } from '../data/scenarios'

interface Props {
  selectedId: string | null
  onSelect: (scenario: Scenario) => void
}

export function ScenarioSelector({ selectedId, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">選擇你的報稅情境</h2>
      <p className="text-gray-600">選擇最符合你狀況的情境，我們會提供針對性的指引。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scenarios.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s)}
            className={`text-left p-5 rounded-xl border-2 transition-all hover:shadow-md ${
              selectedId === s.id
                ? 'border-[#007bc7] bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="text-3xl mb-2">{s.emoji}</div>
            <h3 className="font-bold text-gray-800 mb-1">{s.title}</h3>
            <p className="text-sm text-gray-500">{s.description}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
