import { createTheme } from '@mui/material/styles';

const primaryRgb = '81, 255, 138';
const secondaryRgb = '74, 199, 255';
const accentRgb = '255, 94, 94';
const bgRgb = '6, 8, 18';
const panelRgb = '12, 18, 34';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: `rgb(${primaryRgb})`,
    },
    secondary: {
      main: `rgb(${secondaryRgb})`,
    },
    error: {
      main: `rgb(${accentRgb})`,
    },
    background: {
      default: `rgb(${bgRgb})`,
      paper: `rgb(${panelRgb})`,
    },
    text: {
      primary: 'rgb(231, 248, 238)',
      secondary: 'rgb(161, 177, 201)',
    },
    divider: 'rgba(74, 199, 255, 0.24)',
  },
  typography: {
    fontFamily: '"JetBrains Mono", monospace',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
      fontSize: 'clamp(1.7rem, 3vw, 2.6rem)',
    },
    h3: {
      fontWeight: 600,
      fontSize: 'clamp(1.3rem, 2.2vw, 2rem)',
    },
    h4: {
      fontWeight: 600,
      fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"JetBrains Mono", monospace',
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          margin: 0,
          minHeight: '100vh',
          background:
            'radial-gradient(circle at 14% 16%, rgba(74, 199, 255, 0.16), transparent 42%), radial-gradient(circle at 82% 14%, rgba(81, 255, 138, 0.18), transparent 40%), radial-gradient(circle at 52% 86%, rgba(255, 94, 94, 0.14), transparent 40%), rgb(6, 8, 18)',
          color: 'rgb(231, 248, 238)',
        },
        '::selection': {
          backgroundColor: 'rgba(81, 255, 138, 0.35)',
          color: 'rgb(3, 7, 14)',
        },
        '::-webkit-scrollbar': {
          width: '10px',
          height: '10px',
        },
        '::-webkit-scrollbar-track': {
          background: 'rgba(10, 17, 32, 0.85)',
        },
        '::-webkit-scrollbar-thumb': {
          borderRadius: '999px',
          background: 'linear-gradient(180deg, rgba(81, 255, 138, 0.8), rgba(74, 199, 255, 0.8))',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(74, 199, 255, 0.22)',
          boxShadow: '0 18px 40px rgba(0, 0, 0, 0.34)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: '1rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 999,
        },
      },
    },
  },
});

export default theme;
