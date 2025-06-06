
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SectionId } from '../types';
import { PROFILE_INFO } from '../constants';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { EmailIcon } from './icons/EmailIcon';

interface ContactSectionProps {
  id: SectionId;
  profileInfo: typeof PROFILE_INFO;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ id, profileInfo }) => {
  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${profileInfo.email}`,
      icon: EmailIcon,
      label: `Email ${profileInfo.name}`,
    },
    {
      name: 'LinkedIn',
      href: profileInfo.linkedin,
      icon: LinkedinIcon,
      label: `${profileInfo.name} on LinkedIn`,
    },
    {
      name: 'GitHub',
      href: profileInfo.github,
      icon: GithubIcon,
      label: `${profileInfo.name} on GitHub`,
    },
  ];

  return (
    <SectionWrapper id={id} title="Get In Touch" className="bg-primary">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-text-muted mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 group"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 mr-2" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        <p className="mt-12 text-sm text-text-muted">
          Looking forward to hearing from you!
        </p>
      </div>
    </SectionWrapper>
  );
};