/* ==========================================================================
   i18n.js — all bilingual copy for the site lives here.

   HOW TO EDIT
   - Every key appears twice: once under `en`, once under `zh`.
   - To change a piece of text, find its key and edit the string. You never
     need to touch index.html.
   - To find which key a piece of text uses, look for `data-i18n="..."` on
     that element in index.html.

   WHAT IS DELIBERATELY *NOT* TRANSLATED (it's part of the visual style):
   - The monospace frame labels: [ 01 / ABOUT ], FIG. 01 — PORTRAIT,
     LOCAL TIME, the 01/02/03 project numbers, [ NO IMAGE ].
   - The tech tags on project cards (Python, pandas, RFM, …) — tool names and
     method names that recruiters scan for in English.
   - Your name, and GitHub / LinkedIn as proper nouns.

   NOTE ON THE CHINESE COPY: the copy you mentioned didn't come through in
   your message, so everything under `zh` below is a first draft I wrote from
   the English. Please read it over and rewrite in your own voice — especially
   `about.p1`, `about.p2` and `hero.intro`.
   ========================================================================== */

window.I18N = {
  en: {
    /* ---- Page metadata ---- */
    "meta.title": "Yujia (Mikaela) Duan // Data Analytics & Operations",
    "meta.description":
      "Portfolio of Yujia (Mikaela) Duan — data analytics and operations. Currently looking for roles.",

    /* ---- Header / navigation ---- */
    "brand.role": "Data Analytics & Operations",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "lang.aria": "Language",
    "menu.open": "Open menu",
    "menu.close": "Close menu",

    /* ---- Hero ---- */
    "hero.tagline": "Data analytics & operations — currently looking for roles",
    "hero.intro":
      "Data analyst focused on turning scattered, messy data into clear reports and workflows that teams can actually act on. Currently looking for roles in data analysis and operations.",
    "hero.more": "Read more about me",

    /* ---- About ---- */
    "about.headline": "I turn messy data into clear decisions.",
    "about.p1":
      "I graduated from Carleton University with a B.C.S. Honours in Computer Science. After interning as a full-stack developer, I realized I enjoyed the questions behind the code more than the code itself: what the data is saying, and what to do next.",
    "about.p2":
      "Now I'm looking for data analyst or operations roles. Outside of job hunting, I'm launching my own content channels to practice growth and analytics firsthand. I speak English, Mandarin and Japanese, and I make art. (There's a hidden room for it somewhere on this site.)",
    "portrait.alt": "Portrait of Yujia (Mikaela) Duan",
    "portrait.missing": "Add your photo at images/me.jpg",

    /* ---- Skills ---- */
    "about.techTitle": "Technical Skills",
    "about.nonTechTitle": "Non-technical Skills",

    "skill.sql.title": "SQL & Databases",
    "skill.sql.body": "PostgreSQL, MySQL, schema design, complex queries",
    "skill.python.title": "Python",
    "skill.python.body": "pandas, data cleaning, data pipelines",
    "skill.bi.title": "BI & Visualization",
    "skill.bi.body": "Power BI, Power Query, Excel, ECharts",
    "skill.tools.title": "Tools",
    "skill.tools.body": "Git, Figma, Google Stitch",
    "skill.programming.title": "Programming",
    "skill.programming.body": "Java, C, C++, Vue, HTML/CSS, JavaScript",
    "skill.ai.title": "AI-assisted Development",
    "skill.ai.body": "Claude Code, Codex, Cursor",

    "skill.analysis.title": "Analysis & Communication",
    "skill.analysis.body":
      "Turning findings into clear, stakeholder-ready insights; explaining technical results to non-technical audiences",
    "skill.ops.title": "Operations",
    "skill.ops.body": "Requirements gathering, process clarification, cross-functional collaboration. Now expanding into my own content channels to practice growth and analytics firsthand.",
    "skill.languages.title": "Languages",
    "skill.languages.body": "English (C1, IELTS 7) · Mandarin (Native) · Japanese (JLPT N2)",
    "skill.design.title": "Design & UX Thinking",
    "skill.design.body":
      "Understanding users through research and journey mapping; presenting data in ways people actually want to read.",

    /* ---- Projects ---- */
    "project.1.title": "E-commerce Retail Analysis",
    "project.1.desc":
      "1.07M transactions from a UK online wholesaler, analyzed for growth, retention and returns.",
    "project.2.title": "Smart Home System Prototype",
    "project.2.desc": "UX research and prototyping for a smart home control system.",
    "project.3.title": "Analytics Tool for Small Merchants",
    "project.3.desc":
      "Sellers on Taobao, Douyin Shop, Xiaohongshu and independent storefronts all have order exports sitting in a spreadsheet nobody opens. Upload that CSV and the tool builds RFM customer segments, repeat-purchase rate, a retention curve, best sellers and average order value over time — then suggests a few concrete things to do about it.",
    "project.building": "Currently building",
    "project.viewGithub": "View on GitHub",

    /* ---- Contact ---- */
    "contact.heading": "Get in touch",
    "contact.intro":
      "I'm currently looking for data analytics and operations roles. If you're hiring, or just want to talk about data, I'd love to hear from you.",
    "contact.emailLabel": "Email",

    /* ---- Resume ---- */
    "resume.heading": "Resume",
    "resume.intro":
      "The full version — education, experience and the projects above in more detail.",
    "resume.button": "Download my resume",
    "resume.missing": "Not uploaded yet — email me and I'll send it over.",

    /* ---- Footer ---- */
    "footer.builtWith": "Built with Tailwind CSS",
    "footer.artRoomAria": "Open the Art Room",

    /* ---- Art Room ---- */
    "art.title": "The Art Room",
    "art.close": "Back to reality [ESC]",
    "art.subtitle": "Things I made that aren't work",
    "art.konami": "Found it. Also reachable via the Konami code:",
    "art.exit": "Press [ESC] or the button above to go back.",
  },

  zh: {
    /* ---- 页面元信息 ---- */
    /* 想在中文模式下用中文名的话，把下面两处的 "Yujia (Mikaela) Duan" 换掉，
       另外 index.html 里 <h1> 和页脚的名字也要一起改。 */
    "meta.title": "Yujia (Mikaela) Duan // 数据分析与运营",
    "meta.description":
      "Yujia (Mikaela) Duan 的个人作品集 —— 数据分析与运营方向，目前正在求职。",

    /* ---- 页头 / 导航 ---- */
    "brand.role": "数据分析与运营",
    "nav.about": "关于",
    "nav.projects": "项目",
    "nav.contact": "联系",
    "nav.resume": "简历",
    "lang.aria": "语言",
    "menu.open": "打开菜单",
    "menu.close": "关闭菜单",

    /* ---- 首屏 ---- */
    "hero.tagline": "数据分析与运营 —— 正在寻找相关岗位",
    "hero.intro":
      "我是数据分析师，擅长把分散、杂乱的数据整理成清晰的报表和流程，让团队能直接拿去行动。目前正在寻找数据分析与运营方向的岗位。",
    "hero.more": "了解更多",

    /* ---- 关于 ---- */
    "about.headline": "把杂乱的数据，变成清晰的决策。",
    "about.p1":
      "我毕业于卡尔顿大学（Carleton University），获计算机科学荣誉学士学位。做过全栈开发实习之后，我发现自己更喜欢代码背后的那些问题：数据在说什么，接下来该怎么做。",
    "about.p2":
      "现在我在找数据分析或运营方向的岗位。求职之外，我也在做自己的内容账号，亲手练习增长和数据分析。我会英语、中文和日语，平时也画画 —— 这个网站的某个角落藏着一间展厅。",
    "portrait.alt": "Yujia (Mikaela) Duan 的照片",
    "portrait.missing": "把你的照片放到 images/me.jpg",

    /* ---- 技能 ---- */
    "about.techTitle": "技术能力",
    "about.nonTechTitle": "综合能力",

    "skill.sql.title": "SQL 与数据库",
    "skill.sql.body": "PostgreSQL、MySQL、表结构设计、复杂查询",
    "skill.python.title": "Python",
    "skill.python.body": "pandas、数据清洗、数据管道",
    "skill.bi.title": "BI 与可视化",
    "skill.bi.body": "Power BI、Power Query、Excel、ECharts",
    "skill.tools.title": "工具",
    "skill.tools.body": "Git、Figma、Google Stitch",
    "skill.programming.title": "编程",
    "skill.programming.body": "Java、C、C++、Vue、HTML/CSS、JavaScript",
    "skill.ai.title": "AI 辅助开发",
    "skill.ai.body": "Claude Code、Codex、Cursor",

    "skill.analysis.title": "分析与沟通",
    "skill.analysis.body": "把分析结论整理成可以直接汇报的洞察；向非技术同事讲清技术结果",
    "skill.ops.title": "运营",
    "skill.ops.body": "需求梳理、流程澄清、跨部门协作。目前正在拓展自己的内容账号，亲手实践内容增长与数据分析。",
    "skill.languages.title": "语言",
    "skill.languages.body": "英语（C1，雅思 7）· 中文（母语）· 日语（JLPT N2）",
    "skill.design.title": "设计与用户思维",
    "skill.design.body": "通过用户研究与旅程地图理解真实需求；让数据以人们愿意看的方式呈现。",

    /* ---- 项目 ---- */
    "project.1.title": "电商零售数据分析",
    "project.1.desc": "分析英国一家线上批发商的 107 万条交易记录，拆解增长、留存和退货情况。",
    "project.2.title": "智能家居系统原型",
    "project.2.desc": "围绕智能家居控制系统做的用户研究与原型设计。",
    "project.3.title": "小商家数据分析工具",
    "project.3.desc":
      "很多淘宝、抖店、小红书店铺和独立站卖家，手里都有一份导出来就没再打开过的订单表。上传订单 CSV，自动生成 RFM 客户分层、复购率、留存曲线、爆款商品和客单价变化，再给出几条可以直接上手的运营建议。",
    "project.building": "正在进行",
    "project.viewGithub": "在 GitHub 查看",

    /* ---- 联系 ---- */
    "contact.heading": "联系我",
    "contact.intro":
      "我目前在寻找数据分析与运营方向的岗位。如果你正在招人，或者只是想聊聊数据，欢迎随时找我。",
    "contact.emailLabel": "邮箱",

    /* ---- 简历 ---- */
    "resume.heading": "简历下载",
    "resume.intro": "完整版本 —— 教育背景、工作经历，以及上面这些项目的更多细节。",
    "resume.button": "下载我的简历",
    "resume.missing": "还没有上传 —— 给我发邮件，我直接发给你。",

    /* ---- 页脚 ---- */
    "footer.builtWith": "使用 Tailwind CSS 构建",
    "footer.artRoomAria": "打开艺术室",

    /* ---- 艺术室 ---- */
    "art.title": "艺术室",
    "art.close": "回到现实 [ESC]",
    "art.subtitle": "一些和工作无关的创作",
    "art.konami": "你找到了。也可以用这串秘技打开：",
    "art.exit": "按 [ESC] 或点上面的按钮返回。",
  },
};

