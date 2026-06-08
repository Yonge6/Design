const sharedRequirements = {
  machines: [
    ["Hydra 9 Gen2", "1900 × 1045 × 1035 mm", '74.8" × 41.1" × 40.7"', "直接落地 / 最大机型", "Direct floor placement / Largest machine"],
    ["Cobra 10", "1680 × 1090 × 940 mm", '66" × 43" × 37"', "直接落地 / 第二大机型", "Direct floor placement / Second-largest machine"],
    ["XRF", "1085 × 725 × 268 mm", '43.2" × 28.5" × 10.5"', "桌面机 / 综合工作台最大", "Largest unit on desktop bench"],
    ["VertiGo", "630 × 550 × 710 mm", '24.8" × 21.65" × 27.95"', "桌面机 / 杯壶与旋转雕刻", "Desktop tumbler and rotary engraving"],
    ["Y Series", "桌面机 / Desktop Machine", "整体比 XRF 稍小 / Slightly smaller than XRF", "综合工作台", "Desktop Innovation Bench"],
    ["Viper", "630 × 550 × 710 mm", '24.8" × 21.65" × 27.95"', "桌面机 / 与 VertiGo 同尺寸", "Desktop machine / Same size as VertiGo"],
    ["GALVO FLEX", "320 × 450 × 683 mm", '12.6" × 17.72" × 26.89"', "桌面机 / 最窄高机型", "Desktop machine / Narrowest tall unit"]
  ],
  samples: {
    large: ["36–48 英寸木雕地图", "多层木质艺术墙板", "大型企业 Logo", "亚克力灯牌", "商业标识牌"],
    largeEn: ["36–48 in engraved wood map", "Layered wood art panel", "Large corporate logo", "Illuminated acrylic sign", "Commercial signage"],
    small: ["皮革钱包", "帽牌 / 皮革补丁", "金属铭牌", "工业标签", "奖杯 / 奖牌", "玻璃杯", "保温杯", "钥匙扣", "礼品牌"],
    smallEn: ["Leather wallet", "Hat badge / leather patch", "Metal nameplate", "Industrial tag", "Trophy / medal", "Glassware", "Tumbler", "Keychain", "Gift tag"]
  },
  materials: ["WOOD", "LEATHER", "METAL", "ACRYLIC", "GLASS", "TUMBLERS"],
  story: ["机器", "加工过程", "成品", "商业价值"]
};

const proposalGalleryData = [
  {
    label: "OPTION 01 VISUALS",
    title: "方案一效果图",
    images: ["A01", "A02", "A03", "A04"]
  },
  {
    label: "OPTION 02 VISUALS",
    title: "方案二效果图",
    images: ["B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08"]
  },
  {
    label: "OPTION 03 VISUALS",
    title: "方案三效果图",
    images: ["C01", "C02", "C03", "C04", "C05"]
  }
];

