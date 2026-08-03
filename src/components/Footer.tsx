import React from 'react';
import { Github, Linkedin, Instagram, ArrowUp, Mail } from 'lucide-react';
import { siteConfig } from '../data/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 md:py-20 px-5 sm:px-6 border-t border-white/5 relative bg-[#050508]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-4">
            PARTH<span className="text-primary">.</span>
          </h2>
          <p className="text-foreground/40 text-sm max-w-xs leading-relaxed uppercase tracking-widest mx-auto md:mx-0">
            Python Django Full Stack Developer <br /> & Creative Frontend Engineer.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-10">
          <div className="flex items-center gap-8">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-foreground/40 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/40 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-foreground/40 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-foreground/40 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] font-mono text-foreground/20 uppercase tracking-[0.3em] mb-2">
              Designed & Developed by
            </p>
            <p className="text-sm font-medium text-white/50">
              Parth Prajapati — {currentYear}
            </p>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute top-6 right-6 md:top-8 md:right-10 w-11 h-11 rounded-full glass flex items-center justify-center text-foreground/50 hover:text-white hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
      >
        <ArrowUp size={18} />
      </button>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;

