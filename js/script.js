/* =====================================================
   💙 여기만 수정하세요 (콘텐츠 설정) 💙
   ===================================================== */
const CONFIG = {
  logoText: "YUNJI",

  hero: {
    eyebrow: "MARKETING · PLANNING · CREATIVE",
    nameFirst: "LEE", // 굵은 글씨
    nameLast: "YUNJI.", // 외곽선 글씨
    tagline: ["생각을 콘텐츠로,", "콘텐츠를 경험으로"], // 마지막 줄에 연두색 형광펜이 들어갑니다
  },

  resume: {
    name: "이윤지",
    birth: "2004.10.11",
    education: [
      { date: "2025.03 ~ 재학중", school: "명지대학교(인문)", detail: "미디어앤아트테크놀로지학과" },
      { date: "2023.03 ~ 2024.08", school: "명지전문대학교", detail: "뮤직콘텐츠기획과 음악전문학사" },
    ],
    certificates: [
      { date: "2025.09", name: "멀티미디어콘텐츠제작전문가", note: "" },
      { date: "2023.07", name: "자동차운전면허", note: "2종보통" },
      { date: "2016.03", name: "ITQ 한글파워포인트(한쇼)", note: "A등급" },
    ],
  },

  // About 섹션 맨 아래에 표시되는 툴 아이콘 (순서대로 표시됩니다)
  // abbr: 아이콘 안의 글자, bg: 배경색, fg: 글자색
  aboutTools: [
    { name: "Premiere Pro", abbr: "Pr", bg: "#00005b", fg: "#9999ff" },
    { name: "After Effects", abbr: "Ae", bg: "#00005b", fg: "#d291ff" },
    { name: "Photoshop", abbr: "Ps", bg: "#001e36", fg: "#31a8ff" },
    { name: "Illustrator", abbr: "Ai", bg: "#330000", fg: "#ff9a00" },
    { name: "Figma", icon: "figma", bg: "#1e1e1e" },
    { name: "PowerPoint", abbr: "P", bg: "#c43e1c", fg: "#ffffff" },
    { name: "Word", abbr: "W", bg: "#185abd", fg: "#ffffff" },
  ],

  // 작업물 섹션 상단의 큰 카드 3개 (누르면 해당 분류의 프로젝트만 보여줍니다)
  // kicker/headline/caption: 카드 안의 영문 문구, tone: 카드 색(lime | salmon | peri), deco: 장식 그림(circles | strokes | sheets)
  skills: [
    {
      title: "콘텐츠 기획 & 제작",
      desc: "아이디어를 구체화하고, 영상과 디자인을 활용해 기획을 결과물로 구현합니다.",
      skillItems: ["아이디어 발상 및 기획안 작성", "숏폼·롱폼 영상 편집", "카드뉴스·상세페이지 제작"],
      tags: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Figma"],
      kicker: "CONTENT",
      headline: ["PLAN.", "CREATE.", "DELIVER."],
      caption: "PLANNING & PRODUCTION",
      tone: "lime",
      deco: "circles",
      // 이 카드를 누르면, 아래 분류 태그(categories)가 붙은 프로젝트만 보여줍니다.
      match: ["콘텐츠 기획 & 제작", "콘텐츠 기획", "콘텐츠 제작"],
      // 이 카드를 누르면 나오는 세부 분류 버튼 (각 프로젝트의 format 값과 맞춰집니다)
      subFilters: ["롱폼", "숏폼", "기타"], // 이 순서대로 버튼과 프로젝트가 나열됩니다
    },
    {
      title: "AI 활용",
      desc: "생성형 AI를 활용해 아이디어 구상부터 시각 자료 제작까지 다양한 업무를 효율적으로 수행합니다.",
      skillItems: ["생성형 AI 기반 자료 및 이미지 제작", "AI 활용 기획·제작 보조", "반복 업무 효율화"],
      tags: ["Claude", "ChatGPT", "Google Flow", "Adobe Firefly"],
      kicker: "AI",
      headline: ["PROMPT.", "REFINE.", "CREATE."],
      caption: "GENERATIVE AI",
      tone: "salmon",
      deco: "strokes",
      match: ["AI 활용"],
    },
    {
      title: "SNS 운영 & 콘텐츠 마케팅",
      desc: "타깃과 시장 트렌드를 분석하고, 목적에 맞는 마케팅 콘텐츠를 제작합니다.",
      skillItems: ["타깃 분석 및 트렌드 리서치", "SNS 채널 운영 및 콘텐츠 발행", "성과 데이터 분석"],
      tags: ["Instagram Insights", "GA4", "Meta Ads Manager", "Google Trends"],
      kicker: "MARKETING",
      headline: ["TARGET.", "TREND.", "GROW."],
      caption: "SNS & CONTENT MARKETING",
      tone: "peri",
      deco: "sheets",
      match: ["SNS 운영", "콘텐츠 마케팅"],
    },
  ],

  // format: 숏폼 / 롱폼 / 기타 (콘텐츠 기획 & 제작 세부 분류용)
  // categories: 카드 상단에 뜨는 작은 태그들 (여러 개 가능)
  // tools: 사용한 툴 태그 (선택, 없으면 표시 안 됨)
  // image: 이미지 경로 (없으면 자동으로 플레이스홀더가 표시됩니다)
  portfolio: [
 {
      categories: ["콘텐츠 기획 & 제작"],
      title: "우리의 BGM 공연 (2026)",
      format: "숏폼",
      desc: "MUMW 소속 가수 임정희, 김보경(NEON)의 \n합동 콘서트 '우리의 BGM' 공연 실황 숏폼을 제작하였습니다.",
      tools: ["Premiere Pro", "Photoshop", "ChatGPT"],
      image: "https://i.ytimg.com/vi/jd2kx8eiHtg/hqdefault.jpg",
      media: [
        { type: "youtube", id: "jd2kx8eiHtg" },
        { type: "youtube", id: "UGxi691npO0" },
        { type: "youtube", id: "kXsO1tZE6Tw" },
        { type: "youtube", id: "q8tfFXqK0HY" },
      ],
    },
 {
      categories: ["콘텐츠 기획 & 제작"],
      title: "우리의 BGM 합주 (2026)",
      format: "숏폼",
      desc: "MUMW 소속 가수 임정희, 김보경(NEON)의 \n합동 콘서트 '우리의 BGM' 합주 숏폼을 제작하였습니다.",
      tools: ["Premiere Pro", "Photoshop", "ChatGPT"],
      image: "https://i.ytimg.com/vi/ZxlE-b_aISw/hqdefault.jpg",
      media: [
        { type: "youtube", id: "ZxlE-b_aISw" },
        { type: "youtube", id: "gajTdwqU4Xc" },
        { type: "youtube", id: "__qE-DGApyc" },
        { type: "youtube", id: "6DEIAE_1WG4" },
      ],
    },
    {
      categories: ["콘텐츠 기획 & 제작"],
      title: "우리의 BGM 홍보 (2026)",
      format: "숏폼",
      desc: "MUMW 소속 가수 임정희, 김보경(NEON)의 \n합동 콘서트 '우리의 BGM' 홍보 콘텐츠를 제작하였습니다.",
      tools: ["Premiere Pro", "Photoshop", "ChatGPT"],
      image: "https://i.ytimg.com/vi/-r9rc8EhD5g/hqdefault.jpg",
      media: [
        { type: "youtube", id: "-r9rc8EhD5g" },
        { type: "youtube", id: "Knm8KZgunFw" },
        { type: "youtube", id: "hwjyaEyIpMw" },
        { type: "youtube", id: "k6v9tm-PqiA" },
      ],
    },
    {
      categories: ["콘텐츠 제작"],
      title: "여진(L∞na) 모루인형 콘텐츠 (2026)",
      format: "롱폼",
      desc: "MUMW 소속 가수 여진(L∞na)의 \n여진이의 행운 가득 거북이 모루인형 만들기🍀🐢 \n영상 편집 및 썸네일 제작을 하였습니다.",
      tools: ["Premiere Pro", "Photoshop"],
      image: "https://i.ytimg.com/vi/7mCcBHLVe9Q/hqdefault.jpg",
      media: [{ type: "youtube", id: "7mCcBHLVe9Q" }],
    },
    {
      categories: ["콘텐츠 제작"],
      title: "여진(L∞na) MV Behind (2026)",
      format: "롱폼",
      desc: "MUMW 소속 가수 여진(L∞na)의 \n'Red Hot Chili Summer' MV Behind \n영상 편집 및 썸네일 제작을 하였습니다.",
      tools: ["Premiere Pro", "Photoshop"],
      image: "https://i.ytimg.com/vi/GhnE6aFtwzU/hqdefault.jpg",
      media: [{ type: "youtube", id: "GhnE6aFtwzU" }],
    },
    {
      categories: ["콘텐츠 제작"],
      title: "김보경(NEON) MV Behind (2026)",
      format: "롱폼",
      desc: "MUMW 소속 가수 김보경(NEON)의 \n'별의 요람(Twilight)' MV Behind \n영상 편집 및 썸네일 제작을 하였습니다.",
      tools: ["Premiere Pro", "Photoshop"],
      image: "https://i.ytimg.com/vi/A08rukYNTh8/hqdefault.jpg",
      media: [{ type: "youtube", id: "A08rukYNTh8" }],
    },
    {
      categories: ["콘텐츠 기획 & 제작", "AI 활용"],
      title: "브이캔디 홍보 숏폼 (2026)",
      format: "숏폼",
      desc: "바이탈코어의 브이캔디 제품 홍보를 위한 \n바이럴 숏폼 콘텐츠를 직접 기획하고 제작했습니다.",
      tools: ["Premiere Pro", "Photoshop", "Google Flow"],
      image: "https://i.ytimg.com/vi/SfWGY9rAX_g/hqdefault.jpg",
      media: [
        { type: "youtube", id: "SfWGY9rAX_g", caption: "본 콘텐츠는 AI를 활용해 제작하였습니다." },
        { type: "youtube", id: "uzQuflIzgxg", caption: "본 콘텐츠는 AI를 활용해 제작하였습니다." },
        { type: "youtube", id: "K-RjSWfO4fw", caption: "본 콘텐츠는 AI를 활용해 제작하였습니다." },
        { type: "image", src: "./images/image 150.png", caption: "본 콘텐츠는 AI를 활용해 제작하였습니다." },
      ],
    },
    {
      categories: ["콘텐츠 기획 & 제작", "AI 활용"],
      title: "바이탈코어 상세페이지 (2026)",
      format: "기타",
      desc: "건강기능식품 브랜드 \"바이탈코어\"의 \n제품 상세페이지 및 홈페이지 배너를 기획·제작하였습니다.",
      tools: ["Figma", "Photoshop", "Gemini", "ChatGPT"],
      image: "./images/본문 10.png",
      thumbFit: "contain",
      media: [
        { type: "image", src: "./images/본문 10.png", caption: "인물 이미지는 AI를 활용해 제작하였습니다." },
        { type: "image", src: "./images/1안_수정.png", scroll: true, caption: "인물 이미지는 AI를 활용해 제작하였습니다." },
        { type: "image", src: "./images/배너_모바일ㅊ.png" },
        { type: "image", src: "./images/배너_모바일b.png" },
      ],
    },
      {
      categories: ["콘텐츠 기획 & 제작", "AI 활용"],
      title: "로얄캐슬 홍보 콘텐츠 (2026)",
      format: "숏폼",
      desc: "타깃 페르소나를 기반으로 부동산 홍보 숏폼을 \n기획·제작했습니다.",
      tools: ["Figma", "Premiere Pro", "Claude"],
      image: "./images/work1_jpg",
      // "자세히 보기"를 눌렀을 때 여기 나열한 이미지/영상을 전부 넘겨볼 수 있습니다.
      // 이미지를 더 올리면 아래에 { type: "image", src: "./images/파일명.jpg" }, 줄만 추가하세요.
      media: [
        { type: "youtube", id: "2TPFjxp0eOI" },
        { type: "youtube", id: "Lt_mPA9vSyc" },
        { type: "image", src: "./images/work1-3-1.jpg" },
      ],
    },
    {
      categories: ["콘텐츠 제작"],
      title: "Color Grading (2026)",
      format: "롱폼",
      desc: "장면의 분위기에 맞춰 색감, 노출, 대비를 조정하여 영상의 분위기를 개선하였습니다.",
      tools: ["DaVinci Resolve", "Premiere Pro"],
      image: "./images/썸넬.png",
      media: [
        { type: "youtube", id: "nkpbxITAha4" },
        { type: "youtube", id: "KyxhXg5Vgxk" },
      ],
    },
      {
      categories: ["콘텐츠 기획 & 제작", "SNS 운영"],
      title: "학과 인스타그램 (2026)",
      format: "기타",
      desc: "학과 인스타그램을 운영하며 \n1개월 간 총 조회수 약 214만 회, 프로필 방문 약 4만 7천 회 달성하였습니다.",
      tools: ["Figma", "Premiere Pro"],
      link: { label: "인스타그램에서 보기", url: "https://www.instagram.com/mju.mna/" },
      image: "./images/로고.png",
      media: [
        { type: "image", src: "./images/로고.png", fit: "cover" },
        { type: "image", src: "./images/릴스 1.png"},
        { type: "image", src: "./images/릴스 2.png"},
        { type: "image", src: "./images/MT 1.png"},
        { type: "image", src: "./images/MT 2.png"},
        { type: "image", src: "./images/MT 5.png"},
      ],
    },
    {
      categories: ["콘텐츠 기획 & 제작"],
      title: "반려동물 서비스 (2025)",
      format: "기타",
      desc: "사용자 리서치를 기반으로 반려동물 보호자의 니즈를 분석하고, 서비스 기획부터 프로토타입 제작까지 진행하였습니다.",
      tools: ["Figma"],
      image: "./images/하루.png",
      media: [
        { type: "figma", src: "https://embed.figma.com/proto/hCcYih7N0PP3OPJallCBA6/HARU?node-id=1-39&viewport=121%2C198%2C0.45&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1&embed-host=share" },
      ],
    },
    {
      categories: ["콘텐츠 기획 & 제작"],
      title: " 가상 브랜드 콘텐츠 (2025)",
      format: "기타",
      desc: "가상의 사료 브랜드 \"Green Pet\"의 콘텐츠 썸네일을 제작하였습니다.",
      tools: ["Photoshop", "Figma"],
      image: "./images/사료 유튜브.png",
      media: [
        { type: "image", src: "./images/사료 유튜브.png" },
        { type: "image", src: "./images/사료 인스타그램.png" },
      ],
    },
  ],

  contact: {
    title: "CONTACT",
    email: "yoonji5850@naver.com",
  },

  footerText: "© 2026 Lee Yunji",
};
/* ===================================================== */


