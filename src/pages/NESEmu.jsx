import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import BlogArticle from '../components/blog/BlogArticle';
import Section from '../components/ui/Section';
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