'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const transformations = [
  {
    before: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    title: 'Transformation Balayage',
    description: 'Passage d\'un châtain classique à un balayage lumineux',
    duration: '3h30',
  },
  {
    before: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1521490878127-5c91ce1bbb69?q=80&w=800&auto=format&fit=crop',
    title: 'Coupe & Style',
    description: 'Refonte complète avec coupe structurée',
    duration: '2h00',
  },
  {
    before: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    title: 'Coloration Platine',
    description: 'Décoloration et tonification professionnelle',
    duration: '4h00',
  },
];

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentTransformation = transformations[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="before-after" className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="heading-2 text-charcoal-900 mb-4">Avant / Après</h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto" />
          <p className="body-text mt-6 max-w-2xl mx-auto">
            Découvrez quelques transformations réalisées avec passion.
            Chaque client est unique, chaque résultat l'est tout autant.
          </p>
        </motion.div>

        {/* Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900 mb-8">
            {/* After Image (Full) */}
            <img
              src={currentTransformation.after}
              alt="Après transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentTransformation.before}
                alt="Avant transformation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold-500 z-10 cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-xl">
                <div className="flex gap-1">
                  <ChevronLeft className="w-4 h-4 text-cream-50" />
                  <ChevronRight className="w-4 h-4 text-cream-50" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-charcoal-900/80 backdrop-blur-sm text-cream-50 px-4 py-2 text-sm font-light">
              Avant
            </div>
            <div className="absolute top-4 right-4 bg-gold-600/80 backdrop-blur-sm text-cream-50 px-4 py-2 text-sm font-light">
              Après
            </div>

            {/* Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          {/* Transformation Info */}
          <div className="text-center mb-8">
            <h3 className="heading-3 text-charcoal-900 mb-2">
              {currentTransformation.title}
            </h3>
            <p className="body-text mb-1">{currentTransformation.description}</p>
            <p className="text-sm text-gold-600 font-light">
              Durée : {currentTransformation.duration}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center border border-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gold-600 w-8'
                      : 'bg-charcoal-300 hover:bg-charcoal-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center border border-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