document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initReveal();
  initFab();
  initContactForm();
  initPortfolioModal();
  initSkillFilter();
});

/* ---------- Skill -> project filter ---------- */
function matchesSkill(project, skill) {
  const keys = skill.match || [];
  return (project.categories || []).some((c) => keys.includes(String(c).trim()));
}

function initSkillFilter() {
  const skillCards = document.querySelectorAll(".cat-card[data-skill]");
  const projectCards = document.querySelectorAll(".p-card");
  const bar = document.getElementById("portfolioFilter");
  const label = document.getElementById("portfolioFilterLabel");
  const resetBtn = document.getElementById("portfolioFilterReset");
  const subBar = document.getElementById("portfolioSubFilter");
  const listLabel = document.getElementById("worksListLabel");

  let activeSkill = null; // index in CONFIG.skills, or null
  let activeSub = null; // e.g. "숏폼", or null for 전체

  function apply() {
    const skill = activeSkill === null ? null : CONFIG.skills[activeSkill];
    const inSkill = (item) => !skill || matchesSkill(item, skill);
    const inSub = (item) => !activeSub || item.format === activeSub;

    // 세부 분류가 있는 카테고리는 subFilters 순서(롱폼 → 숏폼 → 기타)로, 아니면 원래 순서로 정렬
    const subs0 = (skill && skill.subFilters) || [];
    const rank = (item) => {
      if (!subs0.length) return 0;
      const r = subs0.indexOf(item.format);
      return r === -1 ? subs0.length : r;
    };
    const grid = document.getElementById("portfolioGrid");
    [...projectCards]
      .sort((a, b) => {
        const ia = Number(a.dataset.index), ib = Number(b.dataset.index);
        return rank(CONFIG.portfolio[ia]) - rank(CONFIG.portfolio[ib]) || ia - ib;
      })
      .forEach((card) => grid.appendChild(card));

    let shown = 0;
    projectCards.forEach((card) => {
      const item = CONFIG.portfolio[Number(card.dataset.index)];
      const ok = inSkill(item) && inSub(item);
      card.classList.toggle("is-filtered-out", !ok);
      if (ok) {
        card.classList.add("in-view");
        shown++;
      }
    });
    skillCards.forEach((c) => c.classList.toggle("is-active", activeSkill !== null && Number(c.dataset.skill) === activeSkill));
    listLabel.textContent = `${skill ? "Projects" : "All projects"} / ${String(shown).padStart(2, "0")}`;
    bar.hidden = !skill;
    if (!skill) return;

    label.innerHTML = `<strong>${escapeHtml(skill.title)}${activeSub ? ` › ${escapeHtml(activeSub)}` : ""}</strong> 관련 프로젝트 ${shown}개`;

    const subs = skill.subFilters || [];
    subBar.hidden = subs.length === 0;
    if (subs.length) {
      const countOf = (s) => CONFIG.portfolio.filter((p) => matchesSkill(p, skill) && (!s || p.format === s)).length;
      subBar.innerHTML = subs
        .map(
          (s) =>
            `<button type="button" class="sub-chip${s === activeSub ? " is-active" : ""}" data-sub="${escapeHtml(s)}">${escapeHtml(s)} <span>${countOf(s)}</span></button>`
        )
        .join("");
    }
  }

  function scrollToPortfolio() {
    const target = document.getElementById("projectsAnchor");
    const header = document.querySelector(".header");
    const top = target.getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight + 20 : 0);
    window.scrollTo({ top, behavior: "smooth" });
  }

  skillCards.forEach((card) => {
    const select = () => {
      activeSkill = Number(card.dataset.skill);
      activeSub = null;
      apply();
      scrollToPortfolio();
    };
    card.addEventListener("click", select);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        select();
      }
    });
  });

  subBar.addEventListener("click", (e) => {
    const chip = e.target.closest(".sub-chip");
    if (!chip) return;
    activeSub = chip.dataset.sub === activeSub ? null : chip.dataset.sub; // 선택된 버튼을 다시 누르면 해제
    apply();
  });

  resetBtn.addEventListener("click", () => {
    activeSkill = null;
    activeSub = null;
    apply();
  });
}

