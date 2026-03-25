// ===================== DATA =====================
const SUBJECTS = [
  {
    id: "anatomy",
    name: "Anatomy",
    icon: "🦴",
    color: "#00e5ff",
    total: 119,
  },
  {
    id: "physiology",
    name: "Physiology",
    icon: "❤️",
    color: "#ef4444",
    total: 94,
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    icon: "🧬",
    color: "#7c3aed",
    total: 95,
  },
  {
    id: "pathology",
    name: "Pathology",
    icon: "🔬",
    color: "#f59e0b",
    total: 73,
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    icon: "💊",
    color: "#10b981",
    total: 82,
  },
  {
    id: "microbiology",
    name: "Microbiology",
    icon: "🦠",
    color: "#06b6d4",
    total: 81,
  },
  {
    id: "medicine",
    name: "Medicine",
    icon: "🩺",
    color: "#3b82f6",
    total: 83,
  },
  {
    id: "surgery",
    name: "Surgery",
    icon: "⚕️",
    color: "#ec4899",
    total: 160,
  },
  {
    id: "obs",
    name: "Obs & Gynae",
    icon: "🤱",
    color: "#f472b6",
    total: 171,
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "👶",
    color: "#a78bfa",
    total: 23,
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    icon: "🧠",
    color: "#fb923c",
    total: 0,
  },
  {
    id: "community",
    name: "Community Med",
    icon: "🏥",
    color: "#34d399",
    total: 21,
  },
  {
    id: "anesthesia",
    name: "Anesthesia",
    icon: "💉",
    color: "#60a5fa",
    total: 24,
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: "🧴",
    color: "#fb7185",
    total: 24,
  },
  {
    id: "ent",
    name: "ENT",
    icon: "👂",
    color: "#22c55e",
    total: 24,
  },
  {
    id: "forensic",
    name: "Forensic",
    icon: "🕵️",
    color: "#94a3b8",
    total: 22,
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    icon: "👁️",
    color: "#38bdf8",
    total: 21,
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: "🦴",
    color: "#a78bfa",
    total: 22,
  },
  {
    id: "radiology",
    name: "Radiology",
    icon: "🩻",
    color: "#a855f7",
    total: 21,
  },
  {
    id: "med_terms",
    name: "Medical Terms",
    icon: "🔤",
    color: "#f59e0b",
    total: 1050,
  },
];

const QUESTIONS = [
  ...(window.ANATOMY_QUESTIONS || []),
  ...(window.ANESTHESIA_QUESTIONS || []),
  ...(window.BIOCHEMISTRY_QUESTIONS || []),
  ...(window.COMMUNITY_QUESTIONS || []),
  ...(window.DERMATOLOGY_QUESTIONS || []),
  ...(window.ENT_QUESTIONS || []),
  ...(window.FORENSIC_QUESTIONS || []),
  ...(window.MED_TERMS_QUESTIONS || []),
  ...(window.MEDICINE_QUESTIONS || []),
  ...(window.MICROBIOLOGY_QUESTIONS || []),
  ...(window.OBS_QUESTIONS || []),
  ...(window.OPHTHALMOLOGY_QUESTIONS || []),
  ...(window.ORTHOPEDICS_QUESTIONS || []),
  ...(window.PATHOLOGY_QUESTIONS || []),
  ...(window.PEDIATRICS_QUESTIONS || []),
  ...(window.PHARMACOLOGY_QUESTIONS || []),
  ...(window.PHYSIOLOGY_QUESTIONS || []),
  ...(window.RADIOLOGY_QUESTIONS || []),
  ...(window.SURGERY_QUESTIONS || [])
];

