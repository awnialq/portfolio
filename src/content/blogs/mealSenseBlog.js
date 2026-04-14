const mealSenseBlog = {
  title: 'MealSense',
  subtitle: 'A personalized nutrition assistant for Santa Clara students',
  lastUpdated: '2026-04-13',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: [
        'MealSense is a personalized meal-planning assistant for Santa Clara students. It recommends meals from Benson based on a student\'s goals and preferences, then provides detailed macronutrient breakdowns for each recommendation.',
        'If a student misses a meal, MealSense can also suggest snack alternatives from the on-campus supermarket to help them stay on track.',
        'The motivation came from a common student problem: limited dining hall options, time constraints, and unclear nutrition tradeoffs make it hard to eat intentionally (whether the goal is to lose, gain, or maintain weight).',
        'At Santa Clara University in particular, many students rely on Benson Cafeteria but may not know which meals best align with their dietary goals.',
      ],
      bullets: [
        {
          label: 'View MealSense on Devpost',
          href: 'https://devpost.com/software/mealsense-smart-nutrition-for-college-students',
        },
      ],
    },
    {
      id: 'stack',
      title: 'Technical Stack',
      bullets: [
        'React Native (Expo Go) for the mobile client.',
        'TypeScript for frontend development.',
        'Python + FastAPI for backend services and recommendation logic.',
        'Firebase for user data storage.',
        'Vercel for deployment.',
      ],
    },
    {
      id: 'implementation',
      title: 'Implementation Notes',
      paragraphs: [
        'We started by gathering nutritional data from the Benson Cafeteria menu and categorizing meals by macronutrient profile.',
        'Using Python alongside a React Native client, we implemented logic that selects appropriate meals based on user goals and preferences, then surfaces recommendations with macro breakdowns.',
        'A key constraint was that the cafeteria menu changes frequently, which made it difficult to maintain complete and up-to-date nutrition coverage for every option.',
        'Integrating a React Native (Expo Go) frontend with Firebase also proved tricky; we ultimately shifted more responsibility to the backend to stabilize the integration.',
      ],
      bullets: [
        'Turned an initial concept into a working app that adapts meal plans to different dietary needs.',
        'Built an easy-to-use interface that makes meal planning faster and less stressful for students.',
        'Deployed and hosted our own FastAPI service.',
      ],
    },
    {
      id: 'reflection',
      title: 'Reflections',
      paragraphs: [
        'The project reinforced how important usability testing is when building nutrition tools—small UI decisions can be the difference between “helpful” and “overwhelming.”',
        'It also highlighted that recommendation quality depends heavily on accurate and current nutrition data, especially when upstream menus are constantly changing.',
        'We also learned the value of clear ownership boundaries when integrating Firebase across a frontend + backend system.',
      ],
      bullets: [
        'Next: add progress tracking so students can log weight changes and receive updated recommendations over time.',
        'Next: train our own custom model to recommend meals based on the student\'s preferences and goals.',
      ],
    },
  ],
};

export default mealSenseBlog;
