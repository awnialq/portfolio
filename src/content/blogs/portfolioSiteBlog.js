const portfolioSiteBlog = {
  title: 'Portfolio Website',
  subtitle: 'A React front end for projects, skills, and writing',
  lastUpdated: '2026-08-20',
  navLabel: 'This site',
  tagline: 'React · Vite · MUI',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: [
        'Personal portfolio for projects, technical skills, and longer-form write-ups like this one. It is a React single-page app built with Vite and deployed as a static site to GitHub Pages.',
        'The site was recently rebuilt around a design system rather than page-by-page styling. Color, type, and spacing now come from one module, the background is flat instead of glowing, and the top bar groups its nine old links into six.',
      ],
      bullets: [
        { label: 'Live site', href: 'https://awnialq.github.io/portfolio/' },
        { label: 'Source on GitHub', href: 'https://github.com/awnialq/portfolio' },
      ],
    },
    {
      id: 'stack',
      title: 'Technical Stack',
      bullets: [
        'React 19 with Vite 6 for fast dev feedback and production builds.',
        'Material UI 7 with Emotion for layout and components, driven by a custom theme rather than the defaults.',
        'A local token module as the single source of color; no CSS framework and no utility classes.',
        'Framer Motion for page and list transitions.',
        'React Router in hash mode so GitHub Pages routing works without server rewrites.',
        'Archivo, Instrument Sans, and JetBrains Mono from Google Fonts, each with a defined role.',
        'Deployed to GitHub Pages via gh-pages from the dist output.',
      ],
    },
    {
      id: 'design-system',
      title: 'The Design System',
      paragraphs: [
        'The redesign started from a measurement rather than a mood board. The same five color values were declared in three separate places - the stylesheet, the MUI theme, and the standalone emulator iframe - and then bypassed by 92 hardcoded rgb() and rgba() literals spread across ten files. Those literals used 27 distinct alpha values of the same three hues, which is how a palette drifts: every new panel picks a slightly different transparency than the last one.',
        'The fix was one module, src/design/tokens.js, that owns every color on the site. The theme reads from it, component styles call helpers from it, and the stylesheet receives its custom properties injected at runtime, so there is no second copy to fall out of sync. The emulator iframe is standalone and cannot import the module, so it keeps a block explicitly marked as a mirror.',
        'On top of that sits the rule that actually keeps things consistent: each channel owns one job, and a surface uses exactly one channel. Blue carries structure - borders, rules, eyebrows, timestamps, metadata. Green carries action - links, primary buttons, progress fills. Red carries live state - the playable emulator, the Play Demo button, anything still running. Because a surface never blends channels, the four tri-color gradient recipes that used to be pasted between files simply had nowhere left to live.',
        'Transparency snaps to a six-step ladder - wash, hover, active, hairline, edge, solid - so the 27 ad-hoc alphas collapsed into named intent. The result is testable, not just tidy: grepping the pages, components, and theme for a color literal now returns nothing, which makes drift a build-time observation instead of something noticed months later.',
      ],
    },
    {
      id: 'implementation',
      title: 'Implementation Notes',
      paragraphs: [
        'Routing stays centralized in App.jsx with a small animated route wrapper, and Vite\'s base path is set to /portfolio/ to match the GitHub project site URL.',
        'The old background stacked two independent sets of colored radial gradients - one painted on the body by the theme, another on a fixed overlay in the layout - at nearly the same coordinates. Together they pooled saturated color directly behind body copy, and the grid overlay made it worse by masking itself into a radial fade that concentrated in the center, exactly where the text sits. Both gradient systems are gone. The ground is flat now, with one even full-bleed grid texture at a much lower alpha, so text always sits on the same field.',
        'Typography was doing one job with one tool: JetBrains Mono set everything, which is the single biggest reason a developer portfolio reads as generic. It now splits three ways. Archivo, at its expanded width, handles display type. Instrument Sans handles body copy, which is far easier to read on a dark background at paragraph length. JetBrains Mono is kept only where monospace is actually true - code blocks, stat panels, eyebrows, timestamps, and the nav.',
        'The top bar carried nine flat items, four of which said "Blog". It now carries six, with two grouped dropdowns: one for the NES emulator, which has two faces worth separating (play it, or read the build log), and one for the project write-ups. The descriptive weight moved into the menus as sub-labels, so the bar got shorter while the links got more informative. Menus open on click rather than hover, since hover menus are unreachable by keyboard and unusable by touch. On mobile every destination stays one tap away under group headings instead of nesting.',
        'Nav items cycle red, green, blue by position in the bar, the way a display repeats subpixels. The channel comes from the index rather than a hardcoded field, so reordering or adding a destination keeps the alternation correct on its own. Labels sit white at rest and only take their channel when selected.',
        'Content is single-sourced. Each post declares its own nav label, tagline, and last-updated date, and a small registry feeds those straight into the dropdown metadata through one shared date formatter - so a menu entry cannot disagree with the post it points at. The shared BlogArticle component also understands status bullets, which is why the NES progress list marks completed work in green and in-progress work in red instead of burying the distinction in prose.',
        'The home page keeps one deliberate flourish: the name renders as three offset red, green, and blue copies that converge into white on load, the way a CRT converges its guns. It runs once per session and respects reduced-motion preferences.',
      ],
    },
    {
      id: 'reflection',
      title: 'Reflections',
      paragraphs: [
        'The consistency problem was never a taste problem. Nothing stopped a new page from inventing its own blue at its own opacity, so every page did, and the drift only became visible in aggregate. Making the palette a module with helper functions, instead of a convention to remember, removed the opportunity rather than the symptom.',
        'Deleting turned out to be most of the redesign. Two glow systems, four gradient recipes, three duplicate token blocks, and three of nine nav items all came out, and the site looked more considered afterward rather than emptier.',
        'Spending all the boldness in one place works. With the background flat and the palette disciplined, a single signature moment on the home page carries the personality that scattered glows were previously failing to.',
        'Hash-based routing is still a pragmatic tradeoff for static hosting - noisier URLs, but no server rewrites and a trivial deploy.',
        'Next steps: more case-study posts, an image pass on the project cards, and extending reduced-motion handling to the page transitions, which still animate regardless of preference.',
      ],
    },
  ],
};

export default portfolioSiteBlog;
