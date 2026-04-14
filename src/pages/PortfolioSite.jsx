import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import BlogArticle from '../components/blog/BlogArticle';
import portfolioSiteBlog from '../content/blogs/portfolioSiteBlog';

const MotionDiv = motion.div;

const PortfolioSite = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mt: 1 }}>
        <BlogArticle
          title={portfolioSiteBlog.title}
          subtitle={portfolioSiteBlog.subtitle}
          lastUpdated={portfolioSiteBlog.lastUpdated}
          sections={portfolioSiteBlog.sections}
        />
      </Box>
    </MotionDiv>
  );
};

export default PortfolioSite;
