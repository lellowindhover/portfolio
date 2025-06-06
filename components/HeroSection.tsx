
import React from 'react';
import { SectionId } from '../types';
import { PROFILE_INFO } from '../constants'; // Using PROFILE_INFO directly if no specific prop passed

interface HeroSectionProps {
  id: SectionId;
  profileInfo: typeof PROFILE_INFO;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ id, profileInfo, onContactClick }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-primary text-text-main relative overflow-hidden pt-20 md:pt-0">
      {/* Background Blobs - decorative */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
          Hi, I'm <span className="text-accent">{profileInfo.name}</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-text-muted mb-8 max-w-3xl mx-auto">
          {profileInfo.title}
        </p>
        <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
          {profileInfo.bio}
        </p>
        <div className="space-x-4">
          <a
            href={`#${SectionId.Projects}`}
            className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg"
          >
            View My Work
          </a>
          <button
            onClick={onContactClick}
            className="bg-secondary hover:bg-gray-700 text-text-main font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg border border-text-muted hover:border-accent"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};