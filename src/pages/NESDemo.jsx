import { useEffect, useRef } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';

const MotionDiv = motion.div;

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const NESDemo = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    let observer;

    const fit = () => {
      try {
        const doc = iframe.contentDocument;
        if (doc?.documentElement) {
          iframe.style.height = `${doc.documentElement.scrollHeight}px`;
        }
      } catch {
        // cross-origin guard; same-origin in practice so this won't trigger
      }
    };

    const handleLoad = () => {
      fit();
      // Refit as fonts/wasm/canvas settle.
      setTimeout(fit, 300);
      setTimeout(fit, 1200);
      try {
        const doc = iframe.contentDocument;
        if (doc?.body && 'ResizeObserver' in window) {
          observer = new ResizeObserver(fit);
          observer.observe(doc.body);
        }
      } catch {
        // ignore
      }
    };

    iframe.addEventListener('load', handleLoad);
    window.addEventListener('resize', fit);
    fit();

    return () => {
      iframe.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', fit);
      observer?.disconnect();
    };
  }, []);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Section
        eyebrow="Playable Demo"
        title="NES Emulator — Play in Your Browser"
        subtitle="Upload your own .nes ROM and play it right here. The emulator is my C++ NES core compiled to WebAssembly. Click the screen first, then use the keyboard to play."
      >
        <Stack spacing={3}>
          <Paper
            sx={{
              p: { xs: 1.5, md: 2.5 },
              border: '1px solid rgba(81, 255, 138, 0.35)',
              background:
                'linear-gradient(140deg, rgba(81, 255, 138, 0.08), rgba(74, 199, 255, 0.08) 48%, rgba(255, 94, 94, 0.08))',
            }}
          >
            <Box
              component="iframe"
              ref={iframeRef}
              src={`${base}nes/index.html`}
              title="NES Emulator"
              scrolling="no"
              sx={{
                width: '100%',
                border: 'none',
                display: 'block',
                overflow: 'hidden',
              }}
            />
          </Paper>

          <Paper
            sx={{
              p: { xs: 2.25, md: 3 },
              backgroundColor: 'rgba(12, 18, 34, 0.8)',
              border: '1px solid rgba(74, 199, 255, 0.24)',
            }}
          >
            <Typography variant="h3" sx={{ mb: 1.5, color: 'primary.main' }}>
              Notes
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Supported mappers: 0 (NROM) and 3 (CNROM). Audio is not yet implemented.
              If a ROM fails to load, it likely uses an unsupported mapper.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/nesemu"
                variant="outlined"
                sx={{
                  borderColor: 'rgba(74, 199, 255, 0.4)',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    backgroundColor: 'rgba(74, 199, 255, 0.1)',
                  },
                }}
              >
                Read the Blog
              </Button>
              <Button
                href="https://github.com/awnialq/NES-Emulator"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  borderColor: 'rgba(74, 199, 255, 0.4)',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    backgroundColor: 'rgba(74, 199, 255, 0.1)',
                  },
                }}
              >
                View on GitHub
              </Button>
            </Box>
          </Paper>
        </Stack>
      </Section>
    </MotionDiv>
  );
};

export default NESDemo;
