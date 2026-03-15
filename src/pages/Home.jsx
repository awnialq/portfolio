import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';

const MotionDiv = motion.div;

const Home = () => {
  return (
    <Stack spacing={{ xs: 6, md: 8 }}>
      <Section>
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: { md: '72vh' } }}>
          <Grid item xs={12} md={6}>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="body2" color="secondary.main" sx={{ letterSpacing: '0.1em', mb: 1 }}>
                COMPUTER ENGINEERING STUDENT
              </Typography>

              <Typography variant="h1" sx={{ mb: 2 }}>
                Hi, I'm <span className="rgb-text">Awni AlQuraini</span>
              </Typography>

              <Typography variant="h3" color="text.secondary" sx={{ mb: 2.5 }}>
                Building low-level systems and practical software interfaces
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 620 }}>
                Studying Computer Science and Engineering @ Santa Clara University
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
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
                  Explore Projects
                </Button>

                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  sx={{
                    borderColor: 'rgba(74, 199, 255, 0.4)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      backgroundColor: 'rgba(74, 199, 255, 0.1)',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </MotionDiv>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center' }}
            >
              <Paper className="section-panel" sx={{ p: { xs: 2.5, md: 3.5 }, textAlign: 'left' }}>
                <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                  system.status
                </Typography>
                <Box component="pre" sx={{ m: 0, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.8 }}>
{`> major: Computer Science + Engineering
> focus: low-level + embedded systems
> next_goal: build robust tools end-to-end`}
                </Box>
              </Paper>
            </MotionDiv>
          </Grid>
        </Grid>
      </Section>

      <Section
        eyebrow="About"
        title="Engineer mindset, systems-first"
        subtitle="I enjoy working where abstraction meets hardware: memory, instruction flow, and performance-sensitive runtime behavior."
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                I'm an aspiring software engineer with a passion for embedded applications and systems engineering. I love exploring how computers work from a fundamental level
                and how to use the granular tools provided to build larger and larger applications.
              </Typography>

              <Typography variant="body1" color="text.secondary">
                My skills are mainly in C/C++ development, arm32 Assembly, Java, and some frontend development.
              </Typography>
            </MotionDiv>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <Paper className="section-panel" sx={{ p: 3, textAlign: 'left' }}>
                <Typography variant="h4" sx={{ color: 'secondary.main', mb: 2 }}>
                  What I optimize for
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: 'text.secondary' }}>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    Clear architecture and modular boundaries
                  </Typography>
                  <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    Debuggable code paths over magic abstractions
                  </Typography>
                  <Typography component="li" variant="body1">
                    Consistent developer experience across projects
                  </Typography>
                </Box>
              </Paper>
            </MotionDiv>
          </Grid>
        </Grid>
      </Section>
    </Stack>
  );
};

export default Home; 