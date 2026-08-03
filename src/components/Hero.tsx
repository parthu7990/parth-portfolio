import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MousePointer2, Github, Linkedin, Download } from 'lucide-react';
import { siteConfig, profileImage } from '../data/site';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-5 sm:px-6 overflow-hidden bg-[#050508]">

      {/* DARK BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.18),transparent_45%)]" />

      {/* EXTRA DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* FLOATING ORBS */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-violet-500/20 blur-[80px] animate-pulse-slow hidden sm:block" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-cyan-500/10 blur-[80px] animate-pulse-slow hidden sm:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>

            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-violet-400">
              {siteConfig.available ? 'Available for innovative projects' : 'Currently exploring new roles'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight text-white"
          >
            Designing the <br />

            <span className="text-gradient inline-block pb-2">
              Future of Web
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl mb-8 md:mb-10 leading-relaxed font-light mx-auto lg:mx-0"
          >
            I'm <span className="text-white font-medium">Parth Prajapati</span>,
            a Python Django Full Stack Developer & Creative Frontend Engineer
            building high-performance scalable applications with immersive experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-5 md:gap-6"
          >
            <a
              href="#projects"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-violet-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>

            <div className="flex items-center gap-5">
              <a
                href="#contact"
                className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors py-4"
              >
                Let's Talk
                <MousePointer2
                  size={18}
                  className="group-hover:rotate-12 transition-transform"
                />
              </a>

              <div className="flex items-center gap-3 border-l border-white/10 pl-5">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[320px] sm:h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2">

          {/* OUTER GLOW */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] rounded-full bg-violet-500/20 blur-[120px]" />

          {/* OUTER ROTATING RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] rounded-full border border-white/10"
          />

          {/* INNER ROTATING RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-[350px] md:h-[350px] rounded-full border border-white/5"
          />

          {/* FLOATING PROFILE IMAGE */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
              },
            }}
            className="relative z-10 flex items-center justify-center"
          >
            <img
              src={profileImage}
              alt="Parth Prajapati Profile"
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/10 shadow-[0_0_60px_rgba(139,92,246,0.35)]"
              style={{
                mixBlendMode: 'normal',
                filter: 'none',
              }}
            />
          </motion.div>

          {/* FLOATING TECH BADGES */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute top-8 left-2 sm:left-8 md:top-16 px-3 py-2 rounded-xl glass text-[10px] sm:text-xs font-mono text-cyan-300"
          >
            🍃 Django
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 left-0 sm:left-4 px-3 py-2 rounded-xl glass text-[10px] sm:text-xs font-mono text-violet-300"
          >
            ⚛️ React
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
            className="absolute top-1/3 -right-2 sm:right-0 md:right-4 px-3 py-2 rounded-xl glass text-[10px] sm:text-xs font-mono text-amber-300"
          >
            🐍 Python
          </motion.div>
        </div>

      </div>

      {/* SCROLL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
          Scroll to Explore
        </span>

        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-violet-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

