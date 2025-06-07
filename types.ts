
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  extraImageUrls?: string[]; // Added for image gallery
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ElementType; // For custom SVG icons
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
  icon?: React.ElementType;
}

export enum SectionId {
  Hero = 'hero',
  About = 'about',
  Projects = 'projects',
  Skills = 'skills',
  Contact = 'contact',
}

export interface NavLink {
  name: string;
  id: SectionId;
}
