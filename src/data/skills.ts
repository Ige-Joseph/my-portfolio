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
    skills: ['FastAPI', 'Django', 'Django REST Framework', 'SQLAlchemy', 'Pydantic', 'React'],
  },
  {
    id: 'infrastructure',
    category: 'Infrastructure & Messaging',
    icon: '⚡',
    skills: ['RabbitMQ', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'FFmpeg', 'Nginx'],
  },
  {
    id: 'patterns',
    category: 'Patterns & Architecture',
    icon: '🧠',
    skills: [
      'Distributed Systems',
      'Transactional Outbox',
      'Event-Driven Architecture',
      'REST API Design',
      'Idempotency Patterns',
      'Asynchronous Processing',
      'Microservices',
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
    id: 'creative',
    category: 'Creative & Multimedia',
    icon: '🎨',
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'After Effects',
      'Blender',
      'Adobe Creative Suite',
    ],
  },
  {
    id: 'tools',
    category: 'Tools & Workflow',
    icon: '🛠️',
    skills: ['Git & GitHub', 'Postman', 'Linux / Ubuntu', 'VS Code', 'Figma'],
  },
  // ➕ Add more categories below
];
