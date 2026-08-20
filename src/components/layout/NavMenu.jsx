import { useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { bg, c, hairline, text } from '../../design/tokens';
import { fonts } from '../../theme';
import { isGroupActive } from './navModel';

/**
 * One grouped destination in the top bar. Opens on click rather than hover —
 * hover menus are unreachable by keyboard and unusable by touch. MUI's Menu
 * supplies arrow-key traversal, Escape, and focus return to the trigger.
 */
const NavMenu = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const menuId = useId();
  const open = Boolean(anchorEl);
  const active = isGroupActive(item, location.pathname);
  const channel = item.channel ?? 'b';

  // A completed navigation should leave the menu behind.
  useEffect(() => setAnchorEl(null), [location.pathname]);

  return (
    <Box>
      <Button
        id={`${menuId}-trigger`}
        aria-haspopup="menu"
        aria-expanded={open ? 'true' : undefined}
        aria-controls={open ? menuId : undefined}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              transition: 'transform 0.2s ease',
              transform: open ? 'rotate(180deg)' : 'none',
            }}
          />
        }
        sx={{
          fontFamily: fonts.data,
          fontWeight: 600,
          mx: '0.2rem',
          color: active ? c(channel, 'solid') : text('high'),
          border: '1px solid',
          borderColor: active || open ? c(channel, 'edge') : 'transparent',
          backgroundColor: active ? c(channel, 'active') : 'transparent',
          transition: 'background-color 0.18s ease, border-color 0.18s ease',
          '&:hover': {
            borderColor: c(channel, 'edge'),
            backgroundColor: c(channel, active ? 'active' : 'hover'),
          },
        }}
      >
        {item.name}
      </Button>

      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ 'aria-labelledby': `${menuId}-trigger`, dense: false }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 268,
              backgroundColor: bg('panel', 0.98),
              backdropFilter: 'blur(14px)',
              border: hairline(channel),
              borderRadius: '12px',
            },
          },
        }}
      >
        {item.children.map((child) => {
          const current = location.pathname === child.path;
          return (
            <MenuItem
              key={child.path}
              component={Link}
              to={child.path}
              selected={current}
              onClick={() => setAnchorEl(null)}
              sx={{
                display: 'block',
                py: 1.15,
                borderLeft: '2px solid',
                borderLeftColor: current ? c(channel, 'solid') : 'transparent',
                '&.Mui-selected, &.Mui-selected:hover': {
                  backgroundColor: c(channel, 'hover'),
                },
                '&:hover': { backgroundColor: c(channel, 'wash') },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  lineHeight: 1.3,
                  color: current ? c(channel, 'solid') : text('high'),
                }}
              >
                {child.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: 'block', mt: 0.3, color: c('b', 'solid'), opacity: 0.72 }}
              >
                {child.meta}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default NavMenu;
