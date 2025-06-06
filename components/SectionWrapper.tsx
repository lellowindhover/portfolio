
import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', title }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-accent">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};