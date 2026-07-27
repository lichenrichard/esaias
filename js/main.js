const navShell = document.querySelector(".nav-shell");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const navCurrent = document.querySelector("#nav-current");
const languageButtons = [...document.querySelectorAll("[data-language]")];
const sections = [...document.querySelectorAll("main > section[id]")];
const demoTabs = [...document.querySelectorAll("[data-demo-index]")];
const demoSection = document.querySelector("#demos");
const demoStage = document.querySelector(".demo-stage");
const demoPanel = document.querySelector("#scenario-video-panel");
const demoVideo = document.querySelector("#scenario-video");
const demoActiveTitle = document.querySelector("#demo-active-title");
const demoDescription = document.querySelector("#demo-description");
const editorTabs = [...document.querySelectorAll("[data-editor-index]")];
const editorFrames = [...document.querySelectorAll(".editor-frame")];
const editorCaption = document.querySelector("#editor-caption");
const editorSteps = [...document.querySelectorAll("[data-editor-step]")];
const heroVideo = document.querySelector(".hero-video");
const parallaxSections = [...document.querySelectorAll("[data-parallax]")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const supportedLanguages = ["en", "zh-Hant"];
const languageStorageKey = "esaias-language";

const translations = {
    en: {
        "meta.description": "Enhance social and emotional learning of adolescents with autism spectrum disorder through a gamified interactive virtual community of generative agents (ESAIAS).",
        "skip": "Skip to content",
        "language.label": "Language",
        "nav.primary": "Primary navigation",
        "nav.home": "ESAIAS home",
        "nav.open": "Open navigation",
        "nav.close": "Close navigation",
        "nav.overview": "Overview",
        "nav.about": "What is ESAIAS?",
        "nav.solution": "Our Solution",
        "nav.scenarios": "Scenarios",
        "nav.editor": "Editor",
        "nav.team": "Team",
        "nav.recognition": "Recognition",
        "nav.contact": "Contact",
        "hero.kicker": "A generative-agent virtual school",
        "hero.summary": "Leveraging the power of generative agents to support adolescents facing social challenges.",
        "hero.explore": "Explore ESAIAS",
        "about.number": "01 / Project",
        "about.title": "What is ESAIAS?",
        "about.body1": "ESAIAS stands for Enhancing the social skills of adolescents with autism spectrum disorder through a gamified interactive artificial society of generative agents. The project creates a virtual school environment for social and emotional learning in Hong Kong's integrated education setting.",
        "about.body2": "Human-led role-playing scenarios and generative AI give students accessible, adaptive opportunities to practise collaboration, conflict resolution and emotional regulation with virtual agents.",
        "sel.label": "SEL learning framework",
        "sel.title": "What is social and emotional learning?",
        "sel.body": "Social and emotional learning (SEL) helps learners understand and manage emotions, empathise with others, build relationships and make responsible decisions.",
        "sel.esaias": "ESAIAS turns these broad competencies into repeatable practice through supported interactions in a virtual school.",
        "sel.competenciesLabel": "Five SEL competencies",
        "sel.selfAwareness": "Self-awareness",
        "sel.selfManagement": "Self-management",
        "sel.socialAwareness": "Social awareness",
        "sel.relationshipSkills": "Relationship skills",
        "sel.responsibleDecisions": "Responsible decision-making",
        "sel.source": "Explore the CASEL SEL framework",
        "solution.number": "02 / Approach",
        "solution.title": "Our Solution",
        "solution.body1": "Our AI-enabled, multiplatform approach is designed for tablets and standalone mobile devices. It combines a welcoming virtual-school experience with adaptable role-playing scenarios.",
        "solution.body2": "An intuitive LLM editor lets practitioners define characters, personalities and relationships without prior coding knowledge. The approach is research-based, co-created with certified therapists and tested with students.",
        "scenarios.number": "03 / Learning contexts",
        "scenarios.title": "Learning across the school day",
        "scenarios.intro": "ESAIAS places role-playing in familiar school spaces, allowing practice to move between structured classroom tasks and informal peer interaction.",
        "scenarios.classroomLabel": "Classroom",
        "scenarios.classroomTitle": "Collaborative activities",
        "scenarios.classroomBody": "Students can practise joining a group, asking for help and contributing to a shared activity while facilitators retain control of the scenario.",
        "scenarios.classroomAlt": "Students and a teacher taking part in an art classroom activity",
        "scenarios.schoolyardLabel": "Schoolyard",
        "scenarios.schoolyardTitle": "Everyday conversations",
        "scenarios.schoolyardBody": "Open schoolyard scenes support informal exchanges, turn-taking and the kinds of social decisions that happen between lessons.",
        "scenarios.schoolyardAlt": "Students and a teacher talking together beside the school running track",
        "scenarios.groupLabel": "Small group",
        "scenarios.groupTitle": "Guided reflection",
        "scenarios.groupBody": "Structured group settings give educators space to pause, debrief and adjust agent roles around a social and emotional learning objective.",
        "scenarios.groupAlt": "Students and facilitators seated around a table for a group discussion",
        "demos.number": "04 / Scenario demos",
        "demos.title": "Watch ESAIAS in action",
        "demos.intro": "Four short walkthroughs show how social and emotional learning moves from everyday conversation to collaborative activities.",
        "demos.tabs": "Scenario demos",
        "demos.scenario1Title": "Joining a New Class",
        "demos.scenario1Body": "Practise listening to introductions, responding to peers and beginning a conversation in class.",
        "demos.scenario2Title": "Schoolyard Collaboration",
        "demos.scenario2Body": "Join a group, coordinate during a basketball activity and navigate an everyday exchange at school.",
        "demos.scenario3Title": "Visual Art Class",
        "demos.scenario3Body": "Create and discuss artwork while practising turn-taking, feedback and collaborative reflection.",
        "demos.scenario4Title": "Preparing a Farewell Party",
        "demos.scenario4Body": "Choose a gift, respond to classmates and take part in a shared farewell event.",
        "editor.number": "05 / Scenario design",
        "editor.title": "Editor",
        "editor.body": "Build new role-playing situations with a node-based editor that makes agent behaviour and relationships understandable to people without an agentic AI background.",
        "editor.views": "Editor views",
        "editor.flow": "Event flow",
        "editor.characters": "Characters",
        "editor.relationships": "Relationships",
        "editor.export": "Export",
        "editor.caption1": "Shape the sequence of tasks and events.",
        "editor.caption2": "Define each character's role, traits and behaviour.",
        "editor.caption3": "Map the social relationships between virtual agents.",
        "editor.caption4": "Review the scenario configuration before export.",
        "editor.flowAlt": "Event flow editor showing connected tasks",
        "editor.charactersAlt": "Game character settings in the ESAIAS editor",
        "editor.relationshipsAlt": "Relationship settings between virtual agents",
        "editor.exportAlt": "Configuration file preview and export screen",
        "team.number": "06 / People",
        "team.title": "The Team",
        "team.assistantProfessor": "Asst. Professor",
        "team.researchAssociate": "Research Associate",
        "team.researchAssistant": "Research Assistant",
        "team.alumnus": "Alumnus",
        "recognition.number": "07 / Recognition",
        "recognition.champion": "Champion",
        "recognition.categoryLabel": "Category",
        "recognition.category": "Open Category",
        "recognition.streamLabel": "Stream",
        "recognition.stream": "Stream 3",
        "recognition.title": "AIREA International Competition on AI in Education",
        "recognition.body": "ESAIAS received the Champion award in the Open Category, Stream 3, recognising a comprehensive generative-AI solution to an educational challenge.",
        "recognition.linksLabel": "Competition links",
        "recognition.link1": "PolyU award announcement",
        "recognition.link2": "AIREA Competition 2025",
        "contact.number": "08 / Connect",
        "contact.title": "Contact Us",
        "contact.body": "If you are interested in participating, please contact Richard.",
        "footer.partners": "Project partners",
        "footer.polyuAlt": "The Hong Kong Polytechnic University",
        "footer.compAlt": "PolyU Department of Computing",
        "footer.apssAlt": "PolyU Department of Applied Social Sciences",
        "footer.copyright": "© 2025 ESAIAS Team. All rights reserved."
    },
    "zh-Hant": {
        "meta.description": "透過由生成式智能體構成的遊戲化互動虛擬社群，提升自閉症譜系青少年的社交及情緒學習能力（ESAIAS）。",
        "skip": "跳至主要內容",
        "language.label": "語言",
        "nav.primary": "主要導覽",
        "nav.home": "ESAIAS 首頁",
        "nav.open": "開啟導覽選單",
        "nav.close": "關閉導覽選單",
        "nav.overview": "概覽",
        "nav.about": "甚麼是 ESAIAS？",
        "nav.solution": "我們的方案",
        "nav.scenarios": "應用情境",
        "nav.editor": "編輯器",
        "nav.team": "團隊",
        "nav.recognition": "獎項",
        "nav.contact": "聯絡我們",
        "hero.kicker": "生成式智能體虛擬校園",
        "hero.summary": "運用生成式智能體的力量，支援面對社交挑戰的青少年。",
        "hero.explore": "探索 ESAIAS",
        "about.number": "01 / 項目",
        "about.title": "甚麼是 ESAIAS？",
        "about.body1": "ESAIAS 全稱為「透過由生成式智能體構成的遊戲化互動人工社會，提升自閉症譜系障礙青少年的社交技能」。項目為香港融合教育環境中的社交及情緒學習建立一個虛擬校園。",
        "about.body2": "由真人帶領的角色扮演情境配合生成式人工智能，讓學生能以易於參與且可適應的方式，與虛擬智能體練習協作、衝突處理及情緒調節。",
        "sel.label": "SEL 學習框架",
        "sel.title": "甚麼是社交及情緒學習？",
        "sel.body": "社交及情緒學習（SEL）幫助學習者理解及管理情緒、體察他人、建立關係，並作出負責任的決定。",
        "sel.esaias": "ESAIAS 把這些能力轉化為可重複練習的虛擬校園互動，讓學生在支援下嘗試溝通、協作與選擇。",
        "sel.competenciesLabel": "五項 SEL 核心能力",
        "sel.selfAwareness": "自我認識",
        "sel.selfManagement": "自我管理",
        "sel.socialAwareness": "社交覺察",
        "sel.relationshipSkills": "人際關係技巧",
        "sel.responsibleDecisions": "負責任的決策",
        "sel.source": "了解 CASEL SEL 框架",
        "solution.number": "02 / 方法",
        "solution.title": "我們的方案",
        "solution.body1": "我們的人工智能多平台方案適用於平板電腦及獨立流動裝置，結合親切的虛擬校園體驗與可靈活調整的角色扮演情境。",
        "solution.body2": "直觀的 LLM 編輯器讓實務工作者毋須具備程式編寫知識，也能設定角色、性格與關係。方案以研究為基礎，與認證治療師共同設計，並由學生參與測試。",
        "scenarios.number": "03 / 學習情境",
        "scenarios.title": "貫穿校園日常的學習",
        "scenarios.intro": "ESAIAS 將角色扮演置於學生熟悉的校園空間，讓練習能在結構化課堂任務與非正式朋輩互動之間延伸。",
        "scenarios.classroomLabel": "課堂",
        "scenarios.classroomTitle": "協作活動",
        "scenarios.classroomBody": "學生可練習加入小組、尋求協助及參與共同活動，同時讓帶領者保留對情境的控制。",
        "scenarios.classroomAlt": "學生與教師參與美術課堂活動",
        "scenarios.schoolyardLabel": "校園戶外",
        "scenarios.schoolyardTitle": "日常對話",
        "scenarios.schoolyardBody": "開放式校園場景支援非正式交流、輪流發言，以及課堂之間常見的社交判斷。",
        "scenarios.schoolyardAlt": "學生與教師在學校跑道旁交談",
        "scenarios.groupLabel": "小組活動",
        "scenarios.groupTitle": "引導反思",
        "scenarios.groupBody": "結構化小組環境讓教育工作者能暫停情境、進行解說，並按社交及情緒學習目標調整智能體角色。",
        "scenarios.groupAlt": "學生與帶領者圍桌進行小組討論",
        "demos.number": "04 / 情境示範",
        "demos.title": "觀看 ESAIAS 實際運作",
        "demos.intro": "四段精簡示範呈現社交及情緒學習如何由日常對話延伸至協作活動。",
        "demos.tabs": "情境示範",
        "demos.scenario1Title": "加入新班級",
        "demos.scenario1Body": "練習聆聽同學自我介紹、作出回應，並在課堂中展開對話。",
        "demos.scenario2Title": "校園協作",
        "demos.scenario2Body": "加入小組、在籃球活動中協調合作，並處理校園中的日常交流。",
        "demos.scenario3Title": "視覺藝術課",
        "demos.scenario3Body": "創作及討論藝術作品，同時練習輪流發言、提供意見及協作反思。",
        "demos.scenario4Title": "準備告別派對",
        "demos.scenario4Body": "選擇禮物、回應同學，並參與共同籌備的告別活動。",
        "editor.number": "05 / 情境設計",
        "editor.title": "編輯器",
        "editor.body": "透過節點式編輯器建立新的角色扮演情境，讓不熟悉智能體人工智能的人也能理解角色行為與關係。",
        "editor.views": "編輯器檢視",
        "editor.flow": "事件流程",
        "editor.characters": "角色",
        "editor.relationships": "關係",
        "editor.export": "匯出",
        "editor.caption1": "編排任務與事件的先後次序。",
        "editor.caption2": "設定每個角色的身分、特質與行為。",
        "editor.caption3": "建立虛擬智能體之間的社交關係。",
        "editor.caption4": "匯出前檢視情境設定。",
        "editor.flowAlt": "顯示相連任務的事件流程編輯器",
        "editor.charactersAlt": "ESAIAS 編輯器中的遊戲角色設定",
        "editor.relationshipsAlt": "虛擬智能體之間的關係設定",
        "editor.exportAlt": "設定檔預覽與匯出畫面",
        "team.number": "06 / 團隊",
        "team.title": "項目團隊",
        "team.assistantProfessor": "助理教授",
        "team.researchAssociate": "研究人員",
        "team.researchAssistant": "研究助理",
        "team.alumnus": "校友",
        "recognition.number": "07 / 獎項",
        "recognition.champion": "冠軍",
        "recognition.categoryLabel": "組別",
        "recognition.category": "公開組別",
        "recognition.streamLabel": "賽道",
        "recognition.stream": "第三賽道",
        "recognition.title": "AIREA 國際人工智能教育比賽",
        "recognition.body": "ESAIAS 榮獲公開組別第三賽道冠軍，表揚其以完整的生成式人工智能方案回應教育挑戰。",
        "recognition.linksLabel": "比賽連結",
        "recognition.link1": "理大獲獎公告",
        "recognition.link2": "AIREA 2025 比賽",
        "contact.number": "08 / 聯絡",
        "contact.title": "聯絡我們",
        "contact.body": "如有興趣參與項目，請聯絡 Richard。",
        "footer.partners": "項目合作單位",
        "footer.polyuAlt": "香港理工大學",
        "footer.compAlt": "香港理工大學計算學系",
        "footer.apssAlt": "香港理工大學應用社會科學系",
        "footer.copyright": "© 2025 ESAIAS 團隊。版權所有。"
    }
};

let currentLanguage = "en";
let activeSectionId = "top";
let currentDemoIndex = 0;
let demoSourceReady = false;
let demoLoadTimer = null;
let demoSwitchTimer = null;
let currentEditorIndex = 0;
let parallaxFrame = null;

function translate(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

function getStoredLanguage() {
    try {
        return localStorage.getItem(languageStorageKey);
    } catch {
        return null;
    }
}

function storeLanguage(language) {
    try {
        localStorage.setItem(languageStorageKey, language);
    } catch {
        // The selected language still applies when storage is unavailable.
    }
}

function getUrlLanguage() {
    const language = new URL(window.location.href).searchParams.get("lang");
    return supportedLanguages.includes(language) ? language : null;
}

function updateLanguageUrl(language, historyMode) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    history[`${historyMode}State`]({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function updateNavCurrent() {
    const navigationSectionId = activeSectionId === "demos" ? "scenarios" : activeSectionId;
    const activeLink = navLinks.find((link) => link.hash === `#${navigationSectionId}`);
    navCurrent.textContent = activeLink ? translate(activeLink.dataset.sectionKey) : translate("nav.overview");
}

function syncNavigationState() {
    const isOpen = navShell.classList.contains("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", translate(isOpen ? "nav.close" : "nav.open"));
}

function applyLanguage(language, options = {}) {
    currentLanguage = supportedLanguages.includes(language) ? language : "en";
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = translate(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        element.alt = translate(element.dataset.i18nAlt);
    });

    const description = document.querySelector('meta[name="description"]');
    description.content = translate("meta.description");

    languageButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
    });

    storeLanguage(currentLanguage);
    updateNavCurrent();
    syncNavigationState();
    setDemoView(currentDemoIndex, false, false);
    setEditorView(currentEditorIndex);

    if (options.historyMode) {
        updateLanguageUrl(currentLanguage, options.historyMode);
    }
}

function closeNavigation() {
    navShell.classList.remove("is-open");
    syncNavigationState();
}

function loadDemoSource(index) {
    const source = demoTabs[index].dataset.videoSrc;
    if (demoVideo.dataset.loadedSource === source) {
        return;
    }

    demoVideo.src = source;
    demoVideo.dataset.loadedSource = source;
    demoVideo.load();
}

function setDemoView(index, focusTab = false, reloadSource = true) {
    currentDemoIndex = index;
    const activeTab = demoTabs[index];

    demoTabs.forEach((tab, tabIndex) => {
        const isActive = tabIndex === index;
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
        if (isActive && focusTab) {
            tab.focus();
        }
    });

    demoPanel.setAttribute("aria-labelledby", activeTab.id);
    demoVideo.poster = activeTab.dataset.poster;
    demoActiveTitle.dataset.i18n = activeTab.dataset.titleKey;
    demoActiveTitle.textContent = translate(activeTab.dataset.titleKey);
    demoDescription.dataset.i18n = activeTab.dataset.bodyKey;
    demoDescription.textContent = translate(activeTab.dataset.bodyKey);

    if (!reloadSource || !demoSourceReady) {
        return;
    }

    window.clearTimeout(demoSwitchTimer);
    demoVideo.pause();
    demoStage.classList.add("is-changing");
    demoSwitchTimer = window.setTimeout(() => {
        loadDemoSource(index);
        requestAnimationFrame(() => demoStage.classList.remove("is-changing"));
    }, reduceMotion.matches ? 0 : 140);
}

function setEditorView(index, focusTab = false) {
    currentEditorIndex = index;

    editorTabs.forEach((tab, tabIndex) => {
        const isActive = tabIndex === index;
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
        if (isActive && focusTab) {
            tab.focus();
        }
    });

    editorFrames.forEach((frame, frameIndex) => {
        const isActive = frameIndex === index;
        frame.setAttribute("aria-hidden", String(!isActive));
        frame.classList.toggle("is-active", isActive);
        frame.querySelector("a").tabIndex = isActive ? 0 : -1;
    });

    const captionKey = `editor.caption${index + 1}`;
    editorCaption.dataset.i18n = captionKey;
    editorCaption.textContent = translate(captionKey);
}

function scrollToHash(smooth = false) {
    if (!window.location.hash) {
        return;
    }

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(targetId);
    if (!target) {
        return;
    }

    if (!smooth) {
        document.documentElement.classList.add("anchor-jump");
    }

    target.scrollIntoView({
        behavior: smooth && !reduceMotion.matches ? "smooth" : "auto",
        block: "start"
    });

    if (!smooth) {
        requestAnimationFrame(() => {
            document.documentElement.classList.remove("anchor-jump");
        });
    }
}

function navigateToHash(hash) {
    const url = new URL(window.location.href);
    url.hash = hash;
    const nextUrl = `${url.pathname}${url.search}${url.hash}`;

    if (window.location.hash === hash) {
        history.replaceState({}, "", nextUrl);
    } else {
        history.pushState({}, "", nextUrl);
    }

    closeNavigation();
    scrollToHash(true);
}

function updateParallax() {
    parallaxFrame = null;

    if (reduceMotion.matches || window.innerWidth <= 980) {
        parallaxSections.forEach((section) => section.style.setProperty("--parallax-y", "0px"));
        return;
    }

    parallaxSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) {
            return;
        }

        const sectionCenter = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (window.innerHeight / 2 - sectionCenter) / window.innerHeight));
        section.style.setProperty("--parallax-y", `${(progress * 24).toFixed(2)}px`);
    });
}