/* ---------- Category card decorations ---------- */
const ARROW_UP_RIGHT =
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>';

const CAT_DECOS = {
  circles:
    '<svg class="cat-deco" viewBox="0 0 400 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1" opacity=".75"><circle cx="300" cy="255" r="150"/><circle cx="300" cy="255" r="125"/><circle cx="300" cy="255" r="100"/></g></svg>',
  strokes:
    '<svg class="cat-deco" viewBox="0 0 400 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g stroke="currentColor" stroke-width="9" opacity=".5"><line x1="255" y1="175" x2="410" y2="95"/><line x1="368" y1="178" x2="410" y2="108"/></g></svg>',
  sheets:
    '<svg class="cat-deco" viewBox="0 0 400 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1" opacity=".7" transform="rotate(-11 270 260)"><rect x="150" y="70" width="270" height="330"/><rect x="164" y="84" width="270" height="330"/><rect x="178" y="98" width="270" height="330"/></g></svg>',
};

/* ---------- Icons ---------- */
const ICONS = {
  target:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
  share:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><path d="M8.3 10.7l7.4-4.2M8.3 13.3l7.4 4.2"/></svg>',
  pen:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/></svg>',
  sparkle:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>',
};

const TOOL_ICONS = {
  figma:
    '<svg viewBox="0 0 24 36" width="16" height="24" aria-hidden="true"><path fill="#f24e1e" d="M0 6a6 6 0 0 1 6-6h6v12H6a6 6 0 0 1-6-6z"/><path fill="#ff7262" d="M12 0h6a6 6 0 0 1 0 12h-6z"/><path fill="#a259ff" d="M0 18a6 6 0 0 1 6-6h6v12H6a6 6 0 0 1-6-6z"/><circle fill="#1abcfe" cx="18" cy="18" r="6"/><path fill="#0acf83" d="M0 30a6 6 0 0 1 6-6h6v6a6 6 0 0 1-12 0z"/></svg>',
};

