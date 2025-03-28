import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  fontSize: '2.8rem',
  marginLeft: '0.5rem',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
  }
}));

const Home = () => {
  return (
    <Box>
      <HeroSection>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  mb: 2,
                  fontWeight: 400,
                  letterSpacing: '-0.03em',
                }}
              >
                Hi, I'm <GradientText>Awni AlQuraini</GradientText>
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 3, 
                  color: '#8892b0',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                Aspiring Software Engineer
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  color: '#8892b0',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                Studying Computer Science and Engineering @ Santa Clara University
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
                    color: '#0a192f',
                    fontWeight: 500,
                    textTransform: 'none',
                    padding: '10px 24px',
                    fontFamily: 'Inter, sans-serif',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #00bcd4 30%, #64ffda 90%)',
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  sx={{
                    borderColor: '#64ffda',
                    color: '#64ffda',
                    fontWeight: 500,
                    textTransform: 'none',
                    padding: '10px 24px',
                    fontFamily: 'Inter, sans-serif',
                    '&:hover': {
                      borderColor: '#00bcd4',
                      color: '#00bcd4',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center' }}
            >
              {/* Add your hero image or illustration here */}
            </motion.div>
          </Grid>
        </Grid>
      </HeroSection>

      <Box sx={{ py: 8 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4,
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                About Me
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 2, 
                  color: '#8892b0',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                I'm an aspiring software engineer with a passion for embedded applications and systems engineering. I love exploring how computers work from a fundamental level
                and how to use the granular tools provided to build larger and larger applications
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#8892b0',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                My skills are mainly in C/C++ development, arm32 Assembly, Java, and some frontend development.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              {/* Add your about section image or illustration here */}
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home; 