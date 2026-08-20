import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, IconButton, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { bg, c, hairline, text } from '../../design/tokens';
import { fonts } from '../../theme';
import NavMenu from './NavMenu';
import { navItems } from './navModel';

const MotionDiv = motion.div;

const TOOLBAR = { xs: 64, md: 72 };

const StyledAppBar = styled(AppBar)(() => ({
  background: bg('base', 0.86),
  backdropFilter: 'blur(14px)',
  boxShadow: 'none',
  borderBottom: hairline('b'),
}));

const NavButton = styled(Button)(() => ({
  fontFamily: fonts.data,
  color: text('high'),
  margin: '0 0.2rem',
  fontWeight: 600,
  border: '1px solid transparent',
  transition: 'color 0.18s ease, background-color 0.18s ease, border-color 0.18s ease',
}));

/** Static subpixel tick: the three channels, side by side, at rest. */
const SubpixelTick = () => (
  <Box aria-hidden="true" sx={{ display: 'flex', gap: '2px', mr: 1.15 }}>
    {['r', 'g', 'b'].map((channel) => (
      <Box key={channel} sx={{ width: '2px', height: 15, backgroundColor: c(channel, 'solid') }} />
    ))}
  </Box>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location.pathname]);

  // Labels read white at rest; the channel only appears on the selected item.
  const leafSx = (path, channel) => {
    const current = location.pathname === path;
    return {
      color: current ? c(channel, 'solid') : text('high'),
      backgroundColor: current ? c(channel, 'active') : 'transparent',
      borderColor: current ? c(channel, 'edge') : 'transparent',
      '&:hover': {
        backgroundColor: c(channel, current ? 'active' : 'hover'),
        borderColor: c(channel, 'edge'),
      },
    };
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ minHeight: TOOLBAR }}>
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            component={Link}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <SubpixelTick />
            <Box
              component="span"
              sx={{
                fontFamily: fonts.data,
                fontSize: { xs: '0.95rem', md: '1rem' },
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: text('high'),
              }}
            >
              AWNI.ALQ
            </Box>
          </Box>
        </MotionDiv>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {navItems.map((item) =>
            item.children ? (
              <NavMenu key={item.name} item={item} />
            ) : (
              <Link key={item.name} to={item.path} style={{ textDecoration: 'none' }}>
                <NavButton sx={leafSx(item.path, item.channel)}>{item.name}</NavButton>
              </Link>
            )
          )}
        </Box>

        <IconButton
          color="inherit"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          edge="start"
          onClick={() => setMobileOpen((open) => !open)}
          sx={{ display: { md: 'none' } }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile: every destination stays one tap away, grouped by label. */}
      {mobileOpen && (
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: `${TOOLBAR.xs}px`,
            left: 0,
            right: 0,
            maxHeight: `calc(100vh - ${TOOLBAR.xs}px)`,
            overflowY: 'auto',
            background: bg('panel', 0.97),
            backdropFilter: 'blur(14px)',
            borderBottom: hairline('b'),
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}
        >
          {navItems.map((item) =>
            item.children ? (
              <Box key={item.name} sx={{ mt: 1.25 }}>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    px: 1,
                    pb: 0.75,
                    color: text('high'),
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    borderBottom: `1px solid ${c(item.channel, 'edge')}`,
                  }}
                >
                  {item.name}
                </Typography>
                {item.children.map((child) => (
                  <Link key={child.path} to={child.path} style={{ textDecoration: 'none' }}>
                    <NavButton
                      fullWidth
                      sx={{ ...leafSx(child.path, item.channel), justifyContent: 'flex-start' }}
                    >
                      {child.name}
                    </NavButton>
                  </Link>
                ))}
              </Box>
            ) : (
              <Link key={item.name} to={item.path} style={{ textDecoration: 'none' }}>
                <NavButton
                  fullWidth
                  sx={{ ...leafSx(item.path, item.channel), justifyContent: 'flex-start' }}
                >
                  {item.name}
                </NavButton>
              </Link>
            )
          )}
        </MotionDiv>
      )}
    </StyledAppBar>
  );
};

export default Navbar;