/* ---------- Render content from CONFIG ---------- */
function renderContent() {
  const $ = (id) => document.getElementById(id);

  $("logoText").textContent = CONFIG.logoText;

  $("heroEyebrow").textContent = CONFIG.hero.eyebrow;
  $("heroNameFirst").textContent = CONFIG.hero.nameFirst;
  $("heroNameLast").textContent = CONFIG.hero.nameLast;
  $("heroTagline").innerHTML = CONFIG.hero.tagline
    .map((line, i, arr) =>
      i === arr.length - 1 ? `<mark class="hero-hl">${escapeHtml(line)}</mark>` : escapeHtml(line)
    )
    .join("<br>");

  $("resumeName").textContent = CONFIG.resume.name;
  $("resumeMeta").innerHTML = `
    <li>생년월일 ${escapeHtml(CONFIG.resume.birth)}</li>
    <li>이메일 ${escapeHtml(CONFIG.contact.email)}</li>
  `;

  $("eduList").innerHTML = CONFIG.resume.education
    .map(
      (e) => `
      <li>
        <span class="r-date">${escapeHtml(e.date)}</span>
        <span class="r-main"><strong>${escapeHtml(e.school)}</strong> | <span>${escapeHtml(e.detail)}</span></span>
      </li>`
    )
    .join("");

  $("certList").innerHTML = CONFIG.resume.certificates
    .map(
      (c) => `
      <li>
        <span class="r-date">${escapeHtml(c.date)}</span>
        <span class="r-main"><strong>${escapeHtml(c.name)}</strong></span>
        <span class="r-note">${escapeHtml(c.note)}</span>
      </li>`
    )
    .join("");

  $("aboutTools").innerHTML = (CONFIG.aboutTools || [])
    .map(
      (t) => `
      <li class="tool-item">
        <span class="tool-badge" style="background:${escapeHtml(t.bg || "#1e1e1e")};color:${escapeHtml(t.fg || "#fff")}">${
          t.icon === "figma" ? TOOL_ICONS.figma : escapeHtml(t.abbr || t.name.slice(0, 2))
        }</span>
        <span class="tool-name">${escapeHtml(t.name)}</span>
      </li>`
    )
    .join("");

  // Category cards (works section)
  const pad2 = (n) => String(n).padStart(2, "0");
  $("worksCounter").textContent = `Selected works / 01—${pad2(CONFIG.skills.length)}`;
  $("catGrid").innerHTML = CONFIG.skills
    .map(
      (s, i) => `
      <div class="cat-card reveal" data-skill="${i}" tabindex="0" role="button" aria-label="${escapeHtml(s.title)} 관련 프로젝트 보기">
        <div class="cat-tile tone-${escapeHtml(s.tone || "lime")}">
          ${CAT_DECOS[s.deco] || ""}
          <span class="cat-kicker">${pad2(i + 1)} / ${escapeHtml(s.kicker || "")}</span>
          <p class="cat-headline">${(s.headline || []).map((l) => escapeHtml(l)).join("<br>")}</p>
          <span class="cat-caption">${escapeHtml(s.caption || "")}</span>
        </div>
        <div class="cat-meta">
          <div>
            <h3 class="cat-title">${escapeHtml(s.title)}</h3>
            <p class="cat-sub">${(s.skillItems || []).map((it) => escapeHtml(it)).join(" · ")}</p>
          </div>
          <span class="cat-arrow" aria-hidden="true">${ARROW_UP_RIGHT}</span>
        </div>
      </div>`
    )
    .join("");

  // Portfolio grid
  $("portfolioGrid").innerHTML = CONFIG.portfolio
    .map(
      (p, i) => `
      <div class="p-card reveal" data-index="${i}" tabindex="0" role="button" aria-label="${escapeHtml(p.title)} 자세히 보기">
        <div class="p-thumb">
          <img src="${escapeHtml(assetUrl(p.image))}" alt="${escapeHtml(p.title)}" class="${p.thumbFit === "contain" ? "is-contain" : ""}"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="p-thumb-fallback" style="display:none;">${escapeHtml(p.title)}</div>
          ${p.video ? `<div class="p-play-badge">▶</div>` : ""}
          ${p.media && p.media.length > 1 ? `<div class="p-count-badge">${p.media.length}장</div>` : ""}
          <div class="p-thumb-overlay"><span>자세히 보기</span></div>
        </div>
        <div class="p-body">
          <div class="p-tags">
            ${(p.categories || []).map((c) => `<span class="p-tag">${escapeHtml(c)}</span>`).join("")}
          </div>
          <h3 class="p-title">${escapeHtml(p.title)}</h3>
          <p class="p-desc">${escapeHtml(p.desc).replace(/\n/g, "<br>")}</p>
          ${
            p.tools && p.tools.length
              ? `<div class="p-tools">${p.tools.map((t) => `<span class="p-tool-tag">${escapeHtml(t)}</span>`).join("")}</div>`
              : ""
          }
        </div>
      </div>`
    )
    .join("");
  // trigger fallback for missing images immediately (in case onerror already fired before observer attach)
  document.querySelectorAll(".p-thumb img").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) {
      img.style.display = "none";
      img.nextElementSibling.style.display = "flex";
    }
  });

  $("contactTitle").textContent = CONFIG.contact.title;
  $("contactDesc").innerHTML = `<span class="contact-email-label">E-mail</span>${escapeHtml(CONFIG.contact.email)}`;
  $("formNote").textContent = "";

  $("footerText").textContent = CONFIG.footerText;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

