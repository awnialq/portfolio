const portfolioSiteBlog = {
  title: 'Portfolio Website',
  subtitle: 'A React front end for projects, skills, and writing',
  lastUpdated: '2026-04-13',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      bullets: [
        'Personal portfolio to showcase projects, technical skills, and longer-form write-ups (like this page).',
        'Live site: https://awnialq.github.io/portfolio/',
        'Open source: same repository you are browsing if you landed here from GitHub.',
      ],
    },
    {
      id: 'stack',
      title: 'Technical Stack',
      bullets: [
        'React 19 with Vite 6 for fast dev feedback and production builds.',
        'Material UI 7 with Emotion for layout, typography, and the dark “glass” panels.',
        'Framer Motion for page and list transitions.',
        'React Router in hash mode so GitHub Pages routing works without server rewrites.',
        'Deployed to GitHub Pages via gh-pages from the dist output.',
      ],
    },
    {
      id: 'implementation',
      title: 'Implementation Notes',
      paragraphs: [
        'Routing is centralized in App.jsx with a small animated route wrapper so navigations feel consistent. The base path is set to /portfolio/ in Vite, which matches the GitHub project site URL.',
        'Visual language follows a dark background with cyan and mint accents—shared across the navbar, cards, and blog panels so the site reads as one system rather than isolated pages.',
        'Project cards on the Projects page are data-driven: adding an entry and image path is enough to extend the grid; technology chips double as filters so visitors can narrow the list by stack.',
        'Blog-style pages reuse a single BlogArticle component fed by content modules, which keeps structure uniform between topics (for example, the NES emulator write-up and this page).',
      ],
    },
    {
      id: 'reflection',
      title: 'Reflections',
      paragraphs: [
        'Building the site alongside other projects made it easier to keep a single place for demos and narrative context instead of scattering links across profiles.',
        'Hash-based routing is a pragmatic tradeoff for static hosting; the URLs are slightly noisier, but deployment stays simple.',
        'Next steps might include more case-study posts, light performance passes on images, or small accessibility audits as content grows.',
      ],
    },
  ],
};

export default portfolioSiteBlog;
