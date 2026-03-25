export interface Scenario {
  id: string
  emoji: string
  title: string
  description: string
  rulingStatus: '30percent' | '30percent-transition' | 'none'
  housingStatus: 'rent' | 'own'
  highlights: string[]
  warnings: string[]
}

export const scenarios: Scenario[] = [
  {
    id: 'transition-rent',
    emoji: '🔄',
    title: '30% ruling 過渡年 + 租屋',
    description: '30% ruling 在年中到期，目前租屋。這是最複雜的情境之一。',
    rulingStatus: '30percent-transition',
    housingStatus: 'rent',
    highlights: [
      '上半年薪資只報 70%，下半年報 100%',
      '所有 heffingskortingen 都適用',
    ],
    warnings: [
      '⚠️ 2025 年起 partial non-resident 已取消，海外資產整年都要報 Box 3',
      '很可能需要補稅（下半年預扣稅率可能不夠）',
      '需要兩份 jaaropgave（上/下半年）',
      'Zorgtoeslag 資格可能改變（收入變高）',
    ],
  },
  {
    id: 'transition-own',
    emoji: '🏠',
    title: '30% ruling 過渡年 + 有房',
    description: '30% ruling 在年中到期，有自住房。複雜但有房貸利息扣除機會。',
    rulingStatus: '30percent-transition',
    housingStatus: 'own',
    highlights: [
      '上半年薪資只報 70%，下半年報 100%',
      '可以使用 hypotheekrenteaftrek（房貸利息扣除）',
      '房貸利息扣除通常能大幅減稅',
    ],
    warnings: [
      '⚠️ 2025 年起 partial non-resident 已取消，海外資產整年都要報',
      '要計算 eigenwoningforfait（自住房虛擬收入）',
      'WOZ 值會影響你的虛擬收入金額',
    ],
  },
  {
    id: '30percent-rent',
    emoji: '💼',
    title: '有 30% ruling + 租屋',
    description: '享有 30% ruling 優惠，目前租屋。注意 2025 年起 Box 3 規則已變更。',
    rulingStatus: '30percent',
    housingStatus: 'rent',
    highlights: [
      '只需報 70% 的薪資',
      '報稅流程相對簡單',
    ],
    warnings: [
      '⚠️ 2025 年起 partial non-resident 已取消！海外資產要報 Box 3',
      '確認 jaaropgave 上有正確反映 30% ruling',
      '2027 年起 30% 將降至 27%，提前規劃',
    ],
  },
  {
    id: 'none-rent',
    emoji: '🏢',
    title: '無 30% ruling + 租屋',
    description: '沒有 30% ruling，目前租屋。',
    rulingStatus: 'none',
    housingStatus: 'rent',
    highlights: [
      '報稅流程相對簡單',
      '可能符合 huurtoeslag（租屋補貼）資格',
      '所有 heffingskortingen 都適用',
    ],
    warnings: [
      '所有海外資產都要申報 Box 3',
      '收入全額課稅，沒有 30% 免稅額',
    ],
  },
  {
    id: 'none-own',
    emoji: '🏡',
    title: '無 30% ruling + 有房',
    description: '沒有 30% ruling，有自住房。可以享受房貸利息扣除。',
    rulingStatus: 'none',
    housingStatus: 'own',
    highlights: [
      'Hypotheekrenteaftrek 房貸利息扣除（通常金額很大）',
      '所有 heffingskortingen 都適用',
      '房屋增值不課稅（自住房不在 Box 3）',
    ],
    warnings: [
      'Eigenwoningforfait 虛擬收入要加入 Box 1',
      '所有海外資產都要申報 Box 3',
      'WOZ 值越高，虛擬收入越多',
    ],
  },
  {
    id: '30percent-own',
    emoji: '🏠💼',
    title: '有 30% ruling + 有房',
    description: '同時有 30% ruling 和自住房。可以享受房貸利息扣除。',
    rulingStatus: '30percent',
    housingStatus: 'own',
    highlights: [
      '只需報 70% 的薪資',
      '可以使用 hypotheekrenteaftrek（房貸利息扣除）',
    ],
    warnings: [
      '⚠️ 2025 年起 partial non-resident 已取消，海外資產要報 Box 3',
      '要計算 eigenwoningforfait（自住房虛擬收入）',
      '2027 年起 30% 將降至 27%',
    ],
  },
]
