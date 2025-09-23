import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Logo } from '@/components/ui';
import { NAVIGATION_ITEMS } from '@/utils/constants';
import { cn } from '@/utils/helpers';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass-nav'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Logo size="sm" className="cursor-pointer" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary hover:text-glow-primary transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="primary"
              size="sm"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 glass-light rounded-lg border border-glow-primary/20 hover:border-glow-primary/40 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <motion.span
                className="w-full h-0.5 bg-glow-primary rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-glow-primary rounded-full"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-glow-primary rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="py-6 space-y-1 border-t border-glow-primary/20 bg-bg-primary/80 backdrop-blur-sm">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-text-secondary hover:text-glow-primary transition-all duration-300 font-medium py-4 px-4 rounded-lg hover:bg-glow-primary/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: isMobileMenuOpen ? index * 0.1 : 0 
                }}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
      </motion.header>
    </>
  );
};

export default Header;