const bilingualCopy = {
  "10 × 40 FT EXHIBITION BOOTH": ["10 × 40 FT EXHIBITION BOOTH", "10×40 英尺展会展位"],
  "U.S. Machine Company": ["U.S. Machine Company", "美国机器公司"],
  "Real Machines.": ["Real Machines.", "真实机器。"],
  "Real Results.": ["Real Results.", "真实成果。"],
  "Make Better With One": ["Make Better With One", "与 ONELASER 共创更好"],
  "SCROLL": ["SCROLL", "向下滚动"],
  "01 · SPATIAL LAYOUT": ["01 · SPATIAL LAYOUT", "01 · 空间布局"],
  "10×40 FT 平面逻辑": ["10×40 FT FLOOR PLAN LOGIC", "10×40 英尺平面逻辑"],
  "不深但很长，不要做「展馆式堆满」，要做成一条高效销售动线。": ["A long, shallow booth should become one efficient sales journey rather than a crowded equipment hall.", "展位狭长，不做设备堆满，而是形成一条高效销售动线。"],
  "品牌区": ["BRAND ZONE", "品牌区"],
  "桌面机工作台": ["DESKTOP MACHINE BENCH", "桌面机工作台"],
  "Y Series / Viper / GALVO FLEX": ["Y SERIES / VIPER / GALVO FLEX", "Y Series / Viper / GALVO FLEX 桌面产品区"],
  "左侧 · 品牌信任区": ["LEFT · BRAND TRUST ZONE", "左侧 · 品牌信任区"],
  "中间 · 工业实力 C 位": ["CENTER · INDUSTRIAL PERFORMANCE HERO", "中间 · 工业实力主视觉位"],
  "Hydra 9 Gen2 + Cobra 10 — \"工业实力\"的证明，占视觉中心": ["Hydra 9 Gen2 + Cobra 10 prove industrial capability and anchor the visual center.", "Hydra 9 Gen2 与 Cobra 10 作为工业实力证明，占据视觉中心。"],
  "右侧 · 商业价值区": ["RIGHT · COMMERCIAL VALUE ZONE", "右侧 · 商业价值区"],
  "VertiGo + XRF — 杯壶、皮革、礼品、桌面创业": ["VertiGo + XRF demonstrate drinkware, leather, gifts and desktop-business applications.", "VertiGo 与 XRF 展示杯壶、皮革、礼品和桌面创业应用。"],
  "最右 · 桌面产品区": ["FAR RIGHT · DESKTOP PRODUCT ZONE", "最右侧 · 桌面产品区"],
  "连续桌面机工作台 + 独立铭牌 + 应用样品，统一展示 Y Series、Viper、GALVO FLEX": ["A continuous bench, individual nameplates and application samples present Y Series, Viper and GALVO FLEX.", "使用连续桌面工作台、独立铭牌和应用样品统一展示三款桌面机。"],
  "02 · DESIGN PROPOSALS": ["02 · DESIGN PROPOSALS", "02 · 设计方案"],
  "三个方案": ["THREE DESIGN DIRECTIONS", "三个设计方案"],
  "从低成本快速落地到品牌最强方案，三种预算三种策略。": ["Three budgets and three strategies, from fast low-cost deployment to maximum brand impact.", "从低成本快速落地到最强品牌展示，三种预算对应三种策略。"],
  "方案一": ["OPTION 01", "方案一"],
  "方案二": ["OPTION 02", "方案二"],
  "方案三": ["OPTION 03", "方案三"],
  "03 · COMPARISON": ["03 · COMPARISON", "03 · 方案对比"],
  "方案对比": ["OPTION COMPARISON", "方案对比"],
  "DIMENSION": ["DIMENSION", "对比维度"],
  "方案一 ★": ["OPTION 01 ★", "方案一 ★"],
  "方案二 ★": ["OPTION 02 ★", "方案二 ★"],
  "方案三": ["OPTION 03", "方案三"],
  "形式": ["FORMAT", "形式"],
  "挂布 + 易拉宝 + 样品桌": ["Fabric Backwall + Banners + Sample Table", "挂布背墙 + 易拉宝 + 样品桌"],
  "SEG 灯箱背墙 + 产品岛台": ["SEG Lightbox Backwall + Product Islands", "SEG 灯箱背墙 + 产品岛台"],
  "SEG 灯箱背墙 + 直接落地机位 + 桌面工作台": ["SEG LIGHTBOX + DIRECT-FLOOR MACHINES + DESKTOP BENCH", "SEG 灯箱背墙 + 直接落地机位 + 桌面工作台"],
  "三维定制展厅 + 灯光 + 样品墙": ["Custom 3D Gallery + Lighting + Sample Wall", "三维定制展厅 + 灯光 + 样品墙"],
  "视觉效果": ["VISUAL IMPACT", "视觉效果"],
  "基础可用": ["ESSENTIAL", "基础可用"],
  "专业高级": ["PROFESSIONAL", "专业高级"],
  "品牌最强": ["MAXIMUM BRAND IMPACT", "品牌影响力最强"],
  "成本": ["COST", "成本"],
  "低": ["LOW", "低"],
  "中": ["MEDIUM", "中"],
  "高": ["HIGH", "高"],
  "复用性": ["REUSABILITY", "复用性"],
  "推荐程度": ["RECOMMENDATION", "推荐程度"],
  "适合试水": ["IDEAL FOR TESTING", "适合首次试水"],
  "最推荐": ["MOST RECOMMENDED", "最推荐"],
  "重点展会使用": ["FLAGSHIP EVENTS", "适合重点展会"],
  "04 · RECOMMENDED": ["04 · RECOMMENDED", "04 · 最终推荐"],
  "最终推荐：方案二": ["FINAL RECOMMENDATION: OPTION 02", "最终推荐：方案二"],
  "10×40 ft 长条展位，最有效的是用一整面高质量背墙，把品牌、产品、样品和销售动线讲清楚。": ["For a 10×40 ft inline booth, one high-quality backwall communicates the brand, products, samples and sales journey most effectively.", "对于 10×40 英尺长条展位，一整面高质量背墙最能清晰呈现品牌、产品、样品和销售动线。"],
  "方案二 · ONELASER Performance Lab": ["OPTION 02 · ONELASER PERFORMANCE LAB", "方案二 · ONELASER 性能实验室"],
  "10×40 ft 是长条展位，不适合花太多钱做复杂三维结构。最有效的是用一整面高质量背墙，把品牌、产品、样品和销售动线讲清楚。": ["A 10×40 ft inline booth does not need an expensive, complex 3D build. A premium continuous backwall communicates the brand, products, samples and sales journey with greater efficiency.", "10×40 英尺属于长条展位，不必投入复杂三维结构；连续高质量背墙能更高效地讲清品牌、产品、样品和销售动线。"],
  "40 ft SEG 灯箱背墙": ["40 FT SEG LIGHTBOX BACKWALL", "40 英尺 SEG 灯箱背墙"],
  "Hydra / Cobra 10 英雄机位": ["HYDRA 9 GEN2 / COBRA 10 HERO POSITIONS", "Hydra 9 Gen2 / Cobra 10 英雄机位"],
  "Outcome Sample Wall + Lead Capture Bar": ["OUTCOME SAMPLE WALL + LEAD CAPTURE BAR", "成果样品墙 + 客户信息收集吧台"],
  "主视觉口号": ["HERO MESSAGING", "主视觉口号"],
  "辅助销售话术": ["SALES SUPPORT MESSAGING", "辅助销售话术"],
  "C位 · 中间偏左": ["HERO · CENTER LEFT", "主视觉位 · 中间偏左"],
  "C位 · 与HYDRA并列": ["HERO · BESIDE HYDRA", "主视觉位 · 与 Hydra 并列"],
  "右侧 · 商业应用区": ["RIGHT · COMMERCIAL APPLICATIONS", "右侧 · 商业应用区"],
  "右侧 · 桌面入门": ["RIGHT · DESKTOP ENTRY", "右侧 · 桌面业务入口"],
  "Performance Flagship": ["PERFORMANCE FLAGSHIP", "性能旗舰"],
  "Workshop Essential": ["WORKSHOP ESSENTIAL", "工作室主力机"],
  "Tumbler Profit Machine": ["TUMBLER PROFIT MACHINE", "杯壶盈利设备"],
  "Desktop Entry": ["DESKTOP BUSINESS ENTRY", "桌面业务入口"],
  "Material:": ["MATERIAL", "材料"],
  "Process:": ["PROCESS", "工艺"],
  "Machine:": ["MACHINE", "机器"],
  "Business Use:": ["BUSINESS USE", "商业用途"],
  "Stainless Steel": ["STAINLESS STEEL", "不锈钢"],
  "Marking": ["MARKING", "打标"],
  "Industrial tags / compliance labels": ["INDUSTRIAL TAGS / COMPLIANCE LABELS", "工业标签 / 合规标识"],
  "Walnut Wood": ["WALNUT WOOD", "胡桃木"],
  "Deep Engraving": ["DEEP ENGRAVING", "深度雕刻"],
  "Custom signage / home decor": ["CUSTOM SIGNAGE / HOME DECOR", "定制标识 / 家居装饰"],
  "Leather": ["LEATHER", "皮革"],
  "Cutting + Engraving": ["CUTTING + ENGRAVING", "切割 + 雕刻"],
  "Wallets / patches / gifts": ["WALLETS / PATCHES / GIFTS", "钱包 / 补丁 / 礼品"],
  "Glass (Wine Bottle)": ["GLASS (WINE BOTTLE)", "玻璃（酒瓶）"],
  "Surface Etching": ["SURFACE ETCHING", "表面蚀刻"],
  "Custom drinkware / promotions": ["CUSTOM DRINKWARE / PROMOTIONS", "定制杯壶 / 促销礼品"],
  "Industrial Laser Systems Built for Real Work": ["INDUSTRIAL LASER SYSTEMS BUILT FOR REAL WORK", "为真实工作而打造的工业激光系统"],
  "PRECISION FIRST": ["PRECISION FIRST", "精准优先"],
  "INNOVATION-DRIVEN": ["INNOVATION-DRIVEN", "创新驱动"],
  "OUTCOME GUARANTEE": ["OUTCOME GUARANTEE", "结果保障"],
  "LOCAL SUPPORT": ["LOCAL SUPPORT", "本地支持"],
  "挂布背墙": ["FABRIC BACKWALL", "挂布背墙"],
  "喷绘展板": ["PRINTED GRAPHICS", "喷绘展板"],
  "易拉宝": ["ROLL-UP BANNERS", "易拉宝"],
  "黑色样品桌": ["BLACK SAMPLE TABLE", "黑色样品桌"],
  "折叠接待台": ["FOLDING RECEPTION COUNTER", "折叠接待台"],
  "电视机": ["TV DISPLAY", "电视机"],
  "SEG 灯箱背墙": ["SEG LIGHTBOX BACKWALL", "SEG 灯箱背墙"],
  "发光 Logo": ["ILLUMINATED LOGO", "发光 Logo"],
  "产品岛台": ["PRODUCT ISLANDS", "产品岛台"],
  "红色地面机位线": ["RED FLOOR POSITIONING LINES", "红色地面机位线"],
  "样品墙": ["SAMPLE WALL", "样品墙"],
  "视频屏": ["VIDEO DISPLAY", "视频屏"],
  "巨型立体门头": ["MONUMENTAL 3D HEADER", "巨型立体门头"],
  "3D 品牌背墙": ["3D BRAND BACKWALL", "3D 品牌背墙"],
  "红色线性灯带": ["RED LINEAR LIGHTING", "红色线性灯带"],
  "英雄机器平台": ["HERO MACHINE PLATFORMS", "英雄机器平台"],
  "直接落地英雄机位": ["DIRECT-FLOOR HERO POSITIONS", "直接落地英雄机位"],
  "材料图书馆": ["MATERIAL LIBRARY", "材料图书馆"],
  "咨询吧台": ["CONSULTATION BAR", "咨询吧台"],
  "机器": ["MACHINES", "机器"],
  "加工过程": ["PROCESS", "加工过程"],
  "成品": ["OUTCOMES", "成品"],
  "商业价值": ["BUSINESS VALUE", "商业价值"],
  "独立旗舰平台": ["FREESTANDING FLAGSHIP PLATFORM", "独立旗舰平台"],
  "独立工作室平台": ["FREESTANDING WORKSHOP PLATFORM", "独立工作室平台"],
  "其次": ["SECOND LARGEST", "桌面机中第二体量"],
  "隐藏电源": ["CONCEALED POWER", "隐藏电源"],
  "储物抽屉": ["STORAGE DRAWERS", "储物抽屉"],
  "红色 LED 底边": ["RED LED BASE", "红色 LED 底边"]
};

