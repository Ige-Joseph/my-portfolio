// ============================================================
// PROJECTS DATA
// ============================================================

export type ProjectStatus = 'Production' | 'In Progress' | 'Archived' | 'Open Source';
export type ProjectContext = 'Personal' | 'Talenvo' | 'Contract';

export interface SystemFlow {
  nodes: string[];
  label?: string;
  /** Plain-English reading of the diagram, for non-technical readers. */
  plain?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  /** One jargon-free sentence: what this is and who it's for. */
  plainSummary: string;
  context: ProjectContext;
  description: string;
  tags: string[];
  status: ProjectStatus;
  featured: boolean;
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
  highlights: string[];
  year: string;
  color?: string;
  systemFlow?: SystemFlow;
}

export const projects: Project[] = [
  {
    id: 'officesuitex-payments',
    plainSummary:
      "Users buy credits and spend them across the platform. This is the system that takes their money in, and keeps every balance correct even when part of it goes down.",
    title: 'OfficeSuiteX — Payment Gateway',
    subtitle: 'Personal Project · Distributed Payment Infrastructure',
    context: 'Personal',
    description:
      'OfficeSuiteX runs on a credit-based model — users buy credits and spend them across the platform. I built the payment gateway that handles this end-to-end: taking payments from multiple providers, routing them reliably, and making sure user balances always stay accurate even when parts of the system are temporarily unavailable.',
    tags: ['FastAPI', 'Django', 'RabbitMQ', 'SQLAlchemy', 'PostgreSQL', 'OPay', 'Paystack'],
    status: 'Production',
    featured: true,
    links: {
      github: 'https://github.com/Ige-Joseph/officeSuiteX',
      live: 'https://officesuitex.com',
    },
    highlights: [
      'Credit-based billing — users purchase credits consumed across the platform',
      'Accepts payments via both OPay and Paystack; routes to the appropriate provider per transaction',
      'Services communicate through RabbitMQ, so a wallet update completes even if one service is temporarily down',
      'Uses the transactional outbox pattern — payment records and event messages are written together atomically',
      'Every transaction is keyed to a unique ID, making retries safe without double-charging',
      'Wallet balances are updated on a separate Django consumer service for clean service separation',
    ],
    year: '2024',
    color: '#4fffb0',
    systemFlow: {
      nodes: ['Payment Provider', 'Gateway API', 'RabbitMQ', 'Consumer', 'Wallet Service'],
      label: 'Payment Flow',
      plain:
        "Money arrives from Paystack or OPay, gets recorded, then waits safely in a queue until a separate service updates the balance — so a payment is never lost if one part fails.",
    },
  },
  {
    id: 'officesuitex-core',
    plainSummary:
      "Converts documents, images, audio and video between formats — each type running in its own isolated lane, so a failed video job never breaks a document conversion.",
    title: 'OfficeSuiteX — File Conversion Platform',
    subtitle: 'Personal Project · Scalable File Processing Infrastructure',
    context: 'Personal',
    description:
      'OfficeSuiteX supports 8+ file conversion types — documents, images, audio, and video. Each conversion type runs as its own isolated pipeline, so a failed video job never affects a document conversion. FFmpeg runs inside Docker containers to keep media processing completely separate from the main application.',
    tags: ['Python', 'FastAPI', 'Docker', 'FFmpeg', 'PostgreSQL', 'Celery', 'Redis'],
    status: 'Production',
    featured: true,
    links: {
      github: 'https://github.com/Ige-Joseph/officeSuiteX',
      live: 'https://officesuitex.com',
    },
    highlights: [
      '8+ conversion pipelines across document, image, audio, and video formats',
      'FFmpeg runs inside Docker — isolated from the app so media processing failures stay contained',
      'Jobs are dispatched asynchronously via Celery workers, keeping the API fast and non-blocking',
      'Each pipeline is independent — adding a new conversion type means adding a new worker, not modifying existing ones',
      'Consistent Docker environments across development and production reduce deployment surprises',
    ],
    year: '2024',
    color: '#ffd166',
    systemFlow: {
      nodes: ['Upload', 'Job Queue', 'Celery Worker', 'Docker / FFmpeg', 'Output'],
      label: 'Conversion Flow',
      plain:
        "You upload a file, it joins a queue, a worker picks it up and converts it inside a sealed container, and the finished file comes back.",
    },
  },
  {
    id: 'vitals-health-companion',
    plainSummary:
      "A health app that patients and their carers share — tracking mood, cravings and habits together, with reminders that arrive on time wherever in the world you are.",
    title: 'Vitals',
    subtitle: 'Talenvo · Unified Health Companion App',
    context: 'Talenvo',
    description:
      'A health companion app designed to support patients and carers together. Multiple people can share access to a single health profile — tracking mood, cravings, and habits over time. The backend handles personalised reminders with timezone support and ensures push notifications reach users reliably regardless of device or timezone.',
    tags: ['FastAPI', 'PostgreSQL', 'Push Notifications', 'Shared Care', 'Systems Design'],
    status: 'In Progress',
    featured: true,
    links: {
      github: 'https://github.com/Ige-Joseph/knowledge-board-api',
      live: 'private', // we'll handle this as a special case in the component
    },
    highlights: [
      "Shared care model — family members or carers can access and contribute to a user's health profile",
      'Tracks mood, cravings, and health habits with time-series data for trend analysis',
      'Reminder engine supports recurring schedules with full timezone awareness',
      'Push-first notification strategy with fallback to ensure delivery across device types',
      'Designed the full system before a line of code: database schema, service boundaries, delivery roadmap',
    ],
    year: '2024',
    color: '#7b61ff',
    systemFlow: {
      nodes: ['Client', 'API', 'Care Engine', 'Reminder Queue', 'Push Service'],
      label: 'Notification Flow',
      plain:
        "The app calls the API, which works out who needs reminding and when, then queues the reminder so the notification actually reaches the phone.",
    },
  },
  {
    id: 'medical-results-portal',
    plainSummary:
      "A private portal where companies collect their staff's medical test results — search by name, read the report in the browser, download it if it's needed on paper.",
    title: 'Medical Results Portal',
    subtitle: 'Personal Project · Operational Document Delivery System',
    context: 'Personal',
    description:
      "A browser-based portal for medical report delivery. Companies and factories log in to access their staff's test results — grouped by organisation, searchable by patient name, with each result opening directly in an embedded PDF viewer. Reports are stored and delivered through Cloudinary, so the whole workflow from login to download happens in the browser without any back-and-forth file transfers.",
    tags: ['Django', 'Cloudinary', 'PDF Viewer', 'PostgreSQL', 'Authentication', 'Search'],
    status: 'Production',
    featured: true,
    links: {
      github: 'https://github.com/Ige-Joseph',
    },
    highlights: [
      'Organisation-scoped access — each company sees only its own factory groups and patient records',
      'Client-side patient search filters results in real time without additional round trips to the server',
      'Clicking a result opens an embedded PDF viewer directly in the browser — no download required to view',
      'PDFs are stored and served through Cloudinary with access-controlled delivery URLs',
      'Downloadable reports for offline access, printing, or record-keeping',
      'Structured result tables group records by factory and company for operational clarity',
    ],
    year: '2024',
    color: '#ff6b6b',
    systemFlow: {
      nodes: ['Company Login', 'Factory Results', 'Patient Search', 'PDF Viewer', 'Download'],
      label: 'Access Workflow',
      plain:
        "A company signs in, sees only its own results, searches for a patient, and opens that report straight in the browser.",
    },
  },
  // ➕ Add more projects below
];