const CONCEPTS = [
  {
    subject: "pharmacology",
    title: "Cholinergic Pharmacology — Complete Overview",
    content:
      "The cholinergic system uses acetylcholine (ACh) as its neurotransmitter, acting at nicotinic (N) and muscarinic (M) receptors. Understanding this system is crucial for NEET, FMGE, and INICET.",
    keyPoints: [
      "Muscarinic receptors (M1-M5): GPCR linked; M1,3,5 via Gq; M2,4 via Gi",
      "Nicotinic receptors: Ligand-gated ion channels (Na+/K+); NM at NMJ, NN at ganglia",
      "Direct cholinomimetics: Pilocarpine (M), Carbachol (M+N), Bethanechol (M-urinary)",
      "Anticholinesterases: Physostigmine (reversible, CNS), Neostigmine (reversible, no CNS), Organophosphates (irreversible)",
      "Atropine: Nonselective muscarinic antagonist; antidote for organophosphate poisoning",
      "DUMBELS mnemonic for cholinergic toxicity symptoms",
    ],
    mnemonic:
      "DUMBELS: Defecation/Diarrhea, Urination, Miosis, Bradycardia/Bronchospasm/excessive secretions, Emesis, Lacrimation, Salivation/Sweating",
  },
  {
    subject: "pathology",
    title: "Cell Injury — Reversible vs Irreversible",
    content:
      "Cell injury occurs when cells are stressed beyond their adaptive capacity. Understanding the continuum from reversible injury to death is fundamental in pathology.",
    keyPoints: [
      "Reversible injury: Cell swelling, fatty change; mitochondrial swelling, ER dilation",
      "Point of no return: Mitochondrial permeability transition pore (mPTP) opening",
      "Irreversible injury (necrosis): Pyknosis → Karyorrhexis → Karyolysis",
      "Apoptosis: Programmed death; caspases; chromatin condensation; cell shrinkage; apoptotic bodies",
      "Coagulative necrosis: Most organs (ischemia); architecture preserved; MI, infarcts",
      "Liquefactive necrosis: Brain infarction, bacterial abscess (proteolytic enzymes)",
      "Caseous necrosis: TB and fungal infections; cheese-like appearance",
      "Fat necrosis: Pancreatitis (enzymatic) and trauma (saponification)",
    ],
    mnemonic:
      'For necrosis types: "Cold Brain Fats Cause Gas Fib" — Coagulative, Liquefactive (Brain), Fat, Caseous, Gangrenous, Fibrinoid',
  },
  {
    subject: "physiology",
    title: "Cardiac Action Potential — Phases Explained",
    content:
      "The cardiac action potential differs significantly from nerve and skeletal muscle. Mastering the 5 phases and their ionic basis is essential for understanding arrhythmias and antiarrhythmic drugs.",
    keyPoints: [
      "Phase 0 (Rapid depolarization): Fast Na+ channels open; RMP -90mV → +30mV",
      "Phase 1 (Early repolarization): Fast Na+ channels close; transient outward K+ (Ito)",
      "Phase 2 (Plateau): L-type Ca2+ channels open; K+ out ≈ Ca2+ in; unique to cardiac muscle",
      "Phase 3 (Rapid repolarization): Ca2+ channels close; K+ (IKr, IKs) channels dominate",
      "Phase 4 (Resting): IK1 channels maintain -90mV; Na+/K+ ATPase restores gradient",
      "SA node: Lacks Phase 1&2; Phase 4 has spontaneous depolarization (pacemaker current If)",
      "ERP (Effective Refractory Period): Heart cannot be re-excited; prevents tetany",
    ],
    mnemonic:
      "SEPTR: Sodium in (0), Early repol (1), Plateau (2), Terminal repol K+ (3), Rest (4)",
  },
  {
    subject: "anatomy",
    title: "Brachial Plexus — Simplified",
    content:
      "The brachial plexus (C5-T1) supplies the upper limb. High-yield for NEET and INICET — nerve injuries, lesion levels, and clinical correlates.",
    keyPoints: [
      "Roots: C5,C6,C7,C8,T1 (with contributions from C4 and T2)",
      "Trunks: Upper (C5-C6), Middle (C7), Lower (C8-T1)",
      "Divisions: Anterior (flexors), Posterior (extensors) — 6 total",
      "Cords: Lateral (C5-C7 anterior), Medial (C8-T1 anterior), Posterior (all posterior)",
      "Erb's palsy (C5,C6): Waiter's tip deformity; loss of abduction, lateral rotation, supination",
      "Klumpke's palsy (C8,T1): Claw hand + Horner's syndrome; intrinsic hand muscles affected",
      'Median nerve (C6-T1): Ape hand; carpal tunnel syndrome; "Pope\'s blessing" sign',
      "Ulnar nerve (C8,T1): Claw hand (ring+little); hypothenar wasting; Froment's sign",
      "Radial nerve (C5-T1): Wrist drop; Saturday night palsy; posterior cord",
    ],
    mnemonic:
      'My Aunty Keeps Bringing Cups: Musculocutaneous, Axillary, radial, median (K for "Knot"), ulnar, medial cutaneous...',
  },
  {
    subject: "biochemistry",
    title: "Enzyme Kinetics — Michaelis-Menten & Inhibitions",
    content:
      "Enzyme kinetics is the mathematical description of enzyme activity. Critical for understanding drug mechanisms and metabolic diseases.",
    keyPoints: [
      "Km = substrate concentration at half-maximal velocity (Vmax/2)",
      "Low Km = high affinity for substrate; High Km = low affinity",
      "Competitive inhibition: Same active site as substrate; Km↑, Vmax unchanged; overcome by ↑[S]",
      "Non-competitive: Different site; Km unchanged, Vmax↓; cannot be overcome",
      "Uncompetitive: Binds ES complex only; Km↓, Vmax↓; rare clinically",
      "Lineweaver-Burk (double reciprocal) plot: 1/V vs 1/[S]; x-intercept = -1/Km; y-intercept = 1/Vmax",
      "Zero-order kinetics: Rate independent of [S] — aspirin, ethanol, phenytoin at high doses",
      "First-order kinetics: Rate ∝ [S] — most drugs at therapeutic levels",
    ],
    mnemonic:
      'For inhibition types: "Competitive Changes Km" (CCK), "Non-competitive Nulls Vmax" (NNV)',
  },
  {
    subject: "microbiology",
    title: "Important Toxins in Microbiology",
    content:
      "Bacterial toxins are high-yield for all medical entrance exams. Understanding the mechanism, target, and clinical disease is essential.",
    keyPoints: [
      "Cholera toxin: ADP-ribosylates Gs (stimulatory) → ↑cAMP → Cl- secretion → rice water stools",
      "Pertussis toxin: ADP-ribosylates Gi (inhibitory) → ↑cAMP → lymphocytosis; also inhibits phagocytosis",
      "Diphtheria toxin: ADP-ribosylates EF-2 (elongation factor 2) → protein synthesis stops → myocarditis, neuropathy",
      "Botulinum toxin: Blocks ACh release (SNARE proteins); flaccid paralysis; therapeutic use in dystonia",
      "Tetanospasmin: Blocks glycine/GABA (inhibitory NT) in spinal cord → spastic paralysis; risus sardonicus",
      "Staph aureus TSST-1: Superantigen; stimulates T cells nonspecifically; cytokine storm",
      "Anthrax toxin: 3 components — PA (protective antigen) + EF (edema factor) or LF (lethal factor)",
    ],
    mnemonic:
      'ADP-ribosylators: "Cholera Gets Dirty Pleasure" — Cholera (Gs), pertuss (Gi), Diphtheria (EF-2), Pseudomonas exotoxin A (EF-2)',
  },
];

// ===================== STATE =====================
let state = {
  exam: "neet",
  view: "dashboard",
  bookmarks: JSON.parse(localStorage.getItem("bookmarks") || "[]"),
  solved: JSON.parse(localStorage.getItem("solved") || "{}"),
  testResults: JSON.parse(localStorage.getItem("testResults") || "[]"),
  currentTest: null,
  filterSubject: "all",
  filterYear: "all",
  currentFilter: "all",
};

// ===================== INIT =====================
window.onload = () => {
  renderDashboard();
  setupKeyboardShortcuts();
  updateStats();
};

// ===================== NAV =====================
function showView(v) {
  document
    .querySelectorAll(".view")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("view-" + v).classList.add("active");
  document.querySelector(`[data-view="${v}"]`)?.classList.add("active");
  state.view = v;

  // Close sidebar on mobile after navigation
  closeSidebar();

  const titles = {
    dashboard: "Dashboard",
    pyqs: "Previous Year Questions",
    subjects: "Subjects",
    concepts: "Key Concepts",
    mock: "Mock Test",
    bookmarks: "Bookmarks",
    results: "Analytics",
    leaderboard: "🏆 Leaderboard",
  };
  document.getElementById("view-title").textContent = titles[v] || v;

  if (v === "pyqs") renderPYQs();
  if (v === "subjects") renderSubjects();
  if (v === "concepts") renderConcepts();
  if (v === "bookmarks") renderBookmarks();
  if (v === "leaderboard") renderLeaderboard();
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const isOpen = sidebar.classList.toggle("open");
  overlay.classList.toggle("show", isOpen);
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("show");
}

function setExam(exam) {
  state.exam = exam;
  document
    .querySelectorAll(".exam-pill")
    .forEach((p) => p.classList.remove("active"));
  document.querySelector(`.exam-pill.${exam}`).classList.add("active");
  if (state.view === "pyqs") renderPYQs();
  if (state.view === "dashboard") renderDashboard();
  toast(`Switched to ${exam.toUpperCase()}`);
}

// ===================== DASHBOARD =====================
function renderDashboard() {
  renderYearsGrid();
  renderQuickSubjects();
}

function renderYearsGrid() {
  const container = document.getElementById("years-grid");
  if (!container) return;
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
  const counts = {
    2024: 200,
    2023: 200,
    2022: 200,
    2021: 180,
    2020: 180,
    2019: 180,
    2018: 160,
    2017: 160,
    2016: 150,
    2015: 140,
  };
  container.innerHTML = years
    .map((y) => {
      const pct = Math.floor(Math.random() * 60);
      return `<div class="year-card" onclick="filterByYear(${y})">
      <div class="year">${y}</div>
      <div class="count">${counts[y] || 160} Questions</div>
      <div class="done-bar"><div class="done-fill" style="width:${pct}%"></div></div>
    </div>`;
    })
    .join("");
}

function filterByYear(y) {
  showView("pyqs");
  state.filterYear = y;
  renderPYQs();
}

function renderQuickSubjects() {
  const container = document.getElementById("quick-subjects");
  if (!container) return;
  container.innerHTML = SUBJECTS.slice(0, 6)
    .map((s) => subjectCard(s, true))
    .join("");
}

