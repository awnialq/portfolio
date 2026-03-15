import { Box, Typography, Grid, IconButton, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Section from '../components/ui/Section';

const MotionDiv = motion.div;

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingTop: theme.spacing(2),
  background: 'linear-gradient(160deg, rgba(12, 18, 34, 0.86), rgba(8, 12, 24, 0.9))',
  border: '1px solid rgba(74, 199, 255, 0.2)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: 'rgba(81, 255, 138, 0.42)',
  },
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
    <Section
      eyebrow="Reach Out"
      title="Get In Touch"
      subtitle="Open to internship opportunities, collaboration, or technical chats around systems and software engineering."
    >
      <Container maxWidth="lg">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {socialLinks.map((link, index) => (
              <Grid item xs={12} sm={6} md={3} key={link.name}>
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <ContactCard>
                    <IconButton
                      href={link.url}
                      target="_blank"
                      sx={{
                        color: 'primary.main',
                        fontSize: '2.5rem',
                        mb: 0.5,
                        '&:hover': {
                          color: 'secondary.main',
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                    <Typography variant="h3" sx={{ mb: 1, color: 'primary.main' }}>
                      {link.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {link.url}
                    </Typography>
                  </ContactCard>
                </MotionDiv>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h3" sx={{ mb: 3, color: 'secondary.main' }}>
              Direct Contact
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <MotionDiv
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
                            color: 'text.secondary',
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                          }}
                        >
                          {info.text}
                        </Typography>
                      </Box>
                    </ContactCard>
                  </MotionDiv>
                </Grid>
              ))}
            </Grid>
          </Box>
        </MotionDiv>
      </Container>
    </Section>
  );
};

export default Contact; 