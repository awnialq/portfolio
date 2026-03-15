import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import BlogArticle from '../components/blog/BlogArticle';
import Section from '../components/ui/Section';
import nesEmuBlog from '../content/blogs/nesEmuBlog';

const MotionDiv = motion.div;

const NESEmu = () => {
  return (
    <Section
      eyebrow="Blog"
      title="Engineering Log"
      subtitle="Structured notes that are now data-driven, so adding future entries only requires editing a content file."
    >
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
    </Section>
  );
};

export default NESEmu;