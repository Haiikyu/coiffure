'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Scissors } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.h1
              className="text-[150px] md:text-[200px] font-light text-charcoal-900 leading-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              404
            </motion.h1>

            {/* Animated Scissors */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Scissors className="w-16 h-16 md:w-20 md:h-20 text-gold-500 opacity-20" strokeWidth={1} />
            </motion.div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="heading-3 text-charcoal-900 mb-4">
            Oups, cette page n'existe pas
          </h2>
          <p className="body-text max-w-md mx-auto">
            Il semblerait que vous ayez pris un mauvais virage.
            Pas de panique, je vous aide à retrouver votre chemin.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="btn-primary rounded-none uppercase tracking-widest text-sm inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn-secondary rounded-none uppercase tracking-widest text-sm inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Page précédente
          </button>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-cream-200"
        >
          <p className="text-sm text-charcoal-600 font-light">
            Besoin d'un rendez-vous ?{' '}
            <Link href="/#contact" className="text-gold-600 hover:underline">
              Contactez-moi
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
