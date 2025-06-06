
import React from 'react';
import { Project, SkillCategory, NavLink, SectionId } from './types';
import { CodeBracketIcon, CpuChipIcon, WrenchScrewdriverIcon, PaintBrushIcon, CommandLineIcon } from './components/icons/TechStackIcons';


export const NAV_LINKS: NavLink[] = [
  { name: 'Home', id: SectionId.Hero },
  { name: 'About', id: SectionId.About },
  { name: 'Projects', id: SectionId.Projects },
  { name: 'Skills', id: SectionId.Skills },
  { name: 'Contact', id: SectionId.Contact },
];

export const PROFILE_INFO = {
  name: "Gaio Bardelle",
  title: "Data scientist and AI Trainer",
  bio: "Crafting seamless digital experiences with cutting-edge technology. Passionate about building intuitive, performant, and visually stunning web applications. Let's build something amazing together.",
  shortBio: "I'm Gaio, a developer passionate about creating beautiful and functional web applications. With a keen eye for design and a love for clean code, I strive to build impactful digital solutions.",
  email: "gaio.bardelle@example.dev", // Fictional, can be updated if needed
  linkedin: "https://www.linkedin.com/in/gaiobardelle", // Fictional
  github: "https://github.com/gaiobardelle", // Fictional
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'EcoTrack - Sustainability App',
    description: 'A mobile-first web application to help users track their carbon footprint and adopt sustainable habits. Features include progress tracking, community challenges, and educational resources.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'PWA'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'p2',
    title: 'Nova AI - Content Generator',
    description: 'An AI-powered platform for generating creative content, including articles, social media posts, and marketing copy. Integrated with advanced language models.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['Next.js', 'Python', 'FastAPI', 'Gemini API', 'GraphQL'],
    liveUrl: '#',
  },
  {
    id: 'p3',
    title: 'Portfolio Architect',
    description: 'A dynamic portfolio website template generator for developers and designers, allowing users to easily create and customize their online presence.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Vercel'],
    repoUrl: '#',
  },
  {
    id: 'p4',
    title: 'Interactive Data Visualizer',
    description: 'A tool for creating stunning interactive charts and graphs from various data sources. Built with D3.js and React for a highly customizable experience.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['React', 'D3.js', 'TypeScript', 'Redux'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: CodeBracketIcon,
    skills: [
      { id: 's1', name: 'React / Next.js' },
      { id: 's2', name: 'TypeScript' },
      { id: 's3', name: 'JavaScript (ES6+)' },
      { id: 's4', name: 'HTML5 & CSS3' },
      { id: 's5', name: 'Tailwind CSS' },
      { id: 's6', name: 'Redux / Zustand' },
      { id: 's7', name: 'GraphQL / Apollo' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    icon: CpuChipIcon,
    skills: [
      { id: 's8', name: 'Node.js / Express.js' },
      { id: 's9', name: 'Python / Django / FastAPI' },
      { id: 's10', name: 'REST APIs & gRPC' },
      { id: 's11', name: 'PostgreSQL / MongoDB' },
      { id: 's12', name: 'Docker & Kubernetes' },
    ],
  },
  {
    id: 'uiux',
    name: 'UI/UX Design',
    icon: PaintBrushIcon,
    skills: [
      { id: 's13', name: 'Figma' },
      { id: 's14', name: 'User Research' },
      { id: 's15', name: 'Prototyping' },
      { id: 's16', name: 'Responsive Design' },
      { id: 's17', name: 'Accessibility (WCAG)' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & DevOps',
    icon: WrenchScrewdriverIcon,
    skills: [
      { id: 's18', name: 'Git & GitHub' },
      { id: 's19', name: 'CI/CD (Jenkins, GitHub Actions)' },
      { id: 's20', name: 'AWS / GCP / Vercel' },
      { id: 's21', name: 'Agile Methodologies' },
      { id: 's22', name: 'VS Code / WebStorm'},
    ],
  },
];
