
import React, { useState, useEffect } from 'react';
import { NavLink as NavLinkType, SectionId } from '../types';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

interface NavbarProps {
  navLinks: NavLinkType[];
  onNavLinkClick: (sectionId: SectionId) => void;
  profileName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ navLinks, onNavLinkClick, profileName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (sectionId: SectionId) => {
    onNavLinkClick(sectionId);
    setIsOpen(false); // Close mobile menu on link click
  };
  
  const nameParts = profileName.split(' ');
  const initials = nameParts.length > 1 ? `${nameParts[0][0]}${nameParts[1][0]}` : profileName.substring(0,2);


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled || isOpen ? 'bg-secondary shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex items-center justify-between">
          <a 
            href={`#${SectionId.Hero}`} 
            onClick={(e) => { e.preventDefault(); handleLinkClick(SectionId.Hero);}}
            className="text-2xl font-bold text-accent hover:text-accent-hover transition-colors"
            aria-label="Scroll to top"
          >
            {initials.toUpperCase()}
          </a>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id);}}
                className="text-text-main hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-main hover:text-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${isScrolled || isOpen ? 'bg-secondary' : 'bg-primary'} shadow-lg pb-4`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id);}}
                className="text-text-main hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};