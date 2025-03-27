import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
  '& .MuiTypography-root': {
    fontFamily: 'Inter, sans-serif',
  },
  '& .MuiTypography-h4': {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
  }
}));

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <Box sx={{ py: 4 }}>
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
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {skills.map((category, index) => (
            <Grid item xs={12} md={4} key={category.category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <SkillCard>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      mb: 3, 
                      color: '#64ffda',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {category.category}
                  </Typography>
                  {category.items.map((skill) => (
                    <Box key={skill.name} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
                          },
                        }}
                      />
                    </Box>
                  ))}
                </SkillCard>
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
            Additional Skills
          </Typography>
          <Grid container spacing={2}>
            {['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'Technical Writing'].map((skill) => (
              <Grid item xs={6} sm={3} key={skill}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      '& .MuiTypography-root': {
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                      }
                    }}
                  >
                    <Typography variant="body1">{skill}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Skills; 