const applyBilingualHierarchy = (root = document) => {
  root.querySelectorAll(".en-copy").forEach((english) => {
    english.parentElement?.classList.add("english-led-pair");
  });

  root.querySelectorAll("h1,h2,h3,h4,p,button,span,td,th,text,strong,small").forEach((element) => {
    if (element.closest(".proposal-host") && element.querySelector(".en-copy, .en-inline")) return;
    if (element.children.length || element.dataset.bilingual === "true") return;

    const key = element.textContent.trim();
    const copy = bilingualCopy[key];
    if (!copy) return;

    if (element.namespaceURI?.includes("svg")) {
      element.textContent = `${copy[0]} / ${copy[1]}`;
    } else {
      element.innerHTML = `<span class="primary-en-copy">${copy[0]}</span><span class="secondary-zh-copy">${copy[1]}</span>`;
    }
    element.dataset.bilingual = "true";
  });
};

const proposalData = [
  {
    name: "Budget Booth",
    title: "基础成本展位",
    budget: "低预算 / 快速落地 / 首次参展",
    visual: 2,
    renderShare: "效果图 ≥ 70%",
    concept: "用挂布背墙、喷绘展板和可运输展具建立整洁可信的美国工业品牌形象。融入 F1 维修区式的黑、白、性能红和精密工程秩序，但不出现赛车或人物。",
    style: ["挂布背墙", "喷绘展板", "易拉宝", "黑色样品桌", "折叠接待台", "电视机"],
    message: ["ONELASER", "Make Better With One", "U.S. Machine Company", "Real Machines. Real Results."],
    zones: [
      ["品牌区", "US Machine Company"],
      ["Hydra 9 Gen2", "最大机型 / 直接落地主视觉"],
      ["Cobra 10", "第二大机型 / 直接落地"],
      ["桌面机综合展示台", "XRF + VertiGo + Y Series + Viper + GALVO FLEX"],
      ["桌面应用区", "杯壶、礼品、铭牌和小型成品"]
    ],
    machineDisplay: "Hydra 9 Gen2 与 Cobra 10 直接放在展位地面，不使用垫高平台。其余五台统一放在连续桌面机工作台。严格按真实尺寸关系表现：XRF 为最宽的低矮桌面机；Y Series 整体只比 XRF 稍小；VertiGo 与 Viper 均为 630 × 550 × 710 mm，同宽同高；GALVO FLEX 为 320 × 450 × 683 mm，是最窄但较高的机型。",
    video: "背墙或接待台旁设置电视机，循环播放切割、雕刻火花、客户案例和真实成品。",
    salesArea: "左前方设置接待台，配置二维码、宣传册、名片和小样品盒；大样品与小样品同时出现。",
    floorPlan: ["40 ft 宽 × 10 ft 深", "接待台", "电视机", "Hydra 9 Gen2 直接落地", "Cobra 10 直接落地", "5 款桌面机连续工作台", "样品桌", "开放客户动线"],
    strengths: ["采购与运输成本最低", "搭建速度快，常规展具容易获得", "适合首次测试展会效果"],
    risks: ["视觉质感相对基础", "需用连续大画面避免零散感", "大型样品需要提前规划运输"],
    en: {
      budget: "Low budget / Fast deployment / First-time exhibitor",
      concept: "A clean U.S. industrial presentation built with portable fixtures and the disciplined black, white and performance-red energy of an F1 pit garage. No race car and no people appear in the booth visuals.",
      zones: ["U.S. Machine Company", "Largest machine / Direct floor hero position", "Second-largest machine / Direct floor placement", "XRF + VertiGo + Y Series + Viper + GALVO FLEX", "Drinkware, gifts, nameplates and compact samples"],
      machineDisplay: "Hydra 9 Gen2 and Cobra 10 sit directly on the floor with no raised platforms. The other five machines share one continuous bench. Preserve actual proportions: XRF is the widest low-profile desktop machine; Y Series is only slightly smaller than XRF; VertiGo and Viper are identical at 630 × 550 × 710 mm; GALVO FLEX is the narrowest tall unit at 320 × 450 × 683 mm.",
      video: "A TV beside the backwall or reception counter loops cutting, engraving sparks, customer cases and finished products.",
      salesArea: "A front-left reception counter includes QR codes, brochures, business cards and sample boxes, supported by both large and small finished samples.",
      floorPlan: ["40 ft W × 10 ft D", "Reception counter", "TV", "Hydra 9 Gen2 directly on floor", "Cobra 10 directly on floor", "Five-machine desktop bench", "Sample table", "Open visitor flow"],
      strengths: ["Lowest purchasing and shipping cost", "Fast setup with readily available fixtures", "Ideal for testing a first exhibition"],
      risks: ["More basic visual finish", "Requires continuous graphics to avoid fragmentation", "Large samples require advance shipping planning"]
      ,reuse: "Medium"
    },
    reuse: "中"
  },
  {
    name: "Performance Lab",
    title: "模块化灯箱实验室",
    budget: "中等预算 / 推荐方案 / 正式进入美国展会",
    visual: 4,
    renderShare: "效果图 ≥ 70%",
    concept: "以 SEG 灯箱背墙和连续工作台构成清晰的高性能实验室。视觉借鉴 HAAS F1 维修区的精密、克制与性能感，使用黑、白、性能红、技术编号和线性灯光，但不出现赛车、车轮、赛道或人物。",
    style: ["SEG 灯箱背墙", "发光 Logo", "红色地面机位线", "样品墙", "Lead Capture Bar", "视频屏"],
    message: ["ONELASER Performance Lab", "Innovation-Driven Performance", "Outcome Guarantee", "Real Machines. Real Results."],
    zones: [
      ["品牌灯箱区", "ONELASER Performance Lab"],
      ["Hydra 9 Gen2", "中心最大机型 / 直接落地"],
      ["Cobra 10", "第二大机型 / 直接落地"],
      ["桌面机 Performance Bench", "XRF + VertiGo + Y Series + Viper + GALVO FLEX"],
      ["Materials & Applications", "六类材质样品墙"],
      ["桌面产品陈列", "Y Series、Viper、GALVO FLEX 与应用样品"]
    ],
    machineDisplay: "Hydra 9 Gen2 与 Cobra 10 直接落在展位地面，以地面红色定位线区分机位。五款桌面机放在一张 Performance Bench 上。统一比例尺：XRF 宽而扁；Y Series 仅略小于 XRF；VertiGo 与 Viper 同尺寸、同为窄高形态；GALVO FLEX 宽 320 mm、高 683 mm，最窄但高度接近 VertiGo 与 Viper。",
    video: "品牌区或样品墙旁设置明显视频屏，播放机器加工细节、美国工坊、客户案例与成品商业应用。",
    salesArea: "左前方设置 Lead Capture Bar，配置高脚椅、iPad、二维码、资料架和小样品盒；样品墙按材质分类。",
    floorPlan: ["40 ft 宽 × 10 ft 深", "SEG 灯箱背墙", "Hydra 9 Gen2 直接落地", "Cobra 10 直接落地", "5 款桌面机 Performance Bench", "电视机", "样品墙", "Lead Capture Bar", "开放客户动线"],
    strengths: ["品牌感与销售转化平衡最好", "模块化结构可反复使用", "机器、材料和商业结果关系清晰"],
    risks: ["需提前确认电力与灯箱功率", "搭建成本高于基础方案", "岛台尺寸必须按真机核算"],
    en: {
      budget: "Mid-range budget / Recommended / Formal U.S. market entry",
      concept: "SEG lightbox walls and a continuous performance bench create a precise, reusable laboratory with the disciplined engineering energy of a HAAS F1 pit garage. Use black, white, performance red, technical numbering and linear lighting, but show no race car, wheels, track or people.",
      zones: ["ONELASER Performance Lab", "Largest machine / Direct floor hero position", "Second-largest machine / Direct floor placement", "XRF + VertiGo + Y Series + Viper + GALVO FLEX", "Six-category material sample wall", "Y Series, Viper and GALVO FLEX with application samples"],
      machineDisplay: "Hydra 9 Gen2 and Cobra 10 sit directly on the floor, identified by red positioning lines. The five desktop machines share one Performance Bench. Use one scale: XRF is wide and low; Y Series is only slightly smaller; VertiGo and Viper have identical narrow-tall proportions; GALVO FLEX is 320 mm wide and 683 mm high, making it the narrowest tall machine.",
      video: "A prominent screen near the brand zone or sample wall shows machining details, U.S. workshops, customer cases and commercial applications.",
      salesArea: "A front-left Lead Capture Bar includes stools, iPad, QR codes, literature and sample boxes. The sample wall is organized by material.",
      floorPlan: ["40 ft W × 10 ft D", "SEG lightbox backwall", "Hydra 9 Gen2 directly on floor", "Cobra 10 directly on floor", "Five-machine Performance Bench", "TV", "Sample wall", "Lead Capture Bar", "Open visitor flow"],
      strengths: ["Best balance of brand impact and conversion", "Reusable modular structure", "Clear machine-to-material-to-business-result story"],
      risks: ["Power and lightbox loads must be confirmed", "Higher setup cost than Budget Booth", "Island dimensions must use actual machine measurements"]
      ,reuse: "High"
    },
    reuse: "高"
  },
  {
    name: "Performance Garage",
    title: "高端定制旗舰展位",
    budget: "高预算 / 全产品阵容 / 经销商招商",
    visual: 5,
    renderShare: "效果图 75–80%",
    concept: "把 10×40 ft 展位打造为 HAAS F1 维修区氛围的高性能工业车库：黑白主体、性能红线条、技术编号、工具墙和精密灯光。只借鉴维修区的工程秩序与速度感，不出现赛车、车辆部件、赛道或人物。",
    style: ["巨型立体门头", "3D 品牌背墙", "红色线性灯带", "直接落地英雄机位", "材料图书馆", "咨询吧台"],
    message: ["ONELASER Performance Garage", "From Workshop To Production", "Real Machines. Real Output. Real Support.", "Outcome Guarantee"],
    zones: [
      ["巨型门头", "ONELASER / U.S. Machine Company"],
      ["Hydra 9 Gen2", "核心最大机型 / 直接落地"],
      ["Cobra 10", "第二大机型 / 直接落地"],
      ["Desktop Innovation Bench", "XRF + VertiGo + Y Series + Viper + GALVO FLEX"],
      ["Material Library", "抽屉式材料与成品系统"],
      ["桌面产品发布区", "Y Series、Viper、GALVO FLEX 独立发光铭牌与应用演示"]
    ],
    machineDisplay: "Hydra 9 Gen2 与 Cobra 10 直接放在地面，以红色地面框线和顶部定向灯形成英雄机位。其余五台全部放在 Desktop Innovation Bench 上。按同一比例尺绘制：Y Series 只比 XRF 稍小；Viper 必须与 VertiGo 同尺寸；GALVO FLEX 必须呈现为 320 mm 宽、683 mm 高的窄高机型。",
    video: "设置 75 或 85 英寸大屏 / 视频墙，播放加工近景、火花、客户交付、美国工坊、售后支持和真实成品。",
    salesArea: "左侧设置 Consultation Bar，配置高脚椅、咖啡、iPad、样品盒和销售顾问区；右侧设置抽屉式 Material Library。",
    floorPlan: ["40 ft 宽 × 10 ft 深", "巨型门头", "Hydra 9 Gen2 直接落地英雄位", "Cobra 10 直接落地英雄位", "5 款桌面机 Innovation Bench", "75/85 英寸视频墙", "Material Library", "Consultation Bar", "开放客户动线"],
    strengths: ["品牌冲击力和媒体传播力最强", "适合全产品展示与经销商洽谈", "完整呈现机器到商业结果"],
    risks: ["成本、运输和电力要求最高", "需严格遵守 inline booth 高度与遮挡规定", "定制结构复用灵活性较低"],
    en: {
      budget: "High budget / Full product lineup / Dealer recruitment",
      concept: "A high-performance industrial garage with the precision, technical order and speed of a HAAS F1 pit environment. Black and white architecture, performance-red lines, technical numbering, tool-wall cues and focused lighting create the mood without showing any race car, vehicle parts, track or people.",
      zones: ["ONELASER / U.S. Machine Company", "Largest machine / Direct floor hero position", "Second-largest machine / Direct floor hero position", "XRF + VertiGo + Y Series + Viper + GALVO FLEX", "Drawer-based materials and finished products", "Dedicated illuminated nameplates and applications for Y Series, Viper and GALVO FLEX"],
      machineDisplay: "Hydra 9 Gen2 and Cobra 10 sit directly on the floor, framed by red graphics and focused lighting. All five remaining machines sit on the Desktop Innovation Bench. Use one consistent scale: Y Series is only slightly smaller than XRF; Viper must match VertiGo exactly; GALVO FLEX must read as a narrow 320 mm wide and 683 mm tall machine.",
      video: "A 75- or 85-inch screen shows close-up processing, sparks, deliveries, U.S. workshops, support services and real finished products.",
      salesArea: "A Consultation Bar on the left includes stools, coffee, iPad, samples and advisor workspace. A drawer-based Material Library sits on the right.",
      floorPlan: ["40 ft W × 10 ft D", "Monumental header", "Hydra 9 Gen2 directly on floor", "Cobra 10 directly on floor", "Five-machine Innovation Bench", "75/85-inch video wall", "Material Library", "Consultation Bar", "Open visitor flow"],
      strengths: ["Strongest brand and media impact", "Ideal for full-line presentation and dealer meetings", "Complete machine-to-business-result narrative"],
      risks: ["Highest cost, freight and power requirements", "Must comply with inline-booth height and sightline rules", "Custom structures offer less reuse flexibility"]
      ,reuse: "Medium"
    },
    reuse: "中"
  }
];

