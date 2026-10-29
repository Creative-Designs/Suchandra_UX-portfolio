import { assetPath } from "@/lib/assets"

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

export type CaseStudyContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; text: string; label?: string }
  | { type: "workflow"; steps: string[] }
  | { type: "subheading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }

export type CaseStudySection =
  | { heading: string; body: string[] }
  | { heading: string; content: CaseStudyContentBlock[] }

export interface CaseStudy {
  slug: string
  title: string
  category: string
  environment: string
  summary: string
  role: string
  timeframe?: string
  tags: string[]
  cover: string
  coverAlt: string
  responsibilities?: string[]
  sections: CaseStudySection[]
}

// -----------------------------------------------------------------------
// SELECTED WORK — illustrative case studies. Replace with real projects,
// screenshots, and outcomes. Keep claims honest and specific to your work.
// -----------------------------------------------------------------------
export const caseStudies: CaseStudy[] = [
  {
    slug: "indirect-tax-automation",
    title: "Indirect Tax Automation Platform",
    category: "Enterprise · Tax recovery",
    environment: "Enterprise tax operations",
    summary:
      "Transforming a fragmented tax recovery process into a workflow-driven enterprise experience for invoice ingestion, review, engagement management, integrations, and audit governance.",
    role: "UX Lead & Product Designer",
    tags: ["Workflow design", "Enterprise UX", "Tax recovery", "AI-assisted research"],
    cover: assetPath("/assets/work/claims-platform.png"),
    coverAlt: "Illustrative enterprise dashboard with charts, metrics, and a data table.",
    responsibilities: [
      "UX strategy",
      "Product discovery",
      "Requirements analysis",
      "Information architecture",
      "User journey mapping",
      "AI-assisted UX research",
      "Workflow design",
      "Wireframing",
      "High-fidelity design",
      "Stakeholder alignment",
      "Enterprise UX governance",
    ],
    sections: [
      {
        heading: "Executive summary",
        content: [
          {
            type: "paragraph",
            text: "Indirect Tax Automation is an enterprise platform designed to streamline the complete indirect tax recovery lifecycle.",
          },
          {
            type: "paragraph",
            text: "The platform supports invoice ingestion, automated processing, review workflows, engagement management, SQL integration, administration, and audit governance.",
          },
          {
            type: "paragraph",
            text: "The project emerged from a need to consolidate fragmented operational processes into a single ecosystem where users could efficiently execute work, monitor progress, and manage engagements without switching between multiple systems.",
          },
          {
            type: "paragraph",
            text: "Rather than designing another feature-heavy enterprise application, the goal was to create a workflow-centered experience that reflected how users perform their daily tasks.",
          },
        ],
      },
      {
        heading: "The business challenge",
        content: [
          {
            type: "paragraph",
            text: "Tax recovery teams were managing complex operational processes involving large volumes of invoice data, multiple engagements, approval workflows, and downstream integrations.",
          },
          {
            type: "paragraph",
            text: "Although the organization had mature business processes, those processes were not effectively represented in the user experience. Users often knew what needed to be done but struggled to determine where to do it.",
          },
          {
            type: "list",
            items: [
              "Work was distributed across multiple systems.",
              "Users spent time locating information instead of completing tasks.",
              "Operational visibility was limited.",
              "Review workflows were inconsistent.",
              "Administrative processes lacked structure.",
              "Navigation reflected system architecture rather than user goals.",
            ],
          },
          {
            type: "callout",
            label: "The core problem",
            text: "The problem was not a lack of functionality. It was excessive cognitive effort.",
          },
        ],
      },
      {
        heading: "Defining the UX opportunity",
        content: [
          {
            type: "paragraph",
            text: "During requirements analysis, a pattern quickly emerged: business requirements were written in terms of capabilities.",
          },
          {
            type: "list",
            items: [
              "Upload invoices",
              "Processing status",
              "Invoice review",
              "SQL push",
              "Engagement management",
              "SQL mapping",
              "Audit logs",
            ],
          },
          {
            type: "paragraph",
            text: "While technically accurate, this feature-based view did not reflect how users think. Users rarely wake up intending to use a feature; they wake up intending to complete work.",
          },
          {
            type: "callout",
            label: "The design shift",
            text: "Build around workflows and desired outcomes instead of organizing the experience around individual features.",
          },
        ],
      },
      {
        heading: "The real user journey",
        content: [
          {
            type: "paragraph",
            text: "The operational process revealed a simpler story. Everything else in the platform existed to support this journey.",
          },
          {
            type: "workflow",
            steps: ["Upload", "Processing", "Invoice review", "Approval", "SQL push"],
          },
          {
            type: "callout",
            label: "The guiding question",
            text: "Instead of asking, “How many pages should we create?” the design focus became, “How can we make this journey as effortless as possible?”",
          },
        ],
      },
      {
        heading: "How AI influenced the UX process",
        content: [
          {
            type: "paragraph",
            text: "AI played a significant role throughout the project, not as a design generator, but as a strategic thinking partner. Its greatest value was helping transform feature-oriented requirements into user-centered workflows.",
          },
          {
            type: "paragraph",
            text: "For example, AI-assisted analysis reframed upload invoices, processing status, invoice review, and SQL push as stages of one operational process rather than independent capabilities. This changed how navigation, workflows, and information architecture were designed.",
          },
          { type: "subheading", text: "Requirement refinement" },
          {
            type: "paragraph",
            text: "AI was used to challenge assumptions and improve decision quality, helping reduce unnecessary complexity.",
          },
          {
            type: "list",
            items: [
              "Does this need to be a separate page?",
              "Is this a feature or just a status?",
              "Is this KPI actionable?",
              "Is this dashboard adding value?",
              "What would users expect to do next?",
            ],
          },
          { type: "subheading", text: "Information architecture validation" },
          {
            type: "paragraph",
            text: "Multiple navigation structures were explored and evaluated. The workflow-driven structure consistently proved more intuitive.",
          },
          {
            type: "list",
            items: [
              "Dashboard-first",
              "Feature-driven",
              "Workflow-driven",
              "Role-based",
            ],
          },
          { type: "subheading", text: "UX critique and design rationalization" },
          {
            type: "paragraph",
            text: "AI also acted as a continuous reviewer, helping identify areas where the experience could be more focused.",
          },
          {
            type: "list",
            items: [
              "Redundant dashboards",
              "Overuse of KPIs",
              "Duplicate navigation paths",
              "Unnecessary modules",
              "Inconsistent terminology",
            ],
          },
        ],
      },
      {
        heading: "UX strategy",
        content: [
          {
            type: "paragraph",
            text: "Three principles guided the project:",
          },
          {
            type: "list",
            items: [
              "Surface work — users should immediately understand what requires attention.",
              "Reduce navigation — users should spend time completing work rather than looking for work.",
              "Reflect real processes — the UI should mirror the actual operational workflow.",
            ],
          },
        ],
      },
      {
        heading: "Information architecture",
        content: [
          {
            type: "paragraph",
            text: "The platform separates personal work, operational execution, engagement management, and administrative governance. Home serves as a navigation hub for the four primary work areas.",
          },
          {
            type: "list",
            items: ["My Work", "Operations", "Engagements", "Administration"],
          },
          {
            type: "paragraph",
            text: "This structure gives users a clear starting point while keeping distinct types of work easy to find.",
          },
        ],
      },
      {
        heading: "Designing the core experiences",
        content: [
          { type: "subheading", text: "Home: a focused navigation hub" },
          {
            type: "paragraph",
            text: "Rather than overwhelming users with analytics, the home experience presents four clear entry points: My Work, Operations, Engagements, and Administration. This reduces clutter and helps users select the area relevant to their goals.",
          },
          { type: "subheading", text: "My Work: make the next action clear" },
          {
            type: "paragraph",
            text: "Instead of requiring users to search for tasks, My Work brings tasks directly to them and transforms the system from a repository of information into an actionable workspace.",
          },
          {
            type: "list",
            items: [
              "Pending reviews",
              "Follow-ups",
              "Decisions requiring attention",
              "Overdue items",
            ],
          },
          {
            type: "callout",
            label: "From search to action",
            text: "Instead of asking “Where is my work?” users can immediately understand “What should I do next?”",
          },
          { type: "subheading", text: "Operations: organize around the process" },
          {
            type: "paragraph",
            text: "Operations became the backbone of the platform. Rather than exposing technical functionality, it was organized around the real business process.",
          },
          {
            type: "workflow",
            steps: ["Upload", "Processing", "Invoice review", "SQL push"],
          },
          {
            type: "paragraph",
            text: "This structure reduces cognitive effort because users no longer have to mentally connect separate functions. The interface itself reflects the workflow.",
          },
          { type: "subheading", text: "Invoice review: focus on decisions" },
          {
            type: "paragraph",
            text: "Invoice Review is the highest-value interaction in the platform: the point where business decisions happen. Reviewers validate extracted information, compare source data, and decide how each invoice should proceed.",
          },
          {
            type: "list",
            items: ["Approve", "Request follow-up", "Discard"],
          },
          {
            type: "paragraph",
            text: "A deliberate effort was made to remove distractions and non-actionable content from this experience, while maintaining administrative functionality for engagement configuration, SQL configuration, and audit logs.",
          },
        ],
      },
      {
        heading: "Key design decisions",
        content: [
          { type: "subheading", text: "Reduce dashboard dependency" },
          {
            type: "paragraph",
            text: "Enterprise systems often default to charts, analytics, and excessive KPI usage. However, operational users needed actions rather than reports. Dashboards were replaced with workflow-focused views wherever possible.",
          },
          { type: "subheading", text: "Prioritize workflows over features" },
          {
            type: "paragraph",
            text: "The platform was structured around the work users perform rather than the technical capabilities of the system, improving navigation clarity.",
          },
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
    cover: assetPath("/assets/work/banking-platform.png"),
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
    cover: assetPath("/assets/work/workflow-platform.png"),
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
    cover: assetPath("/assets/work/analytics-platform.png"),
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
