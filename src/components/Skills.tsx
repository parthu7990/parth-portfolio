import React from 'react';
import { motion } from 'motion/react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Core",
      skills: ["Python", "Django", "PostgreSQL", "API Integration", "Node.js"]
    },
    {
      title: "Frontend Craft",
      skills: ["React", "TypeScript", "Three.js", "Framer Motion", "GSAP"]
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Tools & DevOps",
      skills: ["GitHub", "Git", "Vercel", "Linux", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-primary mb-4"
          >
            TECH OVERVIEW
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Weaponry of Choice</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all duration-500 overflow-hidden relative"
            >
              {/* Animated glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h4 className="text-lg font-display font-medium mb-6 text-white/90 relative z-10">{category.title}</h4>
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Background accent */}
              <div className="absolute -bottom-10 -right-10 text-8xl font-display font-black text-white/5 select-none transition-transform duration-700 group-hover:-translate-y-5">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Marquee (Mock) */}
        <div className="mt-20 overflow-hidden relative border-y border-white/5 py-10">
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap gap-20 items-center">
            {['PYTHON', 'DJANGO', 'REACT', 'POSTGRESQL', 'GIT', 'THREE.JS', 'GSAP', 'TAILWIND'].map((item) => (
              <span key={item} className="text-5xl md:text-7xl font-display font-black text-transparent stroke-white/20" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                {item}
              </span>
            ))}
            {/* Duplicate for seamless effect */}
            {['PYTHON', 'DJANGO', 'REACT', 'POSTGRESQL', 'GIT', 'THREE.JS', 'GSAP', 'TAILWIND'].map((item) => (
              <span key={`dup-${item}`} className="text-5xl md:text-7xl font-display font-black text-transparent stroke-white/20" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
