'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-cream-50 flex items-center justify-center"
    >
      {/* Minimal Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center space-y-8"
      >
        <h1 className="text-2xl md:text-3xl font-extralight tracking-[0.3em] text-charcoal-900 uppercase">
          Coiffeur
        </h1>

        {/* Simple Line Animation */}
        <div className="w-48 h-px bg-cream-200 mx-auto overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/3 bg-charcoal-400"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