function scheduleParallax() {
    if (!parallaxFrame) {
        parallaxFrame = requestAnimationFrame(updateParallax);
    }
}

navToggle.addEventListener("click", () => {
    navShell.classList.toggle("is-open");
    syncNavigationState();
});

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const language = button.dataset.language;
        if (language === currentLanguage) {
            return;
        }

        applyLanguage(language, { historyMode: "push" });
        requestAnimationFrame(() => scrollToHash(false));
    });
});

document.querySelectorAll(".nav-links a, .brand-link, .hero-scroll-cue").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        navigateToHash(link.hash);
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNavigation();
    }
});

editorTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setEditorView(index));
    tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
            return;
        }

        event.preventDefault();
        let nextIndex = index;

        if (event.key === "ArrowLeft") {
            nextIndex = (index - 1 + editorTabs.length) % editorTabs.length;
        } else if (event.key === "ArrowRight") {
            nextIndex = (index + 1) % editorTabs.length;
        } else if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = editorTabs.length - 1;
        }

        setEditorView(nextIndex, true);
    });
});

demoTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setDemoView(index));
    tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
            return;
        }

        event.preventDefault();
        let nextIndex = index;

        if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
            nextIndex = (index - 1 + demoTabs.length) % demoTabs.length;
        } else if (["ArrowRight", "ArrowDown"].includes(event.key)) {
            nextIndex = (index + 1) % demoTabs.length;
        } else if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = demoTabs.length - 1;
        }

        setDemoView(nextIndex, true);
    });
});

