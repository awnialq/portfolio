import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import BlogArticle from '../components/blog/BlogArticle';
import mealSenseBlog from '../content/blogs/mealSenseBlog';

const MotionDiv = motion.div;

const MealSense = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mt: 1 }}>
        <BlogArticle
          title={mealSenseBlog.title}
          subtitle={mealSenseBlog.subtitle}
          lastUpdated={mealSenseBlog.lastUpdated}
          sections={mealSenseBlog.sections}
        />
      </Box>
    </MotionDiv>
  );
};

export default MealSense;
