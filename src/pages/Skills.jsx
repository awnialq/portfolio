import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Section from '../components/ui/Section';
import { bg, c, hairline, panelFill } from '../design/tokens';

const PROFICIENCY_STEPS = ['Beginner', 'Novice', 'Intermediate', 'Proficient', 'Advanced'];
const MAX_LEVEL = PROFICIENCY_STEPS.length;

const getLevelPercent = (level) => ((level - 1) / (MAX_LEVEL - 1)) * 100;

const getLevelLabel = (level) => PROFICIENCY_STEPS[level - 1] ?? 'Beginner';

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: panelFill,
  border: hairline('b'),
  height: '100%',
  transition: 'border-color 0.25s ease, transform 0.25s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: c('b', 'edge'),
  }
}));

const skills = [
  {
    category: 'Language Knowledge',
    items: [
      { name: 'C / C++', level: 5 },
      { name: 'Java', level: 4 },
      { name: 'Python', level: 4 }, 
      { name: 'ARM32 Assembly', level: 4},
      { name: 'JavaScript / TypeScript', level: 3 },
    ],
  },
  {
    category: 'Engineering & Tooling',
    items: [
      { name: 'Git', level: 5 },
      { name: 'Claude Code', level: 4 },
      { name: 'Linux Development Workflow', level: 4 },
      { name: 'Ghidra (Reverse Engineering)', level: 3 },
      { name: 'MatLAB', level: 3 },
      { name: 'llama.cpp', level: 3 },
    ],
  },
];

const MotionDiv = motion.div;

const Skills = () => {
  const sortedSkills = skills.map((category) => ({
    ...category,
    items: [...category.items].sort((a, b) => b.level - a.level),
  }));

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
          {sortedSkills.map((category, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={category.category}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <SkillCard>
                  <Typography variant="h3" sx={{ mb: 3 }}>
                    {category.category}
                  </Typography>
                  {category.items.map((skill) => (
                    <Box key={skill.name} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1">
                          {skill.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: c('b', 'solid'), opacity: 0.8 }}>
                          {getLevelLabel(skill.level)}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={getLevelPercent(skill.level)}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: c('b', 'hover'),
                          '& .MuiLinearProgress-bar': { backgroundColor: c('g', 'solid') },
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
          <Typography variant="h3" sx={{ mb: 3 }}>
            Additional Skills
          </Typography>
          <Grid container spacing={2}>
            {['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'Technical Writing', 'Performance Optimization', 'Low-Level Debugging'].map((skill) => (
              <Grid size={{ xs: 6, sm: 3 }} key={skill}>
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      background: bg('sunk', 0.8),
                      border: hairline('b'),
                      cursor: 'default',
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