import React, { useState, useEffect, Suspense } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import AdminDashboard from './components/AdminDashboard';
import { auth, ADMIN_EMAIL } from './lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = user?.email === ADMIN_EMAIL;

  return (
    <SmoothScroll>
      <div className="relative antialiased">
        <CustomCursor />
        <Preloader />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        
        <header>
          <Navbar />
        </header>

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Experience />
          {isAdmin && <AdminDashboard />}
          <Contact />
        </main>

        <Footer />
        
        {/* Progress Bar (Global) */}
        <div className="fixed top-0 left-0 w-full h-[2px] z-[60] pointer-events-none">
          <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x w-full opacity-50" />
        </div>
      </div>
    </SmoothScroll>
  );
}

