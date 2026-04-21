// All service categories & service metadata. Drives:
// - Header mega menu
// - Services landing page
// - Dynamic ServiceDetail page (`/services/:slug`)

export const categories = [
  {
    key: 'development',
    label: 'Development',
    tagline: 'Websites, e-commerce stores and apps — built the way you would build them if you had the time.',
    iconKey: 'dev',
  },
  {
    key: 'custom-software',
    label: 'Custom Software',
    tagline: 'CRM, HRMS and internal tools tailored to how your team actually works — not how a SaaS thinks you should.',
    iconKey: 'cloud',
  },
  {
    key: 'design',
    label: 'Design & Brand',
    tagline: 'UI / UX and brand identity that helps your product feel premium without looking generic.',
    iconKey: 'palette',
  },
  {
    key: 'growth',
    label: 'Digital Marketing',
    tagline: 'SEO, Google Ads, Meta Ads and social — measurable marketing with monthly reports in plain English.',
    iconKey: 'trend',
  },
  {
    key: 'care',
    label: 'Support & Care',
    tagline: 'Post-launch care — bug fixes, monthly updates, and growth work on a simple retainer.',
    iconKey: 'brain',
  },
]

export const getCategory = (key) => categories.find((c) => c.key === key)

export const services = [
  // ── DEVELOPMENT ──────────────────────────────────────────────
  {
    slug: 'web-development',
    category: 'development',
    title: 'Web Development',
    short: 'Business websites & web apps.',
    tagline: 'Websites people actually enjoy using.',
    intro:
      'Fast, SEO-friendly business websites and web apps — from simple 5-page brand sites to custom portals and SaaS landings, built in modern frameworks and made easy to maintain.',
    metric: { k: '2–4 wk', v: 'Typical Launch' },
    features: [
      { title: 'Modern Stack', desc: 'Next.js, React, WordPress or plain HTML — we pick whichever fits your team and scale best.' },
      { title: 'SEO Built-In', desc: 'Technical SEO, Core Web Vitals, structured data and sitemaps handled before launch — not as an upsell later.' },
      { title: 'Mobile-First', desc: 'Every page looks great on phones first — which is where most of your traffic actually comes from.' },
      { title: 'Easy to Edit', desc: 'A simple CMS or WordPress admin so your team can update copy, images and blog posts without calling us.' },
    ],
    stack: ['Next.js', 'React', 'WordPress', 'Node.js', 'Tailwind', 'Vercel'],
    deliverables: ['Written Scope', 'Figma Designs', 'Live Website', 'Analytics Setup', '30-day Support'],
    pricing: [
      { tier: 'Landing Page', price: '₹30,000+', duration: '1–2 weeks', features: ['1–3 pages', 'Responsive design', 'Contact form', 'Basic SEO', '30-day support'] },
      { tier: 'Business Website', price: '₹75,000+', duration: '2–4 weeks', features: ['5–10 pages', 'CMS / WordPress', 'Contact + lead forms', 'SEO baseline', 'Analytics setup'], featured: true },
      { tier: 'Custom Web App', price: '₹2 L+', duration: '4–10 weeks', features: ['Custom features', 'User login & roles', 'Admin panel', 'API integrations', 'CI / hosting setup'] },
    ],
    faqs: [
      { q: 'Will my website work on mobile?', a: 'Yes — every build is mobile-first and tested on iPhone and Android before going live.' },
      { q: 'Can I update the content myself?', a: 'Absolutely. Most business sites ship on WordPress or a simple CMS so you can change text, images and posts without us.' },
      { q: 'Who owns the code and hosting?', a: 'You do. Domain, hosting and GitHub are always created in your name or handed over at launch.' },
    ],
    caseStudy: { title: 'Business Website', metric: '2–4 weeks to launch', slug: 'sample' },
  },
  {
    slug: 'ecommerce',
    category: 'development',
    title: 'E-commerce Stores',
    short: 'Shopify & custom online stores.',
    tagline: 'Online stores that are actually ready to sell.',
    intro:
      'Shopify builds and custom WooCommerce / headless stores with catalogue, payments, shipping zones, order tracking and admin — ready to take real orders from day one.',
    metric: { k: '2–4 wk', v: 'Launch-Ready' },
    features: [
      { title: 'Shopify or Custom', desc: 'Shopify for fast launch and low maintenance, WooCommerce / headless for custom flows and deep branding.' },
      { title: 'Indian Payments', desc: 'Razorpay, Stripe, PhonePe, UPI and COD — configured with proper GST and shipping handling.' },
      { title: 'Product Catalogue', desc: 'Variants, inventory, collections and filters set up properly — no broken "out of stock" pages.' },
      { title: 'Launch Marketing', desc: 'Basic SEO, Meta Pixel, GA4 and a launch campaign kit so traffic starts the day you go live.' },
    ],
    stack: ['Shopify', 'WooCommerce', 'Next.js', 'Razorpay', 'Stripe', 'Meta Pixel'],
    deliverables: ['Product Catalogue', 'Payment Setup', 'Checkout & Shipping', 'Admin Training', 'Launch Kit'],
    pricing: [
      { tier: 'Shopify Starter', price: '₹60,000+', duration: '2–3 weeks', features: ['Shopify theme setup', 'Up to 50 products', 'Razorpay / Stripe', 'Shipping zones', 'Owner training'] },
      { tier: 'Custom Store', price: '₹2 L+', duration: '4–6 weeks', features: ['Custom theme / build', 'Unlimited products', 'Payments + COD', 'Wishlist / coupons', 'SEO + speed tuning'], featured: true },
      { tier: 'Full D2C Brand', price: '₹5 L+', duration: '6–10 weeks', features: ['Custom storefront', 'Subscription / bundles', 'ERP integrations', 'Analytics & reports', 'Launch campaign'] },
    ],
    faqs: [
      { q: 'Shopify or custom WooCommerce — which is right for me?', a: 'Shopify if you want to launch fast with minimal maintenance. Custom if you need specific flows, custom checkouts or want to own every pixel.' },
      { q: 'Do you handle GST and shipping setup?', a: 'Yes — GST-compliant invoices, shipping rules by weight / zone, and integration with Shiprocket / Delhivery on request.' },
      { q: 'Can you migrate my existing store?', a: 'Yes — we handle migrations from Wix, Squarespace, legacy WooCommerce or raw HTML without losing SEO or orders.' },
    ],
    caseStudy: { title: 'E-commerce Store', metric: '2–4 weeks to launch', slug: 'sample' },
  },
  {
    slug: 'mobile-apps',
    category: 'development',
    title: 'Mobile Applications',
    short: 'iOS + Android apps.',
    tagline: 'One codebase. Both stores. Ready to grow.',
    intro:
      'Cross-platform mobile apps in React Native or Flutter — one codebase, both stores, with auth, push notifications, payments and a backend that scales as your user base grows.',
    metric: { k: '4–8 wk', v: 'MVP Launch' },
    features: [
      { title: 'Cross-Platform', desc: 'React Native or Flutter so you ship iOS + Android from one codebase — roughly half the build time and cost.' },
      { title: 'Play Store Ready', desc: 'We handle store assets, privacy policies, screenshots and submissions — you ship, we do the paperwork.' },
      { title: 'Push + Offline', desc: 'Push notifications, basic offline support and graceful degradation on weak Indian mobile networks.' },
      { title: 'Secure Backend', desc: 'Node.js / Firebase backend with proper auth, OTP, rate limiting and RazorPay for in-app payments.' },
    ],
    stack: ['React Native', 'Flutter', 'Node.js', 'Firebase', 'Razorpay', 'Expo'],
    deliverables: ['Wireframes', 'Signed Builds', 'Backend APIs', 'Store Submission', '30-day Support'],
    pricing: [
      { tier: 'MVP App', price: '₹2 L+', duration: '4–6 weeks', features: ['Single platform', '4–6 core screens', 'Push notifications', 'Store submission', '30-day support'] },
      { tier: 'iOS + Android', price: '₹4 L+', duration: '6–10 weeks', features: ['Cross-platform', 'Auth + payments', 'Offline basics', 'Admin panel', 'Analytics'], featured: true },
      { tier: 'Full Product', price: '₹8 L+', duration: '10–14 weeks', features: ['Complex flows', 'Chat / video / AI', 'Deep links', 'Analytics & A/B', 'Support retainer'] },
    ],
    faqs: [
      { q: 'Native or cross-platform?', a: 'We lead with React Native or Flutter. Native Swift / Kotlin only when hardware features or heavy performance demand it.' },
      { q: 'How long until my first build?', a: 'A testable TestFlight / APK build within 2–3 weeks for MVP scope — long before store submission.' },
      { q: 'Do you handle Play Store / App Store paperwork?', a: 'Yes — screenshots, privacy policy, store listings and rejection handling. You focus on the product.' },
    ],
    caseStudy: { title: 'Mobile App', metric: '4–8 weeks to launch', slug: 'sample' },
  },

  // ── CUSTOM SOFTWARE ─────────────────────────────────────────
  {
    slug: 'custom-software',
    category: 'custom-software',
    title: 'Custom CRM & Business Tools',
    short: 'CRM, dashboards, internal tools.',
    tagline: 'Software shaped around your team, not the other way.',
    intro:
      'Tailor-made CRMs, admin dashboards, internal tools and workflow apps built around how your team actually works — so you can retire the half-broken spreadsheet stack.',
    metric: { k: '4–8 wk', v: 'First Version' },
    features: [
      { title: 'Tailored Workflows', desc: 'We map your sales, ops or support flow first, then build a CRM around it — not the other way around.' },
      { title: 'Roles & Access', desc: 'Proper user roles, permissions and audit logs so your team can actually be trusted with the data.' },
      { title: 'Reports & Exports', desc: 'Dashboards, CSV exports and scheduled reports — the things that actually get looked at weekly.' },
      { title: 'Integrations', desc: 'WhatsApp, Razorpay, Google Sheets, Tally, Zoho — clean integrations with the tools you already use.' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'AWS', 'WhatsApp API'],
    deliverables: ['Workflow Audit', 'Wireframes', 'Working CRM', 'User Training', 'Admin Docs'],
    pricing: [
      { tier: 'Workflow Tool', price: '₹1.5 L+', duration: '3–5 weeks', features: ['2–3 workflows', 'User roles', 'CSV import / export', 'Audit log', '30-day support'] },
      { tier: 'Custom CRM', price: '₹4 L+', duration: '6–10 weeks', features: ['Leads + pipeline', 'Contacts + tasks', 'Reports + dashboards', 'Role permissions', 'Training'], featured: true },
      { tier: 'Full Platform', price: '₹8 L+', duration: '10–16 weeks', features: ['Multiple modules', 'Integrations', 'Mobile-ready', 'Dedicated squad', 'Quarterly reviews'] },
    ],
    faqs: [
      { q: 'Is this like Zoho or Salesforce?', a: 'Tailored to you. If Zoho fits your flow, use Zoho — we build custom only when the off-the-shelf tools bend too hard around your business.' },
      { q: 'Can you replace our spreadsheets gradually?', a: 'Yes. We usually retire spreadsheets module-by-module so your team is never locked out of data mid-migration.' },
      { q: 'Where will the software live?', a: 'On your cloud (AWS / DigitalOcean / your provider) or ours. Data stays yours either way.' },
    ],
    caseStudy: { title: 'Custom CRM', metric: '4–8 weeks to first version', slug: 'sample' },
  },
  {
    slug: 'hrms',
    category: 'custom-software',
    title: 'HRMS & Admin Portals',
    short: 'HR management & admin systems.',
    tagline: 'Attendance, payroll and people — all in one place.',
    intro:
      'Custom HRMS platforms and admin portals for small and mid-sized teams — attendance, leave, payroll basics, employee onboarding and documents, all wrapped in a clean admin interface.',
    metric: { k: '6–10 wk', v: 'Typical Build' },
    features: [
      { title: 'Attendance & Leave', desc: 'Check-in / check-out, leave balance, holiday calendar and approval flows — works on mobile and desktop.' },
      { title: 'Payroll Basics', desc: 'Salary structure, payslip generation, TDS / PF calculations and downloadable payslips — ready for CA handover.' },
      { title: 'Employee Records', desc: 'Digital employee folders with offer letters, IDs, KYC and personal documents stored safely.' },
      { title: 'Admin Dashboard', desc: 'A control panel for HR to manage hires, promotions, exits and reporting — without calling the developer.' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'AWS', 'Razorpay Payouts'],
    deliverables: ['HR Audit', 'Wireframes', 'Working HRMS', 'Admin Training', 'User Docs'],
    pricing: [
      { tier: 'Lite HRMS', price: '₹2 L+', duration: '4–6 weeks', features: ['Attendance + leave', 'Employee records', 'Admin dashboard', 'CSV exports', 'Training'] },
      { tier: 'Full HRMS', price: '₹5 L+', duration: '8–12 weeks', features: ['Payroll module', 'Approval flows', 'Document vault', 'Mobile-ready', 'Role permissions'], featured: true },
      { tier: 'Enterprise', price: 'Custom', duration: '12+ weeks', features: ['Multi-office', 'SSO integration', 'Custom modules', 'Onsite training', 'Dedicated support'] },
    ],
    faqs: [
      { q: 'Is this cloud-hosted?', a: 'Yes — we deploy on AWS, DigitalOcean or your preferred cloud, with daily backups and SSL out of the box.' },
      { q: 'Can it handle Indian payroll?', a: 'Yes — PF, ESI, TDS, professional tax and salary slips. For tax filing we hand off to your CA with a clean monthly export.' },
      { q: 'Can employees use it on mobile?', a: 'Yes — every screen is mobile-responsive, and we can add a dedicated mobile app on request.' },
    ],
    caseStudy: { title: 'HRMS', metric: '6–10 weeks to launch', slug: 'sample' },
  },

  // ── DESIGN & BRAND ───────────────────────────────────────────
  {
    slug: 'ui-ux-design',
    category: 'design',
    title: 'UI / UX Design',
    short: 'Wireframes, prototypes, UI.',
    tagline: 'Designs engineers can actually build.',
    intro:
      'Research-informed UX and clean UI design for websites, web apps and mobile apps — built in Figma with engineers in mind from day one, so what is designed is what ships.',
    metric: { k: '2–4 wk', v: 'Design Sprint' },
    features: [
      { title: 'Wireframes First', desc: 'Low-fi wireframes that map flows and content before any visual design — so structure is right before pixels move.' },
      { title: 'Clickable Prototypes', desc: 'Figma prototypes you can actually click through and test on users before writing a single line of code.' },
      { title: 'Design System', desc: 'Reusable components, colour, typography and spacing — so the 10th screen looks as good as the 1st.' },
      { title: 'Engineer Handoff', desc: 'Clean Figma files with variants, states and specs that any developer can implement without asking.' },
    ],
    stack: ['Figma', 'FigJam', 'Framer', 'Principle', 'Whimsical'],
    deliverables: ['Wireframes', 'Hi-Fi UI', 'Clickable Prototype', 'Design System', 'Handover Doc'],
    pricing: [
      { tier: 'Design Sprint', price: '₹50,000+', duration: '2–3 weeks', features: ['Up to 10 screens', 'Wireframes + UI', 'One revision round', 'Figma handoff', 'Mobile-responsive'] },
      { tier: 'Full Product Design', price: '₹1.5 L+', duration: '4–6 weeks', features: ['20+ screens', 'Design system', 'Clickable prototype', 'Engineer handoff', 'Two revision rounds'], featured: true },
      { tier: 'Design Partner', price: 'Custom', duration: 'Ongoing', features: ['Embedded designer', 'Weekly design crits', 'System maintenance', 'User research', 'Retainer pricing'] },
    ],
    faqs: [
      { q: 'Do you design mobile and web together?', a: 'Yes — a shared design system means your web and mobile app stay consistent without doubling the design time.' },
      { q: 'Can you redesign my existing website / app?', a: 'Yes — we start with a short UX audit, prioritise by impact, and redesign in iterations rather than one big-bang relaunch.' },
      { q: 'Do you work in our existing Figma file?', a: 'Absolutely — we prefer it. We follow your component naming, branches and library structure so nothing breaks for your team.' },
    ],
    caseStudy: { title: 'UI / UX Design', metric: '2–4 weeks per sprint', slug: 'sample' },
  },
  {
    slug: 'brand-identity',
    category: 'design',
    title: 'Brand & Logo Design',
    short: 'Logos, identity & guidelines.',
    tagline: 'A brand that looks as good as your product.',
    intro:
      'Logo design, colour systems, typography and simple brand guidelines — built for small businesses and new brands that need to look professional without a ₹20-lakh design house.',
    metric: { k: '1–3 wk', v: 'Full Identity' },
    features: [
      { title: 'Logo System', desc: 'Primary logo, wordmark and icon variants — delivered in SVG, PNG and source files you own forever.' },
      { title: 'Colour & Type', desc: 'A focused colour palette and typography pairing — tested for web, print and social use.' },
      { title: 'Brand Guidelines', desc: 'A short, readable PDF covering dos and donts so anyone on your team can use the brand confidently.' },
      { title: 'Launch Templates', desc: 'Business card, letterhead, social post and email signature templates — so the new brand ships everywhere on day one.' },
    ],
    stack: ['Figma', 'Illustrator', 'Photoshop', 'Canva'],
    deliverables: ['Logo System', 'Colour + Typography', 'Brand Guidelines PDF', 'Template Pack', 'All Source Files'],
    pricing: [
      { tier: 'Logo Only', price: '₹15,000+', duration: '1 week', features: ['3 logo concepts', '2 revision rounds', 'Colour + font pair', 'All file formats', 'Commercial rights'] },
      { tier: 'Full Identity', price: '₹40,000+', duration: '2–3 weeks', features: ['Logo system', 'Brand guidelines', 'Templates pack', 'Social post kit', 'Revisions included'], featured: true },
      { tier: 'Brand + Website', price: '₹1 L+', duration: '3–5 weeks', features: ['Full identity', '5-page website', 'Launch kit', 'Social graphics', 'Handover'] },
    ],
    faqs: [
      { q: 'Do I own the logo and source files?', a: 'Yes — full commercial rights transfer to you, plus source files (AI, SVG, PSD) included in every package.' },
      { q: 'How many logo revisions do I get?', a: '2–3 rounds of revisions are included. We usually land in round 2 because we start with a proper brief.' },
      { q: 'Can you rebrand without redoing the website?', a: 'Yes — we can phase a rebrand so the logo, social and email signatures change first, and the website follows on its own timeline.' },
    ],
    caseStudy: { title: 'Brand Identity', metric: '1–3 weeks per brand', slug: 'sample' },
  },

  // ── DIGITAL MARKETING ────────────────────────────────────────
  {
    slug: 'digital-marketing',
    category: 'growth',
    title: 'SEO & Organic Growth',
    short: 'Technical SEO + content.',
    tagline: 'Search traffic that compounds over time.',
    intro:
      'Technical SEO audits, content planning and ongoing optimisation — focused on Indian search intent and local keywords — so your business shows up when the right buyer searches.',
    metric: { k: '3 mo', v: 'Ranking Movement' },
    features: [
      { title: 'Technical SEO', desc: 'Core Web Vitals, schema, sitemaps, crawl errors — the unglamorous fixes that Google actually rewards.' },
      { title: 'Keyword Strategy', desc: 'Local + category keyword research mapped to your services, with clusters and intent clearly labelled.' },
      { title: 'Content Plans', desc: 'Monthly content calendar with briefs your team or ours can write — geared for rank and conversion, not just word count.' },
      { title: 'Monthly Reporting', desc: 'A simple monthly report in plain English: what grew, what did not, and what we are testing next.' },
    ],
    stack: ['Google Search Console', 'GA4', 'Ahrefs', 'SEMrush', 'Screaming Frog'],
    deliverables: ['Technical Audit', 'Keyword Strategy', 'Content Calendar', 'Monthly Reports', 'On-Page Fixes'],
    pricing: [
      { tier: 'SEO Audit', price: '₹25,000+', duration: '1–2 weeks', features: ['Full tech audit', 'Keyword research', '90-day roadmap', 'Analytics check', 'Final presentation'] },
      { tier: 'Monthly SEO', price: '₹25,000/mo', duration: 'Ongoing (3 mo min)', features: ['Ongoing fixes', 'Content plan', 'Link outreach', 'Monthly report', 'Strategy call'], featured: true },
      { tier: 'Full Growth', price: '₹60,000/mo', duration: 'Ongoing', features: ['SEO + content writing', 'Landing page A/B', 'PR + link building', 'Attribution modelling', 'Dedicated lead'] },
    ],
    faqs: [
      { q: 'How long until I see ranking movement?', a: 'Technical fixes usually move rankings in 4–8 weeks. Content-driven growth compounds over 3–6 months — SEO is slow, honest work.' },
      { q: 'Do you write the content too?', a: 'In Full Growth, yes. In the Monthly SEO plan we brief and edit, and your team or approved writers produce.' },
      { q: 'Do I need to commit for a year?', a: 'No — minimum is 3 months so we can actually show results, after that it is month-to-month.' },
    ],
    caseStudy: { title: 'SEO Campaign', metric: '3-month ranking movement', slug: 'sample' },
  },
  {
    slug: 'paid-ads',
    category: 'growth',
    title: 'Google & Meta Ads',
    short: 'Paid ads that pay back.',
    tagline: 'Paid ads that bring leads, not vanity clicks.',
    intro:
      'Google Ads, Meta Ads (Facebook + Instagram) and basic LinkedIn campaigns — structured, tracked and tested weekly to drive real leads and sales, not just impressions.',
    metric: { k: 'Weekly', v: 'Optimisation' },
    features: [
      { title: 'Right Channel Mix', desc: 'Google for intent-driven buyers, Meta for brand and interest targeting — we pick based on where your buyer actually is.' },
      { title: 'Proper Tracking', desc: 'GA4, Meta Pixel, WhatsApp clicks and form fills wired in properly so you can see which ad actually drives the lead.' },
      { title: 'Creative Testing', desc: 'A fresh batch of ad creatives every week — real creative variants, not 47 identical ad groups.' },
      { title: 'Monthly Reviews', desc: 'A plain-English monthly report with cost per lead, best-performing creative and next months plan.' },
    ],
    stack: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'GA4', 'Meta Pixel', 'Looker Studio'],
    deliverables: ['Strategy Doc', 'Campaign Builds', 'Creative Kit', 'Tracking Setup', 'Weekly + Monthly Reports'],
    pricing: [
      { tier: 'Launch Sprint', price: '₹30,000+', duration: '3–4 weeks', features: ['1–2 channels', 'Audience + creative', 'Tracking setup', 'Launch + optimise', 'Final handover'] },
      { tier: 'Monthly Retainer', price: '₹20,000/mo', duration: 'Ongoing', features: ['Up to 2 channels', 'Weekly optimisation', 'Creative rotation', 'Monthly reports', 'Ad budget separate'], featured: true },
      { tier: 'Full Service', price: '₹60,000/mo', duration: 'Ongoing', features: ['All major channels', 'In-house creative', 'Landing page CRO', 'Attribution modelling', 'Dedicated lead'] },
    ],
    faqs: [
      { q: 'What is a realistic starting ad budget?', a: 'Most small Indian businesses start with ₹15k–₹40k / month in ad spend. Below that, SEO or organic social is usually a better bet.' },
      { q: 'Do you run the ads or just advise?', a: 'We run them directly in accounts you own — you stay in control, we do the work.' },
      { q: 'Do you do creative production?', a: 'Basic creative (static ads, simple video edits) is included in the Full Service tier. For Monthly Retainer we brief and review — production is on your side.' },
    ],
    caseStudy: { title: 'Paid Ads', metric: 'Weekly optimisation', slug: 'sample' },
  },
  {
    slug: 'social-media',
    category: 'growth',
    title: 'Social Media Management',
    short: 'Instagram, Facebook, LinkedIn.',
    tagline: 'Social that sounds like your brand, not a template.',
    intro:
      'Monthly content calendars, post design, reels scripts and community management for Instagram, Facebook and LinkedIn — written in your voice, not generic copy-paste.',
    metric: { k: 'Monthly', v: 'Content Calendar' },
    features: [
      { title: 'Content Calendar', desc: 'A monthly plan of posts, reels and stories — mapped to festivals, offers and your product launches.' },
      { title: 'Post + Reel Design', desc: 'On-brand static posts, carousels and reel scripts designed in Figma / Canva and ready to go.' },
      { title: 'Community Replies', desc: 'DMs, comments and basic lead qualification handled Mon to Sat — so you never miss an inquiry.' },
      { title: 'Monthly Analytics', desc: 'Reach, engagement and DM / lead volume tracked monthly with honest commentary on what worked.' },
    ],
    stack: ['Instagram', 'Facebook', 'LinkedIn', 'Canva', 'Figma', 'Meta Business Suite'],
    deliverables: ['Content Calendar', 'Post Designs', 'Reel Scripts', 'Community Replies', 'Monthly Report'],
    pricing: [
      { tier: 'Starter Social', price: '₹15,000/mo', duration: 'Ongoing', features: ['12 posts / month', '4 reels scripts', '1 platform', 'Community replies', 'Monthly report'] },
      { tier: 'Growth Social', price: '₹30,000/mo', duration: 'Ongoing', features: ['20 posts / month', '8 reels scripts', '2 platforms', 'DM handling', 'Strategy call'], featured: true },
      { tier: 'Full Brand Social', price: '₹60,000/mo', duration: 'Ongoing', features: ['All major platforms', 'Video shoots', 'Influencer outreach', 'Paid boosting', 'Dedicated manager'] },
    ],
    faqs: [
      { q: 'Do you shoot the content or do I?', a: 'Starter + Growth plans assume you send us raw photos / clips from your phone. Full Brand Social includes a monthly shoot day.' },
      { q: 'Will the content sound like my brand?', a: 'Yes — we do a voice-and-tone intake before the first post, and you approve every month\'s calendar before anything goes live.' },
      { q: 'Can I cancel if it is not working?', a: 'Yes — minimum is 3 months so we can build momentum, after that it is month-to-month with 30-day notice.' },
    ],
    caseStudy: { title: 'Social Media', metric: 'Monthly retainer', slug: 'sample' },
  },

  // ── SUPPORT & CARE ───────────────────────────────────────────
  {
    slug: 'care-retainer',
    category: 'care',
    title: 'Post-Launch Care',
    short: 'Bug fixes & small updates.',
    tagline: 'We stay after launch, so your product keeps working.',
    intro:
      'A simple monthly retainer for everything that happens after launch — bug fixes, small features, content updates, plugin updates and peace of mind. No retainer required, but most clients keep one.',
    metric: { k: '30 days', v: 'Free After Launch' },
    features: [
      { title: 'Free 30-Day Window', desc: 'Every new build comes with 30 days of free bug fixes after launch — no retainer needed to claim it.' },
      { title: 'Small Changes', desc: 'New sections, copy edits, image swaps, small features — handled within 48–72 hours on WhatsApp.' },
      { title: 'Security & Uptime', desc: 'WordPress / plugin updates, SSL renewals, backup checks and uptime monitoring — the boring things that matter.' },
      { title: 'No Lock-In', desc: 'Month-to-month, cancel anytime. You own your code, your domain and your hosting — we are just on call.' },
    ],
    stack: ['WhatsApp', 'GitHub', 'Google Analytics', 'UptimeRobot', 'Linear'],
    deliverables: ['Monthly Change Log', 'Backup & Security Check', 'Uptime Reports', 'Priority WhatsApp Support'],
    pricing: [
      { tier: 'Essentials', price: '₹8,000/mo', duration: 'Ongoing', features: ['~4 hrs / month', 'Bug fixes', 'Plugin updates', 'Basic backups', 'WhatsApp support'] },
      { tier: 'Care Plus', price: '₹20,000/mo', duration: 'Ongoing', features: ['~10 hrs / month', 'Small features', 'Content updates', 'Monthly report', 'Priority turnaround'], featured: true },
      { tier: 'Full Partner', price: '₹40,000/mo', duration: 'Ongoing', features: ['~20 hrs / month', 'Feature roadmap', 'SEO + marketing hours', 'Monthly strategy call', 'Dedicated engineer'] },
    ],
    faqs: [
      { q: 'Do I have to take a retainer?', a: 'No — the 30-day post-launch window is always free. Retainers are optional and many clients start one after the free window ends.' },
      { q: 'What if I do not use all the hours?', a: 'Up to 50% of unused hours roll over to the next month once, so you are not losing money on quiet months.' },
      { q: 'Can I cancel anytime?', a: 'Yes — 30-day notice, no questions. Your code, hosting and accounts are always yours.' },
    ],
    caseStudy: { title: 'Post-Launch Care', metric: 'From ₹8,000 / month', slug: 'sample' },
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
