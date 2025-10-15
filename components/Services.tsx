'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    number: '01',
    title: 'Coupe',
    subtitle: 'Sculptée',
    description: 'Chaque coupe est une création sur-mesure, pensée pour révéler votre personnalité et sublimer votre morphologie.',
    price: '45€',
    duration: '45 min',
  },
  {
    number: '02',
    title: 'Coloration',
    subtitle: 'Naturelle',
    description: 'Des techniques douces et respectueuses pour une couleur vibrante qui révèle la profondeur et la lumière de vos cheveux.',
    price: '80€',
    duration: '90 min',
  },
  {
    number: '03',
    title: 'Soins',
    subtitle: 'Réparateurs',
    description: 'Traitements d\'exception qui nourrissent en profondeur et restaurent la vitalité naturelle de votre chevelure.',
    price: '60€',
    duration: '60 min',
  },
  {
    number: '04',
    title: 'Barbe',
    subtitle: 'Sculptée',
    description: 'Taille experte et entretien minutieux pour une barbe parfaitement maîtrisée, reflet d\'un style affirmé.',
    price: '30€',
    duration: '30 min',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="services" className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-charcoal-900/5 blur-3xl pointer-events-none"
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
            Prestations
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-16 h-px bg-charcoal-900 mx-auto origin-center"
          />
        </motion.div>

        {/* Services Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 1, delay: 0.2 + index * 0.15 }}
              whileHover="hover"
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white p-12 md:p-16 overflow-hidden h-full">
                {/* Hover Background */}
                <motion.div
                  variants={{
                    hover: { scaleY: 1 },
                  }}
                  initial={{ scaleY: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-charcoal-900 origin-bottom"
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                    className="text-7xl md:text-8xl font-extralight text-gold-500/10 group-hover:text-gold-500/20 transition-colors duration-500 leading-none mb-8"
                  >
                    {service.number}
                  </motion.div>

                  {/* Title & Subtitle */}
                  <div className="mb-8">
                    <h3 className="text-3xl md:text-4xl font-extralight text-charcoal-900 group-hover:text-cream-50 transition-colors duration-500 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-light">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base font-light text-charcoal-600 group-hover:text-cream-200 transition-colors duration-500 leading-relaxed mb-12">
                    {service.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between pt-8 border-t border-cream-200 group-hover:border-cream-50/20 transition-colors duration-500">
                    <span className="text-2xl md:text-3xl font-extralight text-charcoal-900 group-hover:text-cream-50 transition-colors duration-500">
                      {service.price}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-charcoal-500 group-hover:text-cream-300 transition-colors duration-500 font-light">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <motion.div
                  variants={{
                    hover: { scale: 1, opacity: 1 },
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute top-0 right-0 w-1 h-16 bg-gold-500 origin-top"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-center mt-24 md:mt-32 pt-16 border-t border-cream-200"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal-500 font-light mb-4">
            Sur rendez-vous uniquement
          </p>
          <p className="text-sm text-charcoal-600 font-light max-w-2xl mx-auto leading-relaxed">
            Chaque prestation débute par un diagnostic personnalisé pour garantir un résultat qui vous correspond parfaitement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
