import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        color: 'text.primary',
        position: 'relative',
        overflowX: 'clip',
      }}
    >
      <Box className="app-shell-grid" />
      <Box
        aria-hidden
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 20% 18%, rgba(81, 255, 138, 0.14), transparent 34%), radial-gradient(circle at 75% 10%, rgba(74, 199, 255, 0.2), transparent 33%), radial-gradient(circle at 76% 84%, rgba(255, 94, 94, 0.11), transparent 36%)',
        }}
      />

      <Navbar />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 4, md: 6 },
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 