export interface GlossaryEntry {
  dutch: string
  chinese: string
  explanation: string
  category: 'general' | 'box1' | 'box3' | 'deduction' | 'document' | 'housing'
}

export const glossary: GlossaryEntry[] = [
  // General
  { dutch: 'Aangifte', chinese: '報稅申報', explanation: '向稅務局提交的年度所得稅申報', category: 'general' },
  { dutch: 'Belastingdienst', chinese: '荷蘭稅務局', explanation: '荷蘭的國稅局，負責所有稅務事務', category: 'general' },
  { dutch: 'Belastingjaar', chinese: '稅務年度', explanation: '你正在申報的那一年（今年報去年的稅）', category: 'general' },
  { dutch: 'BSN (Burgerservicenummer)', chinese: '公民服務號碼', explanation: '荷蘭的身分證字號，9 位數', category: 'general' },
  { dutch: 'DigiD', chinese: '數位身分', explanation: '荷蘭政府的線上身分驗證系統，報稅必須用', category: 'general' },
  { dutch: 'Fiscaal partner', chinese: '稅務伴侶', explanation: '已婚或同居登記的伴侶，可以一起報稅享受優惠', category: 'general' },
  { dutch: 'Toeslagen', chinese: '政府補貼', explanation: '包含租屋補貼、健保補貼、育兒補貼等', category: 'general' },
  { dutch: 'Bezwaar', chinese: '異議/申訴', explanation: '不同意稅單結果時可以提出的正式抗議', category: 'general' },
  { dutch: 'Navorderingsaanslag', chinese: '追加稅單', explanation: '稅務局發現你少報時追加的稅單', category: 'general' },
  { dutch: 'Teruggave', chinese: '退稅', explanation: '你多繳的稅會退還給你', category: 'general' },
  { dutch: 'Bijbetalen', chinese: '補稅', explanation: '你少繳的稅需要補繳', category: 'general' },

  // Box 1
  { dutch: 'Loon', chinese: '薪資', explanation: '你從雇主那裡收到的報酬', category: 'box1' },
  { dutch: 'Bruto loon', chinese: '稅前薪資', explanation: '扣稅前的總薪資', category: 'box1' },
  { dutch: 'Netto loon', chinese: '稅後薪資（淨薪資）', explanation: '扣完稅和社會保險後實際拿到的薪資', category: 'box1' },
  { dutch: 'Fiscaal loon', chinese: '應稅薪資', explanation: 'Jaaropgave 上用來報稅的金額，可能跟 bruto loon 不同', category: 'box1' },
  { dutch: 'Loonheffing', chinese: '薪資稅預扣', explanation: '雇主從薪水中預扣的所得稅+社會保險', category: 'box1' },
  { dutch: 'Ingehouden loonheffing', chinese: '已預扣的薪資稅', explanation: '全年已經從薪水中扣掉的稅額總計', category: 'box1' },
  { dutch: 'Pensioen', chinese: '退休金', explanation: '從薪水中扣繳的退休金，通常免稅', category: 'box1' },
  { dutch: '30%-regeling', chinese: '30% 稅務優惠', explanation: '外籍員工的稅務優惠，30% 的薪資免稅', category: 'box1' },
  { dutch: 'Reisaftrek', chinese: '通勤扣除', explanation: '搭大眾運輸通勤可以扣除的費用', category: 'box1' },

  // Box 3
  { dutch: 'Vermogen', chinese: '資產', explanation: '你擁有的所有財產總值', category: 'box3' },
  { dutch: 'Heffingsvrij vermogen', chinese: '免稅資產額', explanation: '不需要課稅的資產門檻（2025: €57,684/人）', category: 'box3' },
  { dutch: 'Spaartegoeden', chinese: '儲蓄存款', explanation: '銀行存款，包含活存和定存', category: 'box3' },
  { dutch: 'Beleggingen', chinese: '投資', explanation: '股票、基金、ETF、債券等投資', category: 'box3' },
  { dutch: 'Schulden', chinese: '負債', explanation: 'Box 3 中可扣除的負債（房貸不算）', category: 'box3' },
  { dutch: 'Peildatum', chinese: '基準日', explanation: '計算資產的日期，為每年 1 月 1 日', category: 'box3' },
  { dutch: 'Forfaitair rendement', chinese: '虛擬報酬率', explanation: '政府假設你的資產有固定報酬，據此課稅', category: 'box3' },
  { dutch: 'Partieel buitenlands belastingplichtige', chinese: '部分非稅務居民', explanation: '有 30% ruling 時可選擇的身分，海外資產免報', category: 'box3' },

  // Deductions
  { dutch: 'Aftrekpost', chinese: '扣除項目', explanation: '可以從收入中扣除的費用，減少應稅金額', category: 'deduction' },
  { dutch: 'Heffingskorting', chinese: '稅務減免', explanation: '直接從應繳稅額中扣除的減免金額', category: 'deduction' },
  { dutch: 'Algemene heffingskorting', chinese: '一般稅務減免', explanation: '所有人都有的基本減免（最高 €3,362）', category: 'deduction' },
  { dutch: 'Arbeidskorting', chinese: '就業減免', explanation: '有工作收入者的額外減免（最高 €5,532）', category: 'deduction' },
  { dutch: 'Giften', chinese: '慈善捐款', explanation: '捐給認可機構的款項可扣除', category: 'deduction' },
  { dutch: 'ANBI', chinese: '公益機構', explanation: '荷蘭認可的慈善/公益機構', category: 'deduction' },

  // Documents
  { dutch: 'Jaaropgave', chinese: '年度薪資單', explanation: '雇主發的年度薪資總覽，報稅最重要的文件', category: 'document' },
  { dutch: 'Jaaroverzicht', chinese: '年度總覽', explanation: '銀行/券商發的年度帳戶總覽', category: 'document' },
  { dutch: 'WOZ-beschikking', chinese: 'WOZ 房屋估值通知', explanation: '市政府寄發的房屋公告價值，用於計算房屋稅', category: 'document' },
  { dutch: 'Voorlopige aanslag', chinese: '暫定稅單', explanation: '稅務局根據預估發的暫定稅單', category: 'document' },
  { dutch: 'Definitieve aanslag', chinese: '最終稅單', explanation: '稅務局審核完畢後的正式稅單', category: 'document' },
  { dutch: 'Beschikking', chinese: '決定通知', explanation: '政府機關發出的正式決定書', category: 'document' },

  // Housing
  { dutch: 'Hypotheek', chinese: '房貸', explanation: '購屋貸款', category: 'housing' },
  { dutch: 'Hypotheekrenteaftrek', chinese: '房貸利息扣除', explanation: '自住房貸利息可從 Box 1 收入扣除', category: 'housing' },
  { dutch: 'Eigenwoningforfait', chinese: '自住房虛擬收入', explanation: '政府認定住自己房子的「虛擬收入」', category: 'housing' },
  { dutch: 'WOZ-waarde', chinese: 'WOZ 房屋估值', explanation: '市政府核定的房屋公告現值', category: 'housing' },
  { dutch: 'Koopwoning', chinese: '自有住宅', explanation: '自己買的房子', category: 'housing' },
  { dutch: 'Huurwoning', chinese: '租屋', explanation: '租的房子', category: 'housing' },
  { dutch: 'Huurtoeslag', chinese: '租屋補貼', explanation: '低收入租屋者可申請的政府補貼', category: 'housing' },
  { dutch: 'Aflossing', chinese: '還本（本金償還）', explanation: '房貸本金的償還，不可扣除', category: 'housing' },
  { dutch: 'Rente', chinese: '利息', explanation: '房貸的利息部分，可以扣除', category: 'housing' },
  { dutch: 'Overwaarde', chinese: '房屋增值', explanation: '房屋市值超過房貸餘額的部分', category: 'housing' },
]
