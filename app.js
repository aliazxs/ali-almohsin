const copy = {
  en: {
    dir: "ltr",
    langLabel: "عربي",
    nav: [
      ["home", "Index"],
      ["work", "Work"],
      ["projects", "Projects"],
      ["contact", "Contact"],
    ],
    homeKicker: "Mobile application developer · Al-Ahsa",
    homeTitle: "Ali Almohsin",
    homeLede:
      "I design and ship Flutter applications that people actually use — bilingual, careful with private data, and built for both the workplace and the home.",
    facts: [
      ["Now", "Mobile Application Developer at Al-Bilad Arabia"],
      ["Focus", "Flutter · Arabic & English interfaces"],
      ["Based", "Al-Ahsa, Saudi Arabia"],
    ],
    ctaProjects: "See the work",
    ctaContact: "Write to me",
    strips: [
      ["01", "Enterprise", "Workplace requests, housing, and field work for Aramco — one app, two jobs."],
      ["02", "Family", "A private circle for grocery lists, tasks, and routines. Built in Al-Ahsa."],
      ["03", "Public", "Tameni for the food and drug authority, and the Saudi Professional League app, on iPhone and Android."],
    ],
    workTitle: "Practice",
    workNote: "Public record",
    roles: [
      {
        when: "Present",
        title: "Mobile Application Developer",
        org: "Al-Bilad Arabia",
        body: "Software for mobile first, and for the web when the product needs it. The public headline is Flutter on the front end. Day to day that means full applications: authentication, bilingual screens, device security, and releases for iOS and Android.",
      },
      {
        when: "Earlier",
        title: "Mobile App Developer",
        org: "Innosoft SA",
        body: "Consumer and government apps: the Saudi Professional League on Flutter, Tameni for the Saudi Food and Drug Authority, the SFDA mobile application, and the ministry e-services rebuilt in ASP.NET.",
      },
      {
        when: "Degree",
        title: "Computer Science",
        org: "Jubail University College",
        body: "Computer Science at Jubail University College.",
      },
    ],
    projectsTitle: "Projects",
    projectsNote: "Open a plate",
    back: "All projects",
    contactTitle: "A short note is enough.",
    contactLede: "I read mail and LinkedIn. The portfolio is the long version.",
    foot: "Al-Ahsa",
    blocks: {
      does: "What it does",
      stack: "How it is built",
      found: "Where it lives",
    },
  },
  ar: {
    dir: "rtl",
    langLabel: "EN",
    nav: [
      ["home", "البداية"],
      ["work", "العمل"],
      ["projects", "المشاريع"],
      ["contact", "تواصل"],
    ],
    homeKicker: "مطوّر تطبيقات جوّال · الأحساء",
    homeTitle: "علي المحسن",
    homeLede:
      "أصمّم وأطلق تطبيقات Flutter يستخدمها الناس فعلًا: بالعربية والإنجليزية، حريصة على البيانات الخاصة، وللعمل وللبيت.",
    facts: [
      ["الآن", "مطوّر تطبيقات جوّال في البلاد العربية"],
      ["التركيز", "Flutter · واجهات عربية وإنجليزية"],
      ["المكان", "الأحساء، السعودية"],
    ],
    ctaProjects: "شاهد العمل",
    ctaContact: "راسلني",
    strips: [
      ["٠١", "المنشآت", "طلبات ومساكن وعمل ميداني لأرامكو — تطبيق واحد لوظيفتين."],
      ["٠٢", "العائلة", "دائرة خاصة للبقالة والمهام والروتين. صُنع في الأحساء."],
      ["٠٣", "عام", "طمني لهيئة الغذاء والدواء، وتطبيق الدوري السعودي للمحترفين، على iPhone وAndroid."],
    ],
    workTitle: "الممارسة",
    workNote: "السجل العام",
    roles: [
      {
        when: "الآن",
        title: "مطوّر تطبيقات جوّال",
        org: "البلاد العربية",
        body: "برمجيات للجوّال أولًا، وللويب حين يحتاجها المنتج. العنوان العام هو Flutter في الواجهة. عمليًا هذا يعني تطبيقًا كاملًا: الدخول، والشاشات بلغتين، وأمان الجهاز، وإصدارات iOS وAndroid.",
      },
      {
        when: "سابقًا",
        title: "مطوّر تطبيقات جوّال",
        org: "Innosoft SA",
        body: "تطبيقات للأفراد والجهات الحكومية: الدوري السعودي للمحترفين بـ Flutter، وطمني لهيئة الغذاء والدواء، وتطبيق الهيئة، وإعادة بناء الخدمات الإلكترونية للوزارة بـ ASP.NET.",
      },
      {
        when: "الدراسة",
        title: "علوم الحاسب",
        org: "كلية الجبيل الجامعية",
        body: "علوم الحاسب من كلية الجبيل الجامعية.",
      },
    ],
    projectsTitle: "المشاريع",
    projectsNote: "افتح لوحة",
    back: "كل المشاريع",
    contactTitle: "رسالة قصيرة تكفي.",
    contactLede: "أقرأ البريد وLinkedIn. هذه الصفحة هي النسخة الطويلة.",
    foot: "الأحساء",
    blocks: {
      does: "ماذا يفعل",
      stack: "كيف بُني",
      found: "أين تجده",
    },
  },
};

