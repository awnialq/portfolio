import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogArticle from '../components/blog/BlogArticle';
import nesEmuBlog from '../content/blogs/nesEmuBlog';

const MotionDiv = motion.div;

const NESEmu = () => {
  return (
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mt: 1 }}>
          <Box sx={{ mb: 3 }}>
            <Button
              component={Link}
              to="/nes-demo"
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
              Play the Emulator
            </Button>
          </Box>
          <BlogArticle
            title={nesEmuBlog.title}
            subtitle={nesEmuBlog.subtitle}
            lastUpdated={nesEmuBlog.lastUpdated}
            sections={nesEmuBlog.sections}
          />
        </Box>
      </MotionDiv>
  );
};

export default NESEmu;