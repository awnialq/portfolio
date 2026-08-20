import nesEmuBlog from './nesEmuBlog';
import mealSenseBlog from './mealSenseBlog';
import learnimalBlog from './learnimalBlog';
import portfolioSiteBlog from './portfolioSiteBlog';

/** One formatter, so nav metas and blog headers can never disagree. */
export const formatUpdated = (value) => {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.valueOf())) return value;
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

/** Descriptive sub-label for a menu row: "Nutrition assistant · Apr 2026" */
export const blogMeta = (blog) => `${blog.tagline} · ${formatUpdated(blog.lastUpdated)}`;

export const nesEmu = { path: '/nesemu', blog: nesEmuBlog };

export const writing = [
  { path: '/mealsense', blog: mealSenseBlog },
  { path: '/learnimal', blog: learnimalBlog },
  { path: '/portfolio-site', blog: portfolioSiteBlog },
];
