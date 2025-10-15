'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Cliente régulière',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    text: 'Un véritable artiste ! Chaque rendez-vous est un moment de détente et le résultat dépasse toujours mes attentes. Je ne confierais mes cheveux à personne d\'autre.',
  },
  {
    name: 'Marie Dubois',
    role: 'Cliente depuis 3 ans',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    text: 'Une écoute exceptionnelle et un sens du détail remarquable. Mon balayage est parfait et mes cheveux n\'ont jamais été aussi beaux. Un grand merci !',
  },
  {
    name: 'Claire Rousseau',
    role: 'Cliente fidèle',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    text: 'Le salon est magnifique, l\'accueil chaleureux et le savoir-faire inégalé. Je ressors toujours avec le sourire et une coiffure sublime.',
  },
  {
    name: 'Laura Petit',
    role: 'Cliente depuis 2 ans',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    text: 'Après des années de déceptions, j\'ai enfin trouvé LE coiffeur qui comprend parfaitement mes attentes. Un vrai professionnel passionné.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-cream-100">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="heading-2 text-charcoal-900 mb-4">Témoignages</h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto" />
          <p className="body-text mt-6 max-w-2xl mx-auto">
            La satisfaction de mes clients est ma plus belle récompense.
            Découvrez leurs expériences et transformations.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center z-10"
            >
              <Quote className="w-8 h-8 text-gold-600" />
            </motion.div>

            {/* Testimonial Card */}
            <div className="glass-effect p-8 md:p-12 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-gold-500 text-gold-500" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl font-light text-charcoal-800 mb-8 leading-relaxed italic"
              >
                "{currentTestimonial.text}"
              </motion.p>

              {/* Client Info */}
              <motion.div
                key={`client-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-gold-500">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-light text-charcoal-900">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-charcoal-600">{currentTestimonial.role}</p>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <motion.button
                onClick={prevTestimonial}
                className="pointer-events-auto -ml-6 w-12 h-12 flex items-center justify-center bg-charcoal-900 text-cream-50 hover:bg-gold-600 transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                className="pointer-events-auto -mr-6 w-12 h-12 flex items-center justify-center bg-charcoal-900 text-cream-50 hover:bg-gold-600 transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gold-600 w-8'
                    : 'bg-charcoal-300 hover:bg-charcoal-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
