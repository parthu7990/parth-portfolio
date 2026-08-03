import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ImageOff } from 'lucide-react';
import { cn } from '../lib/utils';
import { projects } from '../data/projects';

// Fallback gradient shown when a project image fails to load
const FallbackImage = ({ title, color }: { title: string; color: string }) => (
  <div
    className="absolute inset-0 w-full h-full flex items-center justify-center"
    style={{
      background: `linear-gradient(135deg, ${color}22, #0a0a14 60%, ${color}11)`,
    }}
  >
    <div className="text-center px-6">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4 backdrop-blur-xl">
        <ImageOff size={24} className="text-white/60" />
      </div>
      <p className="text-white font-display font-bold text-lg">{title}</p>
      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-2">
        Image not found
      </p>
    </div>
  </div>
);

const ProjectCard = ({ project, i }: { project: (typeof projects)[0]; i: number }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'group relative rounded-[2rem] overflow-hidden glass hover:border-primary/50 transition-all duration-700',
        project.size === 'large' && 'sm:col-span-2 lg:col-span-4 lg:row-span-2',
        project.size === 'medium' && 'lg:col-span-3 lg:row-span-1',
        project.size === 'small' && 'lg:col-span-2 lg:row-span-1',
        !project.size && 'lg:col-span-2 lg:row-span-1'
      )}
    >
      {/* Project image or fallback */}
      {!imgError ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 group-hover:blur-[4px] transition-all duration-700"
        />
      ) : (
        <FallbackImage title={project.title} color="#8b5cf6" />
      )}

      {/* Always-visible bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 opacity-75 group-hover:opacity-95 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 z-20 p-5 sm:p-8 flex flex-col justify-end">
        <div className="flex items-center flex-wrap gap-2 mb-3">
          {project.tech?.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-mono text-violet-200 border border-violet-400/30"
            >
              {t}
            </span>
          ))}
        </div>

        <h4 className="text-xl sm:text-2xl font-display font-bold mb-2 drop-shadow-lg bg-gradient-to-r from-violet-300 via-cyan-200 to-amber-200 bg-clip-text text-transparent">
          {project.title}
        </h4>

        <p className="text-sm text-zinc-100 font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 mb-6 line-clamp-2 hidden sm:block">
          {project.description}
        </p>

        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub`}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-violet-400/40 flex items-center justify-center text-violet-200 hover:bg-violet-500 hover:text-white hover:border-violet-300 transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} Live demo`}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-cyan-400/40 flex items-center justify-center text-cyan-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-300 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 px-5 sm:px-6 relative bg-[#08080d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-mono tracking-[0.4em] text-secondary mb-4 uppercase"
            >
              Portfolio
            </motion.h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
              Featured Creations
            </h3>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-md text-foreground/50 text-sm leading-relaxed"
          >
            A curated selection of my work across various domains, from complex
            backend architectures to experimental creative frontend.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px]">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
