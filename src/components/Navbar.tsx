import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Instagram, Lock, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { auth, googleProvider, ADMIN_EMAIL } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const isAdmin = user?.email === ADMIN_EMAIL;

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
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/5 py-3 md:py-4' : 'bg-transparent'
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
            {isAdmin && (
              <motion.a
                href="#admin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary hover:text-primary/80 transition-colors"
                title="Admin Dashboard"
              >
                <Lock size={18} />
              </motion.a>
            )}
            
            {!user ? (
              <button 
                onClick={handleLogin}
                className="text-[10px] uppercase tracking-[0.2em] font-mono text-foreground/40 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/5"
              >
                Admin
              </button>
            ) : (
              <button 
                onClick={handleLogout}
                className="text-foreground/40 hover:text-white transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            )}
            
            <a href="https://github.com/parthprajapati" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.instagram.com/parth_.7990" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-white transition-colors">
              <instgram size={18} />
            </a>
              
            <a href="https://linkedin.com/in/parthprajapati" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            <div className="flex flex-col p-8 space-y-6">
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
              {user && (
                 <button 
                 onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                 className="text-left text-xl font-display font-medium text-red-500"
               >
                 Logout
               </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
