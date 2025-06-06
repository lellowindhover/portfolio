
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SectionId } from '../types';

interface AboutSectionProps {
  id: SectionId;
  shortBio: string;
  profileName: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ id, shortBio, profileName }) => {
  return (
    <SectionWrapper id={id} title="About Me" className="bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <img 
          src={`https://picsum.photos/seed/gaiobardelle/200/200`} 
          alt={profileName}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-8 shadow-xl border-4 border-accent"
        />
        <p className="text-lg md:text-xl text-text-muted leading-relaxed">
          {shortBio}
        </p>
        <p className="mt-6 text-lg md:text-xl text-text-muted leading-relaxed">
          I thrive on challenges and am constantly exploring new technologies to enhance my skill set. My goal is to contribute to projects that not only solve real-world problems but also provide delightful user experiences. When I'm not coding, you can find me exploring nature trails or diving into a good sci-fi novel.
        </p>
      </div>
    </SectionWrapper>
  );
};
