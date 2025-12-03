import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 4) + 1; // Random increment
        return Math.min(prev + increment, 100);
      });
    }, 30); // Speed of loading

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div 
          className="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          {progress}%
        </div>
      </motion.div>

      <div className="w-64 md:w-96 h-1.5 bg-slate-800 rounded-full overflow-hidden relative shadow-[0_0_20px_rgba(6,182,212,0.1)]">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 flex items-center gap-2">
         <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
         <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">
            {progress < 30 ? 'Initializing Core...' : progress < 70 ? 'Loading Assets...' : 'System Ready'}
         </p>
      </div>
    </div>
  );
}