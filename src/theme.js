import { createTheme } from '@mui/material/styles';
import { bg, c, ch, cssVars, depth, focusRing, hairline, text } from './design/tokens';

const display = '"Archivo", "Helvetica Neue", Arial, sans-serif';
const body = '"Instrument Sans", "Segoe UI", system-ui, sans-serif';
const data = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace';

export const fonts = { display, body, data };

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: `rgb(${ch.g})` },
    secondary: { main: `rgb(${ch.b})` },
    error: { main: `rgb(${ch.r})` },
    background: { default: bg('base'), paper: bg('panel') },
    text: { primary: text('high'), secondary: text('mid') },
    divider: c('b', 'hairline'),
  },
  typography: {
    fontFamily: body,
    h1: {
      fontFamily: display,
      fontWeight: 700,
      fontStretch: '125%',
      letterSpacing: '-0.02em',
      lineHeight: 1.08,
      fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
    },
    h2: {
      fontFamily: display,
      fontWeight: 700,
      fontStretch: '125%',
      letterSpacing: '-0.015em',
      lineHeight: 1.14,
      fontSize: 'clamp(1.7rem, 3vw, 2.6rem)',
    },
    h3: {
      fontFamily: display,
      fontWeight: 600,
      fontStretch: '112%',
      letterSpacing: '-0.01em',
      fontSize: 'clamp(1.3rem, 2.2vw, 2rem)',
    },
    h4: {
      fontFamily: data,
      fontWeight: 600,
      letterSpacing: '0.02em',
      fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
    },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
    caption: { fontFamily: data, letterSpacing: '0.04em' },
    button: {
      fontFamily: data,
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': cssVars,
        '*': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
        body: {
          margin: 0,
          minHeight: '100vh',
          // Flat ground. No radial washes — text sits on an even field.
          background: bg('base'),
          color: text('high'),
          fontFamily: body,
          WebkitFontSmoothing: 'antialiased',
        },
        '::selection': {
          backgroundColor: c('g', 'edge'),
          color: text('inverse'),
        },
        ':focus-visible': {
          outline: 'none',
          boxShadow: focusRing,
          borderRadius: '4px',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
        '::-webkit-scrollbar': { width: '10px', height: '10px' },
        '::-webkit-scrollbar-track': { background: bg('sunk') },
        '::-webkit-scrollbar-thumb': {
          borderRadius: '999px',
          background: c('b', 'edge'),
        },
        '::-webkit-scrollbar-thumb:hover': { background: c('b', 'solid') },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: hairline('b'),
          boxShadow: depth,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, paddingInline: '1rem' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: data, fontWeight: 600, borderRadius: 999 },
      },
    },
  },
});

export default theme;
