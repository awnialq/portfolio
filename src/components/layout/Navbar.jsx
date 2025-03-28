import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  margin: '0 8px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Box component="span" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              Awni AlQuraini
            </Box>
          </Link>
        </motion.div>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                <NavButton
                  sx={{
                    color: location.pathname === item.path ? '#64ffda' : '#fff',
                  }}
                >
                  {item.name}
                </NavButton>
              </Link>
            </motion.div>
          ))}
        </Box>

        {/* Mobile Navigation Toggle */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Navigation Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(18, 18, 18, 0.95)',
            backdropFilter: 'blur(10px)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{ textDecoration: 'none' }}
              onClick={() => setMobileOpen(false)}
            >
              <NavButton
                fullWidth
                sx={{
                  color: location.pathname === item.path ? '#64ffda' : '#fff',
                }}
              >
                {item.name}
              </NavButton>
            </Link>
          ))}
        </motion.div>
      )}
    </StyledAppBar>
  );
};

export default Navbar; 