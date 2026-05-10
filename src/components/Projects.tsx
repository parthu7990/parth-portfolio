import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code2, Layers } from 'lucide-react';
import { cn } from '../lib/utils';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  size: string;
  link: string;
  github: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
        setProjects(items);
        setLoading(false);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, 'projects');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 relative bg-[#08080d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-mono tracking-[0.4em] text-secondary mb-4 uppercase"
            >
              Portfolio
            </motion.h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured Creations</h3>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-md text-foreground/50 text-sm leading-relaxed"
          >
            A curated selection of my work across various domains, from complex backend architectures to experimental creative frontend.
          </motion.p>
        </div>

        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : projects.length === 0 ? (
          <div className="glass p-20 rounded-[2rem] text-center">
            <p className="text-white/30 font-mono uppercase tracking-widest text-xs">No projects found. Login as admin to add some.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[250px]">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "group relative rounded-[2rem] overflow-hidden glass hover:border-primary/50 transition-all duration-700",
                  project.size === "large" && "lg:col-span-4 lg:row-span-2",
                  project.size === "medium" && "lg:col-span-3 lg:row-span-1",
                  project.size === "small" && "lg:col-span-2 lg:row-span-1",
                  !project.size && "lg:col-span-2 lg:row-span-1"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    {project.tech?.map((t) => (
                      <span key={t} className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-mono text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h4>
                  <p className="text-sm text-white/50 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