const card = (label, title, copy = "") => `
  <div class="proposal-card">
    <div class="proposal-eyebrow">${label}</div>
    <div class="proposal-card-title">${title}</div>
    ${copy ? `<p>${copy}</p>` : ""}
  </div>`;

const listPanel = (title, items, accent = false, englishItems = []) => `
  <div class="proposal-panel">
    <h4 class="${accent ? "proposal-red" : ""}">${title}</h4>
    <ul>${items.map((item, index) => `<li>${item}${englishItems[index] ? `<span class="en-copy">${englishItems[index]}</span>` : ""}</li>`).join("")}</ul>
  </div>`;

const renderMachineScale = () => `
  <div class="scale-rule">
    <strong>TRUE-SCALE DISPLAY RULE</strong>
    <span>同一比例尺：Hydra 9 Gen2 最大 → Cobra 10 第二 → 桌面机全部上桌</span>
    <small>F1 PIT-GARAGE ENERGY · NO CAR · NO PEOPLE / F1 维修区氛围 · 不出现赛车 · 不出现人物</small>
  </div>
  <div class="placement-system" aria-label="真实比例机器体量与展示方式">
    <div class="standalone-platform hydra-platform">
      <div class="machine-silhouette hydra-machine">Hydra 9 Gen2</div>
      <div class="floor-line"></div>
      <strong>DIRECTLY ON FLOOR / 直接落地</strong>
      <small>W 1900 × H 1035 mm</small>
    </div>
    <div class="standalone-platform cobra-platform">
      <div class="machine-silhouette cobra-machine">Cobra 10</div>
      <div class="floor-line"></div>
      <strong>DIRECTLY ON FLOOR / 直接落地</strong>
      <small>W 1680 × H 940 mm</small>
    </div>
    <div class="desktop-bench">
      <div class="bench-label">DESKTOP INNOVATION BENCH</div>
      <div class="bench-machines">
        <div class="desktop-machine xrf-machine"><span>XRF</span><small>W 1085 × H 268</small></div>
        <div class="desktop-machine vertigo-machine"><span>VertiGo</span><small>W 630 × H 710</small></div>
        <div class="desktop-machine compact-machine y-machine"><span>Y Series</span><small>SLIGHTLY &lt; XRF</small></div>
        <div class="desktop-machine compact-machine viper-machine"><span>Viper</span><small>W 630 × H 710</small></div>
        <div class="desktop-machine compact-machine galvo-machine"><span>GALVO FLEX</span><small>W 320 × H 683</small></div>
      </div>
      <div class="bench-top"></div>
      <div class="bench-base"><span>隐藏电源</span><span>储物抽屉</span><span>红色 LED 底边</span></div>
    </div>
  </div>`;

