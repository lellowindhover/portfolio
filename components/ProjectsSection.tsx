
import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { SectionWrapper } from './SectionWrapper';
import { SectionId } from '../types';

interface ProjectsSectionProps {
  id: SectionId;
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, projects }) => {
  return (
    <SectionWrapper id={id} title="My Projects" className="bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};