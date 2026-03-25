import { useState } from 'react'
import { taxSteps } from '../data/taxSteps'
import type { TaxField } from '../types'
import type { Scenario } from '../data/scenarios'

interface Props {
  scenario: Scenario
}

function FieldCard({ field }: { field: TaxField }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`border rounded-lg transition-all ${
        expanded ? 'border-[#007bc7] bg-blue-50/30' : 'border-gray-200 bg-white'
      }`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-4 flex items-start justify-between gap-3"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
              Box {field.box}
            </span>
            {field.warning && (
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                ⚠️ 注意
              </span>
            )}
            {field.tip && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                💡 省稅
              </span>
            )}
          </div>
          <h4 className="font-bold text-gray-800 mt-1">{field.dutch}</h4>
          <p className="text-[#007bc7] font-medium text-sm">{field.chinese}</p>
        </div>
        <span className="text-gray-400 shrink-0 mt-1">
          {expanded ? '▼' : '▶'}
        </span>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
            {field.explanation}
          </p>
          {field.warning && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm text-amber-800">
                <strong>⚠️ 注意：</strong>{field.warning}
              </p>
            </div>
          )}
          {field.tip && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>💡 省稅技巧：</strong>{field.tip}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function TaxStepGuide({ scenario }: Props) {
  const [currentStep, setCurrentStep] = useState(0)

  // Filter fields based on scenario
  const filteredSteps = taxSteps.map((step) => ({
    ...step,
    fields: step.fields.filter((field) => {
      if (!field.relevantFor) return true
      const rulingMatch = !field.relevantFor.ruling || field.relevantFor.ruling.includes(scenario.rulingStatus)
      const housingMatch = !field.relevantFor.housing || field.relevantFor.housing.includes(scenario.housingStatus)
      return rulingMatch && housingMatch
    }),
  })).filter((step) => {
    if (!step.relevantFor) return true
    const rulingMatch = !step.relevantFor.ruling || step.relevantFor.ruling.includes(scenario.rulingStatus)
    const housingMatch = !step.relevantFor.housing || step.relevantFor.housing.includes(scenario.housingStatus)
    return rulingMatch && housingMatch
  })

  const step = filteredSteps[currentStep]

  return (
    <div className="space-y-4">
      {/* Step navigation */}
      <div className="flex gap-1 overflow-x-auto pb-2">
        {filteredSteps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrentStep(i)}
            className={`shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              i === currentStep
                ? 'bg-[#154273] text-white'
                : i < currentStep
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {i < currentStep ? '✓ ' : `${i + 1}. `}
            {s.titleChinese}
          </button>
        ))}
      </div>

      {/* Current step */}
      {step && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="text-lg font-bold text-[#154273]">{step.titleDutch}</h3>
            </div>
            <h4 className="text-base font-medium text-gray-600 mb-2">{step.titleChinese}</h4>
            <p className="text-sm text-gray-500">{step.description}</p>
          </div>

          <div className="space-y-2">
            {step.fields.map((field) => (
              <FieldCard key={field.id} field={field} />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between pt-2">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← 上一步
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(filteredSteps.length - 1, currentStep + 1))}
              disabled={currentStep === filteredSteps.length - 1}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-[#007bc7] text-white hover:bg-[#006aad] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              下一步 →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
