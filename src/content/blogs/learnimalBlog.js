const learnimalBlog = {
  title: 'Learnimal',
  subtitle: 'An agentic terminal you can learn with',
  lastUpdated: '2026-05-16',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: [
        'Learnimal is an Alacritty fork with a built-in AI tutor: press Ctrl+Shift+E at any time and an overlay panel appears inside the terminal window with an explanation of what is on your screen.',
        'It can break down command syntax, diagnose errors and suggest fixes, and surface relevant context from your own command history. Everything runs locally, so there is no account, no API key, and no data leaving your machine.',
        'The motivation was simple: learning Linux is hard, and the usual fix (alt-tab to a browser, wade through Stack Overflow) destroys flow. Learnimal removes that friction by making help one keystroke away inside the terminal you are already working in.',
        'Built in 8 hours as a two-person hackathon project for SCU Hack-a-Stack (Sprint Track).',
      ],
      bullets: [
        {
          label: 'View Learnimal on Devpost',
          href: 'https://devpost.com/software/learnimal',
        },
        {
          label: 'Source on GitHub',
          href: 'https://github.com/awnialq/Learnimal',
        },
      ],
    },
    {
      id: 'stack',
      title: 'Technical Stack',
      bullets: [
        'Rust for the forked Alacritty emulator, grid extraction, and overlay rendering.',
        'Python + FastAPI for the local AI backend.',
        'AdalFlow ReAct agent orchestrating multi-tool reasoning.',
        'Llama 3 8B served locally through Ollama for on-device inference.',
        'SQLite with FTS5 for fast command history recall.',
        'Server-Sent Events as the streaming transport between the Python agent and the Rust overlay.',
      ],
    },
    {
      id: 'implementation',
      title: 'Implementation Notes',
      paragraphs: [
        'The system has three layers. The grid extractor lives inside the forked Alacritty: when the hotkey fires, Rust reads the live terminal grid, truncates intelligently (first 40 + last 40 lines, capped at 8,000 characters), and POSTs it as JSON to a local server.',
        'The AI backend is a FastAPI service running a ReAct agent built with AdalFlow on top of Llama 3 8B via Ollama. The agent has three tools: syntax explanation, error remediation, and historical query lookup. Interaction history is stored in SQLite with FTS5 for fast recall.',
        'The overlay renderer streams the response back as Server-Sent Events, and Rust draws an incremental panel at 60% terminal width that updates in real time as tokens arrive, coordinated against the 16 ms repaint cycle.',
        'A clean IPC contract between the Rust and Python halves was defined before any feature code, which let both engineers work in parallel with confidence.',
      ],
    },
    {
      id: 'challenges',
      title: 'Challenges',
      paragraphs: [
        'Forking Alacritty was non-trivial. The codebase is large and its rendering pipeline is not built to be extended, so getting the overlay to draw correctly without corrupting the underlying terminal grid took significant trial and error.',
        'Streaming into a Rust renderer required careful coordination between SSE chunks arriving from Python and the 16 ms repaint cycle in the overlay.',
        'Reliable last-command detection was much harder than expected. The terminal grid is just characters with no semantic boundary between prompt, command, and output, so we had to be creative about identifying what the user had just run.',
        'Keeping agent responses fast enough to feel interactive while running fully on-device was a constant latency-versus-quality tradeoff.',
      ],
    },
    {
      id: 'reflection',
      title: 'Reflections',
      paragraphs: [
        'Rust\'s ownership model is both the best and worst thing about modifying a complex codebase under time pressure - it caught real bugs, but also slowed iteration on the rendering path.',
        'ReAct agents were surprisingly effective for this kind of multi-tool reasoning: the structured think/act loop made the agent\'s behavior much more predictable than a raw prompt would have been.',
        'Designing the IPC contract before writing any feature code paid off repeatedly - it was the single biggest reason both halves of the project landed in 8 hours.',
      ],
      bullets: [
        'Next: package Learnimal for easy install on Ubuntu, Fedora, and Arch instead of source-only builds.',
        'Next: extend context beyond the visible grid to include shell history, environment variables, and the current working directory.',
        'Next: use the SQLite history to detect patterns in what a user struggles with and proactively surface relevant tips.',
        'Next: let users swap in different local models or optionally connect a cloud provider for higher-quality responses.',
        'Next: build a VS Code / Neovim plugin so users in editor-integrated terminals get the same overlay experience.',
      ],
    },
  ],
};

export default learnimalBlog;
