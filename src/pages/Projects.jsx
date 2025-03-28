import { useState } from 'react';
import { Box, Typography, Grid, Chip, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  '& .MuiTypography-root': {
    fontFamily: 'Inter, sans-serif',
  },
  '& .MuiTypography-h5': {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
  }
}));

const projects = [
  {
    id: 1,
    title: 'NES Emulator',
    description: 'My first attempt at creating an emulator of a console.',
    image: '/src/assets/nesemu.jpg',
    technologies: ['C++', 'Assembly'],
    link: 'https://github.com/awnialq/NES-Emulator',
    demo: 'NESemu',
  },
  {
    id: 2,
    title: 'MealSense',
    description: 'A meal automation service for college students. Worked on Frontend.',
    image: '/src/assets/mealSense.jpg',
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
    <Box sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 4,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
          }}
        >
          My Projects
        </Typography>
        <Box sx={{ mb: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              onClick={() => setSelectedTech(tech)}
              sx={{
                background: selectedTech === tech ? '#64ffda' : 'rgba(255, 255, 255, 0.1)',
                color: selectedTech === tech ? '#0a192f' : '#fff',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                '&:hover': {
                  background: selectedTech === tech ? '#00bcd4' : 'rgba(255, 255, 255, 0.2)',
                },
              }}
            />
          ))}
        </Box>

        <Grid container spacing={4}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <motion.div
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
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, color: '#CED4F3'}}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(100, 255, 218, 0.1)',
                              color: '#64ffda',
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
                          color: '#64ffda',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                        }}
                      >
                        GitHub
                      </Button>
                      <Button
                        size="small"
                        href={project.demo}
                        target="_blank"
                        sx={{ 
                          color: '#64ffda',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                        }}
                      >
                        Blog/Demo
                      </Button>
                    </CardActions>
                  </ProjectCard>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects; 