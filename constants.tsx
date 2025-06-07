
import React from 'react';
import { Project, SkillCategory, NavLink, SectionId } from './types';
import { CodeBracketIcon, CpuChipIcon, WrenchScrewdriverIcon, PaintBrushIcon, CommandLineIcon } from './components/icons/TechStackIcons'; // PaintBrushIcon might be repurposed or replaced if a better 'visualization' icon is available


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
  bio: "My focus is translating data into measurable business value. I leverage advanced analytics and machine learning to solve key challenges, from enhancing customer experience to optimizing operational efficiency. Passionate about building not just predictive models, but clear, data-backed narratives that drive strategic decision-making. Let's build solutions that deliver.",
  shortBio: "Hi, I'm Gaio. As a mentor in AI and data science, my passion lies in demystifying the complex. Just as a great app needs clean code and intuitive design, a great data model requires rigorous thinking and clear storytelling. I'm here to guide you in crafting elegant machine learning solutions and translating your results into actions that drive real-world change.",
  email: "lellowindhover@gmail.com", 
  linkedin: "https://www.linkedin.com/in/gaiobardelle/", 
  github: "https://github.com/lellowindhover", 
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Oracle Vision - Computer Vision, object detection, security',
    description: 'Oracle Vision AI upgrades your cameras, identifying objects to stop false alarms and send only the alerts that matter.',
    imageUrl: 'https://visionplatform.ai/wp-content/uploads/2024/01/AI-security-camera.png',
    tags: ['Yolo', 'Computer Vision', 'Security', 'AI'],
    liveUrl: 'https://intrepidafrica-oraclevision.hf.space',
    repoUrl: '#',
    extraImageUrls: [
      'https://picsum.photos/seed/p1extra1/800/600',
      'https://picsum.photos/seed/p1extra2/800/600',
      'https://picsum.photos/seed/p1extra3/800/600',
    ],
  },
  {
    id: 'p2',
    title: 'Nova AI - Content Generator',
    description: 'An AI-powered platform for generating creative content, including articles, social media posts, and marketing copy. Integrated with advanced language models.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['python', 'transformers','llm' ],
    liveUrl: 'https://huggingface.co/spaces/IntrepidAfrica/ai-content-generator',
    extraImageUrls: [
      'https://picsum.photos/seed/p2extra1/800/600',
      'https://picsum.photos/seed/p2extra2/800/600',
    ],
  },
  {
    id: 'p3',
    title: 'Portfolio Architect',
    description: 'A dynamic portfolio website template generator for developers and designers, allowing users to easily create and customize their online presence.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['themes', 'gradio', 'python'],
    liveUrl: 'https://huggingface.co/spaces/IntrepidAfrica/arkitekt',
    // No extra images for this one, to demonstrate conditional rendering
  },
  {
    id: 'p4',
    title: 'Automated ML and Prediction ',
    description: 'Use a Trained Model for Predictions.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Auto ML', 'Pycaret', 'Python', 'Gradio'],
    liveUrl: 'https://huggingface.co/spaces/IntrepidAfrica/AutoML',
    repoUrl: '#',
    extraImageUrls: [
      'https://picsum.photos/seed/p4extra1/800/600',
      'https://picsum.photos/seed/p4extra2/800/600',
      'https://picsum.photos/seed/p4extra3/800/600',
      'https://picsum.photos/seed/p4extra4/800/600',
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'datascience-programming',
    name: 'Data Science & Programming',
    icon: CodeBracketIcon,
    skills: [
      { id: 'ds1', name: 'Python (NumPy, Pandas, SciPy)' },
      { id: 'ds2', name: 'SQL & NoSQL (MongoDB)' },
      { id: 'ds3', name: 'web scraping' },
      { id: 'ds4', name: 'Jupyter Notebooks / Google Colab' },
      { id: 'ds5', name: 'Data Cleaning & Preprocessing' },
      { id: 'ds6', name: 'Statistical Analysis & Modeling' },
    ],
  },
  {
    id: 'ml-ai',
    name: 'Machine Learning & AI',
    icon: CpuChipIcon,
    skills: [
      { id: 'ml1', name: 'Scikit-learn' },
      { id: 'ml2', name: 'TensorFlow / Keras' },
      { id: 'ml3', name: 'PyTorch' },
      { id: 'ml4', name: 'Natural Language Processing (NLTK, spaCy, Transformers)' },
      { id: 'ml5', name: 'Computer Vision (OpenCV, Pillow, Yolo)' },
      { id: 'ml6', name: 'Generative AI (LLMs, Gemini API)' },
      { id: 'ml7', name: 'Recommender Systems' },
      { id: 'ml8', name: 'AI Ethics & Responsible AI'},
    ],
  },
  {
    id: 'visualization-storytelling',
    name: 'Data Visualization & Storytelling',
    icon: PaintBrushIcon, // Using PaintBrush for now, consider a chart-specific icon if available
    skills: [
      { id: 'dv1', name: 'Matplotlib & Seaborn' },
      { id: 'dv2', name: 'Plotly & Dash' },
      { id: 'dv3', name: 'Power BI' },
      { id: 'dv4', name: 'Geospatial Visualization (Folium)' },
      { id: 'dv5', name: 'Communicating Insights Effectively' },
    ],
  },
  {
    id: 'tools-cloud-mlops',
    name: 'Tools, Cloud & MLOps',
    icon: WrenchScrewdriverIcon,
    skills: [
      { id: 'tc1', name: 'Git & GitHub / GitLab' },
      { id: 'tc2', name: 'Docker & Containerization' },
      { id: 'tc3', name: 'Cloud Platforms (AWS SageMaker, GCP Vertex AI, Azure ML)' },
      { id: 'tc4', name: 'API Development (Gradio, FastAPI, Flask)' },
      { id: 'tc5', name: 'Agile Methodologies & Jira' },
      { id: 'tc6', name: 'Linux / Bash Scripting' },
    ],
  },
];