function subjectCard(s, quick = false) {
  const pct = Math.floor(Math.random() * 70 + 10);
  return `<div class="subject-card" style="--subject-color:${s.color}" onclick="filterBySubject('${s.id}')">
    <div class="sub-icon">${s.icon}</div>
    <div class="sub-name">${s.name}</div>
    <div class="sub-count">${s.total} questions · ${pct}% done</div>
    <div class="sub-bar"><div class="sub-fill" style="width:${pct}%;background:${s.color}"></div></div>
  </div>`;
}

// ===================== PYQs =====================
function renderPYQs() {
  renderPYQFilters();
  const list = document.getElementById("pyq-list");
  let qs = QUESTIONS.filter((q) => q.exam === state.exam);
  if (state.filterSubject !== "all")
    qs = qs.filter((q) => q.subject === state.filterSubject);
  if (state.filterYear !== "all")
    qs = qs.filter((q) => q.year === state.filterYear);
  list.innerHTML = qs.length
    ? qs.map((q) => questionCard(q)).join("")
    : `<div style="text-align:center;padding:60px;color:var(--text3)">No questions found for selected filters</div>`;
}

function renderPYQFilters() {
  const f = document.getElementById("pyq-filters");
  const years = [2024, 2023, 2022, 2021, 2020];
  // Show all subjects so new categories (like `med_terms`) are selectable.
  const subjs = SUBJECTS;
  f.innerHTML = `
    <div class="filter-chip ${state.filterYear === "all" ? "active" : ""}" onclick="setPYQFilter('year','all')">All Years</div>
    ${years.map((y) => `<div class="filter-chip ${state.filterYear === y ? "active" : ""}" onclick="setPYQFilter('year',${y})">${y}</div>`).join("")}
    <div style="width:1px;background:var(--border);margin:0 4px"></div>
    <div class="filter-chip ${state.filterSubject === "all" ? "active" : ""}" onclick="setPYQFilter('subject','all')">All Subjects</div>
    ${subjs.map((s) => `<div class="filter-chip ${state.filterSubject === s.id ? "active" : ""}" onclick="setPYQFilter('subject','${s.id}')">${s.name}</div>`).join("")}
  `;
}

function setPYQFilter(type, val) {
  if (type === "year") state.filterYear = val;
  if (type === "subject") state.filterSubject = val;
  renderPYQs();
}

function questionCard(q, showAnswerImm = false) {
  const letters = ["A", "B", "C", "D"];
  const solved = state.solved[q.id];
  const isBookmarked = state.bookmarks.includes(q.id);
  const sub = SUBJECTS.find((s) => s.id === q.subject);
  return `<div class="q-card" id="qcard-${q.id}">
    <div class="q-meta">
      <span class="q-badge badge-${q.exam}">${q.exam.toUpperCase()}</span>
      <span class="q-badge badge-year">${q.year}</span>
      <span class="q-badge badge-subject">${sub?.name || q.subject}</span>
      <span class="q-badge badge-bookmark" onclick="toggleBookmark(${q.id})">${isBookmarked ? "🔖" : "☆"} ${isBookmarked ? "Saved" : "Save"}</span>
    </div>
    <div class="q-text">${q.q}</div>
    <div class="q-options" id="opts-${q.id}">
      ${q.opts
        .map(
          (
            o,
            i,
          ) => `<div class="q-option ${solved !== undefined ? (i === q.ans ? "correct" : i === solved ? "wrong" : "") : ""}${solved === undefined && showAnswerImm && i === q.ans ? "correct" : ""}" onclick="answerQuestion(${q.id},${i})">
        <span class="opt-letter">${letters[i]}</span>${o}
      </div>`,
        )
        .join("")}
    </div>
    <div class="q-explanation ${solved !== undefined || showAnswerImm ? "show" : ""}" id="exp-${q.id}">
      <div class="exp-title">💡 Explanation — ${q.topic}</div>
      <div class="exp-text">${q.exp}</div>
    </div>
    <div class="q-actions">
      ${solved === undefined ? `<button class="btn btn-ghost" style="font-size:12px;padding:6px 12px" onclick="revealAnswer(${q.id})">Show Answer</button>` : ""}
      <button class="btn btn-ghost" style="font-size:12px;padding:6px 12px" onclick="getAIExplanation(${q.id})">🤖 AI Explain</button>
    </div>
  </div>`;
}

function answerQuestion(qid, chosen) {
  const q = QUESTIONS.find((q) => q.id === qid);
  if (state.solved[qid] !== undefined) return;
  state.solved[qid] = chosen;
  localStorage.setItem("solved", JSON.stringify(state.solved));
  updateStats();
  // Re-render options
  const opts = document.getElementById("opts-" + qid);
  const letters = ["A", "B", "C", "D"];
  opts.innerHTML = q.opts
    .map(
      (
        o,
        i,
      ) => `<div class="q-option ${i === q.ans ? "correct" : i === chosen ? "wrong" : ""}">
    <span class="opt-letter">${letters[i]}</span>${o}
  </div>`,
    )
    .join("");
  document.getElementById("exp-" + qid).classList.add("show");
  if (chosen === q.ans) toast("✅ Correct!");
  else toast("❌ Incorrect — check the explanation");
}

function revealAnswer(qid) {
  const q = QUESTIONS.find((q) => q.id === qid);
  state.solved[qid] = q.ans;
  const opts = document.getElementById("opts-" + qid);
  opts.querySelectorAll(".q-option")[q.ans].classList.add("correct");
  document.getElementById("exp-" + qid).classList.add("show");
}

async function getAIExplanation(qid) {
  const q = QUESTIONS.find((q) => q.id === qid);
  const expEl = document.getElementById("exp-" + qid);
  expEl.classList.add("show");
  const textEl = expEl.querySelector(".exp-text");
  textEl.innerHTML =
    '<span class="ai-loading">🤖 Generating detailed explanation...</span>';
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `You are a medical education expert. Explain this ${q.exam.toUpperCase()} ${q.year} question in detail for medical students:

Question: ${q.q}
Options: ${q.opts.map((o, i) => `${["A", "B", "C", "D"][i]}) ${o}`).join(", ")}
Correct Answer: ${["A", "B", "C", "D"][q.ans]}) ${q.opts[q.ans]}
Topic: ${q.topic}

Provide:
1. Why the correct answer is right
2. Why wrong options are incorrect
3. Key points to remember for exam
4. Any mnemonics if helpful
Keep it concise, exam-focused, and clinically relevant.`,
          },
        ],
      }),
    });
    const data = await res.json();
    textEl.innerHTML = (data.content?.[0]?.text || q.exp)
      .replace(/\n/g, "<br>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  } catch (e) {
    textEl.innerHTML =
      q.exp +
      '<br><br><em style="color:var(--text3)">AI explanation unavailable — showing standard explanation</em>';
  }
}

// ===================== SUBJECTS =====================
function renderSubjects() {
  document.getElementById("subjects-grid").innerHTML = SUBJECTS.map((s) =>
    subjectCard(s),
  ).join("");
}

function filterBySubject(id) {
  showView("pyqs");
  state.filterSubject = id;
  renderPYQs();
}

