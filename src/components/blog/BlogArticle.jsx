import { Box, Paper, Stack, Typography } from '@mui/material';
import { bg, c, hairline, text } from '../../design/tokens';
import { formatUpdated } from '../../content/blogs';

/** done → G (affirmative), live → R (still running). */
const STATUS_CHANNEL = { done: 'g', live: 'r' };

const StatusMark = ({ status }) => (
  <Box
    aria-hidden="true"
    component="span"
    sx={{
      display: 'inline-block',
      width: 8,
      height: 8,
      mr: 1.25,
      mb: '2px',
      verticalAlign: 'middle',
      backgroundColor: c(STATUS_CHANNEL[status] ?? 'b', 'solid'),
    }}
  />
);

const renderBullet = (point) => {
  if (typeof point === 'string') return point;

  if (point?.href) {
    return (
      <Typography
        component="a"
        href={point.href}
        target="_blank"
        rel="noopener noreferrer"
        variant="body1"
        sx={{
          color: c('g', 'solid'),
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          '&:hover': { color: c('g', 'solid'), opacity: 0.82 },
        }}
      >
        {point.label ?? point.href}
      </Typography>
    );
  }

  if (point?.status) {
    return (
      <>
        <StatusMark status={point.status} />
        {point.text}
      </>
    );
  }

  return point?.text ?? '';
};

const bulletKey = (point) => {
  if (typeof point === 'string') return point.slice(0, 24);
  return point.href ?? point.text?.slice(0, 24) ?? 'bullet';
};

const BlogSection = ({ section }) => {
  const marked = section.bullets?.some((point) => point?.status);

  return (
    <Paper sx={{ p: { xs: 2.25, md: 3.25 }, backgroundColor: bg('panel', 0.8), border: hairline('b') }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        {section.title}
      </Typography>

      {section.paragraphs?.map((paragraph) => (
        <Typography key={paragraph.slice(0, 24)} variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {paragraph}
        </Typography>
      ))}

      {section.bullets?.length ? (
        <Box
          component="ul"
          sx={{
            m: 0,
            pl: marked ? 0 : 3,
            listStyle: marked ? 'none' : 'disc',
          }}
        >
          {section.bullets.map((point) => (
            <Typography
              key={bulletKey(point)}
              component="li"
              variant="body1"
              color="text.secondary"
              sx={{ mb: 1.25 }}
            >
              {renderBullet(point)}
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
          backgroundColor: bg('panel', 0.8),
          border: hairline('b'),
          borderLeft: `2px solid ${c('b', 'solid')}`,
        }}
      >
        <Typography variant="h1" sx={{ mb: 1.5, color: text('high') }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="h3" color="text.secondary" sx={{ mb: 1.5, fontWeight: 500 }}>
            {subtitle}
          </Typography>
        ) : null}
        {lastUpdated ? (
          <Typography variant="caption" sx={{ color: c('b', 'solid'), opacity: 0.78 }}>
            Updated {formatUpdated(lastUpdated)}
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
