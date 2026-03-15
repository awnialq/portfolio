import { Box, Paper, Stack, Typography } from '@mui/material';

const BlogSection = ({ section }) => {
  return (
    <Paper
      sx={{
        p: { xs: 2.25, md: 3.25 },
        backgroundColor: 'rgba(12, 18, 34, 0.8)',
        border: '1px solid rgba(74, 199, 255, 0.24)',
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
        {section.title}
      </Typography>

      {section.paragraphs?.map((text) => (
        <Typography key={text.slice(0, 18)} variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {text}
        </Typography>
      ))}

      {section.bullets?.length ? (
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          {section.bullets.map((point) => (
            <Typography
              key={point.slice(0, 18)}
              component="li"
              variant="body1"
              color="text.secondary"
              sx={{ mb: 1.25 }}
            >
              {point}
            </Typography>
          ))}
        </Box>
      ) : null}
    </Paper>
  );
};

const BlogArticle = ({ title, subtitle, lastUpdated, sections }) => {
  return (
    <Stack spacing={3.25}>
      <Paper
        sx={{
          p: { xs: 2.25, md: 3.25 },
          border: '1px solid rgba(81, 255, 138, 0.35)',
          background:
            'linear-gradient(140deg, rgba(81, 255, 138, 0.08), rgba(74, 199, 255, 0.08) 48%, rgba(255, 94, 94, 0.08))',
        }}
      >
        <Typography variant="h1" sx={{ mb: 1.5 }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="h3" color="secondary.main" sx={{ mb: 1.5 }}>
            {subtitle}
          </Typography>
        ) : null}
        {lastUpdated ? (
          <Typography variant="body2" color="text.secondary">
            Last updated: {lastUpdated}
          </Typography>
        ) : null}
      </Paper>

      {sections.map((section) => (
        <BlogSection key={section.id} section={section} />
      ))}
    </Stack>
  );
};

export default BlogArticle;