const projects = [
  {
    id: "aamer",
    en: {
      name: "A'AMER",
      line: "Aramco workplace and field work, in one Flutter app.",
      plate: "Workplace + Onsite",
      summary:
        "A'AMER is the Aramco mobile application I work on: office staff raise and follow facility requests, and technicians run the work order in the field. English and Arabic share one product.",
      does: [
        "Workplace: service requests, activity catalogues, housing offers and leases, and meeting-room reservations.",
        "Onsite: work orders, checklists, parts, tools, and work logs for technicians.",
        "A voice assistant on the home screen that files a real request for the signed-in user.",
        "Biometric sign-in, secure storage, and separate release tracks for iPhone and Android.",
      ],
      stack: ["Flutter", "Dart", "iOS", "Android", "Bilingual EN/AR"],
      found: "Searched the App Store and Play Store. No public listing — it ships to testers on TestFlight and Android.",
      links: [],
    },
    ar: {
      name: "عامر",
      line: "عمل أرامكو المكتبي والميداني في تطبيق Flutter واحد.",
      plate: "المكتب والميدان",
      summary:
        "عامر تطبيق أرامكو للجوّال الذي أعمل عليه: موظف المكتب يرفع طلب الخدمة ويتابعه، والفني ينفّذ أمر العمل في الموقع. العربية والإنجليزية في منتج واحد.",
      does: [
        "المكتب: طلبات الخدمة، ودليل الأنشطة، وعروض السكن والعقود، وحجز قاعات الاجتماع.",
        "الميدان: أوامر العمل، وقوائم الفحص، وقطع الغيار، والأدوات، وسجلات العمل.",
        "مساعد صوتي من الشاشة الرئيسية يسجّل طلبًا حقيقيًا باسم المستخدم الداخل.",
        "دخول بالبصمة، وتخزين آمن، ومساران للإصدار على iPhone وAndroid.",
      ],
      stack: ["Flutter", "Dart", "iOS", "Android", "عربي وإنجليزي"],
      found: "بُحث في App Store وPlay Store. لا إدراج عام — يصل إلى المختبرين عبر TestFlight وAndroid.",
      links: [],
    },
  },
  {
    id: "wuddi",
    en: {
      name: "Wuddi",
      line: "Family requests, grocery lists, and routines in a private circle.",
      plate: "وُدِّي",
      summary:
        "Wuddi is my own product, made in Al-Ahsa. A household shares a circle: grocery items with photos grouped by place, tasks, and routines that repeat on their own. Sign-in is username, email, or the biometrics already on the phone.",
      does: [
        "Private circles for family and friends — members see names, photos, and that circle’s requests, not phone numbers.",
        "Grocery lists with photos, organised by place.",
        "Tasks and timed routines.",
        "Account deletion inside the app, with a published privacy policy and support page.",
      ],
      stack: ["Flutter", "Riverpod", "GoRouter", "Supabase", "On-device biometrics"],
      found: "Searched both stores. No Wuddi listing. Similarly named apps are other products. Privacy and support are live.",
      links: [["ودي · Wuddi", "https://aliazxs.github.io/"]],
    },
    ar: {
      name: "وُدِّي",
      line: "طلبات العائلة والبقالة والروتين في دائرة خاصة.",
      plate: "من الأحساء",
      summary:
        "وُدِّي منتجي، من الأحساء. أهل البيت يشاركون دائرة: بقالة بالصور حسب المكان، ومهام، وروتينات تتكرر وحدها. الدخول باسم المستخدم أو البريد أو ببصمة الجهاز.",
      does: [
        "دوائر خاصة للعائلة والأصدقاء — الأعضاء يرون الاسم والصورة وطلبات الدائرة، لا رقم الجوال.",
        "قوائم بقالة بالصور، مرتبة حسب المكان.",
        "مهام وروتينات موقوتة.",
        "حذف الحساب من داخل التطبيق، مع سياسة خصوصية وصفحة دعم منشورتين.",
      ],
      stack: ["Flutter", "Riverpod", "GoRouter", "Supabase", "بصمة الجهاز"],
      found: "بُحث في المتجرين. لا إدراج باسم وُدِّي. التطبيقات قريبة الاسم منتجات أخرى. الخصوصية والدعم منشوران.",
      links: [["ودي · Wuddi", "https://aliazxs.github.io/"]],
    },
  },
  {
    id: "global-optimizer",
    en: {
      name: "Global Optimizer",
      line: "Downstream planning for Aramco, from operational data.",
      plate: "Nov 2024 – present",
      summary:
        "An initiative under Saudi Aramco’s Downstream Digital Center. It takes S/4HANA IS-Oil operational data from production and connects it to Cognite Data Fusion, so planning, the supply chain, and profitability can use live operations instead of a stale extract.",
      does: [
        "Use downstream operational data from the production S/4HANA landscape.",
        "Integrate that data with Cognite Data Fusion.",
        "Support planning, supply-chain optimisation, and profitability.",
      ],
      stack: ["SAP ABAP", "Object-oriented ABAP", "S/4HANA IS-Oil", "Cognite Data Fusion"],
      found: "Searched both stores. No public listing — this is an internal Aramco programme.",
      links: [["LinkedIn", "https://www.linkedin.com/in/ali-almohsin/"]],
    },
    ar: {
      name: "المحسّن العالمي",
      line: "تخطيط قطاع التكرير في أرامكو من بيانات التشغيل.",
      plate: "نوفمبر 2024 – الآن",
      summary:
        "مبادرة ضمن مركز التكرير الرقمي في أرامكو. تأخذ بيانات التشغيل من S/4HANA IS-Oil في بيئة الإنتاج وتربطها بـ Cognite Data Fusion، فيعتمد التخطيط وسلسلة الإمداد والربحية على التشغيل الحي لا على نسخة قديمة.",
      does: [
        "استخدام بيانات التشغيل من بيئة الإنتاج في S/4HANA.",
        "ربط هذه البيانات مع Cognite Data Fusion.",
        "دعم التخطيط وتحسين سلسلة الإمداد والربحية.",
      ],
      stack: ["SAP ABAP", "ABAP كائني", "S/4HANA IS-Oil", "Cognite Data Fusion"],
      found: "بُحث في المتجرين. لا إدراج عام — برنامج داخلي لأرامكو.",
      links: [["LinkedIn", "https://www.linkedin.com/in/ali-almohsin/"]],
    },
  },
  {
    id: "sfda",
    en: {
      name: "SFDA Mobile Application",
      line: "Mobile work for the Saudi Food and Drug Authority.",
      plate: "May 2021 – present",
      summary:
        "A mobile application for the Saudi Food and Drug Authority, delivered with Innosoft. On LinkedIn it stands next to Tameni, the public consumer app for the same authority.",
      does: [
        "Mobile product for SFDA, associated with Innosoft.",
        "Listed separately from Tameni, which is the public barcode and product app.",
      ],
      stack: ["Mobile", "Innosoft"],
      found: "Searched both stores. The authority’s public Android app besides Tameni is SFDA inspector. No matching iPhone listing.",
      links: [["Google Play", "https://play.google.com/store/apps/details?id=sahab.srca.generalinspection.sfda"]],
    },
    ar: {
      name: "تطبيق هيئة الغذاء والدواء",
      line: "عمل جوّال للهيئة العامة للغذاء والدواء.",
      plate: "مايو 2021 – الآن",
      summary:
        "تطبيق جوّال للهيئة العامة للغذاء والدواء، مع Innosoft. في LinkedIn يقف بجانب طمني، وهو تطبيق المستهلك العام للهيئة نفسها.",
      does: [
        "منتج جوّال للهيئة، مرتبط بـ Innosoft.",
        "مدرج منفصلًا عن طمني، وهو تطبيق الباركود والمنتجات العام.",
      ],
      stack: ["جوّال", "Innosoft"],
      found: "بُحث في المتجرين. تطبيق الهيئة العام على Android إلى جانب طمني هو مفتش الهيئة. لا يوجد تطبيق مطابق على iPhone.",
      links: [["Google Play", "https://play.google.com/store/apps/details?id=sahab.srca.generalinspection.sfda"]],
    },
  },
  {
    id: "spl",
    en: {
      name: "Saudi Professional League",
      line: "The league app, on iPhone and Android, in Flutter.",
      plate: "Sep 2018 – present",
      summary:
        "The Saudi Professional League mobile application, built with Innosoft in Flutter for both iOS and Android. The app on the stores today is the league’s official one.",
      does: [
        "One Flutter codebase for iPhone and Android.",
        "The league’s own mobile product, not a scores site.",
      ],
      stack: ["Flutter", "iOS", "Android"],
      found: "Live as Saudi Pro League: Official App.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/saudi-pro-league-official-app/id6477780627"],
        ["Google Play", "https://play.google.com/store/apps/details?id=com.pulselive.spl"],
      ],
    },
    ar: {
      name: "الدوري السعودي للمحترفين",
      line: "تطبيق الدوري على iPhone وAndroid بـ Flutter.",
      plate: "سبتمبر 2018 – الآن",
      summary:
        "تطبيق الدوري السعودي للمحترفين، مع Innosoft، بـ Flutter لنظامي iOS وAndroid. التطبيق المنشور اليوم هو التطبيق الرسمي للدوري.",
      does: [
        "قاعدة Flutter واحدة لـ iPhone وAndroid.",
        "منتج الدوري نفسه، وليس موقع نتائج.",
      ],
      stack: ["Flutter", "iOS", "Android"],
      found: "منشور باسم Saudi Pro League: Official App.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/saudi-pro-league-official-app/id6477780627"],
        ["Google Play", "https://play.google.com/store/apps/details?id=com.pulselive.spl"],
      ],
    },
  },
  {
    id: "tameni",
    en: {
      name: "Tameni",
      line: "Scan food, drugs, and medical devices. Know what you are using.",
      plate: "Jan 2018 – present",
      summary:
        "Tameni is the Saudi Food and Drug Authority app for everyday products. Scan a barcode on food, a drug, a cosmetic, or a medical device and read the record the authority holds: recalls, alternatives, and a way to report a problem.",
      does: [
        "Scan barcodes for food, drugs, cosmetics, and medical devices.",
        "Show product alerts, including recalls.",
        "Find drug alternatives.",
        "Report an issue related to the authority.",
      ],
      stack: ["iOS", "Android", "Innosoft"],
      found: "Live on the App Store and Google Play.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/tameni/id1483589368"],
        ["Google Play", "https://play.google.com/store/apps/details?id=sfda.tamini"],
      ],
    },
    ar: {
      name: "طمني",
      line: "امسح الغذاء والدواء والأجهزة الطبية. اعرف ما تستخدم.",
      plate: "يناير 2018 – الآن",
      summary:
        "طمني تطبيق الهيئة العامة للغذاء والدواء للمنتجات اليومية. امسح باركود غذاء أو دواء أو مستحضر تجميل أو جهاز طبي واقرأ سجل الهيئة: الاستدعاءات، والبدائل، وطريق للإبلاغ عن مشكلة.",
      does: [
        "مسح باركود الغذاء والدواء والتجميل والأجهزة الطبية.",
        "عرض تنبيهات المنتج، ومنها الاستدعاء.",
        "إيجاد بدائل للدواء.",
        "الإبلاغ عن مشكلة تخص الهيئة.",
      ],
      stack: ["iOS", "Android", "Innosoft"],
      found: "منشور على App Store وGoogle Play.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/tameni/id1483589368"],
        ["Google Play", "https://play.google.com/store/apps/details?id=sfda.tamini"],
      ],
    },
  },
  {
    id: "erp",
    en: {
      name: "ERP Transformation",
      line: "Corporate systems, one tap away, on a phone or a tablet.",
      plate: "Feb 2024 – Nov 2024",
      summary:
        "A mobile application for Al-Bilad Arabia that shortens internal work. Employees open corporate systems from the phone or tablet instead of hunting through a desktop portal.",
      does: [
        "One place to reach corporate systems.",
        "Built for phone and tablet.",
        "Meant to simplify the employee’s path through daily processes.",
      ],
      stack: ["Mobile", "SAP"],
      found: "Searched both stores. No public listing — this is an internal application.",
      links: [["LinkedIn", "https://www.linkedin.com/in/ali-almohsin/"]],
    },
    ar: {
      name: "تحول نظام الموارد",
      line: "أنظمة الشركة بلمسة، على الجوال أو الجهاز اللوحي.",
      plate: "فبراير 2024 – نوفمبر 2024",
      summary:
        "تطبيق جوّال مع البلاد العربية يختصر العمل الداخلي. يصل الموظف إلى أنظمة الشركة من الجوال أو الجهاز اللوحي بدل البحث في بوابة المكتب.",
      does: [
        "مكان واحد للوصول إلى أنظمة الشركة.",
        "مبني للجوال والجهاز اللوحي.",
        "لتبسيط مسار الموظف في إجراءات اليوم.",
      ],
      stack: ["جوّال", "SAP"],
      found: "بُحث في المتجرين. لا إدراج عام — تطبيق داخلي.",
      links: [["LinkedIn", "https://www.linkedin.com/in/ali-almohsin/"]],
    },
  },
  {
    id: "mysecurity",
    en: {
      name: "mySecurity",
      line: "IDs, visitors, and gate passes for Aramco sites.",
      plate: "Sep 2023 – Feb 2024",
      summary:
        "mySecurity is Saudi Aramco’s channel for industrial security services: ID and sticker, visitors, and material gate passes, plus security observations, announcements, and guidelines. Access extends to dependents, retirees, and contractors.",
      does: [
        "ID and sticker requests.",
        "Visitor management and material gate passes.",
        "EasyPass and gate traffic on the current release.",
        "Security observations, announcements, and guidelines.",
      ],
      stack: ["iOS", "Android", "Flutter"],
      found: "Live as mySecurity SAO on the App Store and Google Play.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/mysecurity-sao/id6503349129"],
        ["Google Play", "https://play.google.com/store/apps/details?id=com.aramco.mySecurityV2"],
      ],
    },
    ar: {
      name: "أمني",
      line: "الهويات والزوار وتصاريح البوابة لمواقع أرامكو.",
      plate: "سبتمبر 2023 – فبراير 2024",
      summary:
        "mySecurity قناة أرامكو لخدمات الأمن الصناعي: الهوية والملصق، والزوار، وتصريح بوابة المواد، مع ملاحظات الأمن والإعلانات والإرشادات. الوصول يشمل التابعين والمتقاعدين والمقاولين.",
      does: [
        "طلبات الهوية والملصق.",
        "إدارة الزوار وتصاريح بوابة المواد.",
        "EasyPass وحركة البوابات في الإصدار الحالي.",
        "ملاحظات الأمن والإعلانات والإرشادات.",
      ],
      stack: ["iOS", "Android", "Flutter"],
      found: "منشور باسم mySecurity SAO على App Store وGoogle Play.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/mysecurity-sao/id6503349129"],
        ["Google Play", "https://play.google.com/store/apps/details?id=com.aramco.mySecurityV2"],
      ],
    },
  },
  {
    id: "mps",
    en: {
      name: "Miscellaneous Payment System",
      line: "Reimbursements and one-off vendor payments.",
      plate: "Jan 2023 – Nov 2023",
      summary:
        "MPS is the financial application that pays people outside the regular payroll run: reimbursements to employees, and ad-hoc payments to vendors.",
      does: [
        "Employee reimbursements.",
        "Ad-hoc payments to vendors.",
      ],
      stack: ["Finance", "Mobile"],
      found: "Searched both stores. No public listing — this is an internal Aramco finance system.",
      links: [["LinkedIn", "https://www.linkedin.com/in/ali-almohsin/"]],
    },
    ar: {
      name: "نظام المدفوعات المتنوعة",
      line: "تعويضات الموظفين ومدفوعات الموردين العارضة.",
      plate: "يناير 2023 – نوفمبر 2023",
      summary:
        "نظام مالي يدفع خارج مسار الرواتب المعتاد: تعويضات للموظفين، ومدفوعات عارضة للموردين.",
      does: [
        "تعويضات الموظفين.",
        "مدفوعات عارضة للموردين.",
      ],
      stack: ["مالية", "جوّال"],
      found: "بُحث في المتجرين. لا إدراج عام — نظام مالي داخلي لأرامكو.",
      links: [["LinkedIn", "https://www.linkedin.com/in/ali-almohsin/"]],
    },
  },
  {
    id: "safelife",
    en: {
      name: "SafeLife",
      line: "Report an observation, a near miss, or an incident — then track it.",
      plate: "May 2021 – Dec 2022",
      summary:
        "SafeLife is Saudi Aramco’s safety application for employees and contractors. It records observations, near misses, and incidents, and it is also used to plan and run safety inspections.",
      does: [
        "Report, manage, and track safety observations, near misses, and incidents.",
        "Create and conduct safety inspections.",
        "Used by employees and contractors.",
      ],
      stack: ["iOS", "Android"],
      found: "Live as Saudi Aramco SafeLife on the App Store and Google Play.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/saudi-aramco-safelife/id1502523273"],
        ["Google Play", "https://play.google.com/store/apps/details?id=com.aramco.safety"],
      ],
    },
    ar: {
      name: "حياة آمنة",
      line: "بلّغ عن ملاحظة أو شبه حادث أو حادث — ثم تابعه.",
      plate: "مايو 2021 – ديسمبر 2022",
      summary:
        "SafeLife تطبيق السلامة في أرامكو للموظفين والمقاولين. يسجّل الملاحظات وشبه الحوادث والحوادث، ويُستخدم أيضًا لتخطيط تفتيش السلامة وتنفيذه.",
      does: [
        "الإبلاغ عن ملاحظات السلامة وشبه الحوادث والحوادث وإدارتها وتتبعها.",
        "إنشاء تفتيش السلامة وتنفيذه.",
        "للموظفين والمقاولين.",
      ],
      stack: ["iOS", "Android"],
      found: "منشور باسم Saudi Aramco SafeLife على App Store وGoogle Play.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/saudi-aramco-safelife/id1502523273"],
        ["Google Play", "https://play.google.com/store/apps/details?id=com.aramco.safety"],
      ],
    },
  },
  {
    id: "hrsd",
    en: {
      name: "Ministry e-services",
      line: "The Ministry of Human Resources e-services, rebuilt.",
      plate: "Dec 2018 – Jan 2020",
      summary:
        "A rebuild of the e-services for the Ministry of Human Resources and Social Development, done with Innosoft in ASP.NET.",
      does: [
        "Redevelopment of the ministry’s online services.",
        "Web application, not a store app.",
      ],
      stack: ["ASP.NET"],
      found: "The ministry’s public e-services app is on both stores.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/ministry-of-hrsd/id1559882070"],
        ["Google Play", "https://play.google.com/store/apps/details?id=sa.gov.hrsd.UnifiedApp"],
      ],
    },
    ar: {
      name: "الخدمات الإلكترونية للوزارة",
      line: "خدمات وزارة الموارد البشرية، أُعيد بناؤها.",
      plate: "ديسمبر 2018 – يناير 2020",
      summary:
        "إعادة بناء الخدمات الإلكترونية لوزارة الموارد البشرية والتنمية الاجتماعية، مع Innosoft، باستخدام ASP.NET.",
      does: [
        "إعادة تطوير خدمات الوزارة على الويب.",
        "تطبيق ويب، وليس تطبيق متجر.",
      ],
      stack: ["ASP.NET"],
      found: "تطبيق الخدمات الإلكترونية للوزارة منشور على المتجرين.",
      links: [
        ["App Store", "https://apps.apple.com/sa/app/ministry-of-hrsd/id1559882070"],
        ["Google Play", "https://play.google.com/store/apps/details?id=sa.gov.hrsd.UnifiedApp"],
      ],
    },
  },
];


