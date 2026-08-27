// ============================================================
// CONTENT — every word on the page, in one file.
//
// Edit the strings here and the site updates. Nothing in this
// file is markup: write plain text and use real characters
// (' for apostrophes, — for dashes, · for separators) rather
// than HTML entities like &rsquo; — those would render
// literally.
//
// Projects, roles and skills live in their own files because
// they are lists you add to:
//   projects.ts    the work
//   experience.ts  roles and residencies
//   skills.ts      the capability index
//   site.ts        name, contact, links, SEO
//   navigation.ts  section names, order and numbering
// ============================================================

// ---- Hero: the title page ----------------------------------

export const hero = {
  /* The serif statement. `emphasis` is the italic accented word. */
  statement: {
    lead: 'I build the systems that make products',
    emphasis: 'reliable',
    tail: '.',
  },

  prose:
    'When a product works smoothly — payments go through, files convert, ' +
    'notifications arrive on time — it’s rarely an accident. I design and ' +
    'build the backend infrastructure and async systems that make that ' +
    'reliability possible, so users never have to think about what’s ' +
    'running underneath.',

  actions: {
    primary: 'Selected work',
    secondary: 'Curriculum vitae',
  },

  /* The specification table. Add or remove rows freely. */
  spec: [
    { label: 'Discipline', value: 'Async Systems & Payment Infrastructure' },
    { label: 'Most recent', value: 'Software Engineer — Talenvo Residency' },
    { label: 'Domains', value: 'Payments · Health · File processing' },
    { label: 'Core stack', value: 'Python · FastAPI · Django · Node.js · RabbitMQ / BullMQ · Postgres' },
    { label: 'Based', value: 'Lagos, Nigeria · Remote' },
  ],

  /* Fig. 01 — the request-path diagram. Each entry is one node. */
  figure: {
    caption: 'Request path — the shape of every system here',
    nodes: ['Client', 'Gateway', 'Queue', 'Worker', 'Database'],
    plain:
      'In plain terms: a request comes in, and is put in a queue so nothing is ' +
      'lost if something fails. A separate worker does the slow part. The result ' +
      'is stored. Almost everything below is a variation on this shape.',
  },
};

// ---- Contents index ----------------------------------------

export const contents = {
  label: 'Contents',
  /* Rows come from navigation.ts — edit sections there. */
};

// ---- About -------------------------------------------------

export const about = {
  title: 'Building products that work under pressure',

  /* The first paragraph is set larger as the document lede. */
  bio: [
    'I’m a backend-focused product engineer based in Lagos, Nigeria. I specialise ' +
      'in the infrastructure layer — the async systems, payment pipelines, and ' +
      'APIs that sit behind a product and determine whether it’s reliable or fragile.',

    'I’ve built a credit-based payment gateway that routes transactions through ' +
      'multiple providers and keeps wallet balances consistent even when services are ' +
      'temporarily down. I’ve designed file conversion infrastructure where 8+ ' +
      'processing pipelines run in complete isolation, so a failed video job never slows ' +
      'down a document conversion. And at Talenvo, I built a health companion app end to ' +
      'end on my own, and designed a collaborative content API — both from system ' +
      'design through to delivery.',

    'What drives my work is a simple idea: the best infrastructure is the kind users ' +
      'never think about. I design systems to be reliable by default — not as an ' +
      'afterthought — and I think carefully about the tradeoffs that come with every ' +
      'architecture decision.',

    'I came to software from a background in agricultural science, and have since worked ' +
      'across infrastructure, web platforms and media tooling — enough range to ' +
      'understand a whole product rather than only my part of it.',
  ],

  /* Numbered automatically: 01, 02, 03 ... */
  principles: [
    {
      title: 'Reliability by design',
      body: 'I design for failure before I design for success. Good infrastructure handles the edge cases that most architectures ignore.',
    },
    {
      title: 'Product awareness',
      body: 'Backend decisions affect the user experience in ways that aren’t always obvious. I think about the product impact of every infrastructure choice.',
    },
    {
      title: 'End-to-end ownership',
      body: 'From the first architecture diagram to the deployed container — I take responsibility for the full system, not just my part of it.',
    },
  ],
};

// ---- Selected work -----------------------------------------

export const projectsSection = {
  title: 'Systems I’ve engineered',
  intro:
    'Production backend systems, documented the way I’d document them ' +
    'internally — architecture first, then the decisions that made them hold up.',
};

// ---- Capabilities ------------------------------------------

export const skillsSection = {
  title: 'Technologies & systems I work with',
  intro:
    'A T-shaped engineer — depth in backend, queueing and payment systems, ' +
    'with enough infrastructure, web platform and tooling range to work across a ' +
    'whole team.',

  /* Fig. 02 — the T-shape. Breadth runs across the top bar. */
  figure: {
    caption: 'T-shaped profile — breadth across, depth down',
    breadth: ['Frontend', 'Docker / Infra', 'Product Design', 'CMS / Web', 'Architecture'],
    depth: {
      title: 'Software Engineering',
      sub: 'Async Systems · Payment Infrastructure · API Design',
    },
  },
};

// ---- Experience --------------------------------------------

export const experienceSection = {
  title: 'Where I’ve built',
  intro: 'Architecture decisions, systems shipped, and engineering problems solved.',
};

// ---- Contact -----------------------------------------------

export const contactSection = {
  title: 'Let’s build something worth talking about',
  intro:
    'Whether you have a queueing or payments problem, a backend to architect, or a ' +
    'product to build — I’d like to hear about it. I reply within 24 hours.',
};
