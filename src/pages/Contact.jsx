import { Box, Typography, Grid, IconButton, Paper, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DescriptionIcon from '@mui/icons-material/Description';
import Section from '../components/ui/Section';

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const resumeUrl = `${base}resume.pdf`;

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
                  <ContactCard
                    component="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <IconButton
                      component="span"
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

          <Box sx={{ mt: 6 }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              spacing={2}
              sx={{ mb: 3 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <DescriptionIcon sx={{ color: 'secondary.main', fontSize: '2rem' }} />
                <Typography variant="h3" sx={{ color: 'secondary.main' }}>
                  Resume
                </Typography>
              </Box>
              <Stack direction="row" spacing={1.5}>
                <Button
                  href={resumeUrl}
                  download
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  sx={{
                    color: 'rgb(10, 16, 22)',
                    background:
                      'linear-gradient(120deg, rgba(81, 255, 138, 1), rgba(74, 199, 255, 0.92))',
                    '&:hover': {
                      background:
                        'linear-gradient(120deg, rgba(74, 199, 255, 1), rgba(81, 255, 138, 0.95))',
                    },
                  }}
                >
                  Download
                </Button>
                <Button
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<OpenInNewIcon />}
                  sx={{
                    borderColor: 'rgba(74, 199, 255, 0.4)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      backgroundColor: 'rgba(74, 199, 255, 0.1)',
                    },
                  }}
                >
                  Open in new tab
                </Button>
              </Stack>
            </Stack>

            <Paper
              sx={{
                p: { xs: 1, md: 1.5 },
                background: 'linear-gradient(160deg, rgba(12, 18, 34, 0.86), rgba(8, 12, 24, 0.9))',
                border: '1px solid rgba(74, 199, 255, 0.2)',
                overflow: 'hidden',
              }}
            >
              <Box
                component="iframe"
                src={`${resumeUrl}#view=FitH`}
                title="Awni AlQuraini Resume"
                sx={{
                  width: '100%',
                  height: { xs: 520, sm: 720, md: 900 },
                  border: 'none',
                  borderRadius: 1,
                  backgroundColor: 'rgba(8, 12, 24, 0.9)',
                }}
              />
            </Paper>
          </Box>
        </MotionDiv>
      </Container>
    </Section>
  );
};

export default Contact; 