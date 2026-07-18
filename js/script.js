/* =====================================================
   💙 여기만 수정하세요 (콘텐츠 설정) 💙
   ===================================================== */
const CONFIG = {
  logoText: "PORTFOLIO",

  hero: {
    eyebrow: "PORTFOLIO",
    title: "생각을 콘텐츠로,\n콘텐츠를 경험으로",
    subtitle:
      "콘텐츠 기획부터 카피라이팅, 디자인, 영상 제작까지 폭넓게 다룰 수 있으며,\n트렌드와 데이터를 바탕으로 브랜드의 메시지를 효과적으로 전달하는 방법을\n끊임없이 배우고 고민하며 성장하는 마케터 **이윤지**입니다",
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

  skills: [
    {
      title: "콘텐츠 기획",
      desc: "브랜드와 타깃에 맞는 콘텐츠 전략을 기획합니다.",
      icon: "target",
      skillItems: ["콘텐츠 전략", "트렌드 리서치", "카피라이팅"],
      tags: ["PowerPoint", "Word", "Figma", "Claude"],
    },
    {
      title: "콘텐츠 제작",
      desc: "기획 의도를 시각적으로 전달하는 콘텐츠를 제작합니다.",
      icon: "pen",
      skillItems: ["숏폼 / 롱폼 제작", "카드뉴스 제작", "상세페이지 제작"],
      tags: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Figma"],
    },
    {
      title: "SNS 마케팅",
      desc: "채널 특성에 맞는 콘텐츠를 기획하고 운영합니다.",
      icon: "share",
      skillItems: ["SNS 채널 운영", "콘텐츠 캘린더", "콘텐츠 성과 분석"],
      tags: ["Instagram Insights", "GA4"],
    },
  ],

  // category: 필터 버튼에 사용될 카테고리명
  // image: 이미지 경로 (없으면 자동으로 플레이스홀더가 표시됩니다)
  portfolio: [
    {
      category: "SNS",
      title: "브랜드 인스타그램 콘텐츠",
      desc: "제품 런칭 캠페인 SNS 콘텐츠 시리즈",
      image: "./images/work1.jpg",
    },
    {
      category: "브랜딩",
      title: "브랜드 아이덴티티 콘텐츠",
      desc: "브랜드 스토리텔링 콘텐츠 기획 및 제작",
      image: "./images/work2.jpg",
    },
    {
      category: "영상",
      title: "숏폼 광고 영상",
      desc: "유튜브 쇼츠 / 릴스용 숏폼 콘텐츠",
      image: "./images/work3.jpg",
    },
    {
      category: "SNS",
      title: "이벤트 프로모션 콘텐츠",
      desc: "시즌 프로모션 SNS 캠페인",
      image: "./images/work4.jpg",
    },
    {
      category: "카피라이팅",
      title: "상세페이지 카피라이팅",
      desc: "전환율 개선을 위한 상세페이지 카피",
      image: "./images/work5.jpg",
    },
    {
      category: "브랜딩",
      title: "브랜드 매거진 콘텐츠",
      desc: "브랜드 매거진 기획 및 에디토리얼 콘텐츠",
      image: "./images/work6.jpg",
    },
  ],

  contact: {
    title: "CONTACT",
    email: "yoonji5850@naver.com",
  },

  footerText: "© 2026 Portfolio. All rights reserved.",
};
/* ===================================================== */


document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initReveal();
  initPortfolioFilter();
  initFab();
  initContactForm();
});

/* ---------- Icons ---------- */
const ICONS = {
  target:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
  share:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><path d="M8.3 10.7l7.4-4.2M8.3 13.3l7.4 4.2"/></svg>',
  pen:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>',
};

/* ---------- Render content from CONFIG ---------- */
function renderContent() {
  const $ = (id) => document.getElementById(id);

  $("logoText").textContent = CONFIG.logoText;

  $("heroEyebrow").textContent = CONFIG.hero.eyebrow;
  $("heroTitle").innerHTML = escapeHtml(CONFIG.hero.title).replace(/\n/g, "<br>");
  $("heroSubtitle").innerHTML = formatRichText(CONFIG.hero.subtitle);

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

  $("skillsGrid").innerHTML = CONFIG.skills
    .map(
      (s) => `
      <div class="skill-card reveal">
        <div class="skill-icon">${ICONS[s.icon] || ICONS.target}</div>
        <h3 class="skill-title">${escapeHtml(s.title)}</h3>
        <p class="skill-desc">${escapeHtml(s.desc)}</p>
        <div class="skill-sub">
          <h4 class="skill-sub-title">Skills</h4>
          <ul class="skill-bullets">
            ${(s.skillItems || []).map((it) => `<li>${escapeHtml(it)}</li>`).join("")}
          </ul>
        </div>
        <div class="skill-tags">
          ${(s.tags || []).map((t) => `<span class="skill-tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");

  // Portfolio filter buttons
  const categories = ["전체", ...new Set(CONFIG.portfolio.map((p) => p.category))];
  $("filterBar").innerHTML = categories
    .map(
      (c, i) =>
        `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${escapeHtml(c)}">${escapeHtml(c)}</button>`
    )
    .join("");

  // Portfolio grid
  $("portfolioGrid").innerHTML = CONFIG.portfolio
    .map(
      (p) => `
      <div class="p-card reveal" data-category="${escapeHtml(p.category)}">
        <div class="p-thumb">
          <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="p-thumb-fallback" style="display:none;">${escapeHtml(p.title)}</div>
        </div>
        <div class="p-body">
          <span class="p-tag">${escapeHtml(p.category)}</span>
          <h3 class="p-title">${escapeHtml(p.title)}</h3>
          <p class="p-desc">${escapeHtml(p.desc)}</p>
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
  $("contactDesc").textContent = CONFIG.contact.email;
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

// "**bold**" + "\n" -> <strong>/<br>. Input is escaped first, so this is safe for plain-text config strings.
function formatRichText(str) {
  return escapeHtml(str)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
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

/* ---------- Portfolio category filter ---------- */
function initPortfolioFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".p-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const match = filter === "전체" || card.dataset.category === filter;
        card.classList.toggle("hidden", !match);
      });
    });
  });
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