// ===================== CONCEPTS =====================
function renderConcepts() {
  const subjs = ["all", ...new Set(CONCEPTS.map((c) => c.subject))];
  document.getElementById("concept-filters").innerHTML = subjs
    .map(
      (s) =>
        `<div class="filter-chip ${state.currentFilter === s ? "active" : ""}" onclick="setConceptFilter('${s}')">${s === "all" ? "All" : SUBJECTS.find((sub) => sub.id === s)?.name || s}</div>`,
    )
    .join("");

  let cs = CONCEPTS;
  if (state.currentFilter !== "all")
    cs = cs.filter((c) => c.subject === state.currentFilter);

  document.getElementById("concepts-list").innerHTML = cs
    .map(
      (c, i) => `
    <div class="concept-card">
      <div class="concept-header" onclick="toggleConcept(this)">
        <span>${SUBJECTS.find((s) => s.id === c.subject)?.icon || "📘"}</span>
        <h3>${c.title}</h3>
        <span class="q-badge badge-${c.subject === "pharmacology" ? "fmge" : c.subject === "pathology" ? "neet" : "inicet"}">${SUBJECTS.find((s) => s.id === c.subject)?.name || c.subject}</span>
        <span class="chevron">▼</span>
      </div>
      <div class="concept-body">
        <p>${c.content}</p>
        <div class="key-points"><ul>${c.keyPoints.map((k) => `<li>${k}</li>`).join("")}</ul></div>
        ${c.mnemonic ? `<div class="mnemonics"><div class="mnem-title">🧠 Mnemonic</div><p style="font-size:13px;color:var(--text2);margin-top:6px">${c.mnemonic}</p></div>` : ""}
        <div style="margin-top:12px"><button class="btn btn-ghost" style="font-size:12px;padding:6px 14px" onclick="getAIConceptExplanation(this,'${c.title}')">🤖 Expand with AI</button></div>
      </div>
    </div>
  `,
    )
    .join("");
}

function setConceptFilter(f) {
  state.currentFilter = f;
  renderConcepts();
}

function toggleConcept(header) {
  header.classList.toggle("open");
  header.nextElementSibling.classList.toggle("show");
}

async function getAIConceptExplanation(btn, title) {
  const body = btn.closest(".concept-body");
  btn.textContent = "⏳ Loading...";
  btn.disabled = true;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 800,
        messages: [
          {
            role: "user",
            content: `Provide a concise, exam-focused expansion of this medical concept for NEET/FMGE/INICET students: "${title}". Include: high-yield exam points, common traps, clinical correlations, and any important drug/disease associations. Format clearly.`,
          },
        ],
      }),
    });
    const data = await res.json();
    const text = data.content?.[0]?.text || "AI explanation unavailable.";
    const div = document.createElement("div");
    div.style =
      "margin-top:12px;padding:14px;background:rgba(0,229,255,0.05);border-radius:10px;border:1px solid rgba(0,229,255,0.15);font-size:13px;color:var(--text2);line-height:1.8";
    div.innerHTML =
      '<div style="font-size:11px;color:var(--accent);font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">🤖 AI Expansion</div>' +
      text
        .replace(/\n/g, "<br>")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    body.insertBefore(div, btn.parentElement);
    btn.remove();
  } catch (e) {
    btn.textContent = "🤖 Expand with AI";
    btn.disabled = false;
  }
}

// ===================== BOOKMARKS =====================
function toggleBookmark(qid) {
  const idx = state.bookmarks.indexOf(qid);
  if (idx > -1) {
    state.bookmarks.splice(idx, 1);
    toast("Bookmark removed");
  } else {
    state.bookmarks.push(qid);
    toast("🔖 Bookmarked!");
  }
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
}

function renderBookmarks() {
  const list = document.getElementById("bookmark-list");
  const bookmarked = QUESTIONS.filter((q) => state.bookmarks.includes(q.id));
  list.innerHTML = bookmarked.length
    ? bookmarked.map((q) => questionCard(q, true)).join("")
    : `<div style="text-align:center;padding:80px;color:var(--text3)"><div style="font-size:48px;margin-bottom:16px">🔖</div><p>No bookmarks yet. Save questions to review later.</p></div>`;
}

// ===================== MOCK TEST =====================
let testState = {};
let timerInterval;

function toggleSetup(el, group) {
  el.closest(".setup-options")
    .querySelectorAll(".setup-opt")
    .forEach((o) => o.classList.remove("active"));
  el.classList.add("active");
}

function toggleQNav() {
  const panel = document.getElementById("test-nav-panel");
  const btn = document.getElementById("mobile-qnav-toggle");
  panel.classList.toggle("nav-open");
  btn.textContent = panel.classList.contains("nav-open")
    ? "✕ Close Navigator"
    : "☰ Question Navigator ▾";
}

function startMockTest() {
  const qcount = parseInt(
    document.querySelector(
      '.setup-options .setup-opt.active[onclick*="qcount"]',
    )?.textContent || 50,
  );
  const examType =
    document.querySelector('.setup-opt.active[onclick*="exam"]')?.textContent ||
    "NEET PG";
  const timeMultiplier =
    { "No Limit": 0, "1 min/Q": 1, "1.5 min/Q": 1.5, "2 min/Q": 2 }[
      document.querySelector('.setup-opt.active[onclick*="time"]')?.textContent
    ] || 1;

  // Read subject filter from dropdown
  const subjectVal = document.getElementById("subject-select")?.value || "all";

  // Map UI exam label to exam key in QUESTIONS data
  const examMap = {
    "NEET PG": "neet",
    FMGE: "fmge",
    INICET: "inicet",
    Custom: "all",
  };
  const examKey = examMap[examType] || "all";

  // Build filtered pool based on exam AND subject
  let pool = QUESTIONS.filter((q) => {
    const examMatch = examKey === "all" || q.exam === examKey;
    const subjectMatch = subjectVal === "all" || q.subject === subjectVal;
    return examMatch && subjectMatch;
  });

  // Warn if not enough questions
  if (pool.length === 0) {
    toast("No questions found for selected filters. Try broader settings.");
    return;
  }
  if (pool.length < qcount) {
    toast("Only " + pool.length + " questions available for this filter.");
  }

  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  pool = pool.slice(0, Math.min(qcount, pool.length));

  const subjectLabel =
    subjectVal === "all"
      ? ""
      : " — " + (SUBJECTS.find((s) => s.id === subjectVal)?.name || subjectVal);

  testState = {
    questions: pool,
    answers: new Array(pool.length).fill(null),
    marked: new Array(pool.length).fill(false),
    current: 0,
    totalTime:
      timeMultiplier > 0 ? Math.floor(pool.length * timeMultiplier * 60) : 0,
    timeLeft:
      timeMultiplier > 0 ? Math.floor(pool.length * timeMultiplier * 60) : 0,
    examType,
  };

  document.getElementById("test-title").textContent =
    examType + subjectLabel + " — " + pool.length + " Questions";
  document.getElementById("main").style.display = "none";
  document.getElementById("test-interface").style.display = "block";
  document.body.classList.add("in-test");
  // Reset nav panel on mobile
  const navPanel = document.getElementById("test-nav-panel");
  navPanel.classList.remove("nav-open");
  const toggleBtn = document.getElementById("mobile-qnav-toggle");
  if (toggleBtn) toggleBtn.textContent = "☰ Question Navigator ▾";

  buildQNavigator();
  showTestQuestion(0);
  if (timeMultiplier > 0) startTimer();
  else {
    document.getElementById("test-timer").textContent = "∞";
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    testState.timeLeft--;
    const t = document.getElementById("test-timer");
    const m = Math.floor(testState.timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const s = (testState.timeLeft % 60).toString().padStart(2, "0");
    t.textContent = `${m}:${s}`;
    t.className = "test-timer";
    if (testState.timeLeft < 300) t.classList.add("warning");
    if (testState.timeLeft < 60) t.classList.add("danger");
    if (testState.timeLeft <= 0) {
      clearInterval(timerInterval);
      confirmSubmitTest();
    }
  }, 1000);
}