document.querySelectorAll(".reveal").forEach((element) => {
    const delay = Number(element.dataset.delay || 0);
    element.style.setProperty("--reveal-delay", `${delay}ms`);
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.18
});

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver((entries) => {
    const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) {
        return;
    }

    activeSectionId = visibleEntry.target.id;
    document.body.dataset.activeSection = activeSectionId;
    const navigationSectionId = activeSectionId === "demos" ? "scenarios" : activeSectionId;
    const activeLink = navLinks.find((link) => link.hash === `#${navigationSectionId}`);

    navLinks.forEach((link) => {
        if (link === activeLink) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    updateNavCurrent();
}, {
    rootMargin: "-38% 0px -52% 0px",
    threshold: 0
});

sections.forEach((section) => sectionObserver.observe(section));

const demoSourceObserver = new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting)) {
        return;
    }

    window.clearTimeout(demoLoadTimer);
    demoLoadTimer = window.setTimeout(() => {
        const rect = demoSection.getBoundingClientRect();
        const isNearViewport = rect.bottom >= -300 && rect.top <= window.innerHeight + 300;

        if (!isNearViewport) {
            return;
        }

        demoSourceReady = true;
        loadDemoSource(currentDemoIndex);
        observer.disconnect();
    }, 500);
}, {
    rootMargin: "300px 0px",
    threshold: 0
});

