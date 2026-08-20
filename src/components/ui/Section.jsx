import { Box, Typography } from '@mui/material';
import { c } from '../../design/tokens';

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
        <Box sx={{ mb: 1.5, pb: 1, borderBottom: `1px solid ${c('b', 'hairline')}` }}>
          <Typography
            variant="caption"
            sx={{
              color: c('b', 'solid'),
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </Typography>
        </Box>
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