const renderMachineSpecs = () => `
  <div class="machine-spec-grid">
    ${sharedRequirements.machines.map(([name, metric, imperial, placement, placementEn]) => `
      <div class="machine-spec-card">
        <div class="proposal-eyebrow">${placement}<span class="en-copy">${placementEn}</span></div>
        <strong>${name}</strong>
        <p>${metric}</p>
        <small>${imperial}</small>
      </div>`).join("")}
  </div>`;

const renderStory = () => `
  <div class="value-flow">
    ${sharedRequirements.story.map((item, index) => `
      <div class="value-step"><span>0${index + 1}</span><strong>${item}</strong></div>
    `).join("")}
  </div>`;

const renderProposal = (proposal) => `
  <div class="proposal-detail proposal-enter">
    <div class="proposal-heading">
      <div>
        <div class="proposal-kicker">${proposal.name}</div>
        <h3>${proposal.title}</h3>
        <p>${proposal.budget}<span class="en-inline">${proposal.en.budget}</span></p>
      </div>
      <div class="proposal-impact">
        <span>${proposal.renderShare}</span>
        <div>${Array.from({ length: 5 }, (_, index) => `<i class="${index < proposal.visual ? "on" : ""}"></i>`).join("")}</div>
      </div>
    </div>

    <div class="proposal-concept">
      <div><span>CONCEPT / 方案理念</span><p>${proposal.concept}<span class="en-copy">${proposal.en.concept}</span></p></div>
      ${renderStory()}
    </div>

    <section class="proposal-section">
      <div class="proposal-section-title"><span>01</span><h4>空间与视觉构成 / Spatial & Visual System</h4></div>
      <div class="proposal-chip-row">${proposal.style.map((item) => `<span>${item}</span>`).join("")}</div>
      <div class="proposal-grid proposal-grid-4">${proposal.message.map((item, index) => card(`MESSAGE 0${index + 1}`, item)).join("")}</div>
    </section>

    <section class="proposal-section">
      <div class="proposal-section-title"><span>02</span><h4>大机直接落地 + 桌面机综合工作台 / Direct Floor Placement + Desktop Bench</h4></div>
      ${renderMachineScale()}
      <p class="proposal-note">${proposal.machineDisplay}<span class="en-copy">${proposal.en.machineDisplay}</span></p>
      ${renderMachineSpecs()}
    </section>

    <section class="proposal-section">
      <div class="proposal-section-title"><span>03</span><h4>展位分区 / Booth Zoning</h4></div>
      <div class="proposal-grid proposal-grid-3">${proposal.zones.map(([title, copy], index) => card(`ZONE ${String(index + 1).padStart(2, "0")}`, title, `${copy}<span class="en-copy">${proposal.en.zones[index]}</span>`)).join("")}</div>
    </section>

    <section class="proposal-section proposal-two-col">
      <div class="proposal-panel proposal-media-panel">
        <h4>VIDEO / SALES AREA</h4>
        <p><b>视频 / Video：</b>${proposal.video}<span class="en-copy">${proposal.en.video}</span></p>
        <p><b>销售区 / Sales Area：</b>${proposal.salesArea}<span class="en-copy">${proposal.en.salesArea}</span></p>
      </div>
      <div class="proposal-panel">
        <h4>TOP VIEW FLOOR PLAN</h4>
        <div class="floor-plan-tags">${proposal.floorPlan.map((item, index) => `<span>${item}<small>${proposal.en.floorPlan[index]}</small></span>`).join("")}</div>
      </div>
    </section>

    <section class="proposal-section">
      <div class="proposal-section-title"><span>04</span><h4>成品与材料矩阵 / Outcomes & Materials</h4></div>
      <div class="material-strip">${sharedRequirements.materials.map((item) => `<span>${item}</span>`).join("")}</div>
      <div class="proposal-two-col">
        ${listPanel("大型视觉样品 / LARGE HERO SAMPLES", sharedRequirements.samples.large, false, sharedRequirements.samples.largeEn)}
        ${listPanel("中小型成交样品 / SALES SAMPLES", sharedRequirements.samples.small, false, sharedRequirements.samples.smallEn)}
      </div>
    </section>

    <section class="proposal-section proposal-two-col">
      ${listPanel("优势 / STRENGTHS", proposal.strengths, false, proposal.en.strengths)}
      ${listPanel("风险检查 / RISKS & CHECKS", proposal.risks, true, proposal.en.risks)}
    </section>

    <div class="proposal-footer">
      <span>复用性 / REUSABILITY</span><strong>${proposal.reuse} / ${proposal.en.reuse}</strong>
      <p>统一要求：Hydra 9 Gen2 与 Cobra 10 必须直接放在地面，不得设置垫高平台；XRF、VertiGo、Y Series、Viper、GALVO FLEX 必须全部放在连续桌面机工作台。机器使用同一比例尺，严格控制真实宽高关系。整体呈现 HAAS F1 维修区式的精密工业氛围，但画面不得出现赛车、车辆部件、赛道或人物。<span class="en-copy">Hydra 9 Gen2 and Cobra 10 must sit directly on the floor with no raised platforms. All five remaining machines must sit on one continuous bench. Preserve real width-to-height relationships using one consistent scale. Create the precision of a HAAS F1 pit garage, but show no race car, vehicle parts, track or people.</span></p>
    </div>
  </div>`;

