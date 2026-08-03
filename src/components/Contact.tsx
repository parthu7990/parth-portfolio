import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { siteConfig } from '../data/site';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24 px-5 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-mono tracking-[0.4em] text-accent mb-4 uppercase"
            >
              Connectivity
            </motion.h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8">
              Initiate a <span className="text-gradient inline-block pb-2">Collaboration</span>
            </h3>
            <p className="text-base sm:text-lg text-foreground/50 mb-12 mx-auto lg:mx-0 max-w-md">
              Whether you have a complex backend requirement or a vision for a world-class frontend experience, I'm ready to architect it.
            </p>

            <div className="space-y-8 max-w-md mx-auto lg:mx-0">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-6 group text-left">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-base sm:text-lg font-medium break-all">{siteConfig.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-base sm:text-lg font-medium">{siteConfig.location}</p>
                </div>
              </div>

              {/* Social row */}
              <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-foreground/50 hover:text-white hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-foreground/50 hover:text-white hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-foreground/50 hover:text-white hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] relative"
          >
            <form
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="How can I help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  placeholder="Your vision..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full group relative px-8 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl overflow-hidden hover:bg-primary hover:text-white transition-all duration-500 btn-shimmer"
              >
                <span className="flex items-center justify-center gap-2">
                  Dispatch Message <Send size={16} />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

