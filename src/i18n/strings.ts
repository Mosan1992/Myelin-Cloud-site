// Single source of truth for all site copy, in both languages.
// zh renders at /, en renders at /en/. Keep wording de-risked:
// no "first / 首个", no "treat / cure" efficacy claims for an
// unregistered device. Describe what the hardware does: monitor,
// detect, cool, record, sign, export.

export type Lang = 'zh' | 'en';
export const defaultLang: Lang = 'zh';
export const languages: Record<Lang, string> = { zh: '中文', en: 'English' };

export const strings = {
  zh: {
    site: {
      name: '迈领云 Myelin Cloud',
      sub: '夜间瘙痒监测与主动降温临床研究平台',
      switchTo: 'EN',
    },
    nav: {
      about: '关于',
      vision: '愿景',
      technology: '技术',
      ip: '知识产权',
      contact: '联系',
      cta: '联系我们',
    },
    footer: {
      company: '迈领云（深圳）科技有限公司',
      companyEn: 'Myelin Cloud (Shenzhen) Technology Co., Ltd.',
      email: 'mosan@myelincloud.cn',
      copyright: '© 2026 Myelin Cloud · myelincloud.cn',
      beian: '粤ICP备 —— 号（备案后填写）',
      nav: '导航',
      disclaimer:
        '免责声明：本网站所述产品（Histo-Cooling）目前处于研发阶段，尚未取得国家药品监督管理局（NMPA）医疗器械注册证。本页所有技术与功能描述仅用于技术交流、投资与合作沟通，不构成医疗器械广告、产品销售要约或任何诊断、治疗建议。专利状态以国家知识产权局官方记录为准。',
    },
    home: {
      tag: '临床研究级智能寝具平台 · 研发中',
      h1a: '我们整夜监测',
      h1accent1: '夜间抓挠',
      h1b: '，并在发作时',
      h1accent2: '主动降温',
      h1c: '。',
      lede:
        'Histo-Cooling 是一台密封设备。它在睡眠中监测抓挠，在抓挠发生时主动降温，并为每一次发作留下临床级的数据记录。我们为特应性皮炎、慢性荨麻疹等夜间瘙痒负担较重的疾病研究而做。',
      ctaPrimary: '了解技术',
      ctaGhost: '合作与投资',
      problemEyebrow: '痛点',
      problemH2a: '最重要、却',
      problemAccent: '最测不准',
      problemH2b: '的临床终点',
      problemLede: '夜间瘙痒是皮肤科疾病负担的核心指标，今天却仍靠病人次晨凭记忆打分。',
      problems: [
        { k: '主观', t: 'UAS7 / SCORAD / NRS 全部依赖次晨主观回顾，系统性低估夜间发作。' },
        { k: '分辨率', t: '无法区分同夜多次发作，缺时刻、时长与分布数据。' },
        { k: '无干预', t: '抓挠仅靠腕动仪间接采集，且只记录、不干预。' },
        { k: '依从性', t: '症状日记自第四周起依从性崩塌，纵向数据缺失。' },
      ],
      solutionEyebrow: '解决方案',
      solutionH2a: '一台密封设备，',
      solutionAccent: '闭合整个回路',
      solutionLede:
        '监测、干预、记录、自适应，全部在一台无风扇、无水泵、可用消毒湿巾擦拭的 IP68 设备里完成。',
      loop: [
        { n: '01', s: '监测', h: '识别抓挠', p: '惯性传感器 + 睡眠状态机 + 频域分析，自主识别有效抓挠发作。' },
        { n: '02', s: '干预', h: '主动降温', p: '驱动降温，打断瘙痒抓挠循环，全程受固化安全包络约束。' },
        { n: '03', s: '记录', h: '签名数据', p: '带数字签名的时序事件，映射至 SCORAD / UAS7 / NRS 临床终点。' },
        { n: '04', s: '自适应', h: '有效性反馈', p: '依据干预是否有效，动态调整强度（受安全边界钳制）。' },
      ],
      loopback: '↻ 闭环持续运行，跨睡眠周期累积数据集',
      techEyebrow: '核心技术',
      techH2a: '三个相互锁合的',
      techAccent: '技术层',
      techLink: '查看完整技术',
      layers: [
        { tag: 'A · 方法层', h: '闭环监测干预', p: '睡眠状态机、频域抓挠识别、闭环干预序列，以及事件到临床终点的映射。' },
        { tag: 'B · 硬件层', h: '全密封主动降温', p: '半导体制冷、液态金属导热总线、相变材料缓冲；无风扇无水泵；IP68 可消毒。' },
        { tag: 'C · 数据安全层', h: '临床级可信数据', p: '固化安全包络、支撑双盲的假性干预模式、设备签名、离线导出、容错存储。' },
      ],
      impactEyebrow: '价值',
      impactH2a: '从',
      impactAccent1: '患者',
      impactH2b: '，一直到',
      impactAccent2: '世界',
      impact: [
        { lvl: '对患者', h: '改善睡眠与生活质量', p: '客观量化夜间抓挠，并在发作时主动降温。' },
        { lvl: '对产业', h: '客观夜间终点', p: '为生物制剂研发提供客观终点，临床试验仪器进口替代。' },
        { lvl: '对国家', h: '数据主权与话语权', p: '本土可控的高端医疗器械，提升中国临床研究国际可信度。' },
        { lvl: '对世界', h: '全球健康', p: '为全球瘙痒研究提供客观、可复现的夜间终点，作为开放标准，惠及各地患者。' },
      ],
      roadmapEyebrow: '发展路线',
      roadmapH2a: '从专利到',
      roadmapAccent: '注册证',
      roadmap: [
        { when: '现在', ph: 'Phase 0', p: '6+ 件分层专利布局，说明书冻结。' },
        { when: '0–12 月', ph: 'Phase 1', p: '工程样机；台架验证；安全硬化；NMPA 预沟通。' },
        { when: '12–24 月', ph: 'Phase 2', p: '单中心临床先导；参照队列校准；药企/CRO 意向。' },
        { when: '24–36 月', ph: 'Phase 3', p: 'NMPA 二类注册；FDA De Novo 准备；首批临床试验部署。' },
      ],
      ctaH2: '一起把它从纸面变成样机',
      ctaLede:
        '我们正寻求种子资金、研发资源与临床/药企合作。欢迎孵化器、投资人、皮肤科研究中心与生物制剂申办方联系。',
    },
    about: {
      eyebrow: '关于我们',
      h1a: '为一个',
      h1accent: '测不准的终点',
      h1b: '而生的公司',
      lede:
        '迈领云（深圳）科技有限公司是一家专注夜间瘙痒客观测量与主动干预的临床研究器械公司。我们相信，临床上最难量化的症状，恰恰最值得被认真测量。',
      storyH: '我们为什么从瘙痒开始',
      story: [
        '瘙痒是皮肤科疾病负担的核心，却是整个学科里最难客观测量的终点之一。今天的临床试验仍主要依赖病人次晨凭记忆给出的评分，系统性地低估了夜间发作，也丢失了时刻、时长与分布。',
        '我们的判断是：与其再造一个更精细的问卷，不如造一台能在夜里把抓挠真正记录下来、并在发作时给出物理干预的设备。把主观回顾换成客观、可复现的时序数据，是这个学科缺失已久的一块地基。',
      ],
      buildH: '我们在造什么',
      buildP:
        'Histo-Cooling 是一台全密封、可医院级消毒的设备，把抓挠监测、主动降温与临床级数据记录集成在一个闭环里。它面向特应性皮炎、慢性荨麻疹等夜间瘙痒负担较重的疾病研究。',
      principlesH: '我们的原则',
      principles: [
        { h: '证据先于主张', p: '先把现象测准，再谈结论。我们只描述设备实际在做的事：监测、降温、记录、签名。' },
        { h: '数据主权内建', p: '设备端离线、本地签名、用户主动导出。隐私与数据本地化不是补丁，而是出厂设计。' },
        { h: '为临床可信而造', p: '固化安全包络、支撑双盲的设计、设备签名与容错存储，让数据经得起审计。' },
        { h: '物理层护城河', p: '全密封主动降温的硬件难以被诚实复刻；真正的壁垒是专利、临床数据、注册证与合作关系的组合。' },
      ],
      factsH: '公司概况',
      facts: [
        { k: '主体', v: '迈领云（深圳）科技有限公司' },
        { k: '所在地', v: '中国 · 深圳' },
        { k: '阶段', v: '研发阶段，分层专利已布局' },
        { k: '方向', v: '夜间瘙痒临床研究器械' },
      ],
    },
    vision: {
      eyebrow: '愿景',
      h1a: '让最难测的症状，拥有一个',
      h1accent: '客观的标准',
      lede:
        '我们的愿景是为夜间瘙痒建立一套客观、可复现的测量与干预标准，先服务严肃的临床研究，再惠及更广的患者。',
      missionH: '使命',
      missionP:
        '把夜间瘙痒从“次晨凭记忆打分”，变成可以被设备客观记录、被研究者信任、被监管认可的时序数据，并在记录的同时给出受安全边界约束的物理干预。',
      arcH: '层层递进的价值',
      arcLede: '我们衡量影响的方式，是从单个患者的一夜睡眠，一直推到一个学科的共同标准。',
      arc: [
        { lvl: '对患者', h: '把夜晚还给患者', p: '客观量化夜间抓挠，并在发作时主动降温，目标是更完整的睡眠与生活质量。' },
        { lvl: '对产业', h: '一个客观的夜间终点', p: '为生物制剂与新药研发提供可复现的客观终点，并推动临床试验仪器的进口替代。' },
        { lvl: '对国家', h: '本土可控的高端器械', p: '数据本地化、设备自主可控，提升中国临床研究在国际上的可信度与话语权。' },
        { lvl: '对世界', h: '一个开放的瘙痒标准', p: '把客观夜间终点开放给全球瘙痒研究，让各地患者都能从同一套可复现方法中受益。' },
      ],
      horizonH: '我们如何定义成功',
      horizons: [
        { when: '近期', p: '工程样机跑通闭环，单中心先导研究产出第一批客观夜间数据，并完成 NMPA 预沟通。' },
        { when: '中期', p: '取得 NMPA 二类注册，进入多中心试验，成为药企与 CRO 评估夜间瘙痒的可选工具。' },
        { when: '远期', p: '客观夜间终点被纳入研究共识，方法可复现、可跨中心比较，惠及全球患者。' },
      ],
    },
    technology: {
      eyebrow: '核心技术',
      h1a: '一台设备，',
      h1accent: '闭合整个回路',
      lede:
        '监测、干预、记录、自适应，全部在一台无风扇、无水泵、可用消毒湿巾擦拭的 IP68 设备里完成。下面是它如何工作。',
      figcap: '设备结构概念剖视：闭环监测干预与全密封被动散热架构（示意图，非最终外观）',
      loopH: '闭环如何运行',
      layersH: '三个相互锁合的技术层',
      layersDetail: [
        { tag: 'A · 方法层', h: '闭环监测干预', p: '睡眠状态机区分睡眠状态，频域分析识别有效抓挠发作，闭环序列在发作时触发干预，事件再映射到 SCORAD / UAS7 / NRS 等临床终点。' },
        { tag: 'B · 硬件层', h: '全密封主动降温', p: '半导体制冷负责降温，液态金属导热总线把热量快速带离接触面，相变材料缓冲峰值热量，外壳被动散热。无风扇、无水泵、无通气孔，IP68 可消毒。' },
        { tag: 'C · 数据安全层', h: '临床级可信数据', p: '固化安全包络限定干预边界，假性干预模式支撑双盲，设备唯一私钥签名，离线点对点导出，容错存储防止数据丢失。' },
      ],
      sovereigntyH: '数据主权与隐私',
      sovereignty: [
        { h: '数据不出设备，导出可验证', p: '本地存储、无联网、无自动上传，仅用户主动发起时点对点本地导出；每次导出由设备唯一私钥在防篡改安全元件内签名，天然契合《个人信息保护法》与数据本地化要求。' },
        { h: '设备在端，分析在云', p: '设备端完全离线、本地签名；“云”仅指经授权的研究分析平台，负责签名校验、终点计算与多中心看板。边缘采集与云端科研，各司其职。' },
      ],
      specH: '硬件要点',
      specs: ['IP68 全气密外壳', '无风扇 · 无水泵 · 无通气孔', '半导体制冷（TEC）', '液态金属导热总线', '相变材料热缓冲', '防篡改安全元件签名'],
      note: '本页技术描述用于技术交流与合作沟通，产品仍处研发阶段，未取得 NMPA 注册证。',
    },
    ip: {
      eyebrow: '知识产权与护城河',
      h1a: '分层',
      h1accent: '专利墙',
      h1b: '，而非单点',
      lede: '我们的护城河不是某一件专利，而是围绕方法、硬件与数据安全展开的一整组分层布局。',
      pills: [
        { s: '已提交', t: '发明专利母案 · 方法 + 设备 + 数据处理系统' },
        { s: '已提交', t: '实用新型 · PCM + 液态金属 + IP68 结构' },
        { s: '待提交', t: '分案 · 盲法模式' },
        { s: '待提交', t: '分案 · 容错存储' },
        { s: '规划中', t: '更多分案布局中' },
      ],
      statsH: '复刻它需要多久',
      stats: [
        { big: '12–18', unit: '个月', p: '诚实复刻全密封主动降温硬件所需的时间，这是物理层面的护城河。' },
        { big: '18–24', unit: '个月', p: '复刻可过审的临床级固件与数据完整性栈。' },
        { big: '24–36', unit: '个月', p: '复刻整套栈，再加临床验证与注册，且未必绕得过专利家族。' },
      ],
      moat:
        '真正的护城河是专利、临床数据、注册证与药企关系的组合，而非任何单一专利。',
      note: '专利状态以国家知识产权局（CNIPA）官方记录为准。',
    },
    contact: {
      eyebrow: '联系',
      h1a: '一起把它从',
      h1accent: '纸面变成样机',
      lede:
        '我们正寻求种子资金、研发资源与临床/药企合作。无论你是投资人、药企、研究中心还是工程伙伴，欢迎与我们对话。',
      whoH: '我们希望听到',
      who: [
        { h: '投资人与孵化器', p: '种子轮、研发资源、产业资源对接。' },
        { h: '药企与 CRO', p: '把客观夜间终点用于生物制剂与新药试验。' },
        { h: '皮肤科研究中心', p: '单中心与多中心先导研究合作。' },
        { h: '工程与临床人才', p: '硬件、固件、数据完整性与临床方向。' },
      ],
      emailLabel: '直接联系',
      email: 'mosan@myelincloud.cn',
    },
  },

  en: {
    site: {
      name: 'Myelin Cloud',
      sub: 'Nocturnal-itch monitoring & active-cooling research platform',
      switchTo: '中文',
    },
    nav: {
      about: 'About',
      vision: 'Vision',
      technology: 'Technology',
      ip: 'IP',
      contact: 'Contact',
      cta: 'Contact us',
    },
    footer: {
      company: '迈领云（深圳）科技有限公司',
      companyEn: 'Myelin Cloud (Shenzhen) Technology Co., Ltd.',
      email: 'mosan@myelincloud.cn',
      copyright: '© 2026 Myelin Cloud · myelincloud.cn',
      beian: 'ICP filing no. —— (to be added once registered)',
      nav: 'Navigate',
      disclaimer:
        'Disclaimer: The product described (Histo-Cooling) is under development and has not obtained medical device registration from China’s NMPA. All technical and functional descriptions on this site are for technical, investment, and partnership communication only, and do not constitute a medical device advertisement, an offer of sale, or any diagnostic or treatment advice. Patent status is subject to the official records of the CNIPA.',
    },
    home: {
      tag: 'Clinical-research smart-bedding platform · In development',
      h1a: 'We measure nocturnal ',
      h1accent1: 'scratching',
      h1b: ' as it happens, and ',
      h1accent2: 'cool',
      h1c: ' the skin in response.',
      lede:
        'Histo-Cooling is a single sealed device. It watches for scratching during sleep, cools the skin when scratching starts, and keeps a clinical-grade record of every episode. We built it for research into atopic dermatitis, chronic urticaria, and similar conditions where night-time itch carries the burden.',
      ctaPrimary: 'Explore the technology',
      ctaGhost: 'Partner & invest',
      problemEyebrow: 'The Problem',
      problemH2a: 'The most important endpoint nobody can ',
      problemAccent: 'measure',
      problemH2b: '',
      problemLede:
        'Nocturnal itch is the core burden marker in dermatology, yet it is still scored from next-morning recall.',
      problems: [
        { k: 'Subjective', t: 'UAS7 / SCORAD / NRS all rely on morning recall, which systematically underestimates night events.' },
        { k: 'Resolution', t: 'Multiple episodes in one night blur together, with no timing, duration, or distribution.' },
        { k: 'No intervention', t: 'Actigraphy captures scratching only indirectly, and only records it. Nothing acts on it.' },
        { k: 'Compliance', t: 'Diary compliance collapses after week four, leaving gaps in the longitudinal data.' },
      ],
      solutionEyebrow: 'Our Solution',
      solutionH2a: 'One sealed device ',
      solutionAccent: 'closes the whole loop',
      solutionLede:
        'Detect, respond, record, and adapt, all inside one fan-less, pump-less, disinfectant-wipeable IP68 device.',
      loop: [
        { n: '01', s: 'DETECT', h: 'Detect scratch', p: 'IMU, sleep state machine, and frequency-domain analysis identify valid scratch episodes.' },
        { n: '02', s: 'RESPOND', h: 'Active cooling', p: 'Cools the surface to break the itch-scratch cycle, bounded by a hard-coded safety envelope.' },
        { n: '03', s: 'RECORD', h: 'Signed data', p: 'Cryptographically signed time-series mapped to SCORAD / UAS7 / NRS endpoints.' },
        { n: '04', s: 'ADAPT', h: 'Efficacy feedback', p: 'Adjusts intensity by whether the response worked, clamped to the safety envelope.' },
      ],
      loopback: '↻ A continuous closed loop, accumulating a multi-night dataset',
      techEyebrow: 'Core Technology',
      techH2a: 'Three interlocking ',
      techAccent: 'layers',
      techLink: 'See the full technology',
      layers: [
        { tag: 'A · Method', h: 'Closed-loop method', p: 'Sleep state machine, frequency-domain scratch detection, a closed-loop response sequence, and event-to-endpoint mapping.' },
        { tag: 'B · Hardware', h: 'Hermetic cooling', p: 'Thermoelectric cooling, a liquid-metal thermal bus, and a PCM buffer; no fan, no pump; IP68, disinfectable.' },
        { tag: 'C · Data & safety', h: 'Trustworthy data', p: 'Hard-coded safety envelope, sham mode for double-blinding, device signing, offline export, and fault-tolerant storage.' },
      ],
      impactEyebrow: 'Impact',
      impactH2a: 'From ',
      impactAccent1: 'patients',
      impactH2b: ' to the ',
      impactAccent2: 'world',
      impact: [
        { lvl: 'PATIENTS', h: 'Sleep & quality of life', p: 'Objectively quantify nocturnal scratching, and cool the skin as it flares.' },
        { lvl: 'INDUSTRY', h: 'Objective endpoint', p: 'An objective endpoint for biologics R&D, and import substitution for trial instruments.' },
        { lvl: 'NATION', h: 'Sovereignty & voice', p: 'A locally controlled high-end device that raises Chinese research credibility.' },
        { lvl: 'WORLD', h: 'Global health', p: 'An objective, reproducible nocturnal endpoint for global itch research, offered as an open standard.' },
      ],
      roadmapEyebrow: 'Roadmap',
      roadmapH2a: 'From patents to ',
      roadmapAccent: 'clearance',
      roadmap: [
        { when: 'Now', ph: 'Phase 0', p: '6+ layered filings in place; spec frozen.' },
        { when: '0–12 mo', ph: 'Phase 1', p: 'Prototype; bench validation; security hardening; NMPA pre-submission.' },
        { when: '12–24 mo', ph: 'Phase 2', p: 'Single-center pilot; reference-cohort calibration; pharma/CRO LOIs.' },
        { when: '24–36 mo', ph: 'Phase 3', p: 'NMPA Class II; FDA De Novo prep; initial trial deployment.' },
      ],
      ctaH2: 'Let us turn it from filings into a prototype',
      ctaLede:
        'We are raising seed funding and seeking R&D, clinical, and pharma partnerships. Incubators, investors, dermatology research centers, and biologics sponsors welcome.',
    },
    about: {
      eyebrow: 'About us',
      h1a: 'A company built for an ',
      h1accent: 'endpoint nobody could measure',
      h1b: '',
      lede:
        'Myelin Cloud (Shenzhen) Technology is a clinical-research device company focused on the objective measurement and active intervention of nocturnal itch. We believe the symptom that is hardest to quantify is exactly the one most worth measuring properly.',
      storyH: 'Why we started with itch',
      story: [
        'Itch is central to the burden of skin disease, yet it is one of the hardest endpoints in the field to measure objectively. Clinical trials today still lean on scores a patient gives from next-morning memory, which systematically underestimates night events and loses their timing, duration, and distribution.',
        'Our view was simple: rather than build a finer questionnaire, build a device that actually records scratching through the night and gives a physical response when it happens. Replacing subjective recall with objective, reproducible time-series is a piece of groundwork the field has lacked for a long time.',
      ],
      buildH: 'What we build',
      buildP:
        'Histo-Cooling is a fully sealed, hospital-disinfectable device that integrates scratch monitoring, active cooling, and clinical-grade data recording into one closed loop. It is built for research into atopic dermatitis, chronic urticaria, and similar conditions where night-time itch carries the burden.',
      principlesH: 'How we work',
      principles: [
        { h: 'Evidence before claims', p: 'Measure the phenomenon first, then talk conclusions. We describe only what the device actually does: monitor, cool, record, sign.' },
        { h: 'Data sovereignty by design', p: 'Offline on the device, signed locally, exported only when the user chooses. Privacy and data localization are built in, not bolted on.' },
        { h: 'Built for clinical trust', p: 'A hard-coded safety envelope, support for double-blinding, device signing, and fault-tolerant storage make the data hold up to audit.' },
        { h: 'A physics moat', p: 'Sealed active-cooling hardware is hard to replicate honestly. The real barrier is the combination of patents, clinical data, clearance, and partnerships.' },
      ],
      factsH: 'Company at a glance',
      facts: [
        { k: 'Entity', v: 'Myelin Cloud (Shenzhen) Technology Co., Ltd.' },
        { k: 'Location', v: 'Shenzhen, China' },
        { k: 'Stage', v: 'In development, layered patents filed' },
        { k: 'Focus', v: 'Nocturnal-itch clinical-research device' },
      ],
    },
    vision: {
      eyebrow: 'Vision',
      h1a: 'Give the hardest symptom to measure an ',
      h1accent: 'objective standard',
      h1b: '',
      lede:
        'Our vision is an objective, reproducible standard for measuring and responding to nocturnal itch, serving serious clinical research first and reaching wider patient care from there.',
      missionH: 'Mission',
      missionP:
        'Turn nocturnal itch from a score given from next-morning memory into time-series data a device can record objectively, a researcher can trust, and a regulator can recognize, while giving a physical response bounded by a safety envelope as it records.',
      arcH: 'An ascending arc of value',
      arcLede:
        'We measure our impact from one patient’s single night all the way up to a shared standard for a whole field.',
      arc: [
        { lvl: 'PATIENTS', h: 'Give patients the night back', p: 'Objectively quantify nocturnal scratching and cool the skin as it flares, toward more complete sleep and quality of life.' },
        { lvl: 'INDUSTRY', h: 'An objective nocturnal endpoint', p: 'A reproducible objective endpoint for biologics and drug development, and import substitution for trial instruments.' },
        { lvl: 'NATION', h: 'A locally controlled high-end device', p: 'Local data and a self-controlled device that raise the credibility and voice of Chinese clinical research.' },
        { lvl: 'WORLD', h: 'An open standard for itch', p: 'An objective nocturnal endpoint opened to global itch research, so patients everywhere benefit from one reproducible method.' },
      ],
      horizonH: 'What success looks like',
      horizons: [
        { when: 'Near term', p: 'A prototype running the full loop, a single-center pilot producing the first objective nocturnal data, and NMPA pre-submission complete.' },
        { when: 'Mid term', p: 'NMPA Class II clearance, multi-center trials, and a place as an option pharma and CROs reach for to assess nocturnal itch.' },
        { when: 'Long term', p: 'An objective nocturnal endpoint adopted into research consensus, reproducible and comparable across sites, benefiting patients worldwide.' },
      ],
    },
    technology: {
      eyebrow: 'Core Technology',
      h1a: 'One device that ',
      h1accent: 'closes the whole loop',
      h1b: '',
      lede:
        'Detect, respond, record, and adapt, all inside one fan-less, pump-less, disinfectant-wipeable IP68 device. Here is how it works.',
      figcap:
        'Concept cross-section: closed-loop response and a fully sealed passive-dissipation architecture (illustrative, not final appearance).',
      loopH: 'How the closed loop runs',
      layersH: 'Three interlocking layers',
      layersDetail: [
        { tag: 'A · Method', h: 'Closed-loop method', p: 'A sleep state machine separates sleep states, frequency-domain analysis identifies valid scratch episodes, a closed-loop sequence triggers a response as it happens, and events map onto SCORAD / UAS7 / NRS endpoints.' },
        { tag: 'B · Hardware', h: 'Hermetic cooling', p: 'Thermoelectric modules cool, a liquid-metal thermal bus carries heat away from the contact surface, a phase-change material buffers peak heat, and the shell dissipates it passively. No fan, no pump, no vents; IP68 and disinfectable.' },
        { tag: 'C · Data & safety', h: 'Trustworthy data', p: 'A hard-coded safety envelope bounds the response, a sham mode supports double-blinding, a device-unique key signs the data, export is offline and point-to-point, and storage is fault-tolerant.' },
      ],
      sovereigntyH: 'Data sovereignty & privacy',
      sovereignty: [
        { h: 'Data never leaves the device unverified', p: 'Stored locally, no internet, no auto-upload; export is local and point-to-point on user initiation, signed by a device-unique key inside a tamper-resistant secure element, which makes it inherently PIPL- and data-localization-compliant.' },
        { h: 'Device at the edge, analysis in the cloud', p: 'The device is fully offline and signs data locally; "cloud" refers only to the authorized research-analytics platform that verifies signatures, computes endpoints, and runs multi-site dashboards. Edge capture and cloud research each do their own job.' },
      ],
      specH: 'Hardware highlights',
      specs: ['IP68 hermetic shell', 'No fan · no pump · no vents', 'Thermoelectric cooling (TEC)', 'Liquid-metal thermal bus', 'Phase-change heat buffer', 'Tamper-resistant signing element'],
      note: 'Technical descriptions on this page are for technical and partnership communication. The product is in development and has no NMPA registration.',
    },
    ip: {
      eyebrow: 'IP & Moat',
      h1a: 'A layered ',
      h1accent: 'patent wall',
      h1b: ', not a single filing',
      lede:
        'Our moat is not any one patent. It is a layered family across the method, the hardware, and the data-safety stack.',
      pills: [
        { s: 'Filed', t: 'Invention patent · method + device + data system' },
        { s: 'Filed', t: 'Utility model · PCM + liquid-metal + IP68 structure' },
        { s: 'Pending', t: 'Divisional · blinding mode' },
        { s: 'Pending', t: 'Divisional · fault-tolerant storage' },
        { s: 'Planned', t: 'Further divisionals planned' },
      ],
      statsH: 'How long it takes to replicate',
      stats: [
        { big: '12–18', unit: 'mo', p: 'The time to honestly replicate the sealed active-cooling hardware. That is a physics moat.' },
        { big: '18–24', unit: 'mo', p: 'For an audit-passing clinical-grade firmware and data-integrity stack.' },
        { big: '24–36', unit: 'mo', p: 'For the whole stack plus clinical validation and clearance, with no guarantee of clearing the patent family.' },
      ],
      moat:
        'The real moat is the combination of patents, clinical data, regulatory clearance, and pharma relationships, not any single one.',
      note: 'Patent status is subject to the official records of the CNIPA.',
    },
    contact: {
      eyebrow: 'Contact',
      h1a: 'Let us turn it from ',
      h1accent: 'filings into a prototype',
      h1b: '',
      lede:
        'We are raising seed funding and seeking R&D, clinical, and pharma partnerships. Whether you are an investor, a pharma team, a research center, or an engineering partner, we would like to talk.',
      whoH: 'Who we would like to hear from',
      who: [
        { h: 'Investors & incubators', p: 'Seed funding, R&D resources, and industry introductions.' },
        { h: 'Pharma & CROs', p: 'Using an objective nocturnal endpoint in biologics and drug trials.' },
        { h: 'Dermatology research centers', p: 'Single-center and multi-center pilot collaborations.' },
        { h: 'Engineering & clinical talent', p: 'Hardware, firmware, data integrity, and clinical roles.' },
      ],
      emailLabel: 'Reach us directly',
      email: 'mosan@myelincloud.cn',
    },
  },
} as const;
