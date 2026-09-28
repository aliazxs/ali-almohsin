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
      ["03", "Open", "A public Flutter project for listening to and reading hadith, book by book."],
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
        when: "Degree",
        title: "Computer Science",
        org: "Jubail University College",
        body: "The formal training behind the work. Early projects, including a Java shop system for CS 316, are still on GitHub.",
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
      ["٠٣", "مفتوح", "مشروع Flutter عام للاستماع إلى الحديث وقراءته، كتابًا كتابًا."],
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
        when: "الدراسة",
        title: "علوم الحاسب",
        org: "كلية الجبيل الجامعية",
        body: "التدريب الذي يقوم عليه العمل. المشاريع المبكرة، ومنها نظام متجر بلغة Java لمقرر CS 316، ما زالت على GitHub.",
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
      found: "Shipped to testers through TestFlight and Android builds. It is an enterprise app, not a public consumer listing, so it does not appear on the open App Store or Play Store.",
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
      found: "يصل إلى المختبرين عبر TestFlight وبناءات Android. تطبيق منشأة، وليس تطبيقًا عامًا للمستهلك، لذلك لا يظهر في المتجرين المفتوحين.",
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
      found: "Privacy and support are live. I did not find a public Play Store or App Store listing under this name that belongs to me — similarly named shopping apps are other products.",
      links: [["Privacy & support", "https://aliazxs.github.io/"]],
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
      found: "الخصوصية والدعم منشوران. لم أجد صفحة عامة في Play أو App Store بهذا الاسم تعود لي — تطبيقات التسوق قريبة الاسم منتجات أخرى.",
      links: [["الخصوصية والدعم", "https://aliazxs.github.io/"]],
    },
  },
  {
    id: "words-of-light",
    en: {
      name: "Words of Light",
      line: "Listen to and read hadith, by book, imam, and reciter.",
      plate: "كلامكم نور",
      summary:
        "An open Flutter project that tries to make the words of Ahlul-Bayt easier to approach: pick a topic, an imam, or a reciter, then listen or read. The source is public so books and audio can be added without rebuilding the idea.",
      does: [
        "Browse hadith by topic, book, and reciter.",
        "Listening and reading in the same place.",
        "A short guide in the repo for adding a new book and its audio.",
      ],
      stack: ["Flutter", "Dart"],
      found: "The source is on GitHub. A Play Store app with the same Arabic name is published by a different developer in Iraq; it is not this project.",
      links: [["Source", "https://github.com/aliazxs/words_of_light"]],
    },
    ar: {
      name: "كلامكم نور",
      line: "استماع وقراءة للحديث، حسب الكتاب والإمام والقارئ.",
      plate: "مصدر مفتوح",
      summary:
        "مشروع Flutter مفتوح يقرّب كلمات أهل البيت: تختار موضوعًا أو إمامًا أو قارئًا، ثم تستمع أو تقرأ. المصدر عام حتى تُضاف الكتب والصوتيات من غير إعادة اختراع الفكرة.",
      does: [
        "تصفح الحديث حسب الموضوع والكتاب والقارئ.",
        "الاستماع والقراءة في المكان نفسه.",
        "دليل قصير في المستودع لإضافة كتاب وملفاته الصوتية.",
      ],
      stack: ["Flutter", "Dart"],
      found: "المصدر على GitHub. تطبيق في Play Store بالاسم العربي نفسه لناشر آخر في العراق، وليس هذا المشروع.",
      links: [["المصدر", "https://github.com/aliazxs/words_of_light"]],
    },
  },
  {
    id: "corporate",
    en: {
      name: "Corporate systems",
      line: "Internal corporate applications, from Cordova to Flutter.",
      plate: "CAD",
      summary:
        "Earlier delivery for corporate systems: a Cordova generation, then a Flutter generation of the same kind of internal tools. These repositories are the working record of that shift, not consumer products.",
      does: [
        "Corporate workflows packaged as installable apps.",
        "A move from a web-view stack (Cordova) to Flutter.",
      ],
      stack: ["Flutter", "Cordova"],
      found: "Kept as source repositories. No public store page — they were internal systems.",
      links: [["Cordova source", "https://github.com/aliazxs/CAD_CorporateSystems_CORDOVA"]],
    },
    ar: {
      name: "أنظمة الشركات",
      line: "تطبيقات داخلية، من Cordova إلى Flutter.",
      plate: "CAD",
      summary:
        "تسليم أقدم لأنظمة الشركات: جيل بـ Cordova، ثم جيل بـ Flutter للأدوات الداخلية نفسها. المستودعات سجل هذا الانتقال، وليست منتجات للمستهلك.",
      does: [
        "مسارات عمل للشركات مغلفة كتطبيقات تُثبَّت.",
        "انتقال من واجهة ويب داخل التطبيق إلى Flutter.",
      ],
      stack: ["Flutter", "Cordova"],
      found: "محفوظة كمستودعات مصدر. لا صفحة متجر عامة — كانت أنظمة داخلية.",
      links: [["مصدر Cordova", "https://github.com/aliazxs/CAD_CorporateSystems_CORDOVA"]],
    },
  },
  {
    id: "fruit-shop",
    en: {
      name: "Fruit shop",
      line: "A shop that sells and manages fruit. CS 316, in Java.",
      plate: "Coursework",
      summary:
        "The university project that is still public: design a fruit shop that can sell and manage stock. It is small, and it is where the habit of shipping a whole system started.",
      does: ["Sell fruit.", "Manage the shop’s records."],
      stack: ["Java"],
      found: "Public coursework on GitHub. Not a store app.",
      links: [["Source", "https://github.com/aliazxs/Fruit-shop"]],
    },
    ar: {
      name: "متجر الفاكهة",
      line: "متجر يبيع الفاكهة ويديرها. CS 316 بلغة Java.",
      plate: "دراسة",
      summary:
        "مشروع الجامعة الذي ما زال عامًا: تصميم متجر فاكهة يبيع ويدير المخزون. صغير، ومنه بدأت عادة تسليم نظام كامل.",
      does: ["بيع الفاكهة.", "إدارة سجلات المتجر."],
      stack: ["Java"],
      found: "عمل دراسي عام على GitHub. ليس تطبيق متجر.",
      links: [["المصدر", "https://github.com/aliazxs/Fruit-shop"]],
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
