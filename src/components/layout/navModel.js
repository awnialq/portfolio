import { blogMeta, nesEmu, writing } from '../../content/blogs';

/**
 * The bar cycles R → G → B across its items, the way a display repeats
 * subpixels. Position picks the channel, so reordering or adding a
 * destination keeps the alternation correct on its own. An item may still
 * pin a channel explicitly, and that wins.
 */
const CYCLE = ['r', 'g', 'b'];

/**
 * Six top-level destinations instead of nine.
 *
 * NES Emulator is its own group because it is the one thing here that *runs* —
 * the emulator has two faces (play it / read about it), which is not the same
 * category as the write-ups.
 */
const destinations = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  {
    name: 'NES Emulator',
    children: [
      { name: 'Play the emulator', path: '/nes-demo', meta: 'C++ → WASM, in your browser' },
      { name: nesEmu.blog.navLabel, path: nesEmu.path, meta: blogMeta(nesEmu.blog) },
    ],
  },
  {
    name: 'Project Reflection',
    children: writing.map(({ path, blog }) => ({
      name: blog.navLabel,
      path,
      meta: blogMeta(blog),
    })),
  },
  { name: 'Contact', path: '/contact' },
];

export const navItems = destinations.map((item, index) => ({
  ...item,
  channel: item.channel ?? CYCLE[index % CYCLE.length],
}));

export const isGroupActive = (item, pathname) =>
  Boolean(item.children?.some((child) => child.path === pathname));
