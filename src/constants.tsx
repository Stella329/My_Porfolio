/**
 * @file constants.tsx
 * @description Centralized configuration, data, and type definitions for the portfolio website.
 * This file contains color palettes, project showcasing data (skills, descriptions, links), 
 * social media links, and TypeScript interfaces to ensure consistency across components.
 */

export type ParticleMode = 'idle' | 'circle' | 'lines';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  skills?: string;
}

export interface ShowcaseRepo {
  id?: string;
  title: string;
  desc: string;
  link: string;
  icon: string;
}

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
    skills: 'API, Martech Stack, Digital Marketing, FrontEnd',
    imageUrl: martechImg,
  },
  {
    id: '3',
    title: 'Product & Spec',
    category: 'Product & Spec',
    description: 'Accelerate Time-to-Value by breaking business-tech silos through integration solutions and expert technical translation.',
    skills: 'App dev, Stakeholder Mgmt, AI knowledge and learning',
    imageUrl: productImg,
  },
  {
    id: '2',
    title: 'Data & AI',
    category: 'Data & AI',
    description: 'Transform business challenges into intelligent solutions by leveraging deep data insights and cutting-edge AI applications.',
    skills: 'Python, SQL, AI Agents and tools',
    imageUrl: dataImg,
  },
];

export const CODE_REPOS: ShowcaseRepo[] = [
  { id: 'c1', title: 'Data Clean & Automation', desc: 'Processing and cleaning data at scale.', link: 'https://github.com/Stella329/NoteBook02_Python_FinlandMooc', icon: '🐍' },
  { id: 'c2', title: 'Snake Game (Demo)', desc: 'Classic logic implemented in OOP.', link: 'https://www.linkedin.com/posts/activity-7385747516111163392-zWgd', icon: '🎮' },
  { id: 'c3', title: 'Raterule XML Cleaner', desc: 'Parse & clean XML Raterule for Google ads.', link: 'https://github.com/Stella329/100dPythonProject_D22_Easy-Pong-Game_stella', icon: '📏' },
  { id: 'c4', title: 'Flight Deal Finder (via API)', desc: 'A Flight Deal Finder using Amadeus API.', link: 'https://github.com/Stella329/100dPythonProject_D39-40_APICapstone_FlightDealFinder', icon: '✈️' },
  { id: 'c5', title: 'Pomodoro Timer', desc: 'Productivity tool using Tkinter.', link: 'https://github.com/Stella329/100dPythonProject_D28_pomodoro-timer', icon: '⏱️' },
  { id: 'c6', title: 'Pong Game (OOP)', desc: 'Advanced class-based game logic.', link: 'https://github.com/Stella329/100dPythonProject_D22_Easy-Pong-Game_stella', icon: '🏓' },
  { id: 'c7', title: 'Drum Kit', desc: 'Interactive sound manipulation via DOM.', link: 'https://stella329.github.io/NoteBook04_FullStack_WebDevelopment/02_Full-Stack-WebDev_AG/18.0_DrumKit_DOMAdvance/', icon: '🥁' },
  { id: 'c8', title: 'Simon Game', desc: 'Fun logic with jQuery & CSS animations.', link: 'https://stella329.github.io/NoteBook04_FullStack_WebDevelopment/02_Full-Stack-WebDev_AG/20.0_SimonGame_withjQuery/', icon: '💡' },
];

export const WEB_REPOS: ShowcaseRepo[] = [
  { id: '1', title: 'Martech, Data, Product', desc: 'Accenture CDP Implementation Study Case: Strategy, Integration and Automation', link: 'https://canva.link/2it8uvqx7152ng2', icon: '💡' },
  { id: '2', title: 'AI Integration', desc: 'Study Case on AI Implementation & Internal AI Integration Research for Sinch', link: 'https://drive.google.com/file/d/1xyiCKX6ORkNoILyvEEev8wYXr-lPziR1/view?usp=sharing', icon: '🤖' },
  { id: '3', title: 'Product Showcases', desc: 'Showcases from Product Design, Integration/Automation, to Business Growth', link: 'https://www.canva.com/design/DAHBUjio2Vw/Ki6l05ZBnUJmHzqnW7LM1A/view?utm_content=DAHBUjio2Vw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9d80b6d037', icon: '📊' },
  { id: '4', title: 'MMP, Links & Attribution', desc: 'Guidebook & Knowledge Base for Product/Tech Education.', link: 'https://drive.google.com/file/d/1JGqaze5XGf6gIpLSwycy98u3GpbC5BlI/view?usp=sharing', icon: '🙋‍♀️' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/jianying-wang-4b7532150', // Assuming this based on common patterns, or user can update
  github: 'https://github.com/Stella329',
  email: 'mailto:[stella33299@gmail.com]',
};
