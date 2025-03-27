import { Box, Typography, Grid, IconButton, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingTop: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  '& .MuiTypography-root': {
    fontFamily: 'Inter, sans-serif',
  },
  '& .MuiTypography-h4': {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
  }
}));

const socialLinks = [
  { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/awnialq' },
  { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/awni-alquraini' },
];

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: '2rem' }} />,
    text: 'awni.alquraini@gmail.com',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: '2rem' }} />,
    text: 'Santa Clara, CA',
  },
];

const Contact = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 6,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            Get In Touch
          </Typography>


          <Grid container spacing={4} justifyContent="center">
            {socialLinks.map((link, index) => (
              <Grid item xs={12} sm={6} md={3} key={link.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <ContactCard>
                    <IconButton
                      href={link.url}
                      target="_blank"
                      sx={{
                        color: '#64ffda',
                        fontSize: '2.5rem',
                        mb: 0.5,
                        '&:hover': {
                          color: '#00bcd4',
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        mb: 1, 
                        color: '#64ffda',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      {link.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#8892b0',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {link.url}
                    </Typography>
                  </ContactCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 3, 
                color: '#64ffda',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
              }}
            >
              Direct Contact
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <ContactCard>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ width: '2rem', display: 'flex', justifyContent: 'center' }}>
                          {info.icon}
                        </Box>
                        <Typography 
                          variant="body1"
                          sx={{ 
                            color: '#8892b0',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                          }}
                        >
                          {info.text}
                        </Typography>
                      </Box>
                    </ContactCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 