function buildQNavigator() {
  const grid = document.getElementById("q-number-grid");
  grid.innerHTML = testState.questions
    .map(
      (_, i) =>
        `<div class="q-num-btn" id="qnav-${i}" onclick="showTestQuestion(${i})">${i + 1}</div>`,
    )
    .join("");
}

function showTestQuestion(idx) {
  testState.current = idx;
  const q = testState.questions[idx];
  document.getElementById("test-q-bignum").textContent = String(
    idx + 1,
  ).padStart(2, "0");
  document.getElementById("test-progress").textContent =
    `Q ${idx + 1} of ${testState.questions.length}`;
  const sub = SUBJECTS.find((s) => s.id === q.subject);
  document.getElementById("test-q-meta").innerHTML =
    `<span class="q-badge badge-${q.exam}">${q.exam.toUpperCase()}</span><span class="q-badge badge-year">${q.year}</span><span class="q-badge badge-subject">${sub?.name || q.subject}</span>`;
  document.getElementById("test-q-text").textContent = q.q;

  const letters = ["A", "B", "C", "D"];
  const optsEl = document.getElementById("test-q-options");
  optsEl.innerHTML = q.opts
    .map(
      (
        o,
        i,
      ) => `<div class="test-q-option ${testState.answers[idx] === i ? "selected" : ""}" onclick="selectTestAnswer(${i})">
    <span class="opt-letter">${letters[i]}</span>${o}
  </div>`,
    )
    .join("");

  // Update nav buttons
  document.querySelectorAll(".q-num-btn").forEach((btn, i) => {
    btn.className = "q-num-btn";
    if (testState.answers[i] !== null && testState.marked[i])
      btn.classList.add("answered", "marked");
    else if (testState.answers[i] !== null) btn.classList.add("answered");
    else if (testState.marked[i]) btn.classList.add("marked");
    if (i === idx) btn.classList.add("current");
  });
}

function selectTestAnswer(optIdx) {
  testState.answers[testState.current] = optIdx;
  document.querySelectorAll(".test-q-option").forEach((o, i) => {
    o.classList.toggle("selected", i === optIdx);
  });
  const navBtn = document.getElementById("qnav-" + testState.current);
  navBtn.classList.add("answered");
  navBtn.classList.toggle("marked", testState.marked[testState.current]);
}

function nextQuestion() {
  if (testState.current < testState.questions.length - 1)
    showTestQuestion(testState.current + 1);
}
function prevQuestion() {
  if (testState.current > 0) showTestQuestion(testState.current - 1);
}
function clearAnswer() {
  testState.answers[testState.current] = null;
  document
    .querySelectorAll(".test-q-option")
    .forEach((o) => o.classList.remove("selected"));
  document
    .getElementById("qnav-" + testState.current)
    .classList.remove("answered");
}
function markQuestion() {
  testState.marked[testState.current] = !testState.marked[testState.current];
  const btn = document.getElementById("qnav-" + testState.current);
  btn.classList.toggle("marked");
  toast(
    testState.marked[testState.current] ? "🔖 Marked for review" : "Unmarked",
  );
}

function submitTest() {
  // Show custom confirm modal (browser confirm() is blocked on HTTPS/Netlify)
  showSubmitModal();
}

function showSubmitModal() {
  const answered = testState.answers.filter((a) => a !== null).length;
  const skipped = testState.answers.filter((a) => a === null).length;
  const total = testState.questions.length;
  document.getElementById("submit-modal-stats").innerHTML = `
    <div style="display:flex;justify-content:center;gap:24px;margin:20px 0">
      <div style="text-align:center"><div style="font-size:28px;font-weight:900;font-family:'Playfair Display',serif;color:var(--accent3)">${answered}</div><div style="font-size:12px;color:var(--text3);margin-top:2px">Answered</div></div>
      <div style="text-align:center"><div style="font-size:28px;font-weight:900;font-family:'Playfair Display',serif;color:var(--danger)">${skipped}</div><div style="font-size:12px;color:var(--text3);margin-top:2px">Skipped</div></div>
      <div style="text-align:center"><div style="font-size:28px;font-weight:900;font-family:'Playfair Display',serif;color:var(--text)">${total}</div><div style="font-size:12px;color:var(--text3);margin-top:2px">Total</div></div>
    </div>
    ${skipped > 0 ? `<p style="font-size:13px;color:var(--accent4);margin-bottom:4px">⚠️ You have ${skipped} unanswered question${skipped > 1 ? "s" : ""}.</p>` : '<p style="font-size:13px;color:var(--accent3)">✅ All questions answered!</p>'}
  `;
  document.getElementById("submit-modal").style.display = "flex";
}

function confirmSubmitTest() {
  document.getElementById("submit-modal").style.display = "none";
  clearInterval(timerInterval);

  // Calculate results
  let correct = 0,
    wrong = 0,
    skipped = 0;
  const subjectPerf = {};
  testState.questions.forEach((q, i) => {
    if (!subjectPerf[q.subject])
      subjectPerf[q.subject] = { correct: 0, total: 0 };
    subjectPerf[q.subject].total++;
    if (testState.answers[i] === null) skipped++;
    else if (testState.answers[i] === q.ans) {
      correct++;
      subjectPerf[q.subject].correct++;
    } else wrong++;
  });

  const timeTaken = testState.totalTime - testState.timeLeft;
  const result = {
    date: new Date().toLocaleDateString(),
    exam: testState.examType,
    total: testState.questions.length,
    correct,
    wrong,
    skipped,
    score: Math.round((correct / testState.questions.length) * 100),
    timeTaken,
    subjectPerf,
  };
  state.testResults.push(result);
  localStorage.setItem("testResults", JSON.stringify(state.testResults));

  // Post to shared leaderboard
  if (DB_CONFIGURED && currentUser) {
    sbPostScore(
      result.score,
      result.correct,
      result.wrong,
      result.skipped,
      result.total,
      result.exam,
    );
  }

  // Update solved
  testState.questions.forEach((q, i) => {
    if (testState.answers[i] !== null)
      state.solved[q.id] = testState.answers[i];
  });
  localStorage.setItem("solved", JSON.stringify(state.solved));
  updateStats();

  // Show results
  document.getElementById("test-interface").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.body.classList.remove("in-test");
  showView("results");
  renderResults(result, subjectPerf);
}

function exitTest() {
  if (confirm("Exit without submitting? Progress will be lost.")) {
    clearInterval(timerInterval);
    document.getElementById("test-interface").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.body.classList.remove("in-test");
    showView("mock");
  }
}

