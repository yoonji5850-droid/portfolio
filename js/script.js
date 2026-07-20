/* =====================================================
   💙 여기만 수정하세요 (콘텐츠 설정) 💙
   ===================================================== */
const CONFIG = {
  logoText: "PORTFOLIO",

  hero: {
    eyebrow: "PORTFOLIO",
    title: "생각을 콘텐츠로,\n콘텐츠를 경험으로",
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

  // categories: 카드 상단에 뜨는 작은 태그들 (여러 개 가능)
  // tools: 사용한 툴 태그 (선택, 없으면 표시 안 됨)
  // image: 이미지 경로 (없으면 자동으로 플레이스홀더가 표시됩니다)
  portfolio: [
    {
      categories: ["콘텐츠 기획", "콘텐츠 제작"],
      title: "로얄캐슬 (2026)",
      desc: "타깃 페르소나를 기반으로 부동산 홍보 릴스를 \n기획·제작했습니다.",
      tools: ["Figma", "Premiere Pro", "Claude"],
      image: "./images/work1_jpg",
      // "자세히 보기"를 눌렀을 때 여기 나열한 이미지/영상을 전부 넘겨볼 수 있습니다.
      // 이미지를 더 올리면 아래에 { type: "image", src: "./images/파일명.jpg" }, 줄만 추가하세요.
      media: [
        { type: "video", src: "./images/work1-1.mp4" },
        { type: "video", src: "./images/work1-2.mp4", poster: "./images/work1-2-poster.jpg" },
        { type: "image", src: "./images/work1-3-1.jpg" },
      ],
    },
    {
      categories: ["콘텐츠 기획", "콘텐츠 제작", "SNS 운영"],
      title: "MJU.MNA (2026)",
      desc: "학과를 알리기 위한 공감형 콘텐츠를 기획·제작하고, \n공식 인스타그램 계정을 관리하였습니다.",
      tools: ["Figma", "Premiere Pro"],
      link: { label: "인스타그램에서 보기", url: "https://www.instagram.com/mju.mna/" },
      image: "./images/로고.png",
      media: [
        { type: "image", src: "./images/로고.png", fit: "cover" },
        { type: "image", src: "./images/릴스 1.png" },
        { type: "image", src: "./images/릴스 2.png" },
        { type: "image", src: "./images/MT 1.png" },
        { type: "image", src: "./images/MT 2.png" },
        { type: "image", src: "./images/MT 5.png" },
      ],
    },
    {
      categories: ["콘텐츠 기획", "콘텐츠 제작"],
      title: "바이탈코어 (2026)",
      desc: "브랜드 콘셉트를 반영하여 콘텐츠를 기획·제작하였습니다.",
      tools: ["Figma", "Photoshop", "Gemini", "ChatGPT"],
      image: "./images/본문 10.png",
      thumbFit: "contain",
      media: [
        { type: "image", src: "./images/본문 10.png", caption: "SNS 콘텐츠 (이미지는 AI를 활용해 제작하였습니다.)" },
        { type: "image", src: "./images/1안_수정.png", scroll: true, caption: "제품 상세페이지 (이미지는 AI를 활용해 제작하였습니다.)" },
        { type: "image", src: "./images/배너_모바일ㅊ.png", caption: "홈페이지 모바일 배너" },
        { type: "image", src: "./images/배너_모바일b.png", caption: "홈페이지 모바일 배너" },
        { type: "image", src: "./images/image 150.png" },
      ],
    },
    {
      categories: ["콘텐츠 제작"],
      title: "Color Grading (2026)",
      desc: "장면의 분위기에 맞춰 색감, 노출, 대비를 조정하여 영상의 분위기를 개선하였습니다.",
      tools: ["DaVinci Resolve", "Premiere Pro"],
      image: "./images/썸넬.png",
      media: [
        { type: "video", src: "./images/Timeline 1.mp4" },
        { type: "video", src: "./images/Timeline 1_1.mp4" },
      ],
    },
    {
      categories: ["콘텐츠 기획", "콘텐츠 제작"],
      title: "반려동물 서비스 HARU (2025)",
      desc: "사용자 리서치를 기반으로 반려동물 보호자의 니즈를 분석하고, 서비스 기획부터 프로토타입 제작까지 진행하였습니다.",
      tools: ["Figma"],
      media: [
        { type: "figma", src: "https://embed.figma.com/proto/hCcYih7N0PP3OPJallCBA6/HARU?node-id=1-39&viewport=121%2C198%2C0.45&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1&embed-host=share" },
      ],
    },
    {
      categories: ["브랜딩"],
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
  initFab();
  initContactForm();
  initPortfolioModal();
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

  let mediaList = [];
  let mediaIndex = 0;

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
      if (m.poster) video.poster = assetUrl(m.poster);
      video.muted = true;
      video.play().catch(() => {});
    } else if (m.type === "figma") {
      img.style.display = "none";
      video.style.display = "none";
      video.removeAttribute("src");
      video.load();
      figmaFrame.style.display = "block";
      figmaFrame.src = m.src;
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
    thumbInner.classList.toggle("is-scroll", !!m && m.type !== "video" && m.type !== "figma" && m.scroll === true);
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

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
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
