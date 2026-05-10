import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-white/5 relative bg-[#050508]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-display font-bold tracking-tighter mb-4">
            PARTH<span className="text-primary">.</span>
          </h2>
          <p className="text-foreground/40 text-sm max-w-xs leading-relaxed uppercase tracking-widest">
            Python Django Full Stack Developer <br /> & Creative Frontend Engineer.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-10">
          <div className="flex items-center gap-8">
            <a href="https://github.com/parth20098" target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/parthprajapati" target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/parth.prajapati" target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-[10px] font-mono text-foreground/20 uppercase tracking-[0.3em] mb-2">Designed & Developed by</p>
            <p className="text-sm font-medium text-white/50">Parth Prajapati — {currentYear}</p>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;
