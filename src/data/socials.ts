// ============================================================
// SOCIALS DATA
// Add or edit social links by modifying this array.
// Used in the nav, hero, footer, and contact sections.
// ============================================================

export interface Social {
  id: string;
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email' | 'external';
  showInNav?: boolean;
  showInFooter?: boolean;
  showInContact?: boolean;
}

export const socials: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/Ige-Joseph',
    icon: 'github',
    showInNav: true,
    showInFooter: true,
    showInContact: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ige-joseph',
    icon: 'linkedin',
    showInNav: true,
    showInFooter: true,
    showInContact: true,
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    url: 'https://twitter.com/josephige',
    icon: 'twitter',
    showInNav: false,
    showInFooter: true,
    showInContact: false,
  },
  // ➕ Add more social links below
];