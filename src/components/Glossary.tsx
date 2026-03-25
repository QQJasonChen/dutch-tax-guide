import { useState } from 'react'
import { glossary } from '../data/glossary'
import type { GlossaryEntry } from '../data/glossary'

const categoryLabels: Record<string, string> = {
  general: '一般術語',
  box1: 'Box 1 相關',
  box3: 'Box 3 相關',
  deduction: '扣除與減免',
  document: '文件名稱',
  housing: '房屋相關',
}

export function Glossary() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [...new Set(glossary.map((g) => g.category))]

  const filtered = glossary.filter((g) => {
    const matchSearch =
      !search ||
      g.dutch.toLowerCase().includes(search.toLowerCase()) ||
      g.chinese.includes(search) ||
      g.explanation.includes(search)
    const matchCategory = !selectedCategory || g.category === selectedCategory
    return matchSearch && matchCategory
  })

  const grouped = filtered.reduce<Record<string, GlossaryEntry[]>>((acc, g) => {
    if (!acc[g.category]) acc[g.category] = []
    acc[g.category].push(g)
    return acc
  }, {})

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">荷蘭文稅務詞彙表</h2>
      <p className="text-gray-600">不認識的荷蘭文？在這裡搜尋。</p>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="搜尋荷蘭文或中文..."
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#007bc7] focus:ring-1 focus:ring-[#007bc7] text-base"
      />

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            !selectedCategory
              ? 'bg-[#154273] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          全部
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-[#154273] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-6">
        {Object.entries(grouped).map(([category, entries]) => (
          <div key={category}>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
              {categoryLabels[category] || category}
            </h3>
            <div className="space-y-1">
              {entries.map((entry) => (
                <div
                  key={entry.dutch}
                  className="bg-white rounded-lg border border-gray-200 p-3 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-[#154273]">{entry.dutch}</span>
                    <span className="text-[#007bc7] font-medium">{entry.chinese}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5">{entry.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-8">找不到相關詞彙</p>
        )}
      </div>
    </div>
  )
}
