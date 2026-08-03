import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificates } from '../data/certificates';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 md:py-24 px-5 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-mono tracking-[0.4em] text-accent mb-4 uppercase"
            >
              Recognition
            </motion.h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
              Certifications
            </h3>
          </div>
          <p className="max-w-xs text-white/40 text-sm font-light">
            A testament to continuous learning and commitment to engineering
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-accent/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-accent/5 transition-transform group-hover:scale-150 group-hover:rotate-12">
                <ShieldCheck size={100} />
              </div>

              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-accent/60 mb-2 block">
                {cert.type}
              </span>
              <h4 className="text-xl font-display font-bold mb-2 pr-12 line-clamp-2">
                {cert.title}
              </h4>
              <p className="text-sm text-white/40 mb-8">
                {cert.issuer} • {cert.date}
              </p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-white/10 pb-1"
                >
                  Verify Credentials <ExternalLink size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

