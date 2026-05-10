import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const Experience = () => {
  const [activeTab, setActiveTab] = React.useState<'career' | 'education'>('career');

  const experiences = [
    {
      title: "Python Django Development Intern",
      company: "Tech Innovation IT Solution",
      period: "2026 – Present",
      location: "Ahmedabad, India",
      role: "Architecting scalable backend systems, optimizing database queries, and building RESTful APIs using Django Rest Framework for production-level applications.",
      type: "internship"
    }
  ];

  const education = [
    {
      degree: "MCA — Sankalchand Patel College of Engineering",
      period: "2024 - 2026",
      status: "Completed",
      desc: "Specialized in advanced web architectures and software engineering principles."
    },
    {
      degree: "B.Com — D.L. Patel Commerce College",
      period: "2021 - 2024",
      status: "Completed",
      desc: "Graduated with honors, focusing on business management and digital commerce."
    },
    {
      degree: "HSC — Shree Triveni High School",
      period: "2021",
      status: "Completed",
      desc: "Science Stream with focus on Mathematics and Computer Science."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-mono tracking-[0.4em] text-primary mb-4 uppercase"
          >
            Trajectory
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Career & Learning</h3>
        </div>

        {/* Tab System */}
        <div className="flex justify-center mb-12">
          <div className="glass p-1.5 rounded-2xl flex gap-2">
            <button
              onClick={() => setActiveTab('career')}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-display font-bold transition-all duration-300",
                activeTab === 'career' ? "bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]" : "text-white/40 hover:text-white"
              )}
            >
              Career Path
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-display font-bold transition-all duration-300",
                activeTab === 'education' ? "bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]" : "text-white/40 hover:text-white"
              )}
            >
              Learning Path
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'career' ? (
              <motion.div
                key="career"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {experiences.map((exp) => (
                  <div key={exp.title} className="glass p-8 md:p-12 rounded-[2.5rem] relative group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-display font-bold">{exp.title}</h4>
                        <p className="text-primary font-mono text-xs tracking-widest uppercase">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-white/50 leading-relaxed mb-8">{exp.role}</p>
                    <div className="flex flex-wrap gap-4 items-center text-xs font-mono text-white/30">
                      <div className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-primary" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-primary" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {education.map((edu) => (
                  <div key={edu.degree} className="glass p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-primary/40">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={28} className="text-white/60" />
                      </div>
                      <div>
                        <h4 className="text-lg font-display font-bold text-white mb-1">{edu.degree}</h4>
                        <p className="text-sm text-white/40">{edu.desc}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-widest">{edu.status}</span>
                      <span className="text-xs font-mono text-white/20">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