// ===================== RESULTS =====================
function renderResults(result, subjectPerf) {
  const container = document.getElementById("results-content");
  const pct = result.score;
  const grade =
    pct >= 80
      ? "Excellent 🏆"
      : pct >= 60
        ? "Good 👍"
        : pct >= 40
          ? "Average 📚"
          : "Needs Work 💪";

  // Subject analysis
  const sortedSubjs = Object.entries(subjectPerf).sort(
    (a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total,
  );
  const weakSubjs = sortedSubjs.slice(0, 3);
  const strongSubjs = sortedSubjs.slice(-2).reverse();

  const suggestions = generateSuggestions(result, weakSubjs);

  container.innerHTML = `
    <div class="results-hero">
      <div class="score-ring" style="--pct:${pct * 3.6}deg">
        <div class="score-num">${pct}%</div>
      </div>
      <h2>${grade}</h2>
      <p>${result.date} · ${result.exam} · ${result.total} Questions</p>
    </div>
    <div class="results-stats">
      <div class="res-stat"><div class="rs-val" style="color:var(--accent3)">${result.correct}</div><div class="rs-label">Correct</div></div>
      <div class="res-stat"><div class="rs-val" style="color:var(--danger)">${result.wrong}</div><div class="rs-label">Wrong</div></div>
      <div class="res-stat"><div class="rs-val" style="color:var(--text3)">${result.skipped}</div><div class="rs-label">Skipped</div></div>
      <div class="res-stat"><div class="rs-val" style="color:var(--accent4)">${result.timeTaken > 0 ? Math.floor(result.timeTaken / 60) + "m" : "—"}</div><div class="rs-label">Time Used</div></div>
    </div>
    <div class="analysis-grid">
      <div class="analysis-card">
        <h3>📊 Subject Performance</h3>
        ${Object.entries(subjectPerf)
          .map(([sid, perf]) => {
            const sub = SUBJECTS.find((s) => s.id === sid);
            const p = Math.round((perf.correct / perf.total) * 100);
            return `<div class="subject-bar-item">
            <div class="sbi-label"><span>${sub?.icon || ""} ${sub?.name || sid}</span><span>${perf.correct}/${perf.total} (${p}%)</span></div>
            <div class="sbi-bar"><div class="sbi-fill" style="width:${p}%;background:${p >= 70 ? "var(--accent3)" : p >= 40 ? "var(--accent4)" : "var(--danger)"}"></div></div>
          </div>`;
          })
          .join("")}
      </div>
      <div class="analysis-card">
        <h3>🎯 AI Recommendations</h3>
        <div id="ai-suggestions">
          ${suggestions.map((s) => `<div class="suggestion-item"><span class="sug-icon">${s.icon}</span><div class="sug-text">${s.text}</div></div>`).join("")}
        </div>
        <button class="btn btn-ghost" style="width:100%;margin-top:16px" onclick="getAISuggestions(${JSON.stringify(result).replace(/"/g, "&quot;")})">🤖 Get Detailed AI Analysis</button>
      </div>
    </div>
    <div style="display:flex;gap:12px;margin-top:20px">
      <button class="btn btn-primary" onclick="showView('mock')">Take Another Test</button>
      <button class="btn btn-ghost" onclick="reviewMistakes()">Review Mistakes</button>
    </div>
  `;
}

function generateSuggestions(result, weakSubjs) {
  const sugs = [];
  if (result.score < 40)
    sugs.push({
      icon: "📚",
      text: "Focus on building fundamentals. Start with high-yield topics like pharmacology and pathology basics.",
    });
  if (result.score >= 40 && result.score < 70)
    sugs.push({
      icon: "⚡",
      text: "Good foundation! Now focus on weak subjects and attempt more previous year papers.",
    });
  if (result.score >= 70)
    sugs.push({
      icon: "🏆",
      text: "Excellent score! Fine-tune by focusing on tricky questions and timing strategies.",
    });
  if (result.skipped > result.total * 0.2)
    sugs.push({
      icon: "⏱️",
      text: `You skipped ${result.skipped} questions. Work on time management — attempt all questions even if unsure.`,
    });
  if (weakSubjs.length > 0) {
    const subName =
      SUBJECTS.find((s) => s.id === weakSubjs[0][0])?.name || weakSubjs[0][0];
    sugs.push({
      icon: "🎯",
      text: `${subName} is your weakest area. Review key concepts and attempt targeted practice questions.`,
    });
  }
  sugs.push({
    icon: "🔄",
    text: "Attempt at least 2 mock tests per week to track improvement and build exam stamina.",
  });
  return sugs;
}

async function getAISuggestions(result) {
  const container = document.getElementById("ai-suggestions");
  container.innerHTML =
    '<div style="color:var(--text3);font-style:italic;padding:16px">🤖 Analyzing your performance...</div>';
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 800,
        messages: [
          {
            role: "user",
            content: `As a medical education expert, analyze this mock test result and give specific study recommendations:

Exam: ${result.exam}
Score: ${result.score}% (${result.correct}/${result.total} correct)
Wrong: ${result.wrong}, Skipped: ${result.skipped}

Provide 5 specific, actionable recommendations for this student to improve their NEET/FMGE/INICET preparation. Be direct and practical. Format as numbered points.`,
          },
        ],
      }),
    });
    const data = await res.json();
    const text = data.content?.[0]?.text || "";
    container.innerHTML = `<div style="font-size:13px;color:var(--text2);line-height:1.8">${text.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</div>`;
  } catch (e) {
    container.innerHTML =
      '<div style="color:var(--danger);font-size:13px">AI analysis unavailable. Check your connection.</div>';
  }
}

function reviewMistakes() {
  // Show questions answered wrongly
  const wrongQids =
    testState?.questions
      ?.filter(
        (_, i) =>
          testState.answers[i] !== null &&
          testState.answers[i] !== testState.questions[i].ans,
      )
      .map((q) => q.id) || [];
  if (!wrongQids.length) {
    toast("No mistakes to review!");
    return;
  }
  showView("pyqs");
  const list = document.getElementById("pyq-list");
  const qs = QUESTIONS.filter((q) => wrongQids.includes(q.id));
  list.innerHTML = qs.map((q) => questionCard(q, true)).join("");
}

// ===================== STATS =====================
function updateStats() {
  const solved = Object.keys(state.solved).length;
  const correct = Object.entries(state.solved).filter(([id, ans]) => {
    const q = QUESTIONS.find((q) => q.id == id);
    return q && ans === q.ans;
  }).length;
  document.getElementById("stat-solved").textContent = solved;
  document.getElementById("stat-accuracy").textContent =
    solved > 0 ? Math.round((correct / solved) * 100) + "%" : "0%";
  document.getElementById("stat-tests").textContent = state.testResults.length;
}

// ===================== SEARCH =====================
function handleSearch(val) {
  if (!val.trim()) return;
  showView("pyqs");
  const qs = QUESTIONS.filter(
    (q) =>
      q.q.toLowerCase().includes(val.toLowerCase()) ||
      q.topic.toLowerCase().includes(val.toLowerCase()) ||
      q.exp.toLowerCase().includes(val.toLowerCase()),
  );
  document.getElementById("pyq-list").innerHTML = qs.length
    ? qs.map((q) => questionCard(q)).join("")
    : `<div style="text-align:center;padding:60px;color:var(--text3)">No results for "${val}"</div>`;
}

