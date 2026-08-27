// ============================================================
// NAVIGATION — the single source of truth for every section.
//
// The navbar, the footer and the Contents index all read this
// file. Add, remove, rename or reorder a section here and all
// three update together, along with the 01..05 numbering shown
// in each section heading.
//
// id    the DOM id and anchor target (#about, #projects, ...)
// num   the document number shown in the section heading
// nav   short label for the navbar (space is tight there)
// label full label for Contents and the footer
// desc  one-line description shown in the Contents index
// ============================================================

export interface Section {
  id: string;
  num: string;
  nav: string;
  label: string;
  desc: string;
}

export const sections: Section[] = [
  {
    id: 'about',
    num: '01',
    nav: 'About',
    label: 'About',
    desc: 'Background, principles, how I work',
  },
  {
    id: 'projects',
    num: '02',
    nav: 'Work',
    label: 'Selected work',
    desc: 'Systems built, shipped, and running',
  },
  {
    id: 'skills',
    num: '03',
    nav: 'Capabilities',
    label: 'Capabilities',
    desc: 'Stack, tooling, and domains',
  },
  {
    id: 'experience',
    num: '04',
    nav: 'Experience',
    label: 'Experience',
    desc: 'Roles, residencies, and delivery',
  },
  {
    id: 'contact',
    num: '05',
    nav: 'Contact',
    label: 'Contact',
    desc: 'Availability and channels',
  },
];

/** Anchor href for a section: '#about', '#projects', ... */
export const href = (section: Section) => `#${section.id}`;

/** Look up one section by id. Throws early if the id is wrong. */
export function section(id: string): Section {
  const found = sections.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown section id: "${id}" — check src/data/navigation.ts`);
  return found;
}
