/**
 * ---------------------------------------------------------------------------
 * PORTFOLIO CONTENT
 * ---------------------------------------------------------------------------
 * This is the single source of truth for every piece of copy, link, and
 * asset reference used across the site. Replace the placeholder values
 * below with real information — company names, dates, and case-study
 * detail are illustrative placeholders and should be edited to reflect
 * your actual experience before publishing.
 * ---------------------------------------------------------------------------
 */

export const profile = {
  name: "Suchandra Das",
  role: "Lead UX Designer",
  roleSecondary: "Senior UI/UX Designer",
  location: "Bengaluru, India",
  positioning: "I design clear, scalable enterprise experiences for complex workflows.",
  summary:
    "I'm a UX designer with 8–9 years of experience shaping enterprise software — from fintech and banking platforms to B2B and data-heavy SaaS products. I work closely with product and engineering to turn ambiguous, high-complexity problems into experiences that are clear, consistent, and easy to scale.",
  email: "im.suchandradas0@gmail.com",
  linkedin: "https://www.linkedin.com/in/suchandradas",
  resumeUrl: "/resume/Suchandra-Das-Resume.pdf",
}

export const targetEnvironments = [
  "Big Four consulting",
  "SaaS products",
  "Fintech & banking",
  "B2B products",
  "Enterprise platforms",
  "Complex workflow & data-heavy products",
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Selected work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export const principles = [
  {
    title: "Clarity over decoration",
    description:
      "Enterprise workflows are already complex. My job is to remove friction and ambiguity, not add visual noise.",
  },
  {
    title: "Systems, not screens",
    description:
      "I design patterns and components that scale across teams and product lines — not one-off solutions.",
  },
  {
    title: "Evidence-led decisions",
    description:
      "I pair qualitative research with usage data to validate direction early, before design debt accumulates.",
  },
  {
    title: "Partner with engineering",
    description:
      "The best enterprise UX ships. I design with technical and data constraints in view from day one.",
  },
]

// -----------------------------------------------------------------------
// EXPERIENCE — replace company names, titles, and dates with real history.
// -----------------------------------------------------------------------
export const experience = [
  {
    role: "Lead UX Designer",
    company: "Enterprise SaaS Platform",
    period: "2022 — Present",
    summary:
      "Leading design for a multi-product enterprise platform, setting design direction across three cross-functional squads and mentoring a small team of designers.",
    highlights: [
      "Established a shared design system adopted across the core platform and two adjacent products.",
      "Introduced structured discovery rituals that shortened the gap between research and shipped design.",
      "Partnered with product leadership to align roadmap decisions with longitudinal usability findings.",
    ],
  },
  {
    role: "Senior UX Designer",
    company: "Fintech & Banking Platform",
    period: "2019 — 2022",
    summary:
      "Owned end-to-end design for core banking workflows, including onboarding, payments, and compliance-heavy case management tools.",
    highlights: [
      "Redesigned a fragmented claims workflow into a single, role-aware experience used by regional operations teams.",
      "Worked directly with compliance and risk stakeholders to balance regulatory requirements with usability.",
      "Built reusable flow patterns for multi-step verification that were adopted across three product lines.",
    ],
  },
  {
    role: "UX Designer",
    company: "B2B Workflow Platform",
    period: "2017 — 2019",
    summary:
      "Designed configuration-heavy B2B tools for operations and admin users, with a focus on information density and task efficiency.",
    highlights: [
      "Simplified a legacy admin console used by internal operations teams, reducing steps for common tasks.",
      "Ran usability sessions with internal power users to prioritize a high-complexity feature backlog.",
    ],
  },
  {
    role: "UX & Product Design",
    company: "Digital Product Studio",
    period: "2015 — 2017",
    summary:
      "Started in an agency environment, working across web and mobile products for early-stage and mid-size clients.",
    highlights: [
      "Delivered end-to-end UX for a range of client products, from research through final UI handoff.",
      "Developed early foundations in design systems thinking and cross-platform consistency.",
    ],
  },
]

export interface CaseStudySection {
  heading: string
  body: string[]
}

export interface CaseStudy {
  slug: string
  title: string
  category: string
  environment: string
  summary: string
  role: string
  timeframe: string
  tags: string[]
  cover: string
  coverAlt: string
  sections: CaseStudySection[]
}

// -----------------------------------------------------------------------
// SELECTED WORK — illustrative case studies. Replace with real projects,
// screenshots, and outcomes. Keep claims honest and specific to your work.
// -----------------------------------------------------------------------
export const caseStudies: CaseStudy[] = [
  {
    slug: "claims-workflow",
    title: "Redesigning a regional claims workflow",
    category: "Enterprise · Insurance operations",
    environment: "Banking & Financial Services",
    summary:
      "Consolidated a fragmented, multi-tool claims process into a single role-aware workflow for regional operations teams.",
    role: "Lead UX Designer · End-to-end design, workflow mapping, stakeholder alignment",
    timeframe: "8 months",
    tags: ["Workflow design", "Enterprise UX", "Design systems"],
    cover: "/assets/work/claims-platform.png",
    coverAlt:
      "Abstract illustration of a claims operations dashboard with panels, a data table, and a trend chart.",
    sections: [
      {
        heading: "Context",
        body: [
          "Regional operations teams were processing claims across three disconnected internal tools, each built for a different stage of the workflow. Handoffs between stages relied on manual status updates and email, which made it difficult to track where a claim actually stood.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "New team members took weeks to become productive because the mental model of 'where does this claim live' was inconsistent across tools. Senior staff spent a disproportionate amount of time answering status questions instead of resolving cases.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I ran structured shadowing sessions with claims handlers across two regional offices to map the real workflow, not the documented one. This surfaced several undocumented workarounds that were critical to how work actually got done.",
          "From there, I built a unified workflow model with clear state transitions, then translated it into a single interface organized around the claim itself rather than the tool that happened to own a given step.",
          "I worked closely with engineering to sequence the migration so operations teams could move incrementally, rather than requiring a disruptive big-bang cutover.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The unified workflow became the default system for regional claims handling, replacing two of the three legacy tools. New hires reached working proficiency measurably faster, and senior staff reported spending less time on status lookups and more on case resolution.",
        ],
      },
    ],
  },
  {
    slug: "banking-onboarding",
    title: "Simplifying multi-step account verification",
    category: "Fintech · Onboarding & compliance",
    environment: "Banking & Financial Services",
    summary:
      "Reworked a compliance-heavy verification flow to reduce drop-off while keeping every required regulatory step intact.",
    role: "Senior UX Designer · Flow design, compliance collaboration, pattern library",
    timeframe: "5 months",
    tags: ["Fintech", "Compliance UX", "Flow design"],
    cover: "/assets/work/banking-platform.png",
    coverAlt:
      "Abstract illustration of a banking application interface with simple cards, a rising trend line, and transaction rows.",
    sections: [
      {
        heading: "Context",
        body: [
          "A multi-step identity and document verification flow was required by regulation, but had been built incrementally over several years without a cohesive structure. Each step had been added by a different team, resulting in inconsistent patterns and duplicated data entry.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "Customers frequently abandoned verification partway through, often re-entering information they had already provided in an earlier step. Support teams were fielding repeat questions about why verification was 'stuck.'",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I worked with compliance stakeholders early to understand which requirements were truly fixed versus which were implementation choices that could be redesigned. This distinction was critical to finding real room to improve the experience.",
          "I consolidated overlapping data requests into a single structured flow with persistent progress, and designed a reusable 'verification step' pattern that could flex for different document types without reinventing the layout each time.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The redesigned flow shipped with full regulatory sign-off and became the standard pattern for new verification requirements going forward, reducing the design and engineering effort needed for future compliance changes.",
        ],
      },
    ],
  },
  {
    slug: "ops-console",
    title: "Rebuilding a high-density admin console",
    category: "B2B · Internal operations tooling",
    environment: "B2B & Enterprise Platforms",
    summary:
      "Modernized a legacy internal console used daily by operations staff, prioritizing task efficiency over visual novelty.",
    role: "UX Designer · Research, information architecture, interaction design",
    timeframe: "6 months",
    tags: ["B2B tooling", "Information architecture", "Power-user UX"],
    cover: "/assets/work/workflow-platform.png",
    coverAlt:
      "Abstract illustration of a workflow automation tool with connected nodes and kanban-style columns.",
    sections: [
      {
        heading: "Context",
        body: [
          "Internal operations teams relied on a dense, decade-old admin console for daily configuration tasks. The interface had grown organically, with new functionality bolted on wherever there was available screen space.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "Common tasks required navigating through several nested menus, and the lack of consistent patterns meant experienced users still made costly configuration errors.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Rather than starting from a blank canvas, I ran task-based usability sessions with the most experienced users to understand which parts of their existing mental model were worth preserving. Power users often build real expertise around 'bad' interfaces, and discarding that expertise carelessly creates unnecessary retraining cost.",
          "I restructured the information architecture around the objects users actually think in — accounts, rules, and permissions — and introduced inline validation to catch configuration errors before they were saved.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The rebuilt console reduced the number of steps required for the most common configuration tasks and was rolled out with a guided transition period, minimizing disruption for existing power users.",
        ],
      },
    ],
  },
  {
    slug: "analytics-platform",
    title: "Designing a self-serve analytics workspace",
    category: "SaaS · Data & analytics",
    environment: "Enterprise SaaS",
    summary:
      "Designed a configurable analytics workspace that let non-technical teams build their own views without engineering support.",
    role: "Lead UX Designer · Product strategy, interaction design, design system contribution",
    timeframe: "7 months",
    tags: ["Data visualization", "SaaS", "Self-serve tooling"],
    cover: "/assets/work/analytics-platform.png",
    coverAlt:
      "Abstract illustration of a data analytics dashboard with bar charts, scatter points, and filter panels.",
    sections: [
      {
        heading: "Context",
        body: [
          "Teams depended on engineering to build and maintain custom dashboards for reporting needs. This created a persistent backlog and meant that reporting requirements were often out of date by the time a dashboard shipped.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "Non-technical stakeholders had clear ideas about what they wanted to see, but no way to build it themselves, and engineering time was being spent on repetitive dashboard requests rather than core product work.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I designed a workspace built around composable 'views' — reusable chart and table blocks that could be configured without writing queries. I worked with engineering to define a constrained but flexible data model that balanced user flexibility against implementation complexity.",
          "Early prototypes were tested with the same stakeholders who had previously filed dashboard requests, which helped validate that the abstraction matched how they actually thought about their data.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The workspace shipped as a core part of the platform, giving teams the ability to build and adjust their own reporting views directly and reducing the backlog of custom dashboard requests routed to engineering.",
        ],
      },
    ],
  },
]

export const skillGroups = [
  {
    title: "UX Strategy & Research",
    skills: [
      "Discovery & stakeholder alignment",
      "Workflow mapping",
      "Usability testing",
      "Information architecture",
      "Service blueprinting",
    ],
  },
  {
    title: "Interaction & Visual Design",
    skills: [
      "Interaction design",
      "Design systems",
      "Responsive & adaptive layout",
      "Data visualization",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "Collaboration & Leadership",
    skills: [
      "Cross-functional partnership",
      "Design mentorship",
      "Roadmap & prioritization input",
      "Engineering handoff",
      "Workshop facilitation",
    ],
  },
  {
    title: "Tools",
    skills: ["Figma", "FigJam", "Framer", "Notion", "Jira / Confluence"],
  },
]
