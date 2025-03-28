import React from 'react';
import { AppBar, Container, Toolbar, Box, Button } from '@mui/material';

const Navbar = () => {
  const pages = ['Home', 'About', 'Projects', 'Contact'];

  const handleCloseNavMenu = () => {
    // Handle menu close
  };

  return (
    <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    '&:hover': {
                      color: '#64ffda',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 