// ===================== QUICK TEST =====================
function startQuickTest() {
  showView("mock");
  setTimeout(() => {
    document
      .querySelector('.setup-opt.active[onclick*="qcount"]')
      ?.closest(".setup-options")
      ?.querySelector(".setup-opt")
      ?.click();
    startMockTest();
  }, 100);
}

// ===================== SHORTCUTS =====================
function showShortcuts() {
  document.getElementById("shortcuts-overlay").classList.add("show");
}
function hideShortcuts() {
  document.getElementById("shortcuts-overlay").classList.remove("show");
}

let gPressed = false;
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "SELECT" ||
      e.target.tagName === "TEXTAREA"
    )
      return;

    // Test shortcuts
    if (document.getElementById("test-interface").style.display === "block") {
      if (e.key === "ArrowRight") nextQuestion();
      if (e.key === "ArrowLeft") prevQuestion();
      if (e.key.toLowerCase() === "m") markQuestion();
      if (e.key === "a" || e.key === "A") selectTestAnswer(0);
      if (e.key === "b" || e.key === "B") selectTestAnswer(1);
      if (e.key === "c" || e.key === "C") selectTestAnswer(2);
      if (e.key === "d" || e.key === "D") selectTestAnswer(3);
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        submitTest();
      }
      return;
    }

    if (e.key === "?") {
      showShortcuts();
      return;
    }
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      document.getElementById("search-input").focus();
      return;
    }

    if (e.key.toLowerCase() === "g") {
      gPressed = true;
      setTimeout(() => (gPressed = false), 1000);
      return;
    }
    if (gPressed) {
      const map = {
        d: "dashboard",
        q: "pyqs",
        s: "subjects",
        c: "concepts",
        m: "mock",
        b: "bookmarks",
        a: "results",
        l: "leaderboard",
      };
      if (map[e.key.toLowerCase()]) {
        showView(map[e.key.toLowerCase()]);
        gPressed = false;
      }
    }
  });
}

// ===================== SUPABASE CONFIG =====================
// IMPORTANT: Replace these with your own Supabase credentials
// Follow the setup guide below to get these values
const SUPABASE_URL = "https://orfmojljaferafvxhqns.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZm1vamxqYWZlcmFmdnhocW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MTYwMjMsImV4cCI6MjA4OTk5MjAyM30.KcH5gdlPcIDDQRzUHmlLTkDfdPV1kyuUQHMAfta69oA";

const DB_CONFIGURED = SUPABASE_URL !== "YOUR_SUPABASE_URL";

// ===================== USER IDENTITY =====================
let currentUser = JSON.parse(localStorage.getItem("lb_user") || "null");
let lbTab = "alltime";

function checkUserRegistration() {
  if (!DB_CONFIGURED) return;
  if (!currentUser) {
    setTimeout(() => {
      document.getElementById("register-overlay").style.display = "flex";
    }, 800);
  }
}

async function registerUser() {
  const name = document.getElementById("reg-name").value.trim();
  const college = document.getElementById("reg-college").value.trim();
  if (!name || name.length < 2) {
    document.getElementById("reg-error").textContent =
      "Please enter at least 2 characters for your name.";
    return;
  }
  const userId =
    "user_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6);
  currentUser = {
    id: userId,
    name,
    college,
    joinedAt: new Date().toISOString(),
  };
  localStorage.setItem("lb_user", JSON.stringify(currentUser));
  document.getElementById("register-overlay").style.display = "none";
  // Upsert user profile
  await sbFetch("users", "POST", {
    id: userId,
    name,
    college,
    joined_at: currentUser.joinedAt,
  });
  toast("🏆 Welcome to the leaderboard, " + name + "!");
  if (state.view === "leaderboard") renderLeaderboard();
}

function skipRegister() {
  document.getElementById("register-overlay").style.display = "none";
  toast("You can join the leaderboard anytime from the sidebar");
}

