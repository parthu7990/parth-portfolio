import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Code2, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Frontend Exp', value: '3+' },
    { label: 'Projects', value: '15+' },
    { label: 'Frameworks', value: '10+' },
    { label: 'Happy Clients', value: '20+' },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden bg-[#050508]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_40%)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">

          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative group lg:order-1 order-2"
          >
            {/* DARK GLOW */}
            <div className="absolute inset-0 bg-violet-500/20 blur-[120px] rounded-full" />

            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-[2.5rem] overflow-hidden">

              <img
                src="https://cdn.phototourl.com/free/2026-05-10-1106c44b-e4fc-4988-ba45-ea9b0cb448ae.jpg"
                alt="Parth Prajapati"
                className="w-full aspect-[4/5] object-cover rounded-[2rem] transition-all duration-700 hover:scale-105"
                style={{
                  filter: 'none',
                  mixBlendMode: 'normal',
                }}
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-violet-400 mb-4">
              Discovery
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Turning Complex Ideas <br />
              Into <span className="text-cyan-400 italic">Digital Reality</span>
            </h3>

            <p className="text-lg text-zinc-400 leading-relaxed mb-6 font-light">
              Parth Prajapati is a passionate Full Stack Web Developer specializing in Python Django development, responsive frontend engineering, and immersive web experiences.
            </p>

            <p className="text-lg text-zinc-500 leading-relaxed mb-10 italic">
              "I thrive on solving complex logic problems and building interfaces that don't just work, but tell a story through motion and interaction."
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h4 className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </h4>

                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: <Terminal size={28} />,
              title: 'Backend Mastery',
              color: 'bg-violet-500/20 text-violet-400',
            },
            {
              icon: <Code2 size={28} />,
              title: 'Creative Frontend',
              color: 'bg-cyan-500/20 text-cyan-400',
            },
            {
              icon: <Globe size={28} />,
              title: 'SaaS Engineering',
              color: 'bg-amber-500/20 text-amber-400',
            },
            {
              icon: <Sparkles size={28} />,
              title: 'Digital Innovation',
              color: 'bg-white/10 text-white',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}
              >
                {item.icon}
              </div>

              <h5 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h5>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Premium scalable modern web engineering with immersive UI experiences.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;