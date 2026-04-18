// ── PROJECTS DATA ──
// To add a new project: copy one object below and add it to the array.
// icon: any phosphor icon class (ph-chart-bar, ph-airplane, etc.)
// badge: optional { icon, text } — shown as top-right badge on the card
// links: array of { icon, text, href } — leave href as "#" if not yet public

const projects = [
  {
    icon: "ph-chart-bar",
    badge: { icon: "ph-star", text: "Primary DS Project" },
    title: "Poverty Prediction & Classification Using ML",
    desc: "End-to-end machine learning project predicting and classifying poverty levels using socioeconomic features. Applied classification algorithms, feature engineering, and model evaluation — framed around real-world policy impact and interpretable insights for decision-makers.",
    tags: ["Python", "scikit-learn", "Classification", "Feature Engineering", "pandas"],
    links: [{ icon: "ph-github-logo", text: "GitHub", href: "#" }]
  },
  {
    icon: "ph-airplane",
    badge: { icon: "ph-buildings", text: "Enterprise Platform" },
    title: "Air Cargo Community System (ACS)",
    desc: "Large-scale government air cargo community platform — end-to-end solutions engineering including multi-vendor coordination, solution architecture, RFP documentation, technical compliance mapping, and stakeholder walkthroughs for a national-level logistics system.",
    tags: ["Solution Architecture", "Multi-vendor", "Government", "RFP / EOI"],
    links: [{ icon: "ph-file-text", text: "Case Study", href: "#" }]
  },
  {
    icon: "ph-anchor",
    badge: { icon: "ph-buildings", text: "Enterprise Platform" },
    title: "Port Community System (PCS)",
    desc: "National port community platform supporting maritime logistics data flows. Led technical proposal preparation, BOM design, solution sizing, and multi-vendor coordination across cloud providers, ISPs, and software principals for a complex government deployment.",
    tags: ["Solution Design", "Cloud Infrastructure", "Government", "ISP Coordination"],
    links: [{ icon: "ph-file-text", text: "Case Study", href: "#" }]
  },
  {
    icon: "ph-globe",
    badge: null,
    title: "Web Services Portal",
    desc: "Enterprise web services portal solution — requirements gathering, vendor evaluation, technical architecture design, and presales documentation for a multi-stakeholder government digital services initiative.",
    tags: ["Web Services", "Presales", "API Integration", "Enterprise"],
    links: [{ icon: "ph-file-text", text: "Case Study", href: "#" }]
  },
  {
    icon: "ph-chalkboard-teacher",
    badge: null,
    title: "Arduino-Based Smart Classroom",
    desc: "IoT-enabled smart classroom system built on Arduino — automated environmental controls, attendance systems, and real-time monitoring. Demonstrated embedded systems integration with sensor data collection for educational infrastructure optimization.",
    tags: ["Arduino", "IoT", "Embedded Systems", "Sensors"],
    links: [{ icon: "ph-github-logo", text: "GitHub", href: "#" }]
  },
  {
    icon: "ph-blueprint",
    badge: null,
    title: "System Architecture Diagramming Tool",
    desc: "Web-based visual tool for creating infrastructure and solution architecture diagrams. Features 80+ drag-and-drop IT components across hardware, security, biometric, and software categories — with customizable connections, canvas controls, and PNG export.",
    tags: ["HTML/CSS/JS", "Solution Architecture", "Drag & Drop", "Canvas"],
    links: [
      { icon: "ph-github-logo", text: "GitHub", href: "https://github.com/kalanaGeethmal/System-Architecture-Diagramming-Tool" },
      { icon: "ph-arrow-square-out", text: "Live", href: "https://kalanageethmal.github.io/System-Architecture-Diagramming-Tool/" }
    ]
  },
  {
    icon: "ph-scales",
    badge: null,
    title: "SL PDPA 2026 — Interactive Compliance Guide",
    desc: "Interactive reference guide for Sri Lanka's Personal Data Protection Act (No. 9 of 2022) and its 2025 amendment. Covers the seven core obligations, data subject rights, AI lifecycle compliance mapping, and a 20-item checklist — with an integrated PDPA assistant chatbot.",
    tags: ["HTML/CSS/JS", "Data Privacy", "AI Compliance", "Gemini API"],
    links: [
      { icon: "ph-github-logo", text: "GitHub", href: "https://github.com/kalanaGeethmal/SL-PDPA-2026" }
    ]
  }
];
