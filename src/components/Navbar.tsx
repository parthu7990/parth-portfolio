import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Instagram, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import { siteConfig } from '../data/site';

const Navbar = () => {
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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-5 sm:px-6 py-4 md:px-12 md:py-6',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-white/5 py-3 md:py-4'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          PARTH<span className="text-primary text-glow">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] uppercase tracking-widest font-mono text-foreground/50 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}

          <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-foreground/50 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-foreground/50 hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/50 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.resumeUrl}
              className="hidden lg:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono text-foreground/60 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 hover:border-primary/40"
            >
              <FileText size={14} /> Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10 mt-4">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-foreground/60 hover:text-white transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground/60 hover:text-white transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-foreground/60 hover:text-white transition-colors"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