const $ = (sel) => document.querySelector(sel);
let lang = localStorage.getItem("aa-lang") || "en";
let booted = false;

function t() {
  return copy[lang];
}

function applyLang() {
  const c = t();
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = c.dir;
  $("#lang").textContent = c.langLabel;
  $("#nav").innerHTML = c.nav
    .map(([id, label]) => `<a href="#/${id === "home" ? "" : id}" data-route="${id}">${label}</a>`)
    .join("");
  localStorage.setItem("aa-lang", lang);
}

function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  const [head, id] = hash.split("/");
  if (!head) return { name: "home" };
  if (head === "projects" && id) return { name: "project", id };
  if (["work", "projects", "contact"].includes(head)) return { name: head };
  return { name: "home" };
}

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function project(id) {
  return projects.find((p) => p.id === id);
}

function home() {
  const c = t();
  return `
    <section class="hero">
      <div>
        <p class="kicker">${esc(c.homeKicker)}</p>
        <h1>${esc(c.homeTitle)}</h1>
        <p class="lede">${esc(c.homeLede)}</p>
        <div class="actions">
          <a class="btn" href="#/projects">${esc(c.ctaProjects)}</a>
          <a class="btn ghost" href="#/contact">${esc(c.ctaContact)}</a>
        </div>
      </div>
      <aside class="hero-side">
        ${c.facts.map(([k, v]) => `<p class="fact"><b>${esc(k)}</b><span>${esc(v)}</span></p>`).join("")}
      </aside>
    </section>
    <section class="strip">
      ${c.strips
        .map(
          ([n, h, p]) => `<article><div class="when">${esc(n)}</div><h2>${esc(h)}</h2><p>${esc(p)}</p></article>`
        )
        .join("")}
    </section>`;
}

