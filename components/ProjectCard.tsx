
import React from 'react';
import { Project } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-secondary rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-accent/30 hover:transform hover:-translate-y-1">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-text-main mb-2">{project.title}</h3>
        <p className="text-text-muted text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <p className="text-xs text-text-muted mb-1">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-highlight/20 text-highlight rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex items-center space-x-4 pt-4 border-t border-gray-700">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors flex items-center space-x-1 text-sm"
              aria-label={`Live demo of ${project.title}`}
            >
              <ExternalLinkIcon className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors flex items-center space-x-1 text-sm"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-5 h-5" />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};