// ===================== SUPABASE API HELPERS =====================
async function sbFetch(table, method = "GET", body = null, params = "") {
  if (!DB_CONFIGURED) return null;
  try {
    const opts = {
      method,
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: "Bearer " + SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
        Prefer:
          method === "POST"
            ? "return=representation,resolution=merge-duplicates"
            : "return=representation",
      },
    };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}${params}`, opts);
    if (!res.ok) {
      console.error("Supabase error", res.status, await res.text());
      return null;
    }
    return await res.json();
  } catch (e) {
    console.error("Supabase fetch failed", e);
    return null;
  }
}

async function sbGetLeaderboard(period = "alltime") {
  let params = "?order=best_score.desc&limit=50";
  if (period === "weekly") {
    const weekAgo = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000,
    ).toISOString();
    params = `?order=best_score.desc&limit=50&last_played=gte.${weekAgo}`;
  }
  return await sbFetch("leaderboard", "GET", null, params);
}

async function sbPostScore(score, correct, wrong, skipped, total, examType) {
  if (!DB_CONFIGURED || !currentUser) return;
  const payload = {
    user_id: currentUser.id,
    user_name: currentUser.name,
    college: currentUser.college || "",
    best_score: score,
    total_tests: 1,
    correct,
    wrong,
    skipped,
    total_questions: total,
    exam_type: examType,
    last_played: new Date().toISOString(),
  };
  // Upsert: if user exists, update if new score is better
  await sbFetch("leaderboard", "POST", payload);
}

// ===================== LEADERBOARD RENDER =====================
async function renderLeaderboard() {
  const container = document.getElementById("leaderboard-content");

  if (!DB_CONFIGURED) {
    container.innerHTML = `
      <div class="config-banner">
        <h3>⚙️ Supabase Setup Required</h3>
        <p>To enable the shared leaderboard, follow the setup steps below and add your Supabase URL and API key to the HTML file. It takes about 5 minutes and is completely free.</p>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:28px">
        <div style="font-family:'Playfair Display',serif;font-size:20px;margin-bottom:20px">📋 Setup Instructions</div>
        ${setupInstructions()}
      </div>`;
    return;
  }

  if (!currentUser) {
    container.innerHTML = `<div class="lb-empty">
      <div style="font-size:48px;margin-bottom:16px">🏆</div>
      <p style="font-size:16px;margin-bottom:20px">Join the leaderboard to see how you rank against your friends!</p>
      <button class="btn btn-primary" style="padding:12px 28px" onclick="document.getElementById('register-overlay').style.display='flex'">Join Now</button>
    </div>`;
    return;
  }

  // My stats card
  const myBestResult =
    state.testResults.length > 0
      ? state.testResults.reduce(
          (best, r) => (r.score > best.score ? r : best),
          state.testResults[0],
        )
      : null;

  container.innerHTML = `
    <div class="lb-hero">
      <div class="lb-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
      <div class="lb-hero-info">
        <h2>${currentUser.name}</h2>
        <p>${currentUser.college || "Medical Student"} · Joined ${new Date(currentUser.joinedAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</p>
      </div>
      <div class="lb-hero-stats">
        <div class="lb-hero-stat">
          <div class="lhs-val" style="color:var(--accent)">${myBestResult ? myBestResult.score + "%" : "—"}</div>
          <div class="lhs-label">Best Score</div>
        </div>
        <div class="lb-hero-stat">
          <div class="lhs-val" style="color:var(--accent3)">${state.testResults.length}</div>
          <div class="lhs-label">Tests Done</div>
        </div>
        <div class="lb-hero-stat">
          <div class="lhs-val" style="color:var(--accent2)">${myBestResult ? myBestResult.correct : 0}</div>
          <div class="lhs-label">Best Correct</div>
        </div>
      </div>
    </div>

    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
      <div class="lb-tabs">
        <div class="lb-tab ${lbTab === "alltime" ? "active" : ""}" onclick="switchLbTab('alltime')">All Time</div>
        <div class="lb-tab ${lbTab === "weekly" ? "active" : ""}" onclick="switchLbTab('weekly')">This Week</div>
      </div>
      <button class="btn btn-ghost" style="margin-left:auto;font-size:13px" onclick="refreshLeaderboard()">↻ Refresh</button>
      <button class="btn btn-ghost" style="font-size:13px" onclick="copyShareLink()">🔗 Share Link</button>
    </div>

    <div class="lb-table">
      <div class="lb-table-header">
        <span>Rank</span><span>Name</span><span>Best %</span><span>Tests</span><span>Correct</span><span>Exam</span>
      </div>
      <div id="lb-rows"><div class="lb-loading">⏳ Loading scores...</div></div>
    </div>
  `;

  loadLbRows();
}

async function loadLbRows() {
  const rowsEl = document.getElementById("lb-rows");
  if (!rowsEl) return;
  const data = await sbGetLeaderboard(lbTab);
  if (!data) {
    rowsEl.innerHTML = `<div class="lb-loading" style="color:var(--danger)">⚠️ Could not load leaderboard. Check your Supabase configuration.</div>`;
    return;
  }
  if (data.length === 0) {
    rowsEl.innerHTML = `<div class="lb-empty"><p style="color:var(--text3)">No scores yet! Be the first to complete a mock test 🚀</p></div>`;
    return;
  }

  const rankEmoji = ["🥇", "🥈", "🥉"];
  const rankClass = ["gold", "silver", "bronze"];

  rowsEl.innerHTML = data
    .map((row, i) => {
      const isMe = currentUser && row.user_id === currentUser.id;
      const rank = i + 1;
      const rankDisp = rank <= 3 ? rankEmoji[rank - 1] : rank;
      const rankCls = rank <= 3 ? rankClass[rank - 1] : "";
      return `<div class="lb-row ${isMe ? "me" : ""}">
      <div class="lb-rank ${rankCls}">${rankDisp}</div>
      <div class="lb-name-cell">
        <div class="lb-mini-avatar">${row.user_name.charAt(0).toUpperCase()}</div>
        <div>
          <div class="lb-name">${row.user_name}${isMe ? '<span class="lb-you-tag">YOU</span>' : ""}</div>
          ${row.college ? `<div style="font-size:11px;color:var(--text3)">${row.college}</div>` : ""}
        </div>
      </div>
      <div class="lb-score-cell" style="color:${row.best_score >= 70 ? "var(--accent3)" : row.best_score >= 40 ? "var(--accent4)" : "var(--danger)"}">${row.best_score}%</div>
      <div class="lb-cell">${row.total_tests}</div>
      <div class="lb-cell">${row.correct || "—"}</div>
      <div class="lb-cell" style="font-size:11px">${row.exam_type || "—"}</div>
    </div>`;
    })
    .join("");
}

function switchLbTab(tab) {
  lbTab = tab;
  renderLeaderboard();
}

async function refreshLeaderboard() {
  document.getElementById("lb-rows").innerHTML =
    '<div class="lb-loading">⏳ Refreshing...</div>';
  await loadLbRows();
  toast("✓ Leaderboard refreshed");
}

function copyShareLink() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => toast("🔗 Link copied! Share with friends"));
}

function setupInstructions() {
  return `<div style="font-size:14px;color:var(--text2);line-height:2">
    <div style="margin-bottom:12px"><strong style="color:var(--accent)">Step 1</strong> — Go to <a href="https://supabase.com" target="_blank" style="color:var(--accent)">supabase.com</a> and create a free account</div>
    <div style="margin-bottom:12px"><strong style="color:var(--accent)">Step 2</strong> — Click <strong>New Project</strong> → name it <code style="background:var(--surface2);padding:2px 6px;border-radius:4px">medprep</code> → set a database password → click Create</div>
    <div style="margin-bottom:12px"><strong style="color:var(--accent)">Step 3</strong> — In your project, go to <strong>SQL Editor</strong> and run this SQL to create the tables:</div>
    <pre style="background:var(--surface2);padding:16px;border-radius:10px;font-size:12px;font-family:'DM Mono',monospace;overflow-x:auto;margin-bottom:16px;border:1px solid var(--border)">-- Create users table
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  college TEXT,
  joined_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create leaderboard table
CREATE TABLE leaderboard (
  user_id TEXT PRIMARY KEY REFERENCES users(id),
  user_name TEXT NOT NULL,
  college TEXT,
  best_score INTEGER DEFAULT 0,
  total_tests INTEGER DEFAULT 0,
  correct INTEGER DEFAULT 0,
  wrong INTEGER DEFAULT 0,
  skipped INTEGER DEFAULT 0,
  total_questions INTEGER DEFAULT 0,
  exam_type TEXT,
  last_played TIMESTAMPTZ DEFAULT NOW()
);

-- Enable public read, authenticated write
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read leaderboard" ON leaderboard FOR SELECT USING (true);
CREATE POLICY "Public insert leaderboard" ON leaderboard FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update leaderboard" ON leaderboard FOR UPDATE USING (true);
CREATE POLICY "Public read users" ON users FOR SELECT USING (true);
CREATE POLICY "Public insert users" ON users FOR INSERT WITH CHECK (true);</pre>
    <div style="margin-bottom:12px"><strong style="color:var(--accent)">Step 4</strong> — Go to <strong>Project Settings → API</strong> and copy:<br>
      · <strong>Project URL</strong> (looks like https://xyzabc.supabase.co)<br>
      · <strong>anon / public key</strong> (long string starting with eyJ...)
    </div>
    <div style="margin-bottom:12px"><strong style="color:var(--accent)">Step 5</strong> — Open your <code style="background:var(--surface2);padding:2px 6px;border-radius:4px">index.html</code> file in a text editor (Notepad/VS Code), find these two lines near the top of the script section:</div>
    <pre style="background:var(--surface2);padding:12px;border-radius:8px;font-size:12px;font-family:'DM Mono',monospace;margin-bottom:16px;border:1px solid var(--border)">const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';</pre>
    <div style="margin-bottom:12px">Replace with your actual values, save the file, and re-upload to Netlify.</div>
    <div style="margin-bottom:4px"><strong style="color:var(--accent3)">✓ Done!</strong> Reload the site, go to Leaderboard, and the shared scores will appear for all your friends.</div>
  </div>`;
}

// ===================== PATCH submitTest to post score =====================
const _origSubmitTest = submitTest;
// Override submitTest to also post to leaderboard
const submitTest_orig = window.submitTest;
window.addEventListener("load", () => {
  checkUserRegistration();
});

// ===================== LEADERBOARD SHORTCUT =====================
// Patch keyboard nav
const _origKeyMap = {
  d: "dashboard",
  q: "pyqs",
  s: "subjects",
  c: "concepts",
  m: "mock",
  b: "bookmarks",
  a: "results",
  l: "leaderboard",
};

function toast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}