function work() {
  const c = t();
  return `
    <div class="section-head"><h2>${esc(c.workTitle)}</h2><span class="when">${esc(c.workNote)}</span></div>
    <div class="timeline">
      ${c.roles
        .map(
          (r) => `<article class="role"><div class="when">${esc(r.when)}</div><div><strong>${esc(r.title)}</strong><div>${esc(r.org)}</div><p>${esc(r.body)}</p></div></article>`
        )
        .join("")}
    </div>`;
}

function projectList() {
  const c = t();
  return `
    <div class="section-head"><h2>${esc(c.projectsTitle)}</h2><span class="when">${esc(c.projectsNote)}</span></div>
    <div class="plist">
      ${projects
        .map((p, i) => {
          const d = p[lang];
          const n = String(i + 1).padStart(2, "0");
          return `<a class="card" href="#/projects/${p.id}"><span class="idx">${n}</span><span><h3>${esc(d.name)}</h3><p>${esc(d.line)}</p></span><span class="arrow">→</span></a>`;
        })
        .join("")}
    </div>`;
}

function projectDetail(id) {
  const p = project(id);
  if (!p) return projectList();
  const c = t();
  const d = p[lang];
  const links = d.links
    .map(([label, href]) => `<a class="btn" href="${esc(href)}" target="_blank" rel="noreferrer">${esc(label)}</a>`)
    .join("");
  return `
    <article class="detail">
      <div class="plate"><small>${esc(d.plate)}</small><strong>${esc(d.name)}</strong></div>
      <div class="prose">
        <a class="back" href="#/projects">← ${esc(c.back)}</a>
        <p class="kicker">${esc(d.line)}</p>
        <h2>${esc(d.name)}</h2>
        <p class="summary">${esc(d.summary)}</p>
        <div class="meta">${d.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
        <h3>${esc(c.blocks.does)}</h3>
        <ul>${d.does.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        <h3>${esc(c.blocks.found)}</h3>
        <p class="note">${esc(d.found)}</p>
        <div class="links">${links}<a class="btn ghost" href="mailto:aliazxs@hotmail.com">${lang === "ar" ? "راسلني" : "Email"}</a></div>
      </div>
    </article>`;
}

