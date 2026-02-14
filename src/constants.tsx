
import { ProjectItem, ShowcaseRepo } from './types';

export const COLORS = {
  bg: '#F9F8F6',
  secondary: '#D9CFC7',
  accent: '#D9A299',
  primary: '#480607', // Bulgarian Rose
  text: '#000000',
  muted: 'rgba(0, 0, 0, 0.4)',
};

import martechImg from './assets/expertise-martech.jpg';
import dataImg from './assets/expertise-data.jpg';
import productImg from './assets/expertise-product.jpg';

export const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'MarTech & API',
    category: 'MarTech & API',
    description: 'Architect MarTech ecosystems through cross-platform integration and API tuning, driving automation and efficiency.',
    skills: 'API, Digital Marketing Tech, FrontEnd',
    imageUrl: martechImg,
    link: '#'
  },
  {
    id: '2',
    title: 'Data & AI',
    category: 'Data & AI',
    description: 'Transform business challenges into intelligent solutions by leveraging deep data insights and cutting-edge AI applications.',
    skills: 'Python, SQL, AI Tools and Implementation',
    imageUrl: dataImg,
    link: '#'
  },
  {
    id: '3',
    title: 'Product & Tech',
    category: 'Product & Tech',
    description: 'Expert of "Tech Translator" bridge the gap between product vision and technical execution, fueled by rapid self-learning and emerging tech adoption.',
    skills: 'Coding, App dev, AI knowledge and learning',
    imageUrl: productImg,
    link: '#'
  },
];

export const CODE_REPOS: ShowcaseRepo[] = [
  { title: 'Data Clean & Automation', desc: 'Processing and cleaning data at scale.', link: 'https://github.com/Stella329/NoteBook02_Python_FinlandMooc', icon: '🐍' },
  { title: 'Snake Game (Demo)', desc: 'Classic logic implemented in OOP.', link: 'https://www.linkedin.com/posts/activity-7385747516111163392-zWgd', icon: '🎮' },
  { title: 'Raterule XML Cleaner', desc: 'Parse & clean XML Raterule for Google ads.', link: 'https://github.com/Stella329/100dPythonProject_D22_Easy-Pong-Game_stella', icon: '🏓' },
  { title: 'Flight Deal Finder (via API)', desc: 'A Flight Deal Finder using Amadeus API.', link: 'https://github.com/Stella329/100dPythonProject_D39-40_APICapstone_FlightDealFinder', icon: '✈️' },
  { title: 'Pomodoro Timer', desc: 'Productivity tool using Tkinter.', link: 'https://github.com/Stella329/100dPythonProject_D28_pomodoro-timer', icon: '⏱️' },
  { title: 'Pong Game (OOP)', desc: 'Advanced class-based game logic.', link: 'https://github.com/Stella329/100dPythonProject_D22_Easy-Pong-Game_stella', icon: '🏓' },
  { title: 'Drum Kit', desc: 'Interactive sound manipulation via DOM.', link: 'https://stella329.github.io/NoteBook04_FullStack_WebDevelopment/02_Full-Stack-WebDev_AG/18.0_DrumKit_DOMAdvance/', icon: '🥁' },
  { title: 'Simon Game', desc: 'Fun logic with jQuery & CSS animations.', link: 'https://stella329.github.io/NoteBook04_FullStack_WebDevelopment/02_Full-Stack-WebDev_AG/20.0_SimonGame_withjQuery/', icon: '💡' },
];

export const WEB_REPOS: ShowcaseRepo[] = [
  { title: 'Data, Martech, Product', desc: 'API, Data and Product dev: strategy, integration and automation', link: 'https://www.canva.com/design/DAHBUjio2Vw/Ki6l05ZBnUJmHzqnW7LM1A/view?utm_content=DAHBUjio2Vw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9d80b6d037', icon: '📊' },
  { title: 'AI & Product', desc: 'Agentic AI research and AI applications.', link: '#', icon: '🤖' },
  { title: 'TAM', desc: 'Martech & Product education and tech account management.', link: 'https://drive.google.com/file/d/1JGqaze5XGf6gIpLSwycy98u3GpbC5BlI/view?usp=sharing', icon: '🙋‍♀️' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/jianying-wang-4b7532150', // Assuming this based on common patterns, or user can update
  github: 'https://github.com/Stella329',
  email: 'mailto:stella33299@gmail.com',
};
