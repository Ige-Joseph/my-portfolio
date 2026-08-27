// ============================================================
// SKILLS DATA — No ratings. Clean, senior, professional.
// Technologies and systems Joseph works with.
// ============================================================

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    category: 'Languages',
    icon: '⌨️',
    skills: ['Python', 'TypeScript', 'SQL', 'Bash', 'HTML / CSS'],
  },
  {
    id: 'frameworks',
    category: 'Frameworks & Libraries',
    icon: '🏗️',
    skills: ['FastAPI', 'Django', 'Django REST Framework', 'Node.js', 'SQLAlchemy', 'Pydantic', 'React'],
  },
  {
    id: 'infrastructure',
    category: 'Infrastructure & Messaging',
    icon: '⚡',
    skills: ['RabbitMQ', 'BullMQ', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'FFmpeg', 'Nginx'],
  },
  {
    id: 'patterns',
    category: 'Patterns & Architecture',
    icon: '🧠',
    skills: [
      'Transactional Outbox',
      'Event-Driven Architecture',
      'REST API Design',
      'Idempotency Patterns',
      'Asynchronous Processing',
      'SSO / Auth Systems',
    ],
  },
  {
    id: 'payments',
    category: 'Payment & Fintech',
    icon: '💳',
    skills: ['Paystack', 'OPay', 'Payment Gateway Design', 'Credit-Based Systems', 'Webhook Handling', 'Wallet Architecture'],
  },
  {
    id: 'cms',
    category: 'CMS & Web Platforms',
    icon: '🌐',
    skills: ['WordPress', 'Headless CMS', 'Vercel', 'Netlify'],
  },
  {
    id: 'tools',
    category: 'Tools & Workflow',
    icon: '🛠️',
    skills: ['Git & GitHub', 'Postman', 'Linux / Ubuntu', 'VS Code', 'Figma'],
  },
  // ➕ Add more categories below
];
