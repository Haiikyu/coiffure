'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookingClick?: () => void;
}

export default function Navbar({ onBookingClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#gallery', label: 'Réalisations' },
    { href: '#services', label: 'Prestations' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-cream-50/95 backdrop-blur-sm border-b border-cream-200' : 'pointer-events-none'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Minimal Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm md:text-base font-light tracking-[0.2em] text-charcoal-900 uppercase pointer-events-auto"
            >
              Coiffeur
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12 pointer-events-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-light text-charcoal-700 hover:text-charcoal-900 transition-colors duration-300 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onBookingClick}
                className="text-xs font-light text-charcoal-900 uppercase tracking-wider border-b border-charcoal-900 pb-1
                         hover:opacity-60 transition-opacity duration-300"
              >
                Réserver
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-charcoal-900 pointer-events-auto"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Minimal Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 bg-cream-50 lg:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 px-6 sm:px-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-xl sm:text-2xl font-light text-charcoal-900 uppercase tracking-wide"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookingClick?.();
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20,
            }}
            transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
            className="text-xs font-light uppercase tracking-[0.2em] border border-charcoal-900 px-8 sm:px-12 py-3 sm:py-4
                     hover:bg-charcoal-900 hover:text-cream-50 transition-all duration-300"
          >
            Prendre rendez-vous
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