const editorStepObserver = new IntersectionObserver((entries) => {
    const activeStep = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (activeStep && window.innerWidth > 980 && !reduceMotion.matches) {
        setEditorView(Number(activeStep.target.dataset.editorStep));
    }
}, {
    rootMargin: "-35% 0px -35% 0px",
    threshold: 0.2
});

editorSteps.forEach((step) => editorStepObserver.observe(step));

function syncMotionPreference() {
    if (reduceMotion.matches) {
        heroVideo.pause();
        setEditorView(0);
    } else {
        heroVideo.play().catch(() => {
            // The poster remains visible when autoplay is unavailable.
        });
    }

    scheduleParallax();
}

window.addEventListener("scroll", scheduleParallax, { passive: true });
window.addEventListener("resize", scheduleParallax);
window.addEventListener("popstate", () => {
    applyLanguage(getUrlLanguage() || "en");
    requestAnimationFrame(() => scrollToHash(false));
});

window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            scrollToHash(false);
            demoSourceObserver.observe(demoSection);
        });
    });
});

if (document.fonts) {
    document.fonts.ready.then(() => scrollToHash(false));
}

reduceMotion.addEventListener("change", syncMotionPreference);

const requestedLanguage = getUrlLanguage();
const storedLanguage = getStoredLanguage();
const initialLanguage = requestedLanguage || (supportedLanguages.includes(storedLanguage) ? storedLanguage : "en");

applyLanguage(initialLanguage, { historyMode: "replace" });
window.lucide?.createIcons();
syncMotionPreference();
setDemoView(0, false, false);
setEditorView(0);
scheduleParallax();
