// ============================================================
// EXPERIENCE DATA
// ============================================================

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Internship' | 'Program' | 'Residency';
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
  current?: boolean;
  badge?: string; // optional highlight badge
}

export const experiences: Experience[] = [
  {
    id: 'talenvo-backend',
    role: 'Backend Engineer',
    company: 'Talenvo',
    type: 'Residency',
    period: 'Feb — Jun 2026',
    location: 'Remote · Lagos, Nigeria',
    description:
      'Backend work across several product tracks — a collaborative content API, and a health companion app taken from system design through to delivery. Shared services and architecture decisions were made as a team; individual product builds were owned end to end.',
    achievements: [
      'Resolved a cross-service authentication failure caused by a Pydantic v2 type coercion mismatch: Django was sending an integer user ID where FastAPI expected a string under JWT token validation',
      'Designed and built a Knowledge Board API — a collaborative content platform with structured access control, content versioning, and a REST interface designed to scale cleanly across teams',
      'Built Vitals — a health companion app where care plans can be shared with the people supporting someone, and each plan syncs to Google Calendar through a queue, so a failed sync never blocks a care plan action. Produced the full system design — ERD, service boundaries, delivery roadmap — before implementation began, and carried out the build solo',
      'Made architecture tradeoff decisions on queue durability, service isolation, and reliability requirements — choosing approaches that reduced operational risk rather than chasing technical complexity',
    ],
    tags: ['FastAPI', 'Django', 'PostgreSQL', 'REST API Design', 'Architecture', 'Systems Design'],
    badge: 'Top 1% · 2,000+ participants',
  },
  // ➕ Add more experience entries below
  // {
  //   id: 'company-role',
  //   role: 'Software Engineer',
  //   company: 'Company Name',
  //   companyUrl: 'https://company.com',
  //   type: 'Full-time',
  //   period: '2022 — 2024',
  //   location: 'Lagos, Nigeria',
  //   description: 'What you did here.',
  //   achievements: ['Achieved X by doing Y'],
  //   tags: ['Python', 'FastAPI'],
  //   current: false,
  // },
];