const renderGallery = (selectedIndex) => {
  const gallery = proposalGalleryData[selectedIndex];
  return `
    <section class="proposal-gallery proposal-enter" aria-label="${gallery.label}">
      <div class="gallery-heading">
        <div>
          <span>${gallery.label}</span>
          <h3>${gallery.title}</h3>
        </div>
        <div class="gallery-actions">
          <span>${gallery.images.length} IMAGES / ${gallery.images.length} 张图片</span>
          <button class="gallery-arrow gallery-prev" type="button" aria-label="Previous image">←</button>
          <button class="gallery-arrow gallery-next" type="button" aria-label="Next image">→</button>
        </div>
      </div>
      <div class="gallery-track" tabindex="0">
        ${gallery.images.map((image, imageIndex) => `
          <button class="gallery-card" type="button" data-gallery-index="${imageIndex}" aria-label="Open ${image}">
            <img src="assets/proposals/${image}.jpg" alt="${gallery.title} ${imageIndex + 1}" loading="${imageIndex === 0 ? "eager" : "lazy"}" decoding="async">
            <span><b>${image}</b><small>CLICK TO ENLARGE / 点击放大</small></span>
          </button>`).join("")}
      </div>
    </section>`;
};

const createLightbox = () => {
  const lightbox = document.createElement("div");
  lightbox.className = "proposal-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image">×</button>
    <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous image">←</button>
    <figure>
      <img alt="">
      <figcaption></figcaption>
    </figure>
    <button class="lightbox-nav lightbox-next" type="button" aria-label="Next image">→</button>`;
  document.body.appendChild(lightbox);
  return lightbox;
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = document.body.innerHTML
    .replaceAll("SEG 灯箱背墙 + 产品岛台", "SEG 灯箱背墙 + 直接落地机位 + 桌面工作台")
    .replaceAll("最右 · 新品预留", "最右 · 桌面产品区")
    .replaceAll("模块化展示台 + 立牌 + 样品托盘，后期换产品不用重做", "连续桌面机工作台 + 独立铭牌 + 应用样品，统一展示 Y Series、Viper、GALVO FLEX")
    .replaceAll("VERTIGO/X", "DESKTOP BENCH")
    .replaceAll("VertiGo/X", "桌面机工作台")
    .replaceAll("Hydra Gen2", "Hydra 9 Gen2")
    .replaceAll("HYDRA GEN2", "HYDRA 9 GEN2")
    .replaceAll("Cobra", "Cobra 10")
    .replaceAll("COBRA", "COBRA 10")
    .replaceAll(">NEW<", ">Y / VIPER / GALVO<")
    .replaceAll("新品", "Y Series / Viper / GALVO FLEX")
    .replaceAll("X Series", "XRF")
    .replaceAll("X SERIES", "XRF");

  const sections = document.querySelectorAll(".reveal");
  const layoutSection = Array.from(sections).find((section) => section.textContent.includes("SPATIAL LAYOUT"));

  if (layoutSection) {
    const layoutSvg = layoutSection.querySelector('svg[viewBox="0 0 820 240"]');
    const controls = Array.from(layoutSection.querySelectorAll("button")).slice(0, 5);
    const zones = layoutSvg ? Array.from(layoutSvg.querySelectorAll("g")).slice(0, 5) : [];

    if (controls.length === 5 && zones.length === 5) {
      const selectZone = (selectedIndex) => {
        controls.forEach((button, index) => {
          const isSelected = index === selectedIndex;
          button.classList.toggle("layout-control-active", isSelected);
          button.setAttribute("aria-pressed", String(isSelected));
        });
        zones.forEach((zone, index) => {
          zone.classList.toggle("layout-zone-active", index === selectedIndex);
          zone.classList.toggle("layout-zone-muted", index !== selectedIndex);
        });
      };
      controls.forEach((button, index) => {
        button.type = "button";
        button.dataset.zoneIndex = String(index);
        button.addEventListener("click", () => selectZone(index));
      });
      selectZone(0);
    }
  }

  const proposalSection = Array.from(sections).find((section) => section.textContent.includes("DESIGN PROPOSALS"));
  if (proposalSection) {
    const proposalControls = Array.from(proposalSection.querySelectorAll("button")).slice(0, 3);
    const controlBar = proposalControls[0]?.parentElement;
    if (controlBar && proposalControls.length === 3) {
      controlBar.classList.add("proposal-sticky-control");

      Array.from(proposalSection.children)
        .slice(Array.from(proposalSection.children).indexOf(controlBar) + 1)
        .forEach((node) => node.remove());

      const galleryHost = document.createElement("div");
      galleryHost.className = "proposal-gallery-host";
      proposalSection.appendChild(galleryHost);

      const detailHost = document.createElement("div");
      detailHost.className = "proposal-host";
      proposalSection.appendChild(detailHost);

      const lightbox = createLightbox();
      const lightboxImage = lightbox.querySelector("img");
      const lightboxCaption = lightbox.querySelector("figcaption");
      let activeProposalIndex = 1;
      let activeImageIndex = 0;

      const showLightboxImage = () => {
        const gallery = proposalGalleryData[activeProposalIndex];
        const image = gallery.images[activeImageIndex];
        lightboxImage.src = `assets/proposals/${image}.jpg`;
        lightboxImage.alt = `${gallery.title} ${activeImageIndex + 1}`;
        lightboxCaption.textContent = `${image} · ${activeImageIndex + 1} / ${gallery.images.length}`;
      };

      const openLightbox = (imageIndex) => {
        activeImageIndex = imageIndex;
        showLightboxImage();
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("lightbox-open");
        lightbox.querySelector(".lightbox-close").focus();
      };

      const closeLightbox = () => {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("lightbox-open");
      };

      const stepLightbox = (direction) => {
        const count = proposalGalleryData[activeProposalIndex].images.length;
        activeImageIndex = (activeImageIndex + direction + count) % count;
        showLightboxImage();
      };

      lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
      lightbox.querySelector(".lightbox-prev").addEventListener("click", () => stepLightbox(-1));
      lightbox.querySelector(".lightbox-next").addEventListener("click", () => stepLightbox(1));
      lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
      });
      document.addEventListener("keydown", (event) => {
        if (!lightbox.classList.contains("is-open")) return;
        if (event.key === "Escape") closeLightbox();
        if (event.key === "ArrowLeft") stepLightbox(-1);
        if (event.key === "ArrowRight") stepLightbox(1);
      });

      const wireGallery = () => {
        const track = galleryHost.querySelector(".gallery-track");
        const cards = Array.from(galleryHost.querySelectorAll(".gallery-card"));
        const scrollOneCard = (direction) => {
          const cardWidth = cards[0]?.getBoundingClientRect().width || track.clientWidth;
          track.scrollBy({ left: direction * (cardWidth + 16), behavior: "smooth" });
        };
        galleryHost.querySelector(".gallery-prev").addEventListener("click", () => scrollOneCard(-1));
        galleryHost.querySelector(".gallery-next").addEventListener("click", () => scrollOneCard(1));
        cards.forEach((card, imageIndex) => {
          card.addEventListener("click", () => openLightbox(imageIndex));
        });
      };

      const selectProposal = (selectedIndex) => {
        activeProposalIndex = selectedIndex;
        proposalControls.forEach((button, index) => {
          const isSelected = index === selectedIndex;
          button.classList.toggle("proposal-control-active", isSelected);
          button.setAttribute("aria-pressed", String(isSelected));
          button.style.backgroundColor = isSelected ? "#E7310E" : "transparent";
          button.style.color = isSelected ? "#fff" : "#666";
        });
        galleryHost.innerHTML = renderGallery(selectedIndex);
        detailHost.innerHTML = renderProposal(proposalData[selectedIndex]);
        wireGallery();
        applyBilingualHierarchy(detailHost);
      };

      proposalControls.forEach((button, index) => {
        button.type = "button";
        button.dataset.proposalIndex = String(index);
        button.addEventListener("click", () => selectProposal(index));
      });
      selectProposal(1);
    }
  }

  applyBilingualHierarchy(document.body);

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach((section) => observer.observe(section));
});
