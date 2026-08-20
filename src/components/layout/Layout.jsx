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
      {/* Flat ground plus one even structural texture. The stacked radial
          washes that used to sit here pooled color behind the copy. */}
      <Box className="app-shell-grid" />

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
