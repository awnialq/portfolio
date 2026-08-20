/**
 * Subpixel — the one place color is defined.
 *
 * Every channel owns exactly one job, and a surface uses exactly one channel:
 *
 *   R  live / running      the emulator, the Play CTA, "in progress"
 *   G  action / affirmative links, primary CTAs, active nav, "complete"
 *   B  structure / meta     borders, rules, eyebrows, captions, timestamps
 *
 * Nothing mixes all three except the convergence wordmark on the home page.
 * Translucency snaps to the alpha ladder below — no free-floating alphas.
 */

export const ch = {
  r: '255, 94, 94',
  g: '81, 255, 138',
  b: '74, 199, 255',
};

export const ground = {
  base: '6, 8, 18',
  panel: '12, 18, 34',
  sunk: '3, 5, 12',
};

export const ink = {
  high: '231, 248, 238',
  mid: '161, 177, 201',
  low: '108, 124, 148',
  inverse: '6, 8, 18',
};

export const a = {
  wash: 0.08,
  hover: 0.14,
  active: 0.2,
  hairline: 0.22,
  edge: 0.38,
  solid: 1,
};

/** A channel at one step of the ladder: c('b', 'hairline') */
export const c = (channel, step = 'solid') => `rgba(${ch[channel]}, ${a[step]})`;

/** A ground plane, optionally translucent: bg('panel', 0.86) */
export const bg = (name, alpha = 1) =>
  (alpha === 1 ? `rgb(${ground[name]})` : `rgba(${ground[name]}, ${alpha})`);

/** Type color: text('mid') */
export const text = (name) => `rgb(${ink[name]})`;

const scale = (triplet, k) =>
  triplet
    .split(',')
    .map((n) => Math.min(255, Math.round(Number(n) * k)))
    .join(', ');

/** A darker stop of the same channel, so fills stay single-channel. */
export const shade = (channel, k = 0.78) => `rgb(${scale(ch[channel], k)})`;

/* ---- recipes: the four things that used to be pasted by hand ---- */

export const hairline = (channel = 'b') => `1px solid ${c(channel, 'hairline')}`;

export const edgeRing = (channel = 'b') => `1px solid ${c(channel, 'edge')}`;

export const panelFill = `linear-gradient(160deg, ${bg('panel', 0.86)}, ${bg('base', 0.92)})`;

/** Solid action fill, one channel only. */
export const actionFill = (channel = 'g') =>
  `linear-gradient(120deg, rgb(${ch[channel]}), ${shade(channel)})`;

export const focusRing = `0 0 0 2px ${c('g', 'edge')}`;

/** Depth is neutral black, never a tinted glow. */
export const depth = `0 18px 40px rgba(0, 0, 0, ${a.edge})`;

/** CSS custom properties, handed to CssBaseline so index.css needs no copy. */
export const cssVars = {
  '--ch-r': ch.r,
  '--ch-g': ch.g,
  '--ch-b': ch.b,
  '--ground-base': ground.base,
  '--ground-panel': ground.panel,
  '--ground-sunk': ground.sunk,
  '--ink-high': ink.high,
  '--ink-mid': ink.mid,
  '--ink-low': ink.low,
};
