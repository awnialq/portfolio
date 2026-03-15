import { useState } from 'react';
import { Box, Typography, Grid, Chip, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import Section from '../components/ui/Section';

const ProjectCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(155deg, rgba(12, 18, 34, 0.86), rgba(8, 12, 24, 0.9))',
  border: '1px solid rgba(74, 199, 255, 0.2)',
  transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: 'rgba(81, 255, 138, 0.4)',
  },
}));

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const MotionDiv = motion.div;

const projects = [
  {
    id: 1,
    title: 'NES Emulator',
    description: 'My first attempt at creating an emulator of a console.',
    image: `${base}nesemu.jpg`,
    technologies: ['C++', 'Assembly'],
    link: 'https://github.com/awnialq/NES-Emulator',
    demo: './#/nesemu',
  },
  {
    id: 2,
    title: 'MealSense',
    description: 'A meal automation service for college students. Worked on Frontend.',
    image: `${base}mealSense.jpg`,
    technologies: ['React Native', 'FastAPI', 'TypeScript','Firebase','Python'],
    link: 'https://github.com/Victor-JB/Hack4Hum2025',
    demo: 'https://devpost.com/software/mealsense-smart-nutrition-for-college-students',
  }
];

const technologies = ['All', 'React JS', 'React Native', 'FastAPI', 'TypeScript', 'Firebase', 'Python','C++','Assembly'];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All');

  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(selectedTech));

  return (
    <Section
      eyebrow="Builds"
      title="Projects"
      subtitle="A few things I have built while learning low-level and full-stack systems."
    >
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              onClick={() => setSelectedTech(tech)}
              sx={{
                background:
                  selectedTech === tech ? 'rgba(81, 255, 138, 0.88)' : 'rgba(74, 199, 255, 0.1)',
                color: selectedTech === tech ? 'rgb(7, 15, 20)' : 'text.primary',
                border: '1px solid',
                borderColor:
                  selectedTech === tech ? 'rgba(81, 255, 138, 0.5)' : 'rgba(74, 199, 255, 0.25)',
                '&:hover': {
                  background:
                    selectedTech === tech ? 'rgba(74, 199, 255, 0.92)' : 'rgba(74, 199, 255, 0.2)',
                },
              }}
            />
          ))}
        </Box>

        <Grid container spacing={4}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <MotionDiv
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h3" component="h2" sx={{ mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(81, 255, 138, 0.12)',
                              color: 'primary.main',
                              border: '1px solid rgba(81, 255, 138, 0.22)',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        href={project.link}
                        target="_blank"
                        sx={{ 
                          color: 'secondary.main',
                        }}
                      >
                        GitHub
                      </Button>
                      <Button
                        size="small"
                        href={project.demo}
                        target="_blank"
                        sx={{ 
                          color: 'secondary.main',
                        }}
                      >
                        Blog/Demo
                      </Button>
                    </CardActions>
                  </ProjectCard>
                </MotionDiv>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </MotionDiv>
    </Section>
  );
};

export default Projects; 