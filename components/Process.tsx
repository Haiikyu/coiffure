'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Écoute',
    description: 'Chaque création commence par une conversation. Je prends le temps de comprendre votre personnalité, votre style de vie, vos attentes.',
  },
  {
    number: '02',
    title: 'Création',
    description: 'Guidé par une vision claire et quinze ans d\'expérience, je façonne votre coiffure avec précision et créativité.',
  },
  {
    number: '03',
    title: 'Révélation',
    description: 'Le résultat final est bien plus qu\'une coupe : c\'est une expression authentique de qui vous êtes.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Floating Background Element */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-32 md:mb-48"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="heading-2 text-charcoal-900 mb-6"
          >
            Ma philosophie
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-16 h-px bg-charcoal-900 mx-auto origin-center"
          />
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-32 md:space-y-48">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-16 md:gap-24 items-center`}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  className="text-[120px] md:text-[180px] font-extralight text-gold-500/20 leading-none"
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="text-4xl md:text-5xl font-extralight text-charcoal-900 mb-6"
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                  className="body-text max-w-md"
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
