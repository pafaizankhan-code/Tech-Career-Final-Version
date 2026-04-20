// All service categories & service metadata. Drives:
// - Header mega menu
// - Services landing page
// - Dynamic ServiceDetail page (`/services/:slug`)

export const categories = [
  {
    key: 'development',
    label: 'Development',
    tagline: 'Scalable product engineering — built to outlive trends.',
    iconKey: 'dev',
  },
  {
    key: 'cloud',
    label: 'Cloud & Data',
    tagline: 'Infra, pipelines, and analytics that auto-scale with you.',
    iconKey: 'cloud',
  },
  {
    key: 'intelligence',
    label: 'Intelligence',
    tagline: 'AI copilots, security, and strategy — intelligence as a layer.',
    iconKey: 'brain',
  },
  {
    key: 'design',
    label: 'Design & Brand',
    tagline: 'Design systems, UX research, and brand identities that convert.',
    iconKey: 'palette',
  },
  {
    key: 'growth',
    label: 'Digital Growth',
    tagline: 'Marketing systems that compound — not campaigns that expire.',
    iconKey: 'trend',
  },
]

export const getCategory = (key) => categories.find((c) => c.key === key)

export const services = [
  // ── DEVELOPMENT ──────────────────────────────────────────────
  {
    slug: 'web-development',
    category: 'development',
    title: 'Web Development',
    short: 'Scalable web platforms & SaaS.',
    tagline: 'Websites & SaaS that outlive trends.',
    intro:
      'We design and ship lightning-fast websites, enterprise portals, and SaaS products engineered for scale, performance, and measurable business outcomes.',
    metric: { k: '99.99%', v: 'Uptime SLA' },
    features: [
      { title: 'Modern Stacks', desc: 'Next.js, React, TypeScript, and headless architectures that scale without rewrites.' },
      { title: 'Performance-First', desc: 'Lighthouse 95+, sub-second TTFB, and edge rendering as the default, not the upsell.' },
      { title: 'Accessibility Built-In', desc: 'WCAG AA compliance is baked into every component and flow from day one.' },
      { title: 'Observability', desc: 'Error tracking, analytics, and real-user metrics wired in — you see what users feel.' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS'],
    deliverables: ['Scoped PRD', 'Design System', 'Production Codebase', 'CI/CD Pipeline', '30-day Support'],
    pricing: [
      { tier: 'Landing', price: '₹3 L+', duration: '2 – 3 weeks', features: ['5 – 8 pages', 'Responsive design', 'CMS integration', 'SEO baseline', '30-day support'] },
      { tier: 'SaaS Platform', price: '₹15 L+', duration: '8 – 12 weeks', features: ['Custom UI system', 'Auth & roles', 'Admin dashboard', 'Payments & analytics', 'CI/CD setup'], featured: true },
      { tier: 'Enterprise', price: 'Custom', duration: '12+ weeks', features: ['Multi-region deployment', 'SSO & compliance', 'Dedicated squad', 'SLA-backed support', 'Quarterly reviews'] },
    ],
    faqs: [
      { q: 'What platforms do you build on?', a: 'Mostly Next.js + React with TypeScript and a headless CMS (Sanity, Contentful, Strapi). For WordPress migrations we support both.' },
      { q: 'Can you handle an existing codebase?', a: 'Yes. We audit, stabilise, and incrementally modernise — no forced rewrites. 60% of our web work starts with a legacy codebase.' },
      { q: 'Do you deliver SEO as part of build?', a: 'Every build ships with semantic markup, Core Web Vitals tuning, structured data, and a sitemap. Ongoing SEO is a separate growth retainer.' },
    ],
    caseStudy: { title: 'Nexora Analytics', metric: '40K+ concurrent users', slug: 'nexora' },
  },
  {
    slug: 'mobile-apps',
    category: 'development',
    title: 'Mobile Applications',
    short: 'iOS, Android & cross-platform.',
    tagline: 'Mobile apps users love to keep.',
    intro:
      'Native and cross-platform apps engineered for both stores — biometric auth, smooth animations, deep APIs, and App Store reviews that stay above 4.7 stars.',
    metric: { k: '4.9★', v: 'Avg. Store Rating' },
    features: [
      { title: 'Native Performance', desc: 'Swift and Kotlin when it matters, React Native or Flutter when speed matters more.' },
      { title: 'Pixel-Perfect UI', desc: 'Thumb-friendly flows, offline-first behaviour, and motion that respects accessibility.' },
      { title: 'Store Submissions', desc: 'We handle screenshots, metadata, rejections — you ship, we paperwork.' },
      { title: 'Push & Offline', desc: 'Background sync, push notifications, and graceful degradation on weak networks.' },
    ],
    stack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS Amplify'],
    deliverables: ['UX Prototypes', 'Signed Builds', 'Backend APIs', 'Store Assets', '30-day Support'],
    pricing: [
      { tier: 'MVP', price: '₹8 L+', duration: '6 – 8 weeks', features: ['Single platform', 'Core flows', 'Push notifications', 'Store submission', '30-day support'] },
      { tier: 'Cross-Platform', price: '₹20 L+', duration: '10 – 14 weeks', features: ['iOS + Android', 'Offline mode', 'Analytics', 'Deep linking', 'CI/CD'], featured: true },
      { tier: 'Enterprise', price: 'Custom', duration: '14+ weeks', features: ['White-label fleet', 'MDM compatibility', 'Biometric auth', 'App Store Optimization', 'On-call'] },
    ],
    faqs: [
      { q: 'Native or cross-platform?', a: 'Depends on the use case. We lead with Flutter or React Native unless you need native APIs, hardware-heavy features, or strict 60fps across the board.' },
      { q: 'Do you do App Store Optimization?', a: 'We set the baseline — keywords, screenshots, A/B variants. Ongoing ASO is typically a Digital Growth retainer.' },
      { q: 'How long before first build?', a: 'Signed TestFlight/Internal Track build ready in ~3 weeks for MVP scope.' },
    ],
    caseStudy: { title: 'Finlytic Banking', metric: '4.9★ · 210k installs/mo', slug: 'finlytic' },
  },
  {
    slug: 'custom-software',
    category: 'development',
    title: 'Custom Software',
    short: 'Tailored enterprise tools.',
    tagline: 'Internal tools that earn their keep.',
    intro:
      'Bespoke CRMs, ERPs, operations dashboards, and automation layers built around how your team actually works — not how an off-the-shelf product thinks you should.',
    metric: { k: '63%', v: 'Time Saved / Workflow' },
    features: [
      { title: 'Workflow Modelling', desc: 'We shadow operators for a day, map workflows, then build the tool they wish existed.' },
      { title: 'Integration-First', desc: 'Clean APIs into your existing systems — SAP, Salesforce, Zoho, NetSuite, whatever.' },
      { title: 'Role-Aware Access', desc: 'Granular permissions, audit logs, and SSO from day one — enterprise-ready.' },
      { title: 'Report Automation', desc: 'Scheduled reports, exports, and dashboards that replace fragile spreadsheets.' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'Docker', 'Kubernetes'],
    deliverables: ['Process Audit', 'Wireframes', 'Production Tool', 'Onboarding Docs', 'Admin Training'],
    pricing: [
      { tier: 'Workflow Tool', price: '₹6 L+', duration: '4 – 8 weeks', features: ['3 – 5 workflows', 'User roles', 'CSV import/export', 'Audit log', '30-day support'] },
      { tier: 'Internal Platform', price: '₹20 L+', duration: '10 – 16 weeks', features: ['Multi-module platform', 'SSO + permissions', 'Reporting engine', 'Integrations', 'Training'], featured: true },
      { tier: 'ERP / CRM Build', price: 'Custom', duration: '16+ weeks', features: ['Domain-specific modules', 'Workflow engine', 'BI layer', 'Compliance', 'Dedicated squad'] },
    ],
    faqs: [
      { q: 'Is this white-labelled software?', a: 'No. Every engagement is bespoke — yours to own, yours to extend. We hand over the repo and docs.' },
      { q: 'Can you replace an existing ERP?', a: 'Piece by piece, yes. We rarely do big-bang replacements — too risky. We build modules that sit alongside, then retire the old system module by module.' },
      { q: 'Who hosts the software?', a: 'Your cloud or ours. Most clients prefer their own AWS or Azure for data sovereignty.' },
    ],
    caseStudy: { title: 'Plexa HR', metric: '200K+ employees managed', slug: 'plexa' },
  },

  // ── CLOUD & DATA ─────────────────────────────────────────────
  {
    slug: 'cloud-architecture',
    category: 'cloud',
    title: 'Cloud Architecture',
    short: 'AWS, Azure, GCP deployments.',
    tagline: 'Cloud that scales with you, not against you.',
    intro:
      'Well-architected, multi-region deployments on AWS, Azure, and GCP — designed for elasticity, cost-control, and the regulatory realities of your industry.',
    metric: { k: '82%', v: 'Faster Deploys' },
    features: [
      { title: 'Multi-Region Ready', desc: 'Active-active or active-passive, with automated failover and continuous drills.' },
      { title: 'FinOps Baked In', desc: 'Tagged resources, budget alerts, and monthly cost reviews — no bill shock.' },
      { title: 'Infrastructure as Code', desc: 'Terraform or Pulumi everywhere. Every environment is reproducible and reviewable.' },
      { title: 'Compliance Templates', desc: 'HIPAA, PCI, SOC 2 baselines ready — pass your audit on the first attempt.' },
    ],
    stack: ['AWS', 'Azure', 'GCP', 'Terraform', 'Pulumi', 'Kubernetes', 'CloudFlare'],
    deliverables: ['Architecture Diagram', 'IaC Repo', 'Runbooks', 'Cost Dashboard', 'Migration Plan'],
    pricing: [
      { tier: 'Audit & Plan', price: '₹4 L+', duration: '2 – 3 weeks', features: ['Architecture review', 'Cost optimisation', 'Risk map', 'IaC skeleton', 'Roadmap'] },
      { tier: 'Migration', price: '₹18 L+', duration: '8 – 16 weeks', features: ['Zero-downtime move', 'IaC implementation', 'CI/CD pipelines', 'Observability', 'Training'], featured: true },
      { tier: 'Managed Ops', price: 'Custom', duration: 'Ongoing', features: ['24/7 on-call', 'Incident response', 'Monthly reviews', 'Cost negotiations', 'Quarterly DR drills'] },
    ],
    faqs: [
      { q: 'Do you support all three hyperscalers?', a: 'AWS and Azure are bread-and-butter, GCP for data-heavy workloads. We\u2019re AWS Advanced Partner and Azure Expert MSP.' },
      { q: 'Can you help lower our current cloud bill?', a: 'Typically yes — 30% savings is a conservative average after our FinOps engagement. Reserved Instances, rightsizing, and spot usage all help.' },
      { q: 'How do you handle DR and backups?', a: 'RPO and RTO are decided upfront, baked into architecture, and tested quarterly via automated game-days.' },
    ],
    caseStudy: { title: 'Orbital Logistics', metric: '7 regions · 99.99% uptime', slug: 'orbital' },
  },
  {
    slug: 'devops-cicd',
    category: 'cloud',
    title: 'DevOps & CI/CD',
    short: 'Automated delivery pipelines.',
    tagline: 'Ship daily. Sleep nightly.',
    intro:
      'End-to-end CI/CD pipelines, GitOps workflows, and observability layers that let your team ship dozens of changes a day with confidence and a fast rollback.',
    metric: { k: '14 /day', v: 'Avg. Deploys' },
    features: [
      { title: 'Blue-Green Deploys', desc: 'Zero-downtime rollouts with canary traffic shifts and automated rollback on SLO drift.' },
      { title: 'GitOps Everywhere', desc: 'Git as the single source of truth for code, config, and infrastructure state.' },
      { title: 'Observability Stack', desc: 'Metrics, logs, traces, and alerts — SLOs that actually page humans, not everyone.' },
      { title: 'Security as a Step', desc: 'SAST, DAST, SCA, and secret-scanning inside every pipeline. Vulnerabilities fail the build.' },
    ],
    stack: ['GitHub Actions', 'ArgoCD', 'Kubernetes', 'Helm', 'Datadog', 'Prometheus', 'Grafana'],
    deliverables: ['Pipeline Suite', 'Monitoring Dashboards', 'Alert Policies', 'Runbooks', 'On-call Rotation'],
    pricing: [
      { tier: 'Foundation', price: '₹5 L+', duration: '3 – 5 weeks', features: ['CI/CD for one repo', 'Basic monitoring', 'Slack alerts', 'Deployment runbook', 'Training'] },
      { tier: 'Platform', price: '₹18 L+', duration: '8 – 12 weeks', features: ['Org-wide pipelines', 'GitOps rollout', 'Full observability', 'SLO framework', 'On-call setup'], featured: true },
      { tier: 'Managed DevOps', price: 'Custom', duration: 'Ongoing', features: ['Dedicated SRE', '24/7 on-call', 'Incident command', 'Quarterly DR', 'Compliance evidence'] },
    ],
    faqs: [
      { q: 'Do you use GitHub Actions, GitLab, or something else?', a: 'GitHub Actions and GitLab CI most often. For heavier workflows we use Jenkins, Argo Workflows, or Buildkite depending on need.' },
      { q: 'Will you replace our existing pipelines?', a: 'Only if they\u2019re fundamentally broken. We usually refactor in place so your team keeps context and institutional memory.' },
      { q: 'Do you run our on-call?', a: 'In the Managed DevOps tier, yes — full 24/7 L1/L2/L3 escalation with documented SLAs.' },
    ],
    caseStudy: { title: 'Orbital Logistics', metric: '0-downtime migration', slug: 'orbital' },
  },
  {
    slug: 'data-engineering',
    category: 'cloud',
    title: 'Data Engineering',
    short: 'Warehousing, ETL & analytics.',
    tagline: 'Data pipelines that don\u2019t fall over.',
    intro:
      'Modern data stacks — from ingestion to warehouse to dashboards — with lineage, quality checks, and cost-aware architecture built in from the first ETL.',
    metric: { k: '2M+', v: 'Events / sec Processed' },
    features: [
      { title: 'Modern Lakehouse', desc: 'Snowflake, BigQuery, or Databricks at the core — Iceberg tables when the scale demands it.' },
      { title: 'Ingestion Pipelines', desc: 'CDC, API, file, and streaming ingestion — Airbyte, Fivetran, Kafka, or bespoke where needed.' },
      { title: 'Quality & Lineage', desc: 'dbt tests, Great Expectations, and OpenLineage so every number has a trail.' },
      { title: 'BI & Activation', desc: 'Looker, Metabase, Superset dashboards, plus reverse-ETL back into your ops tools.' },
    ],
    stack: ['Snowflake', 'BigQuery', 'dbt', 'Airflow', 'Kafka', 'Airbyte', 'Looker'],
    deliverables: ['Data Architecture', 'ETL Pipelines', 'Warehouse Schema', 'BI Dashboards', 'Data Catalog'],
    pricing: [
      { tier: 'Starter Stack', price: '₹6 L+', duration: '4 – 6 weeks', features: ['Warehouse setup', '3 – 5 source pipelines', 'Core dashboards', 'dbt project', 'Training'] },
      { tier: 'Analytics Platform', price: '₹22 L+', duration: '10 – 16 weeks', features: ['Lakehouse', '15+ pipelines', 'Quality framework', 'Self-serve BI', 'Reverse-ETL'], featured: true },
      { tier: 'Enterprise Data', price: 'Custom', duration: '16+ weeks', features: ['Data mesh', 'Streaming real-time', 'MLOps integration', 'Governance tooling', 'Dedicated team'] },
    ],
    faqs: [
      { q: 'Snowflake vs BigQuery — which should we pick?', a: 'Snowflake for multi-cloud parity and workload isolation, BigQuery if you\u2019re GCP-native. We help you decide in the audit.' },
      { q: 'Can you build on top of our existing warehouse?', a: 'Yes. We often inherit a raw Redshift or BigQuery and bring dbt, testing, and observability to it.' },
      { q: 'Do you do machine learning pipelines?', a: 'Up to model serving — beyond that, we hand off to our AI/ML practice seamlessly.' },
    ],
    caseStudy: { title: 'Strata Media', metric: 'Petabyte-scale pipeline', slug: 'strata' },
  },

  // ── INTELLIGENCE ─────────────────────────────────────────────
  {
    slug: 'ai-ml',
    category: 'intelligence',
    title: 'AI / ML Solutions',
    short: 'Predictive models & automation.',
    tagline: 'AI that ships — not just demos.',
    intro:
      'Production-grade machine learning, LLM-powered copilots, and automation layers integrated into your products and workflows — with observability, guardrails, and cost in mind.',
    metric: { k: '2M+', v: 'Docs Indexed (RAG)' },
    features: [
      { title: 'RAG & Copilots', desc: 'Retrieval-augmented LLM assistants grounded in your private data, with auditable citations.' },
      { title: 'Predictive Models', desc: 'Forecasting, recommendations, churn, and fraud — tuned on your historical data.' },
      { title: 'Computer Vision', desc: 'OCR, defect detection, and shelf analytics — deployed on edge or cloud.' },
      { title: 'MLOps', desc: 'Model versioning, drift monitoring, and safe rollouts. No silent degradations.' },
    ],
    stack: ['Python', 'LangChain', 'PyTorch', 'TensorFlow', 'Pinecone', 'OpenAI', 'Azure OpenAI'],
    deliverables: ['Model Card', 'Training Pipeline', 'Inference API', 'Monitoring Suite', 'Evaluation Report'],
    pricing: [
      { tier: 'Prototype', price: '₹6 L+', duration: '3 – 5 weeks', features: ['Feasibility study', 'Prototype model', 'Baseline metrics', 'Recommendation report', 'Demo app'] },
      { tier: 'Production Model', price: '₹25 L+', duration: '10 – 16 weeks', features: ['Full data pipeline', 'Trained model', 'Inference API', 'Monitoring', 'Runbooks'], featured: true },
      { tier: 'AI Platform', price: 'Custom', duration: '16+ weeks', features: ['Multi-model serving', 'Feature store', 'A/B framework', 'Governance', 'Dedicated MLOps team'] },
    ],
    faqs: [
      { q: 'Do you use OpenAI or build custom models?', a: 'Both. OpenAI / Anthropic / Azure OpenAI for most LLM work. Custom models when the domain is narrow and data exists.' },
      { q: 'How do you handle data privacy?', a: 'On-prem inference, BYO-key, or private-endpoint deployments. We never train on client data without explicit consent.' },
      { q: 'Can you help us evaluate whether AI is the right fit?', a: 'Yes — that\u2019s literally the Prototype tier. Half the time we tell clients AI is overkill. It builds trust.' },
    ],
    caseStudy: { title: 'Sentio Intelligence', metric: '63% time saved · 12 teams', slug: 'sentio' },
  },
  {
    slug: 'cybersecurity',
    category: 'intelligence',
    title: 'Cybersecurity',
    short: 'Audits, SOC & compliance.',
    tagline: 'Security you don\u2019t have to apologise for.',
    intro:
      'Pentests, security audits, compliance readiness (SOC 2, ISO 27001, HIPAA), and managed detection — delivered by engineers who also build the systems they break.',
    metric: { k: '100%', v: 'Audit Pass Rate' },
    features: [
      { title: 'Penetration Testing', desc: 'Black-box, grey-box, and white-box pentests — web, mobile, cloud, and API.' },
      { title: 'Compliance Readiness', desc: 'SOC 2 Type II, ISO 27001, HIPAA, and PCI — evidence collection, policies, and mock audits.' },
      { title: 'SOC & MDR', desc: '24/7 monitoring, triage, and incident response — or we augment your in-house team.' },
      { title: 'Secure SDLC', desc: 'Threat modelling, code review, secret scanning, and security champions in every team.' },
    ],
    stack: ['Burp Suite', 'Metasploit', 'Wazuh', 'Crowdstrike', 'Vanta', 'Drata', 'Cloudflare'],
    deliverables: ['Pentest Report', 'Remediation Plan', 'Policies Pack', 'Audit Readiness', 'Monitoring Setup'],
    pricing: [
      { tier: 'Audit', price: '₹4 L+', duration: '2 – 4 weeks', features: ['Pentest (scoped)', 'Risk report', 'Remediation plan', 'Executive briefing', 'Re-test pass'] },
      { tier: 'Compliance', price: '₹15 L+', duration: '8 – 12 weeks', features: ['SOC 2 / ISO 27001 prep', 'Policies & evidence', 'Auditor handoff', 'Tooling setup', 'Training'], featured: true },
      { tier: 'Managed Security', price: 'Custom', duration: 'Ongoing', features: ['24/7 SOC', 'MDR', 'Quarterly pentests', 'DFIR retainer', 'Virtual CISO'] },
    ],
    faqs: [
      { q: 'How fast can you get us SOC 2 Type II ready?', a: 'Typical timeline is a single quarter for Type I, with Type II observation starting immediately after.' },
      { q: 'Who does the actual audit?', a: 'A certified third-party auditor — we prepare you and hand off. We\u2019ve worked with Prescient, BARR, AuditBoard, etc.' },
      { q: 'Do you do red team exercises?', a: 'Yes — full adversary emulation (TIBER-EU style) for mature security teams. Scoped separately.' },
    ],
    caseStudy: { title: 'Aegis Healthcare', metric: 'SOC 2 + ISO 27001 in 1 quarter', slug: 'aegis' },
  },
  {
    slug: 'it-consulting',
    category: 'intelligence',
    title: 'IT Consulting',
    short: 'Strategy & digital transformation.',
    tagline: 'Advice from people who also ship.',
    intro:
      'Strategic advisory for CTOs, product leaders, and boards — architecture reviews, technology roadmaps, vendor selection, and the uncomfortable second opinion worth paying for.',
    metric: { k: '18 yrs', v: 'Avg. Advisor Experience' },
    features: [
      { title: 'Tech Due Diligence', desc: 'For investors and acquirers — codebase health, team depth, and scalability risks, fast.' },
      { title: 'Architecture Reviews', desc: 'Independent review of your systems with a written remediation roadmap and priority order.' },
      { title: 'Vendor Selection', desc: 'Objective evaluation of SaaS vendors and implementation partners — no kickbacks, ever.' },
      { title: 'Fractional CTO', desc: 'Hands-on technical leadership for companies between CTOs or at a key scaling moment.' },
    ],
    stack: ['Miro', 'Notion', 'Confluence', 'Google Workspace', 'Looker'],
    deliverables: ['Executive Brief', 'Roadmap Document', 'Vendor Shortlist', 'Risk Register', 'Quarterly Updates'],
    pricing: [
      { tier: 'Advisory Sprint', price: '₹3 L+', duration: '1 – 2 weeks', features: ['Focused review', 'Written report', 'Exec briefing', 'Roadmap draft', 'Q&A office hours'] },
      { tier: 'Strategic Retainer', price: '₹6 L/mo', duration: 'Ongoing', features: ['Monthly strategy days', 'Architecture reviews', 'Vendor negotiations', 'Hiring help', 'Board decks'], featured: true },
      { tier: 'Fractional CTO', price: 'Custom', duration: '3 – 12 months', features: ['50% – 100% allocation', 'Team leadership', 'Investor readiness', 'Hiring & firing', 'Full accountability'] },
    ],
    faqs: [
      { q: 'Can you help us evaluate an acquisition target?', a: 'Yes — our tech due diligence reports are used by PE firms and strategic acquirers across Asia and Europe.' },
      { q: 'Is advisory separate from build work?', a: 'Always. No kickbacks, no implementation upsells. If advisory leads to a build, it\u2019s a separate contract with fresh scope.' },
      { q: 'Will you sign an NDA?', a: 'Mutual NDAs in <10 minutes. We advise under strict confidentiality — it\u2019s the whole point of independent advice.' },
    ],
    caseStudy: { title: 'Private Equity Fund', metric: '₹800 Cr acquisition de-risked', slug: 'pe-diligence' },
  },

  // ── DESIGN & BRAND ───────────────────────────────────────────
  {
    slug: 'ui-ux-design',
    category: 'design',
    title: 'UI / UX Design',
    short: 'Interfaces that feel inevitable.',
    tagline: 'Design that ships with the code.',
    intro:
      'Research-led UX and high-craft UI design for complex products — with engineers in the room from day one, so what\u2019s designed is always what\u2019s built.',
    metric: { k: '3×', v: 'Conversion Lift (avg.)' },
    features: [
      { title: 'Research-Led', desc: 'Generative and evaluative research — interviews, tree-testing, unmoderated usability, and session replay.' },
      { title: 'Systems Thinking', desc: 'We design components and flows as a system — so the tenth screen is as polished as the first.' },
      { title: 'Prototyping', desc: 'Clickable prototypes in Figma and Framer for early stakeholder buy-in and user testing.' },
      { title: 'Engineer-Ready', desc: 'Handoff specs, animation timing, edge-case coverage, and a walk-through of every state.' },
    ],
    stack: ['Figma', 'Framer', 'Maze', 'Dovetail', 'Principle', 'Origami'],
    deliverables: ['User Research Report', 'Wireframes', 'High-Fi UI', 'Prototype', 'Handoff Doc'],
    pricing: [
      { tier: 'Quick Sprint', price: '₹3 L+', duration: '2 – 3 weeks', features: ['Up to 10 screens', 'Basic research', 'Hi-fi designs', 'Figma handoff', 'One round of revisions'] },
      { tier: 'Product Design', price: '₹12 L+', duration: '6 – 10 weeks', features: ['Full research', 'IA + flows', 'Design system starter', 'Clickable prototype', 'Eng handoff'], featured: true },
      { tier: 'Design Partnership', price: 'Custom', duration: 'Ongoing', features: ['Embedded designers', 'Weekly design crits', 'System maintenance', 'User research ops', 'Dedicated lead'] },
    ],
    faqs: [
      { q: 'Do you design mobile and web in one engagement?', a: 'Yes — our systems-first approach makes multi-platform a natural extension, not a separate project.' },
      { q: 'Can you redesign an existing product?', a: 'Often. We start with a UX audit, prioritise by impact, and redesign in iterations — not a big-bang visual refresh.' },
      { q: 'Will you work in our Figma file?', a: 'Absolutely. We prefer it — context is king. We follow your component naming, branch structure, everything.' },
    ],
    caseStudy: { title: 'Finlytic Banking', metric: '4.9★ app rating', slug: 'finlytic' },
  },
  {
    slug: 'design-systems',
    category: 'design',
    title: 'Design Systems',
    short: 'Components & tokens that scale.',
    tagline: 'A single source of design truth.',
    intro:
      'Production-ready component libraries, design tokens, and documentation that keep your 10-person startup and your 500-person org shipping the same quality bar.',
    metric: { k: '63%', v: 'Faster Shipping' },
    features: [
      { title: 'Token Architecture', desc: 'Multi-brand, multi-theme tokens with a single export pipeline to Figma and code.' },
      { title: 'Figma + Code Parity', desc: 'Figma libraries and React/Vue component libraries stay in lockstep — forever.' },
      { title: 'Governance Model', desc: 'Contribution guidelines, review workflows, and a roadmap so the system keeps compounding.' },
      { title: 'Migration Support', desc: 'We help teams retire legacy components and absorb the new system without blocking roadmaps.' },
    ],
    stack: ['Figma', 'Storybook', 'Style Dictionary', 'React', 'Tailwind', 'Radix', 'Vanilla Extract'],
    deliverables: ['Token Set', 'Figma Library', 'Component Library', 'Storybook Docs', 'Governance Playbook'],
    pricing: [
      { tier: 'Starter System', price: '₹6 L+', duration: '4 – 6 weeks', features: ['~20 components', 'Tokens (light + dark)', 'Figma + React', 'Storybook setup', 'Doc site'] },
      { tier: 'Mature System', price: '₹20 L+', duration: '10 – 16 weeks', features: ['40+ components', 'Multi-brand tokens', 'Migration plan', 'Governance docs', 'Adoption workshops'], featured: true },
      { tier: 'Ongoing Ops', price: 'Custom', duration: 'Ongoing', features: ['Dedicated maintainer', 'Versioned releases', 'RFC workflow', 'Accessibility audits', 'Consumer support'] },
    ],
    faqs: [
      { q: 'Do you use Material, Radix, or build from scratch?', a: 'Depends. Radix for low-level primitives, custom everything on top. We rarely use opinionated libraries like MUI — they fight you eventually.' },
      { q: 'How do you keep Figma and code in sync?', a: 'Style Dictionary as the source of truth + Tokens Studio in Figma. One PR, both worlds update.' },
      { q: 'Can you adopt our existing brand into a system?', a: 'Yes — that\u2019s most of our work. We start with a brand audit, then token-ise.' },
    ],
    caseStudy: { title: 'Nexora Analytics', metric: '40+ shared components', slug: 'nexora' },
  },
  {
    slug: 'brand-identity',
    category: 'design',
    title: 'Brand Identity',
    short: 'Brand systems with longevity.',
    tagline: 'Brands that outlast refreshes.',
    intro:
      'Strategy-first brand identities — logos, typography, motion, and guidelines — built to hold up across a decade of product, marketing, and storytelling.',
    metric: { k: '10+ yrs', v: 'Avg. Brand Lifespan' },
    features: [
      { title: 'Brand Strategy', desc: 'Positioning, messaging, and audience articulation — the foundation before a single pixel moves.' },
      { title: 'Visual Identity', desc: 'Logo systems, typography, colour, motion, and sound — cohesive across every touchpoint.' },
      { title: 'Guidelines Pack', desc: 'Living brand books with examples, dos and donts, and download-ready assets.' },
      { title: 'Launch Support', desc: 'Website, templates, pitch decks, and social kits so the new brand ships everywhere on day one.' },
    ],
    stack: ['Figma', 'Illustrator', 'After Effects', 'Blender', 'Webflow'],
    deliverables: ['Brand Strategy Doc', 'Logo System', 'Typography + Colour', 'Brand Guidelines', 'Template Pack'],
    pricing: [
      { tier: 'Startup Brand', price: '₹5 L+', duration: '3 – 5 weeks', features: ['Wordmark + logo', 'Colour + type', 'Basic guidelines', '3 – 5 templates', 'Launch assets'] },
      { tier: 'Full Identity', price: '₹18 L+', duration: '8 – 12 weeks', features: ['Strategy + naming', 'Full identity system', 'Motion + sound', 'Guidelines v1', 'Website + decks'], featured: true },
      { tier: 'Brand Partnership', price: 'Custom', duration: 'Ongoing', features: ['Quarterly evolution', 'Campaign systems', 'Sub-brands', 'Dedicated creative director', 'Governance'] },
    ],
    faqs: [
      { q: 'Do you write naming and copy too?', a: 'We partner with specialist naming agencies for product naming. Brand voice and core copy — yes, always.' },
      { q: 'Can you rebrand without disrupting our product?', a: 'Yes — we design a rollout plan that swaps visuals surface-by-surface over a quarter, not overnight.' },
      { q: 'Do you do motion identities?', a: 'Yes — sound, motion, and interactive components are first-class deliverables.' },
    ],
    caseStudy: { title: 'Linea Commerce', metric: 'Full rebrand in 10 weeks', slug: 'linea' },
  },

  // ── DIGITAL GROWTH ───────────────────────────────────────────
  {
    slug: 'seo-analytics',
    category: 'growth',
    title: 'SEO & Analytics',
    short: 'Search visibility & measurement.',
    tagline: 'Organic growth that compounds.',
    intro:
      'Technical SEO, content strategy, and analytics foundations that turn search into your most reliable acquisition channel — and prove it in the boardroom.',
    metric: { k: '4×', v: 'Organic Traffic (12 mo.)' },
    features: [
      { title: 'Technical SEO', desc: 'Core Web Vitals, schema, sitemaps, crawl budget — the unglamorous foundations search rewards.' },
      { title: 'Content Strategy', desc: 'Topical maps, keyword clusters, and briefs engineered to rank and convert, not just exist.' },
      { title: 'Analytics Setup', desc: 'GA4, Looker, server-side tracking, and event taxonomies that survive attribution reality.' },
      { title: 'Reporting & Insights', desc: 'Monthly reviews in plain English — what grew, what didn\u2019t, what we\u2019re testing next.' },
    ],
    stack: ['GA4', 'GSC', 'Looker Studio', 'Ahrefs', 'Semrush', 'Segment', 'Plausible'],
    deliverables: ['Technical Audit', 'Content Plan', 'Analytics Setup', 'Monthly Report', 'Dashboards'],
    pricing: [
      { tier: 'SEO Audit', price: '₹2.5 L+', duration: '2 – 3 weeks', features: ['Full tech audit', 'Content gap analysis', '90-day roadmap', 'Analytics check', 'Presentation'] },
      { tier: 'Growth Retainer', price: '₹2 L/mo', duration: 'Ongoing', features: ['Ongoing technical fixes', 'Monthly content plan', 'Analytics + reports', 'A/B tests', 'Strategy calls'], featured: true },
      { tier: 'Enterprise Program', price: 'Custom', duration: 'Ongoing', features: ['Multi-market strategy', 'Dedicated team', 'Content production', 'PR + link building', 'Attribution modelling'] },
    ],
    faqs: [
      { q: 'How long until we see ranking movement?', a: 'Technical fixes move the needle in 4 – 8 weeks. Content-driven growth compounds over quarters, not weeks.' },
      { q: 'Do you write the content?', a: 'We plan every brief, and in the Enterprise Program we produce. For retainers, we partner with your team or approved writers.' },
      { q: 'Can you fix our GA4?', a: 'Yes. Most GA4 setups we inherit are partially broken — it\u2019s typically the first fix in any engagement.' },
    ],
    caseStudy: { title: 'Linea Commerce', metric: '3× organic conversion lift', slug: 'linea' },
  },
  {
    slug: 'performance-marketing',
    category: 'growth',
    title: 'Performance Marketing',
    short: 'Paid channels that scale profitably.',
    tagline: 'Paid that pays back.',
    intro:
      'Google Ads, Meta, LinkedIn, and programmatic — structured, tracked, and creative-tested to drive CAC down and quality up across markets and funnels.',
    metric: { k: '−42%', v: 'Blended CAC' },
    features: [
      { title: 'Channel Mix', desc: 'The right channel for the right cohort — not every dollar into Google Ads because that\u2019s what everyone does.' },
      { title: 'Creative Testing', desc: 'Weekly creative refreshes with clean variants, not 47 tiny-copy-swap ad groups.' },
      { title: 'Tracking & Attribution', desc: 'Server-side tracking, enhanced conversions, and modelled attribution — so iOS privacy doesn\u2019t blind you.' },
      { title: 'LTV-Aware Optimisation', desc: 'We bid towards long-term value, not just the first purchase. Post-click matters more than CPC.' },
    ],
    stack: ['Google Ads', 'Meta Ads', 'LinkedIn', 'Taboola', 'TikTok Ads', 'Segment', 'GA4'],
    deliverables: ['Strategy Doc', 'Campaign Builds', 'Creative Kit', 'Weekly Reporting', 'Monthly Review'],
    pricing: [
      { tier: 'Launch Sprint', price: '₹3 L+', duration: '3 – 4 weeks', features: ['2 channels', 'Audience + creative kit', 'Tracking setup', 'Launch + optimise', 'Final review'] },
      { tier: 'Monthly Retainer', price: '₹1.5 L/mo', duration: 'Ongoing', features: ['Up to 3 channels', 'Weekly optimisation', 'Creative cadence', 'Reporting + reviews', 'Ad budget excluded'], featured: true },
      { tier: 'Full-Service', price: 'Custom', duration: 'Ongoing', features: ['Unlimited channels', 'Dedicated squad', 'In-house creative', 'LTV modelling', 'Board-level reporting'] },
    ],
    faqs: [
      { q: 'What\u2019s a good starting monthly budget?', a: 'Below ₹5 L / month you\u2019re probably better off with SEO + content. Above ₹5 L / month paid starts to make sense for most SaaS and e-commerce.' },
      { q: 'Do you buy media or just strategy?', a: 'Both. We operate accounts directly — you own them, we run them.' },
      { q: 'Do you do creative production?', a: 'Yes in Full-Service. In Monthly Retainer we brief and review; your creative team or contractors produce.' },
    ],
    caseStudy: { title: 'Finlytic Banking', metric: '210K installs/mo at −42% CAC', slug: 'finlytic' },
  },
  {
    slug: 'content-cro',
    category: 'growth',
    title: 'Content & CRO',
    short: 'Content + landing page optimisation.',
    tagline: 'Content that earns clicks — and conversions.',
    intro:
      'Editorial content programs and conversion-rate optimisation for SaaS, fintech, and e-commerce — where every page is a testable hypothesis, not a static artefact.',
    metric: { k: '+58%', v: 'Avg. Conversion Lift' },
    features: [
      { title: 'Editorial Calendar', desc: 'Long-form + short-form mix planned against your funnel and your buying cycles.' },
      { title: 'Landing Page CRO', desc: 'Structured A/B testing on landing pages, onboarding flows, and checkout — with enough traffic for real inference.' },
      { title: 'Email & Nurture', desc: 'Lifecycle sequences, nurture flows, and newsletter systems that drive revenue, not unsubscribes.' },
      { title: 'Copy + Narrative', desc: 'Strategic copy from senior writers — positioning, landing pages, ads, and pitch decks.' },
    ],
    stack: ['Webflow', 'Framer', 'Wordpress', 'Mutiny', 'VWO', 'Mailchimp', 'HubSpot'],
    deliverables: ['Content Calendar', 'Landing Pages', 'CRO Backlog', 'Email Sequences', 'Analytics Reports'],
    pricing: [
      { tier: 'Sprint', price: '₹2 L+', duration: '2 – 4 weeks', features: ['3 landing pages', 'One A/B test', 'Copy + design', 'Analytics setup', 'Final report'] },
      { tier: 'Monthly Growth', price: '₹1.5 L/mo', duration: 'Ongoing', features: ['2 – 4 new pages / mo', 'Continuous A/B tests', '4 – 6 articles / mo', 'Email nurture flows', 'Monthly review'], featured: true },
      { tier: 'Full Editorial', price: 'Custom', duration: 'Ongoing', features: ['Dedicated EIC', 'Publishing programme', 'Multi-channel distribution', 'CRO + analytics', 'Annual strategy'] },
    ],
    faqs: [
      { q: 'Do you write the content yourselves?', a: 'In Full Editorial, yes. In Monthly Growth, we plan and edit — your writers or vetted contractors produce.' },
      { q: 'How many A/B tests can we actually run?', a: 'Depends on traffic. Statistically sound tests need ~2k sessions per variant. We\u2019ll tell you honestly if your traffic doesn\u2019t support it.' },
      { q: 'Can you redesign landing pages too?', a: 'Yes — we work with our UI/UX team on larger redesigns. Small edits stay in-team.' },
    ],
    caseStudy: { title: 'Linea Commerce', metric: '3× conversion · +58% AOV', slug: 'linea' },
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
export const getServicesByCategory = (key) => services.filter((s) => s.category === key)
export const getRelatedServices = (slug, limit = 3) => {
  const current = getService(slug)
  if (!current) return services.slice(0, limit)
  return services
    .filter((s) => s.slug !== slug && s.category === current.category)
    .concat(services.filter((s) => s.slug !== slug && s.category !== current.category))
    .slice(0, limit)
}
