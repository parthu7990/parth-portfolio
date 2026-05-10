import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-mono tracking-[0.4em] text-accent mb-4 uppercase"
            >
              Connectivity
            </motion.h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Initiate a Collaboration</h3>
            <p className="text-lg text-foreground/50 mb-12">
              Whether you have a complex backend requirement or a vision for a world-class frontend experience, I'm ready to architect it.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-medium">parth20098@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-10 rounded-[2.5rem] relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Subject</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm"
                  placeholder="How can I help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  placeholder="Your vision..."
                ></textarea>
              </div>
              <button className="w-full group relative px-8 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl overflow-hidden hover:bg-primary hover:text-white transition-all duration-500">
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
