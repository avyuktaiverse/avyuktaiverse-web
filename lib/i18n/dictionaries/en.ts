/**
 * English dictionary — the source of truth for the Dictionary type.
 * Every other locale must provide the same keys (enforced by TypeScript).
 */
export const en = {
  meta: {
    siteTitle: "AvyuktAIverse® — Engineers who think. AI that helps.",
    siteDescription:
      "AI-enabled engineers, architects, and delivery professionals who work alongside your teams to solve real problems. No hype. Just delivery.",
    keywords: [
      "AI engineering",
      "digital transformation",
      "cloud-native",
      "AI consulting",
      "engineering capability",
      "AvyuktAIverse",
    ],
  },

  company: {
    tagline: "Engineers who think. AI that helps.",
    description:
      "AI-enabled engineers, architects, and delivery professionals who work alongside your teams to solve real problems.",
  },

  founder: {
    name: "Sreedhara GS",
    role: "Co-Founder & CEO",
    bio: "Sreedhara is a global engineering leader with 15+ years of experience directing cross-cultural teams across Japan, Australia, Europe, and India — delivering cloud-native platforms, AI-driven infrastructure, and enterprise SaaS products that generate measurable business and financial impact.",
  },

  advisor: {
    name: "Kuniaki Kudo",
    role: "Chief Corporate Advisor",
    bio: "Kuniaki is a technology leader with 35+ years of software engineering and engineering leadership across the United States and Japan — from Apple, Adobe, Sony, and Autodesk to leading large-scale enterprise modernization, DevOps, and quality engineering, alongside doctoral research on the continuous modernization of enterprise systems.",
  },

  common: {
    skipToContent: "Skip to content",
    getInTouch: "Get in Touch",
    learnMore: "Learn more",
    backToHome: "Back to home",
    logoAria: "AvyuktAIverse® — Home",
    languageSwitcherAria: "Language",
  },

  nav: {
    links: [
      { label: "Capabilities", href: "/capabilities" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
    ],
    contact: "Contact",
    privacy: "Privacy Policy",
    mainAria: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  footer: {
    navigation: "Navigation",
    contact: "Contact",
    linkedin: "LinkedIn",
    rights: "All rights reserved.",
    build: "Build",
  },

  notFound: {
    code: "404",
    title: "Page not found.",
    body: "The page you are looking for does not exist or has been moved.",
  },

  home: {
    hero: {
      badge: "AI-Enabled Capability Extension",
      titleStart: "Engineering capability, ",
      titleAccent: "extended intelligently.",
      lead:
        "We work alongside your engineering teams — as architects, engineers, and delivery leads — bringing AI-enabled capability where you need it most. No hype. No shortcuts. Just people who know what they are doing.",
      primaryCta: "See Our Capabilities",
      stats: [
        { value: "3", label: "Engagement Models" },
        { value: "AI", label: "Enabled Delivery" },
        { value: "Trust", label: "First Approach" },
      ],
    },
    problem: {
      eyebrow: "The Challenge",
      quote:
        "Finding engineers who combine deep technical skill with thoughtful AI adoption is harder than it should be.",
      p1: "Most of what is on the market is either pure headcount with no real delivery ownership, or AI tooling presented as a substitute for engineering judgement.",
      p2: "Most organisations do not need another vendor. They need people who understand the problem, take ownership of outcomes, and apply AI where it genuinely helps — not everywhere, not automatically, and certainly not because it is trending.",
      closing: "That is what we do.",
    },
    whatWeDo: {
      eyebrow: "What We Do",
      title: "Practical capability. Thoughtful delivery.",
      subtitle: "We operate across two areas, with a clear primary focus.",
      offerings: [
        {
          badge: "Primary Offering",
          title: "AI-Enabled Talent & Capability Extension",
          description:
            "We embed skilled engineers, architects, and delivery professionals directly into your teams. These are not contractors filling seats — they are problem solvers who understand your context, take ownership of outcomes, and apply AI thoughtfully to improve the quality and pace of what you build.",
        },
        {
          badge: "Supporting Offering",
          title: "AI Coaching & Adoption",
          description:
            "As a natural extension of our delivery work, we help software engineers, architects, and technical leaders build genuine AI fluency. Applied, practical, and experience-driven — not a training programme.",
        },
      ],
      techLandscape: "Technology Landscape",
    },
    differentiators: {
      eyebrow: "Why AvyuktAIverse®",
      title: "Built on clarity, not cleverness.",
      points: [
        {
          title: "Judgement over hype",
          description:
            "We evaluate every AI application on its actual merit. If it adds genuine value, we use it. If it adds noise, we do not.",
        },
        {
          title: "Delivery over demos",
          description:
            "Our measure of success is what ships and works, not what looks impressive in a slide. We take responsibility for real outcomes.",
        },
        {
          title: "Long-term orientation",
          description:
            "We build engagements designed to transfer capability and knowledge, not to create dependency. The goal is your team becoming stronger.",
        },
        {
          title: "AI as enabler, not answer",
          description:
            "AI is a powerful tool in the hands of skilled practitioners. We never substitute it for engineering judgement or accountability.",
        },
      ],
    },
    cta: {
      ready: "Ready to talk?",
      title: "Have a challenge worth solving?",
      subtitle:
        "We do not use sales scripts. If the problem is real and the conversation is honest, we would like to hear from you.",
      label: "Start a conversation",
    },
  },

  capabilities: {
    meta: {
      title: "Capabilities",
      description:
        "Advanced engineering, AI/Cloud integration, and strategic advisory. Building adaptable, high-ROI systems.",
    },
    badge: "Capabilities",
    titleStart: "Engineering for a ",
    titleAccent: "shifting landscape.",
    titleEnd: "",
    lead:
      "We deliver advanced engineering, seamless cloud integration, and the strategic foresight needed to keep your business adaptable and highly competitive.",
    core: {
      badge: "Core Offering",
      title: "Engineering & Integration",
      subtitle: "Reliable capability. Thoughtful execution.",
      p1: "With deep cloud engineering experience and strong alliance partnerships, we steer clients through complex IT transformations. We offer robust engineering capabilities specifically designed to handle the scale and velocity of modern AI tools.",
      p2: "Because your AI application is only as good as the infrastructure beneath it, we emphasize flawless integration between legacy on-premises architecture, new cloud services, and next-generation data storage.",
      items: [
        {
          label: "Refactor & Re-architect",
          desc: "Modernize legacy systems using cloud-native services. We transform rigid monolithic architectures into scalable, AI-ready microservices.",
        },
        {
          label: "Product Development",
          desc: "From concept to execution. We engineer reliable new products and services heavily integrated with modern data streams and AI workflows.",
        },
        {
          label: "Flawless Integration",
          desc: "A sound strategy depends on execution. We orchestrate the integration of complex applications, APIs, and storage between on-premises and cloud environments.",
        },
      ],
    },
    principles: {
      badge: "Architecture Principles",
      titleLine1: "Built to Adapt,",
      titleLine2: "Governed for Value.",
      lead:
        "Traditionally, systems were built to last. But business is undergoing continuous transformation—and IT must respond fluidly.",
      items: [
        {
          title: "Build for Adaptability",
          description:
            "We promote loose coupling in your cloud and AI choices. Avoiding vendor lock-in ensures your infrastructure remains agile enough to pivot during unexpected market changes or global shifts.",
        },
        {
          title: "Cost & Compliance Forensics",
          description:
            "Adopting cloud and AI services is primarily driven by ease-of-use and ROI. We thoroughly analyze long-term predictive costs (TCO) and mandate strict governance and security boundaries before writing a single line of code.",
        },
        {
          title: "AI Center of Excellence (AICoE)",
          description:
            "The evolution of technology demands a team of strategists from IT, business, and vendor sides. We help you establish an AICoE—a long-term operational framework ensuring you move continuously from driving costs to driving business value.",
        },
      ],
      cardTitle: "The Best-Fitting IT Solution",
      cardBody:
        "Our process involves deep consultation, pragmatic design, strict quality assurance, and flawless execution to yield a solution uniquely fitted to your business objective.",
    },
    team: {
      badge: "The AvyuktAIverse Difference",
      titleStart: "Experienced. Professional. ",
      titleAccent: "Partners.",
      lead:
        "We face our customers' management and technology issues head-on. We are more than just contractors; we are partners providing solutions based on human capability and precise technological application.",
      items: [
        {
          label: "Advanced Engineers",
          desc: "Professionals who possess not just specialized knowledge, but the ability to grasp front-line industry needs and respond efficiently.",
        },
        {
          label: "Extensive Solutions",
          desc: "Providing multi-domain support across finance, technology, manufacturing, and logistics. Our adaptable expertise spans modern cloud infrastructure, robotics, and AI.",
        },
        {
          label: "Strategic Partnerships",
          desc: "We act as your true technology partner, delivering services rooted in strong corporate ethics, reliability, and human-to-human connection.",
        },
      ],
    },
    cta: {
      title: "Let's talk about your situation.",
      subtitle:
        "Contact our specialized team today to learn how our engineering capability and strategic alignment can drive your business forward.",
    },
  },

  howWeWork: {
    meta: {
      title: "How We Work",
      description:
        "Our approach: understand the problem first, align on outcomes, deliver with ownership, and evolve honestly.",
    },
    badge: "How We Work",
    titleStart: "We start with the ",
    titleAccent: "problem",
    titleEnd: ", not the proposal.",
    lead:
      "Our operating model is simple by design. No proprietary frameworks, no engagement theatre. Just a clear and honest way of working that produces better outcomes.",
    process: {
      eyebrow: "Our Process",
      title: "Four things we do, in order.",
      steps: [
        {
          title: "Understand",
          description:
            "We take time to understand your context, constraints, and actual challenge before we suggest anything. This means asking questions that may feel slow at first, but produce clarity that saves significant time later. We do not start with a solution.",
        },
        {
          title: "Align",
          description:
            "We agree on what good looks like: outcomes, ways of working, communication rhythms, and how we will measure progress together. Alignment is not a formality — it is the foundation that makes everything else work.",
        },
        {
          title: "Deliver",
          description:
            "We show up with ownership. We integrate with your teams, adapt to your environment, and deliver with care. If something is not working, we say so early. We do not wait for a retrospective to surface a problem.",
        },
        {
          title: "Evolve",
          description:
            "We stay honest about what is working and what is not. We adjust without drama. Engagements that earn trust tend to grow — not because we push for it, but because the work demonstrates value over time.",
        },
      ],
    },
    expectations: {
      eyebrow: "What to Expect",
      title: "What working with us actually looks like.",
      items: [
        "Transparent communication, including when things are difficult",
        "Engineers who take responsibility, not just direction",
        "No vanity metrics or status theatre",
        "Honest assessments of risk, scope, and timeline",
        "A long-term orientation, even in short engagements",
        "Knowledge transfer built into how we work, not added at the end",
      ],
    },
    cta: {
      title: "Ready to start a conversation?",
      subtitle:
        "We would rather have an honest thirty-minute conversation than spend three weeks on a proposal that misses the point.",
    },
  },

  about: {
    meta: {
      title: "About",
      description:
        "The story, people, and values behind AvyuktAIverse® — built for durability, not speed.",
    },
    badge: "About",
    titleStart: "Built for ",
    titleAccent: "durability",
    titleEnd: ", not speed.",
    lead:
      "We are a small company. We intend to grow carefully, with the kind of deliberate judgement we ask of our engineers.",
    story: {
      eyebrow: "Our Story",
      title: "Why AvyuktAIverse® exists.",
      paragraphs: [
        "AvyuktAIverse® was started because we saw a consistent gap between what AI promises and what organisations actually need.",
        "The noise around AI is significant. Most of it is not useful to engineering leaders trying to ship reliable, valuable software under real constraints. There is a great deal of enthusiasm, a great deal of tooling, and not nearly enough experienced judgement about where AI actually belongs — and where it does not.",
        "We built this company to be useful in the places where hype is not enough. Where the problem is complex, the stakes are real, and the people involved need to actually know what they are doing.",
        "Our reputation will be built on the quality of our work, not the size of our marketing. That is a conscious choice, and we are comfortable with the pace it implies.",
      ],
    },
    values: {
      eyebrow: "Our Values",
      title: "What we actually believe.",
      subtitle: "These are not aspirations. They are filters we use to make decisions.",
      items: [
        {
          title: "Clarity over cleverness",
          description:
            "We say what we mean. In our work, in our communication, and in how we represent what AI can and cannot do.",
        },
        {
          title: "Delivery over demos",
          description:
            "We measure our worth by what actually ships and works in production — not by what looks impressive in a presentation.",
        },
        {
          title: "Responsibility with technology",
          description:
            "AI is powerful. Applying it carelessly causes real harm. We take that seriously, and it shapes every engagement decision we make.",
        },
        {
          title: "Long-term thinking",
          description:
            "We are building a company designed to last. That means making decisions we can stand behind a decade from now, not just this quarter.",
        },
      ],
    },
    leadership: {
      eyebrow: "Leadership",
      title: "Who we are.",
      subtitle: "Operating experience from Apple, Adobe, Sony, and Fortune-class enterprises, with the judgement to apply AI where it belongs.",
      highlights: [
        "15+ years of engineering leadership · Japan · India",
        "AI-driven SRE · GenAI integration · cloud-native platforms",
        "Asahi Group Holdings · SAP Labs · Samsung R&D · Nokia R&D",
        "Platform for 27,000+ customers · 100+ services · 4 regions",
        "Trusted technical advisor · Shell · Intel",
        "B.E. Computer Science · Visvesvaraya Technological University",
        "AWS Solutions Architect · SAP Solution Architect, certified",
        "Anthropic AI certifications · Springer LNCS author, 2014",
      ],
      heading: "Engineering leadership that reaches the P&L.",
      paragraphs: [
        "Sreedhara is a global engineering leader with 15+ years of experience directing cross-cultural teams across Japan, Australia, Europe, and India. He works at the intersection of AI and enterprise engineering, delivering cloud-native platforms, AI-driven infrastructure, and transformation programmes with measurable business and financial impact.",
        "He has built and scaled engineering organizations of up to 43 people across multiple geographies, and has led product delivery at scale. His AI-driven SRE transformations cut mean time to recovery (MTTR) by 40%, and the cloud-native platforms he architected now generate more than $1M in recurring annual revenue.",
        "Global enterprises and Fortune-class technology organizations engage him as a trusted technical leader who turns complex observability, compliance, and platform requirements into sound architecture decisions. His foundation in distributed systems, GenAI and RAG, and cloud-native platforms is matched by the strategic fluency to shape transformation roadmaps and present them as P&L outcomes at board level.",
      ],
      stats: [
        { value: "¥1.3B", label: "Vendor Cost Avoidance", note: "" },
        { value: "$1M+", label: "SaaS Product ARR", note: "" },
        { value: "40%", label: "MTTR Reduction", note: "AI-Driven SRE" },
        { value: "50%", label: "Operational Cost Savings", note: "AI-Driven SRE" },
      ],
      advisor: {
        heading: "Enterprise modernization, proven at global scale.",
        highlights: [
          "35+ years of engineering leadership · US & Japan",
          "Enterprise modernization · DevOps · CI/CD",
          "Apple · Adobe · Sony · Autodesk · athenahealth",
          "Ph.D. Candidate, Computer Science · University of Tsukuba",
          "M.S. Computer Science · The University of Texas at Austin",
          "MBA · The University of Manchester",
          "B.S. Mathematics · Tokyo University of Science",
          "Published researcher · IEICE Transactions & IISA 2026",
        ],
        paragraphs: [
          "Kuniaki is a technology leader with more than three decades of software engineering, system architecture, and engineering leadership across the United States and Japan. He guides global engineering teams through large-scale enterprise modernization, preserving critical business functionality while introducing the DevOps, CI/CD, test automation, cloud, and security practices that let legacy systems evolve continuously.",
          "His career spans some of the world's most demanding engineering organizations. At Apple he built the effects plug-in architecture for Final Cut. At Adobe he led quality engineering for Photoshop. At Sony he developed test automation for PlayStation 3 and 4. At Autodesk he engineered the build process for Inventor. At athenahealth he led development of a clinical application used by 60% of US physicians, serving 900K sessions a day, and at Marelli he managed the global IT sustainability team, introducing Agile and DevOps company-wide. Today he advises a major Japanese enterprise group on its large-scale system modernization programme.",
          "He bridges industry and academia. As a Ph.D. candidate at the University of Tsukuba he researches the continuous modernization of large-scale enterprise systems. His 2026 peer-reviewed papers on scalable CI/CD for legacy modernization (IEICE Transactions) and serverless parallel UI testing (IISA 2026), together with AI research in collaboration with UC Irvine, directly shape how AvyuktAIverse® approaches enterprise engineering.",
        ],
        stats: [
          { value: "35+", label: "Years in Engineering", note: "US & Japan" },
          { value: "10+", label: "Global Tech Companies", note: "Apple · Adobe · Sony · Autodesk" },
          { value: "2", label: "Peer-Reviewed Papers", note: "IEICE & IISA, 2026" },
          { value: "2", label: "University R&D Partnerships", note: "UC Irvine · Manchester" },
        ],
      },
    },
    details: {
      eyebrow: "Company Details",
      legalName: "Legal name",
      country: "Country",
      countryValue: "India",
      website: "Website",
      contact: "Contact",
    },
  },

  insights: {
    meta: {
      title: "Insights",
      description:
        "Perspectives on AI, engineering, and delivery from AvyuktAIverse®. Coming soon.",
    },
    badge: "Coming Soon",
    title: "Insights",
    lead: "Deep perspectives on the intersection of AI, engineering practice, and reliable delivery.",
    typing: [
      "Analyzing engineering bottlenecks...",
      "Synthesizing architecture patterns...",
      "Compiling AI adoption strategies...",
      "Evaluating cloud ecosystems...",
      "Awaiting final review protocol...",
    ],
    intro: "We are preparing strictly considered perspectives for technology leaders.",
    body: "When we have something genuinely worth saying, it will compile and execute here. We would rather write less and mean it, than publish frequently and say nothing useful. Our upcoming articles will bridge the gap between theoretical AI models and practical, grounded engineering delivery.",
    notify: "Notify me when live",
    viewCapabilities: "View our capabilities",
  },

  contact: {
    meta: {
      title: "Contact",
      description:
        "Get in touch with AvyuktAIverse®. No sales scripts — just a straightforward conversation about your engineering challenges.",
    },
    badge: "Contact",
    titleStart: "Let's have a ",
    titleAccent: "real conversation.",
    titleEnd: "",
    lead:
      "Please share your contact details and a brief outline of your business requirement or engineering challenge. We review every submission thoroughly to plan and ensure our very first conversation is highly productive. No sales scripts. No pressure.",
    formHeading: "Send us a message",
    directEmail: "Direct Email",
    support: "Support",
    phone: "Phone",
    location: "Location",
    linkedin: "LinkedIn",
    responseTime: "Response Time",
    responseBody: "We respond to all enquiries within one business day.",
    honest: "Honest Assessment",
    honestBody:
      "We do not take every enquiry. If we are not the right fit for your situation, we will say so honestly and quickly.",
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      optional: "(optional)",
      message: "Requirement / Problem Statement",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      companyPlaceholder: "Your organisation",
      messagePlaceholder: "Please share your specific requirement or the problem you are trying to solve.",
      send: "Send Message",
      sending: "Sending…",
      successTitle: "Message received.",
      successBody: "We will be in touch within one business day.",
      errorFix: "Please fix the highlighted fields and try again.",
      errorGeneric: "Something went wrong. Please email us directly at {email}.",
      validation: {
        nameMin: "Please enter your full name.",
        nameMax: "Name is too long.",
        emailInvalid: "Please enter a valid email address.",
        emailMax: "Email is too long.",
        companyMax: "Company name is too long.",
        messageMin: "Please share a bit more context (at least 20 characters).",
        messageMax: "Message is too long (max 4000 characters).",
      },
    },
  },

  privacy: {
    meta: { title: "Privacy Policy", description: "Privacy Policy for {legalName}." },
    badge: "Legal",
    title: "Privacy Policy",
    lastUpdated: "Last Updated: April 2026",
    intro: {
      heading: "1. Introduction",
      welcomeBefore: "Welcome to ",
      welcomeAfter:
        " (\"we,\" \"our,\" or \"us\"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.",
      scope:
        "This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website ({domain}) and interact with our services. As a B2B technology consulting and engineering firm, we practice data minimization and only collect what is strictly necessary to conduct our business.",
    },
    collect: {
      heading: "2. Information We Collect",
      p1Before: "We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. Currently, the only point of data collection on our website is our ",
      p1Strong: "Contact Form",
      p1After: ".",
      p2: "When you contact us, we collect:",
      items: [
        { term: "Personal Identification Information:", text: " Your Name and Email Address." },
        { term: "Professional Information:", text: " Your Company Name (if provided)." },
        { term: "Message Data:", text: " The contents of the message you send us regarding your engineering or business challenges." },
      ],
      note: "We do not passively collect sensitive data, use invasive tracking scripts, or employ third-party advertising cookies.",
    },
    use: {
      heading: "3. How We Use Your Information",
      p1: "We use the personal information collected via our website solely for the following business purposes:",
      items: [
        { term: "Communication:", text: " To directly respond to your inquiries, answer your questions, and engage in potential business discussions." },
        { term: "Service Delivery:", text: " To assess if we are the right fit for your situation and follow up regarding our consulting, engineering, or coaching capabilities." },
        { term: "Administrative Purposes:", text: " To maintain internal records of business correspondence." },
      ],
      note: "We do not sell, rent, or trade your personal information to third parties.",
    },
    share: {
      heading: "4. How We Share Your Information",
      p1: "We only share information with third parties in the following specific situations:",
      items: [
        { term: "Service Providers:", text: " We use trusted third-party infrastructure to operate our website. For example, our contact form relies on secure email routing services and hosting providers. These providers process data strictly to facilitate technical operations and are bound by their own rigorous privacy standards." },
        { term: "Legal Obligations:", text: " We may disclose your information where we are legally required to do so to comply with applicable laws, governmental requests, or judicial proceedings." },
      ],
    },
    security: {
      heading: "5. Data Security",
      p1: "We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the internet can be guaranteed to be 100% secure.",
    },
    rights: {
      heading: "6. Your Privacy Rights",
      p1: "Depending on your geographic location, you may have rights regarding your personal information, including the right to request a copy of the information we hold about you, request corrections, or request that we delete your personal information from our active records.",
    },
    contactUs: {
      heading: "7. Contact Us",
      p1: "If you have questions or comments about this Privacy Policy, please contact us at:",
      email: "Email:",
      phone: "Phone:",
    },
  },
};

export type Dictionary = typeof en;
