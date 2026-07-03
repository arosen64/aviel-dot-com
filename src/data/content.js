// All portfolio content lives here. To add a new job or project, append a new
// object to the relevant array below — the components render whatever is here.

export const profile = {
  name: 'Aviel Rosen',
  location: 'Baltimore, Maryland',
  bio: "I'm a CS, math, and financial econ student at Johns Hopkins University, with experience across AI agent systems, quantitative research, and software engineering.",
  email: 'avielrosen13@gmail.com',
  phone: '914-274-1619',
  links: [
    { label: 'GitHub', href: 'https://github.com/arosen64' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aviel-rosen-8225662b8' },
  ],
};

export const experience = [
  {
    company: 'Wolfe Research — QES Team',
    dates: 'May 2026 – Aug 2026',
    role: 'Quantitative Researcher, QES',
    bullets: [
      "Leading the transition of the team's macroeconomic nowcasting indices from EViews to R, re-implementing the models in a modern, maintainable stack and optimizing the pipeline's efficiency and reproducibility.",
      'Migrating a large portion of the program\'s workloads onto the cloud, and studying proprietary internal white papers authored by team lead Yin Luo to reconstruct the underlying methodology.',
      'Implemented Principal Component Analysis and a state-space Kalman filter to construct the nowcasting indices from that methodology.',
    ],
  },
  {
    company: 'Mindrian',
    dates: 'Oct 2025 – Feb 2026',
    role: 'Agent Development Intern',
    bullets: [
      'Designed and implemented an autonomous multi-agent document analysis system in Python using the Agno framework, supporting complex document lifecycle management and strategic analysis.',
      'Engineered a hierarchical supervisor-worker architecture in which a central LLM agent orchestrates workflows and delegates deep reasoning to specialized sub-agents under a strict, secure delegation protocol.'
    ],
  },
  {
    company: 'Lakewood Capital Management',
    dates: 'May 2025 – Aug 2025',
    role: 'Analyst Intern, $3B+ Equity Hedge Fund',
    bullets: [
      'Completed an intensive training program covering advanced Excel-based financial modeling, Bloomberg Terminal analytics, and valuation frameworks for option pricing and discounted cash-flow analysis.',
      'Built and automated Python scripts to web-scrape and aggregate data from the fast-casual restaurant space, reducing data-collection time by 90% and delivering actionable insights for market analysis.',
    ],
  },
  {
    company: 'Rubric Capital',
    dates: 'Jun 2024 – Aug 2024',
    role: 'Analyst Intern, $3B+ Equity Hedge Fund',
    bullets: [
      'Engineered a market-neutral, Python-driven algorithmic trading strategy that identifies inflection points in consumer credit-card spending, which delivered consistent single-digit annualized returns backtested over a four-year period.',
      'Researched potential short positions within the technology sector.',
    ],
  },
];

// Featured projects get the full treatment: tagline, narrative, and a stack list.
export const featuredProjects = [
  {
    title: 'Apollo',
    tagline: 'AI ecosystem for sports analytics, JHU Sports Analytics Research Group (Jan–Apr 2026)',
    description:
      "Apollo is an agent-driven intelligence hub that turns live sports data into actionable insight, built as a large team project with faculty Tad Berkery and Anton Dahbura. I owned the agent framework, the tool and agent registry infrastructure, and the evaluation harness across the full arc of the project. Early on, I built a Bluesky client library for data ingestion and the ToolRegistry from scratch, a system for registering Python functions as callable agent tools with annotation-driven runtime type checking, a discover() mechanism for startup module loading, and a 38-test suite validating registry behavior. I then shipped the team's first end-to-end agentic demo, InjuryAgent, a tool-use loop that queries player news and reasons over results with an LLM, along with an AgentTracer that logs tool calls and reasoning into inspectable session traces. As the framework generalized, I built the AgentRegistry to keep the growing roster of agents loosely coupled and retrievable by name, and an LLM-swap evaluation harness (seven incremental commits) with shared dataclasses, a BaselineCapture class, an LLM-based TestingEvaluatorAgent, and seven binary metric scorers, so the team could compare models on evidence instead of intuition. In the final phase, I routed all agents through an AWS Application Load Balancer and added auto-generation of OpenAPI-compatible tool schemas.",
    link: "https://engineering.jhu.edu/designcenter/design-gallery/entry/45735/"
  },
  {
    title: 'Timemaxx',
    tagline: 'AI-powered study scheduler, JHU Whiting School of Engineering (Jan–May 2026)',
    description:
      "Timemaxx is a full-stack study planner built with a team of six that turns static due dates into an actionable, personalized schedule. It reads a student's syllabi, transcripts, and course list, estimates how long each assignment will actually take, and places study blocks directly onto their calendar at their most productive hours. I built the app end to end in React, TypeScript, and Convex, deployed via GitHub Actions to GitHub Pages. I integrated Google Gemini to estimate task completion time from parsed syllabi and transcripts, storing the model's reasoning traces alongside each estimate for auditability, and engineered the scheduling engine itself, which batches slot selection into a single Gemini call, writes study blocks to Convex, and auto-resolves Google Calendar conflicts. I also implemented Google Calendar OAuth, syllabus PDF parsing, and MAXX, a Mastra-based, RAG-backed chat assistant that lets students create tasks and log feedback in natural language from the dashboard. Under the hood, a retrieval-augmented pipeline retrieves each student's most similar past tasks and courses before Claude Sonnet 4 produces a time estimate, and a feedback loop of rated estimates versus actual time personalizes future predictions.",
    link: "https://engineering.jhu.edu/designcenter/design-gallery/entry/45861/",
  },
];

// Other projects are lighter-weight: tagline + one summary paragraph, no stack list.
export const otherProjects = [
  {
    title: 'Order Book Matching Engine',
    tagline: 'C++17, market microstructure (2025)',
    description:
      'A trading core built in C++17 and the STL, supporting limit and market orders, automatic FIFO matching, partial fills, and order cancellation. I used maps, lists, and hash tables to keep best-price retrieval, FIFO matching, and order removal fast, and validated correctness with a comprehensive test suite covering full and partial fills, price-level exhaustion, and cancellation edge cases.',
    link: "https://github.com/arosen64/Order-Book"
  },
  {
    title: 'AccessInvest',
    tagline: 'MorganHacks, Finalist, MongoDB award (Apr 2025)',
    description:
      'An AI-driven platform that turns complex financial data into actionable insight for new and underserved investors. Built at the MorganHacks hackathon, it aggregates and processes SEC filings (10-K, 10-Q, 8-K), real-time news, and multiple financial APIs, and integrates Google\'s Gemini API to perform sentiment analysis and interpretation of dense financial documents. The project was a hackathon finalist and received an award from MongoDB for exceptional use of their software.',
    link: "https://devpost.com/software/accessinvest"
  },
  {
    title: 'Potlock',
    tagline: 'MorganHacks 2026, Winner, Best Use of Solana',
    description:
      'A Solana-based group treasury where money only moves when the group agrees, with governing rules defined in a formal contract before any funds can flow. Groups write their contract in plain English, which Gemini formalizes into a structured schema, then invite members by wallet address. Any member can propose a transaction, which is validated against the contract and reported to all members before a group-defined approval process (k-of-n, role-based, unanimous, or tiered) runs on-chain, executing funds immediately once the threshold is met. Built with Solana and Anchor for the on-chain treasury program, Convex for off-chain contract and transaction data, and React with a Phantom wallet integration on the frontend. The project won Best Use of Solana at MorganHacks 2026.',
    link: 'https://devpost.com/software/potlock',
  },
];

// Shown at the very bottom of the page, below everything else — disclosures,
// disclaimers, etc. Add one string per line. Leave empty to show just the email.
export const disclosures = [];

export const skillGroups = [
  { label: 'Languages', items: ['Python', 'C++', 'Java', 'TypeScript', 'JavaScript'] },
  { label: 'Frameworks', items: ['React', 'Node.js', 'Agno', 'Mastra', 'PyTorch'] },
  { label: 'Data & Tools', items: ['Pandas', 'NumPy', 'SQL', 'Bloomberg', 'R'] },
  { label: 'AI / Agents', items: ['MCP', 'RAG', 'Claude Code', 'Cursor'] },
  { label: 'Infra', items: ['Git', 'GitHub Actions', 'Convex', 'AWS'] },
];
