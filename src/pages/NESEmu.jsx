import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogArticle from '../components/blog/BlogArticle';
import nesEmuBlog from '../content/blogs/nesEmuBlog';
import { actionFill, shade, text } from '../design/tokens';

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
                color: text('inverse'),
                background: actionFill('r'),
                '&:hover': { background: shade('r', 0.88) },
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