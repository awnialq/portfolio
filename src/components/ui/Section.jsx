import { Box, Typography } from '@mui/material';

const Section = ({ eyebrow, title, subtitle, children, sx }) => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        mb: { xs: 6, md: 8 },
        ...sx,
      }}
    >
      {eyebrow ? (
        <Typography
          variant="body2"
          sx={{
            mb: 1,
            color: 'secondary.main',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </Typography>
      ) : null}

      {title ? (
        <Typography variant="h2" sx={{ mb: subtitle ? 1.5 : 3 }}>
          {title}
        </Typography>
      ) : null}

      {subtitle ? (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 840, mb: 3 }}>
          {subtitle}
        </Typography>
      ) : null}

      {children}
    </Box>
  );
};

export default Section;
