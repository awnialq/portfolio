const learnimalBlog = {
  title: 'Learnminal',
  subtitle: 'An agentic terminal you can learn with',
  lastUpdated: '2026-08-06',
  navLabel: 'Learnminal',
  tagline: 'AI terminal tutor',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: [
        'Learnminal is an Alacritty fork with a chat overlay built into the terminal itself: press Ctrl+Shift+E and a panel opens inside the window where you can ask about whatever is on screen. It answers using a model running locally through Ollama.',
        'It knows what you just ran. The overlay sees your last command, its output, and its exit code, and it quietly pulls the man page or --help text for that command as hidden context before answering, so explanations are grounded in your machine\'s actual documentation rather than the model\'s memory of it. When local docs are missing or out of date, the model can call a web search tool to fill the gap.',
        'Answers are tuned to a stated experience level - beginner, novice, professional, or expert - which changes how much the model explains rather than just how long the reply is. Slash commands in the overlay switch models (/model), set the level (/level), and show what context the AI can actually see (/history, /info).',
        'Everything stays on your machine: it talks straight to the Ollama daemon on localhost, with no account, no API key, and no cloud round trip. Command output is never written to disk - it goes to the local model from the live screen and nowhere else.',
        'The motivation has not changed since the first version: learning the terminal is hard, and the usual fix - alt-tab to a browser, wade through Stack Overflow - destroys flow. Learnminal keeps help one keystroke away inside the terminal you are already working in.',
        'It started as an 8-hour two-person hackathon project for SCU Hack-a-Stack (Sprint Track). It has since been rewritten: the Python backend that version depended on is gone, and the whole application is now a single Rust binary shipped as learnminal, with a macOS app bundle via make app.',
      ],
      bullets: [
        {
          label: 'Source on GitHub',
          href: 'https://github.com/awnialq/Learnminal',
        },
      ],
    },
    {
      id: 'stack',
      title: 'Technical Stack',
      bullets: [
        'Rust for the entire application: the forked Alacritty, grid extraction, overlay rendering, and the model client. No Python, no sidecar process.',
        'Ollama running locally, defaulting to gemma4:e4b (gemma4:e4b-mlx on macOS). Override with LEARNMINAL_OLLAMA_MODEL or persist a choice with /model.',
        'reqwest and serde_json for the Ollama HTTP client and its streaming NDJSON responses.',
        'SQLite via rusqlite for a journal of past answers, keyed by the program you asked about.',
        'zsh and bash shell hooks that record each command as JSON lines, giving the AI exact command text, exit codes, and working directories.',
        'DuckDuckGo\'s HTML endpoint as the single web_search tool the model can call. No API key.',
      ],
    },
    {
      id: 'implementation',
      title: 'Implementation Notes',
      paragraphs: [
        'The AI half lives in one Rust module, alacritty/src/learnminal/, split by concern: grid extraction, prompt assembly, the Ollama client, overlay rendering, man page lookup, web search, verification, and persistence. The previous architecture - a Rust front end POSTing to a FastAPI service that ran a ReAct agent - is gone entirely. The app now speaks to the Ollama daemon at 127.0.0.1:11434 directly over a blocking reqwest client, with OLLAMA_HOST as the override.',
        'Prompt assembly is a budgeting problem more than a wording problem. Each request combines the detected system environment, the last command with its output and exit code, relevant past journal notes, a reference excerpt, and the question - each with its own character budget so the total stays roughly constant. The screen grab keeps the first 40 and last 40 lines capped at 8,000 characters; the reference excerpt gets 2,000 characters, dropping to 1,200 when command history is already present because the two largely restate each other.',
        'Knowing what you actually ran turned out to be the crux of the project. The shell hook is the reliable path: Learnminal writes zsh and bash scripts to ~/.ai-cli-learning/shell/, and once sourced they append one JSON line per command - exact text, exit code, working directory - to a per-session file under a 0700 directory, rotated at 500 commands and swept after 24 hours. Without the hook it falls back to reconstruction, scanning up to 500 grid lines for prompt characters to rebuild up to 12 command blocks, which can only recover an exit code for the very last command.',
        'Grounding the answers is deliberate rather than incidental. A man page module shells out to man and --help under a 5-second timeout and extracts the NAME, SYNOPSIS, DESCRIPTION, and USAGE sections into a 4,000-character budget. When a command has no manual, a fallback layer tries package-manager metadata and an allowlist of official documentation sites. After the model replies, a verification pass checks every flag the answer mentioned against that reference text and appends a footer marking them verified or unverified - a deterministic string comparison, not the model grading itself.',
        'Web search is a real tool call rather than a preprocessing step. The model may invoke web_search, which scrapes DuckDuckGo\'s HTML-lite endpoint for the top five results inside a 3,000-character budget with an 8-second timeout; failures come back as a short error string so the model can still answer. The chat loop allows at most two non-streaming tool rounds, then streams the final answer token by token into the overlay, so tool use costs latency only when the model asks for it. Set LEARNMINAL_WEB_SEARCH=0 to remove the tool.',
        'Preferences persist in ~/.ai-cli-learning/settings.json - the active model and the experience level. The level is not cosmetic: it rewrites the instruction the model receives, from "new to the terminal; explain basics step by step" at beginner to "deep terminal knowledge; terse and high-signal" at expert.',
      ],
    },
    {
      id: 'challenges',
      title: 'Challenges',
      paragraphs: [
        'Forking Alacritty is still the hardest structural part. The codebase is large and its rendering pipeline was not built to be extended, so drawing an overlay without corrupting the underlying terminal grid took significant trial and error.',
        'Reliable last-command detection was the problem that shaped the architecture. A terminal grid is just characters with no semantic boundary between prompt, command, and output, and reconstruction from the screen can never recover exit codes for anything but the most recent command. Moving to a shell hook fixed it properly, at the cost of asking users to source a script.',
        'bash made that hook awkward. There is no preexec, so the script installs a DEBUG trap and prepends to PROMPT_COMMAND, then has to detect and cooperate with bash-preexec, starship, and oh-my-bash rather than fight them.',
        'Small local models are confidently wrong about command flags. That is what pushed verification from a nice-to-have to a required stage: checking claimed flags against the actual reference text catches the failure mode that prompting alone does not.',
        'Keeping responses fast enough to feel interactive while running fully on-device stays a latency-versus-quality tradeoff, which is why tool rounds are capped and the final turn always streams.',
      ],
    },
    {
      id: 'reflection',
      title: 'Reflections',
      paragraphs: [
        'The biggest improvement was a deletion. The hackathon build\'s clean IPC contract between the Rust and Python halves was the single reason both engineers could work in parallel and land it in 8 hours - and it was also the first thing worth removing once the deadline was gone. Collapsing to one Rust binary meant no virtualenv, no second daemon, and no version skew between halves.',
        'Verification beat prompt engineering. No amount of instruction stopped a small model from inventing flags; a deterministic check against the local man page did, and it made the failure visible to the user instead of silent.',
        'Treating experience level as a prompt input rather than a formatting toggle was a small change that made the tool feel much more like a tutor and much less like a documentation dump.',
        'Rust\'s ownership model remains both the best and worst thing about modifying a complex codebase - it catches real bugs in the rendering path and slows iteration on exactly that path.',
      ],
      bullets: [
        'Next: package Learnminal for easy install on Ubuntu, Fedora, and Arch instead of source-only builds.',
        'Next: use the stored journal to spot patterns in what a user repeatedly struggles with and surface tips proactively.',
        'Next: offer an optional cloud provider for users who want higher-quality answers than a local model can give.',
      ],
    },
  ],
};

export default learnimalBlog;