/* ==========================================================================
   Art Room images.

   Drop your files into images/art/ and list them here. Add or remove entries
   freely — the grid sizes itself. A missing file shows a placeholder frame
   instead of a broken image, so it's safe to deploy before the art is ready.
   ========================================================================== */

/* ==========================================================================
   Resume files.

   Drop your PDFs into the resume/ folder and make the filenames match. If you
   only have one version, point both languages at the same file — the button
   serves whichever matches the language the visitor is reading.
   ========================================================================== */

window.RESUME = {
  en: "resume/Yujia-Duan-Resume-EN.pdf",
  zh: "resume/Yujia-Duan-Resume-ZH.pdf",
};

window.ART_PIECES = [
  { file: "images/art/Overlook.webp", title: "Overlook" },
  { file: "images/art/Distortion.webp", title: "Distortion" },
  { file: "images/art/Prophet.webp", title: "Prophet" },
];

/* Notes on the list above:

   - `title` is shown under the image. A plain string is used in both
     languages — artwork titles read as proper nouns. To give one a Chinese
     title, use an object instead:
         { file: "...", title: { en: "Prophet", zh: "先知" } }

   - `caption` is optional. Add one for a line of small grey text under the
     title, in either form:
         { file: "...", title: "Overlook", caption: "Ink on paper, 2025" }
         { file: "...", title: "Overlook", caption: { en: "...", zh: "..." } }

   - Order here is the order on screen. */