function contact() {
  const c = t();
  return `
    <section class="contact">
      <div>
        <p class="kicker">${esc(c.foot)}</p>
        <h1>${esc(c.contactTitle)}</h1>
        <p class="lede">${esc(c.contactLede)}</p>
      </div>
      <div>
        <a class="big" href="mailto:aliazxs@hotmail.com">aliazxs@hotmail.com</a>
        <a class="big" href="https://www.linkedin.com/in/ali-almohsin/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="big" href="https://github.com/aliazxs" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
    <footer class="colophon"><span>Ali Almohsin · علي المحسن</span><span>${esc(c.foot)}</span></footer>`;
}

function render() {
  const r = route();
  const html =
    r.name === "work"
      ? work()
      : r.name === "projects"
        ? projectList()
        : r.name === "project"
          ? projectDetail(r.id)
          : r.name === "contact"
            ? contact()
            : home();
  const paint = () => {
    $("#stage").innerHTML = html;
    const current = r.name === "project" ? "projects" : r.name;
    document.querySelectorAll("#nav a").forEach((a) => {
      if (a.dataset.route === current) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    document.title =
      lang === "ar" ? "علي المحسن — تطبيقات الجوّال" : "Ali Almohsin — Mobile applications";
  };
  const motion = document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (booted && motion) document.startViewTransition(paint);
  else paint();
  booted = true;
}

$("#lang").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  applyLang();
  render();
});

window.addEventListener("hashchange", render);
applyLang();
render();
