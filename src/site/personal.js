/**
 * Site copy — professional tone, focused on your software journey.
 * Edit values here to update the whole page.
 */
export const site = {
  displayName: 'Yaren',
  fullName: 'Yaren Kılıç',
  handle: 'yarenkilic88-netizen',
  location: 'Istanbul, Türkiye',
  universityLine:
    'Munzur University · B.Sc. Computer Science & Engineering (2024–2028, expected)',
  role: 'Computer Science & Engineering student',
  tagline:
    'Documenting my path from coursework to shipped software — with a focus on the web stack and disciplined, incremental learning.',
  intro:
    'I am building a foundation in computer science at university while teaching myself modern front-end development. This site is both a portfolio and a learning artifact: version-controlled, deployed, and iterated on as my skills grow. My goal is straightforward — write readable code, ship small projects regularly, and deepen my understanding of JavaScript, algorithms, and software design over time.',
  githubUrl: 'https://github.com/yarenkilic88-netizen',
  repoUrl: 'https://github.com/yarenkilic88-netizen/yaren-webapp',
  linkedinUrl: 'https://www.linkedin.com/in/yarenkilic88',
  email: 'yaren.kilic88@gmail.com',
  /** Three concise facts under the hero — keep them factual and scannable */
  heroHighlights: [
    {
      title: 'Active stack',
      detail: 'React · Vite · Tailwind CSS · Git / GitHub',
    },
    {
      title: 'Formal training',
      detail: 'Java (introductory) · CS fundamentals via degree programme',
    },
    {
      title: 'Learning objective',
      detail: 'Strengthen core CS skills while shipping real UI in the browser',
    },
  ],
}

export const aboutPoints = [
  {
    title: 'Academic foundation',
    text: 'I am pursuing a Bachelor of Science in Computer Science & Engineering at Munzur University (Tunceli), with an expected graduation in June 2028. Coursework gives me structured exposure to computing theory and practice. I also serve as Vice President of the Computer Science Club, which keeps me engaged with peers, events, and technical discussions outside lectures.',
  },
  {
    title: 'Self-directed engineering',
    text: 'Alongside the degree, I invest time in the tools industry uses today: Git for version control, GitHub for collaboration and visibility, and a modern JavaScript toolchain (React, Vite, Tailwind) for interface development. I document progress in repositories rather than only in notes — so my journey is observable and accountable.',
  },
  {
    title: 'How I grow as a developer',
    text: 'I prioritise small, repeatable habits: reading official documentation, breaking problems into steps, and refactoring when I understand more than I did last week. Near-term priorities include strengthening JavaScript fundamentals, writing cleaner component boundaries, and contributing to slightly larger codebases as confidence increases.',
  },
]

export const projectCards = [
  {
    title: 'Personal portfolio (this site)',
    description:
      'A production-style single-page application built with React and Vite, styled with Tailwind, and structured into sections, features, and shared UI for maintainability. It represents my current standard for layout, accessibility basics, and deployable front-end work.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    href: site.repoUrl,
    linkLabel: 'Source code',
  },
  {
    title: 'GitHub profile',
    description:
      'The centre of gravity for my coding journey: coursework experiments, front-end exercises, and future projects as I move from tutorials toward independent builds. Commits and repositories are the most honest record of progress.',
    tags: ['Version control', 'Portfolio', 'Open learning'],
    href: site.githubUrl,
    linkLabel: 'View profile',
  },
  {
    title: 'Learning roadmap',
    description:
      'Next milestones on my technical path: solidify ES modules and asynchronous JavaScript, practise data structures and complexity in Java or JavaScript, add automated testing where it adds value, and publish one additional user-facing project per academic term when schedules allow.',
    tags: ['Roadmap', 'Continuous learning'],
    href: site.linkedinUrl,
    linkLabel: 'Professional profile',
  },
]