// macOS decomposes Hangul (and other accented/composed Unicode) filenames into NFD
// when uploaded via Finder or a browser file picker, and GitHub stores that exact
// byte sequence. A path typed into this file (normal NFC text) then 404s even though
// it looks identical to the real filename. Normalizing every asset path to NFD before
// it becomes a URL matches how these uploads actually land.
function assetUrl(path) {
  return path ? path.normalize("NFD") : path;
}

// Normalizes a portfolio item's media into a list of { type, src, poster }.
// Falls back to the single image/video fields when `media` isn't set, so
// existing single-item entries keep working unchanged.
function getMediaList(item) {
  if (item.media && item.media.length) return item.media;
  if (item.video) return [{ type: "video", src: item.video, poster: item.image || "" }];
  if (item.image) return [{ type: "image", src: item.image }];
  return [];
}

/* ---------- Header background on scroll ---------- */
function initHeaderScroll() {
  const header = document.getElementById("header");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("open");
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      nav.classList.remove("open");
    });
  });
}

/* ---------- Smooth scroll with fixed-header offset ---------- */
function initSmoothScroll() {
  const header = document.getElementById("header");

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const offset = header.offsetHeight - 4;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ---------- Scroll reveal animation ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------- Floating contact button visibility ---------- */
function initFab() {
  const fab = document.getElementById("fabContact");
  const hero = document.getElementById("hero");
  const contact = document.getElementById("contact");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) {
          fab.classList.toggle("visible", !entry.isIntersecting);
        }
        if (entry.target === contact && entry.isIntersecting) {
          fab.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(hero);
  observer.observe(contact);
}

/* ---------- Portfolio detail modal ---------- */
function initPortfolioModal() {
  const modal = document.getElementById("pmodal");
  const overlay = document.getElementById("pmodalOverlay");
  const closeBtn = document.getElementById("pmodalClose");
  const thumbInner = document.getElementById("pmodalThumbInner");
  const img = document.getElementById("pmodalImg");
  const video = document.getElementById("pmodalVideo");
  const figmaFrame = document.getElementById("pmodalFigma");
  const imgFallback = document.getElementById("pmodalImgFallback");
  const prevBtn = document.getElementById("pmodalPrev");
  const nextBtn = document.getElementById("pmodalNext");
  const counter = document.getElementById("pmodalCounter");
  const thumbsWrap = document.getElementById("pmodalThumbs");
  const tags = document.getElementById("pmodalTags");
  const title = document.getElementById("pmodalTitle");
  const desc = document.getElementById("pmodalDesc");
  const linkEl = document.getElementById("pmodalLink");
  const tools = document.getElementById("pmodalTools");
  const mediaCaption = document.getElementById("pmodalMediaCaption");

  const modalBody = document.querySelector(".pmodal-body");
  const projPrevBtn = document.getElementById("pmodalProjPrev");
  const projNextBtn = document.getElementById("pmodalProjNext");

  let mediaList = [];
  let mediaIndex = 0;
  let projectIndex = 0;

  function renderMedia() {
    const m = mediaList[mediaIndex];
    imgFallback.style.display = "none";

    if (!m) {
      img.style.display = "none";
      video.style.display = "none";
      figmaFrame.style.display = "none";
      figmaFrame.src = "";
      imgFallback.style.display = "flex";
    } else if (m.type === "video") {
      img.style.display = "none";
      figmaFrame.style.display = "none";
      figmaFrame.src = "";
      video.style.display = "block";
      video.pause();
      video.src = assetUrl(m.src);
      video.poster = m.poster ? assetUrl(m.poster) : "";
      video.muted = true;
      video.play().catch(() => {});
    } else if (m.type === "figma" || m.type === "youtube") {
      img.style.display = "none";
      video.style.display = "none";
      video.removeAttribute("src");
      video.load();
      figmaFrame.style.display = "block";
      figmaFrame.src =
        m.type === "youtube"
          ? `https://www.youtube.com/embed/${m.id}?rel=0&playsinline=1&autoplay=1&controls=0&iv_load_policy=3${m.start ? `&start=${m.start}` : ""}`
          : m.src;
    } else {
      video.style.display = "none";
      video.removeAttribute("src");
      video.load();
      figmaFrame.style.display = "none";
      figmaFrame.src = "";
      img.style.display = "block";
      img.src = assetUrl(m.src);
      img.alt = title.textContent;
    }

    img.classList.toggle("is-cover", !!m && m.fit === "cover");
    thumbInner.classList.toggle("is-scroll", !!m && m.type !== "video" && m.type !== "figma" && m.type !== "youtube" && m.scroll === true);
    thumbInner.scrollTop = 0;

    mediaCaption.textContent = m && m.caption ? m.caption : "";
    mediaCaption.style.display = m && m.caption ? "block" : "none";

    const multiple = mediaList.length > 1;
    prevBtn.style.display = multiple ? "flex" : "none";
    nextBtn.style.display = multiple ? "flex" : "none";
    counter.style.display = multiple ? "block" : "none";
    counter.textContent = `${mediaIndex + 1} / ${mediaList.length}`;

    thumbsWrap.querySelectorAll(".pmodal-thumb-item").forEach((el, idx) => {
      el.classList.toggle("active", idx === mediaIndex);
    });
  }

  function goTo(idx) {
    mediaIndex = (idx + mediaList.length) % mediaList.length;
    renderMedia();
  }

  // Drag-to-scroll for tall "detail page"-style images (media item with scroll:true).
  let isDragging = false;
  let dragStartY = 0;
  let dragStartScroll = 0;
  thumbInner.addEventListener("mousedown", (e) => {
    if (!thumbInner.classList.contains("is-scroll")) return;
    isDragging = true;
    dragStartY = e.clientY;
    dragStartScroll = thumbInner.scrollTop;
    thumbInner.classList.add("dragging");
    e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    thumbInner.scrollTop = dragStartScroll - (e.clientY - dragStartY);
  });
  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    thumbInner.classList.remove("dragging");
  });

  function openModal(item) {
    projectIndex = Math.max(0, CONFIG.portfolio.indexOf(item));
    mediaList = getMediaList(item);
    mediaIndex = 0;
    imgFallback.textContent = item.title;

    thumbsWrap.innerHTML =
      mediaList.length > 1
        ? mediaList
            .map(
              (m, idx) => `
        <button class="pmodal-thumb-item${idx === 0 ? " active" : ""}" data-idx="${idx}" aria-label="${idx + 1}번째 콘텐츠 보기">
          ${
            m.type === "video"
              ? `<span class="pmodal-thumb-play">▶</span>${
                  m.poster
                    ? `<img src="${escapeHtml(assetUrl(m.poster))}" alt="" />`
                    : `<video src="${escapeHtml(assetUrl(m.src))}#t=0.1" muted preload="auto" playsinline></video>`
                }`
              : m.type === "figma"
              ? `<span class="pmodal-thumb-figma">Figma</span>`
              : m.type === "youtube"
              ? `<span class="pmodal-thumb-play">▶</span><img src="https://i.ytimg.com/vi/${escapeHtml(m.id)}/hqdefault.jpg" alt="" />`
              : `<img src="${escapeHtml(assetUrl(m.src))}" alt="" />`
          }
        </button>`
            )
            .join("")
        : "";
    thumbsWrap.style.display = mediaList.length > 1 ? "flex" : "none";

    // Force a frame to paint for video thumbnails that have no poster image.
    thumbsWrap.querySelectorAll(".pmodal-thumb-item video").forEach((v) => {
      const showFrame = () => {
        try {
          v.currentTime = 0.1;
        } catch (e) {}
      };
      v.addEventListener("loadedmetadata", showFrame, { once: true });
      if (v.readyState >= 1) showFrame();
    });

    renderMedia();

    tags.innerHTML = (item.categories || [])
      .map((c) => `<span class="p-tag">${escapeHtml(c)}</span>`)
      .join("");
    title.textContent = item.title;
    desc.innerHTML = escapeHtml(item.detail || item.desc).replace(/\n/g, "<br>");
    if (item.link) {
      linkEl.href = item.link.url;
      linkEl.textContent = `${item.link.label || "링크 보기"} ↗`;
      linkEl.style.display = "inline-flex";
    } else {
      linkEl.style.display = "none";
    }
    tools.innerHTML =
      item.tools && item.tools.length
        ? item.tools.map((t) => `<span class="p-tool-tag">${escapeHtml(t)}</span>`).join("")
        : "";

    // Side arrows to move to the previous / next project (wrap around)
    const showProjArrows = visibleProjectIndices().length > 1 ? "flex" : "none";
    projPrevBtn.style.display = showProjArrows;
    projNextBtn.style.display = showProjArrows;
    modalBody.scrollTop = 0;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  // Project indices currently shown in the grid (respects the skill filter)
  function visibleProjectIndices() {
    return [...document.querySelectorAll(".p-card:not(.is-filtered-out)")].map((c) => Number(c.dataset.index));
  }

  function goProject(delta) {
    let list = visibleProjectIndices();
    if (!list.includes(projectIndex)) list = CONFIG.portfolio.map((_, i) => i);
    const pos = list.indexOf(projectIndex);
    video.pause();
    openModal(CONFIG.portfolio[list[(pos + delta + list.length) % list.length]]);
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    video.pause();
  }

  document.querySelectorAll(".p-card").forEach((card) => {
    const item = CONFIG.portfolio[Number(card.dataset.index)];
    if (!item) return;
    card.addEventListener("click", () => openModal(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(item);
      }
    });
  });

  img.onerror = () => {
    img.style.display = "none";
    imgFallback.style.display = "flex";
  };

  projPrevBtn.addEventListener("click", () => goProject(-1));
  projNextBtn.addEventListener("click", () => goProject(1));
  prevBtn.addEventListener("click", () => goTo(mediaIndex - 1));
  nextBtn.addEventListener("click", () => goTo(mediaIndex + 1));
  thumbsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".pmodal-thumb-item");
    if (btn) goTo(Number(btn.dataset.idx));
  });

  overlay.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft" && mediaList.length > 1) goTo(mediaIndex - 1);
    if (e.key === "ArrowRight" && mediaList.length > 1) goTo(mediaIndex + 1);
  });
}

/* ---------- Contact form (submits via FormSubmit) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitBtnDefaultText = submitBtn.textContent;
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(CONFIG.contact.email)}`;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "전송 중...";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("request failed");

      showToast("문의가 접수되었습니다. 빠르게 연락드릴게요!");
      form.reset();
    } catch (err) {
      showToast("전송에 실패했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = submitBtnDefaultText;
    }
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 2800);
  }
}
