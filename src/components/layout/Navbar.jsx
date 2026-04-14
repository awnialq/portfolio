import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MotionDiv = motion.div;

const StyledAppBar = styled(AppBar)(() => ({
  background: 'rgba(6, 8, 18, 0.82)',
  backdropFilter: 'blur(14px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(74, 199, 255, 0.2)',
}));

const NavButton = styled(Button)(() => ({
  color: 'rgb(231, 248, 238)',
  margin: '0 0.35rem',
  fontWeight: 600,
  border: '1px solid transparent',
  '&:hover': {
    borderColor: 'rgba(74, 199, 255, 0.3)',
    background: 'rgba(74, 199, 255, 0.12)',
  },
}));

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'NES Blog', path: '/nesemu' },
  { name: 'MealSense Blog', path: '/mealsense' },
  { name: 'Site Blog', path: '/portfolio-site' },
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
      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }}>
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Box
              component="span"
              sx={{
                fontSize: { xs: '0.95rem', md: '1rem' },
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'primary.main',
              }}
            >
              AWNI.ALQ // PORTFOLIO
            </Box>
          </Link>
        </MotionDiv>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <MotionDiv
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                <NavButton
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    backgroundColor:
                      location.pathname === item.path ? 'rgba(81, 255, 138, 0.12)' : 'transparent',
                    borderColor:
                      location.pathname === item.path ? 'rgba(81, 255, 138, 0.35)' : 'transparent',
                  }}
                >
                  {item.name}
                </NavButton>
              </Link>
            </MotionDiv>
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
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(8, 12, 24, 0.96)',
            backdropFilter: 'blur(14px)',
            borderBottom: '1px solid rgba(74, 199, 255, 0.22)',
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
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  justifyContent: 'flex-start',
                }}
              >
                {item.name}
              </NavButton>
            </Link>
          ))}
        </MotionDiv>
      )}
    </StyledAppBar>
  );
};

export default Navbar; 