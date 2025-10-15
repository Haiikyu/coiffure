'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="about" className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Floating Background Element */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] rounded-full bg-charcoal-900/5 blur-3xl pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden order-2 lg:order-1 group"
          >
            {/* Image with parallax */}
            <motion.div
              style={{ y: imageY }}
              className="relative w-full h-full"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=2574&auto=format&fit=crop"
                alt="Portrait"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* Decorative Frame */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-px bg-charcoal-900/20 origin-left"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-px h-full bg-charcoal-900/20 origin-top"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 order-1 lg:order-2"
          >
            {/* Header */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xs uppercase tracking-[0.3em] text-gold-500 font-light mb-8"
              >
                À propos
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="heading-2 text-charcoal-900 mb-6"
              >
                Une approche
                <br />
                <span className="italic text-gold-500">personnalisée</span>
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w-16 h-px bg-charcoal-900 origin-left"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-lg md:text-xl font-extralight text-charcoal-900 leading-relaxed"
              >
                Depuis quinze ans, je consacre mon savoir-faire à révéler l'élégance naturelle de chaque client.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 1 }}
                className="body-text"
              >
                Chaque coupe est pensée comme une œuvre unique, en harmonie avec votre personnalité.
                Formé auprès des plus grands noms de la coiffure parisienne, j'ai développé une approche
                qui privilégie la simplicité et l'authenticité.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="body-text"
              >
                Mon atelier est un espace où le temps suspend son cours, où chaque geste est réfléchi,
                où le dialogue prime sur la technique. Car au-delà de l'expertise, c'est avant tout
                une rencontre humaine.
              </motion.p>
            </div>

            {/* Signature Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="pt-8 border-t border-cream-200"
            >
              <div className="flex items-center gap-6">
                <div className="text-5xl font-extralight text-charcoal-900/30 italic">15</div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-charcoal-500 font-light mb-1">
                    Années d'expérience
                  </p>
                  <p className="text-sm text-charcoal-600 font-light">
                    Au service de votre élégance
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
