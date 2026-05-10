import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-[#050508]">

      {/* DARK BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.18),transparent_45%)]" />

      {/* EXTRA DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
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

            <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
              Available for innovative projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight text-white"
          >
            Designing the <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-400">
              Future of Web
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed font-light"
          >
            I'm <span className="text-white font-medium">Parth Prajapati</span>,
            a Python Django Full Stack Developer & Creative Frontend Engineer
            building high-performance scalable applications with immersive experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-violet-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </a>

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
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        {/* RIGHT IMAGE */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">

          {/* OUTER GLOW */}
          <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] rounded-full bg-violet-500/20 blur-[120px]" />

          {/* OUTER ROTATING RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-72 h-72 md:w-[420px] md:h-[420px] rounded-full border border-white/10"
          />

          {/* INNER ROTATING RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-64 h-64 md:w-[350px] md:h-[350px] rounded-full border border-white/5"
          />

          {/* FLOATING PROFILE IMAGE */}
          <motion.div
            animate={{
              rotateY: [0, 360],
              y: [0, -10, 0],
            }}
            transition={{
              rotateY: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
              y: {
                duration: 5,
                repeat: Infinity,
              },
            }}
            className="relative z-10 flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="https://cdn.phototourl.com/member/2026-05-10-b17ced9e-d1c5-4829-947a-1f6c89ec2640.jpg"
              alt="Profile"
              className="w-44 h-44 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/10 shadow-[0_0_60px_rgba(139,92,246,0.35)]"
              style={{
                mixBlendMode: "normal",
                filter: "none",
              }}
            />
          </motion.div>
        </div>{/* RIGHT IMAGE */}

      </div>

      {/* SCROLL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
          Scroll to Explore
        </span>

        <div className="w-[1px] h-12 bg-gradient-to-b from-violet-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;