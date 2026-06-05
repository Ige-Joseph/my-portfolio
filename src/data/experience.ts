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
    period: '2024 — Present',
    location: 'Remote · Lagos, Nigeria',
    description:
      'A competitive engineering residency focused on real product delivery — not coursework. Working within a collaborative backend team to architect, build, and ship production systems across multiple product tracks. Advanced to the final stage, placing among the top 1% of over 2,000 participants.',
    achievements: [
      'Designed and built a Knowledge Board API — a collaborative content platform with structured access control, content versioning, and a REST interface designed to scale cleanly across teams',
      'Led backend architecture for Vitals — a health companion app covering shared care coordination, mood and habit tracking, timezone-aware reminders, and push notification delivery. Produced the full system ERD, service boundary design, and delivery roadmap before a line of code was written',
      'Made architecture tradeoff decisions on queue durability, service isolation, and reliability requirements — choosing approaches that reduced operational risk rather than chasing technical complexity',
      'Resolved a cross-service authentication failure caused by a Pydantic v2 type coercion mismatch: Django was sending an integer user ID where FastAPI expected a string under JWT token validation',
    ],
    tags: ['FastAPI', 'Django', 'PostgreSQL', 'REST API Design', 'Architecture', 'Systems Design'],
    current: true,
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
