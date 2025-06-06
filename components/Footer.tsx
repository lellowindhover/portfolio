
import React from 'react';

interface FooterProps {
  profileName: string;
}

export const Footer: React.FC<FooterProps> = ({ profileName }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-text-muted text-sm">
          &copy; {currentYear} {profileName}. All rights reserved.
        </p>
        <p className="text-text-muted text-xs mt-1">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};