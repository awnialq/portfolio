import { useState } from 'react';
import { Box, Typography, Grid, Chip, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import { c, hairline, panelFill, text } from '../design/tokens';

const ProjectCard = styled(Card)(() => ({
  width: '100%',
  minHeight: 0,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: panelFill,
  border: hairline('b'),
  transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: c('b', 'edge'),
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
    demo: '/nesemu',
    playDemo: '/nes-demo',
  },
  {
    id: 2,
    title: 'MealSense',
    description: 'A meal automation service for college students. Worked on Frontend.',
    image: `${base}mealSense.jpg`,
    technologies: ['React Native', 'FastAPI', 'TypeScript','Firebase','Python'],
    link: 'https://github.com/Victor-JB/Hack4Hum2025',
    demo: '/mealsense',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'This site: projects, skills, and dev logs—React, MUI, and GitHub Pages.',
    image: `${base}portfolio-site.jpg`,
    technologies: ['React JS', 'Vite', 'Material UI'],
    link: 'https://github.com/awnialq/portfolio',
    demo: '/portfolio-site',
  },
  {
    id: 4,
    title: 'Learnminal',
    description:
      'An Agentic Terminal designed for you to learn the command line.',
    image: `${base}learnimal.jpg`,
    technologies: ['Rust', 'Local AI', 'Ollama', 'SQLite'],
    link: 'https://github.com/awnialq/Learnminal',
    demo: '/learnimal',
  },
];

const technologies = [
  'All',
  'React JS',
  'React Native',
  'FastAPI',
  'TypeScript',
  'Firebase',
  'Python',
  'C++',
  'Assembly',
  'Vite',
  'Material UI',
  'Rust',
  'Ollama',
  'SQLite',
  'Local AI'
];

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
                background: selectedTech === tech ? c('g', 'solid') : c('b', 'hover'),
                color: selectedTech === tech ? text('inverse') : 'text.primary',
                border: '1px solid',
                borderColor: selectedTech === tech ? c('g', 'edge') : c('b', 'hairline'),
                '&:hover': {
                  background: selectedTech === tech ? c('g', 'solid') : c('b', 'active'),
                },
              }}
            />
          ))}
        </Box>

        <Grid container spacing={4}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Grid
                key={project.id}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}
              >
                <MotionDiv
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    minWidth: 0,
                    width: '100%',
                  }}
                >
                  <ProjectCard sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{ height: 200, objectFit: 'cover', flexShrink: 0 }}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        pt: 2,
                      }}
                    >
                      <Typography gutterBottom variant="h3" component="h2" sx={{ mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          flexGrow: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          minHeight: '4.6em',
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1,
                          flexWrap: 'wrap',
                          minHeight: 64,
                          alignContent: 'flex-start',
                        }}
                      >
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: c('b', 'wash'),
                              color: c('b', 'solid'),
                              border: hairline('b'),
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ flexShrink: 0, mt: 'auto' }}>
                      <Button
                        size="small"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: c('g', 'solid') }}
                      >
                        GitHub
                      </Button>
                      <Button
                        size="small"
                        component={Link}
                        to={project.demo}
                        sx={{ color: c('g', 'solid') }}
                      >
                        Blog
                      </Button>
                      {project.playDemo ? (
                        <Button
                          size="small"
                          component={Link}
                          to={project.playDemo}
                          sx={{ color: c('r', 'solid') }}
                        >
                          Play Demo
                        </Button>
                      ) : null}
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