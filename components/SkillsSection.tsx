
import React from 'react';
import { SkillCategory } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { SectionId } from '../types';

interface SkillsSectionProps {
  id: SectionId;
  skillCategories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ id, skillCategories }) => {
  return (
    <SectionWrapper id={id} title="Skills & Technologies" className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {skillCategories.map((category) => (
          <div key={category.id} className="bg-primary p-6 rounded-lg shadow-xl hover:shadow-accent/20 transition-shadow duration-300">
            <div className="flex items-center mb-4">
              {category.icon && <category.icon className="w-8 h-8 text-accent mr-3" />}
              <h3 className="text-2xl font-semibold text-text-main">{category.name}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill.id} className="flex items-center text-text-muted hover:text-text-main transition-colors">
                  {skill.icon ? (
                     <skill.icon className="w-5 h-5 text-highlight mr-2 flex-shrink-0" />
                  ) : (
                    <span className="w-5 h-5 text-highlight mr-2 flex-shrink-0">•</span>
                  )}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};