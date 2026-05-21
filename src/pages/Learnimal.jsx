import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import BlogArticle from '../components/blog/BlogArticle';
import learnimalBlog from '../content/blogs/learnimalBlog';

const MotionDiv = motion.div;

const Learnimal = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mt: 1 }}>
        <BlogArticle
          title={learnimalBlog.title}
          subtitle={learnimalBlog.subtitle}
          lastUpdated={learnimalBlog.lastUpdated}
          sections={learnimalBlog.sections}
        />
      </Box>
    </MotionDiv>
  );
};

export default Learnimal;
