import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6"
        >
          <div className="relative overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="text-6xl md:text-8xl font-display font-black tracking-tighter"
            >
              PARTH<span className="text-primary italic">.</span>
            </motion.h1>
          </div>
          
          <div className="w-full max-w-xs h-[1px] bg-white/5 relative rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
            />
          </div>
          
          <div className="mt-4 font-mono text-[10px] tracking-[0.5em] text-foreground/30 uppercase">
            Initialising Systems — {percent}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
