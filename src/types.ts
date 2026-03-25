export type RulingStatus = '30percent' | '30percent-transition' | 'none'
export type HousingStatus = 'rent' | 'own'
export type PartnerStatus = 'single' | 'partner'

export interface UserProfile {
  rulingStatus: RulingStatus | null
  housingStatus: HousingStatus | null
  partnerStatus: PartnerStatus | null
  hasChildren: boolean | null
  hasForeignAssets: boolean | null
  transitionMonth?: number // month when 30% ruling ends (1-12)
}

export interface TaxField {
  id: string
  dutch: string
  chinese: string
  explanation: string
  box: 1 | 2 | 3
  relevantFor?: {
    ruling?: RulingStatus[]
    housing?: HousingStatus[]
  }
  warning?: string
  tip?: string
}

export interface TaxStep {
  id: string
  titleDutch: string
  titleChinese: string
  description: string
  fields: TaxField[]
  relevantFor?: {
    ruling?: RulingStatus[]
    housing?: HousingStatus[]
  }
}
