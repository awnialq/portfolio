import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Section from '../components/ui/Section';

const PROFICIENCY_STEPS = ['Beginner', 'Novice', 'Intermediate', 'Proficient', 'Advanced'];
const MAX_LEVEL = PROFICIENCY_STEPS.length;

const getLevelPercent = (level) => ((level - 1) / (MAX_LEVEL - 1)) * 100;

const getLevelLabel = (level) => PROFICIENCY_STEPS[level - 1] ?? 'Beginner';

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'linear-gradient(160deg, rgba(12, 18, 34, 0.86), rgba(8, 12, 24, 0.9))',
  border: '1px solid rgba(74, 199, 255, 0.2)',
  height: '100%',
  transition: 'border-color 0.25s ease, transform 0.25s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(81, 255, 138, 0.42)',
  }
}));

const skills = [
  {
    category: 'Language Knowledge',
    items: [
      { name: 'C / C++', level: 5 },
      { name: 'Java', level: 4 },
      { name: 'Python', level: 3 }, 
      { name: 'ARM32 Assembly', level: 3},
      { name: 'JavaScript / TypeScript', level: 2 },
    ],
  },
  {
    category: 'Engineering & Tooling',
    items: [
      { name: 'Git', level: 5 },
      { name: 'Linux Development Workflow', level: 4 },
      { name: 'Ghidra (Reverse Engineering)', level: 3 },
      { name: 'MatLAB', level: 3 },
      { name: 'llama.cpp', level: 2 },
    ],
  },
];

const MotionDiv = motion.div;

const Skills = () => {
  return (
    <Section
      eyebrow="Capabilities"
      title="Skills & Expertise"
      subtitle="Core technical strengths focused on low-level systems work, language proficiency, and practical software delivery."
    >
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4}>
          {skills.map((category, index) => (
            <Grid item xs={12} md={4} key={category.category}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <SkillCard>
                  <Typography variant="h3" sx={{ mb: 3, color: 'primary.main' }}>
                    {category.category}
                  </Typography>
                  {category.items.map((skill) => (
                    <Box key={skill.name} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1">
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {getLevelLabel(skill.level)}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={getLevelPercent(skill.level)}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(74, 199, 255, 0.16)',
                          '& .MuiLinearProgress-bar': {
                            background:
                              'linear-gradient(120deg, rgba(81, 255, 138, 0.95), rgba(74, 199, 255, 0.95))',
                          },
                        }}
                      />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.8 }}>
                        <Typography variant="caption" color="text.secondary">
                          Beginner
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Advanced
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </SkillCard>
              </MotionDiv>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h3" sx={{ mb: 3, color: 'secondary.main' }}>
            Additional Skills
          </Typography>
          <Grid container spacing={2}>
            {['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'Technical Writing', 'Performance Optimization', 'Low-Level Debugging'].map((skill) => (
              <Grid item xs={6} sm={3} key={skill}>
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      background: 'rgba(8, 12, 24, 0.8)',
                      border: '1px solid rgba(74, 199, 255, 0.2)',
                      cursor: 'pointer',
                      '& .MuiTypography-root': { fontWeight: 500 },
                    }}
                  >
                    <Typography variant="body1">{skill}</Typography>
                  </Paper>
                </MotionDiv>
              </Grid>
            ))}
          </Grid>
        </Box>
      </MotionDiv>
    </Section>
  );
};

export default Skills; 