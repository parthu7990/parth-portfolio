import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  type: string;
}

const Certificates = () => {
  const [certifications, setCertifications] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'certificates'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Certificate));
        setCertifications(items);
        setLoading(false);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, 'certificates');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <section id="certificates" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-mono tracking-[0.4em] text-accent mb-4 uppercase"
            >
              Recognition
            </motion.h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Certifications</h3>
          </div>
          <p className="max-w-xs text-white/40 text-sm font-light">
            A testament to continuous learning and commitment to engineering excellence.
          </p>
        </div>

        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        ) : certifications.length === 0 ? (
           <div className="glass p-20 rounded-[2rem] text-center">
            <p className="text-white/30 font-mono uppercase tracking-widest text-xs">No certificates found. Login as admin to add some.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
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
                
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent/60 mb-2 block">{cert.type}</span>
                <h4 className="text-xl font-display font-bold mb-2 pr-12 line-clamp-2">{cert.title}</h4>
                <p className="text-sm text-white/40 mb-8">{cert.issuer} • {cert.date}</p>
                
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-white/10 pb-1"
                  >
                    Verify Credentials <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
