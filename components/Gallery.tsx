'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop',
    title: 'Coupe moderne femme',
    category: 'Coupes',
  },
  {
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop',
    title: 'Balayage naturel',
    category: 'Colorations',
  },
  {
    url: 'https://images.unsplash.com/photo-1521490878127-5c91ce1bbb69?q=80&w=2000&auto=format&fit=crop',
    title: 'Coiffure élégante',
    category: 'Styles',
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2000&auto=format&fit=crop',
    title: 'Style contemporain',
    category: 'Coupes',
  },
  {
    url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2000&auto=format&fit=crop',
    title: 'Transformation complète',
    category: 'Colorations',
  },
  {
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop',
    title: 'Finesse & précision',
    category: 'Styles',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setSelectedImage(index);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev === null ? 0 : (prev + 1) % galleryImages.length));
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <>
      <section id="gallery" className="section-padding bg-charcoal-900">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="text-center mb-24 md:mb-32"
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="heading-2 text-cream-50 mb-6"
            >
              Showroom
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-16 h-px bg-gold-500 mx-auto origin-center"
            />
          </motion.div>

          {/* Gallery Grid - Showroom Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden bg-charcoal-800 cursor-pointer"
                onClick={() => openFullscreen(index)}
              >
                {/* Image */}
                <motion.img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/50 to-transparent
                           flex flex-col items-center justify-end p-8"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-center"
                  >
                    <h3 className="text-lg md:text-xl font-light text-cream-50 mb-1">
                      {image.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-500 font-light">
                      {image.category}
                    </p>
                    <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-cream-200">
                      Voir en détail
                    </div>
                  </motion.div>
                </motion.div>

                {/* Number Label */}
                <div className="absolute top-4 right-4 text-xs text-cream-50/40 font-light">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-charcoal-900/98 backdrop-blur-sm flex items-center justify-center"
            onClick={closeFullscreen}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={closeFullscreen}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                       text-cream-50 hover:text-gold-500 transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-8 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                       text-cream-50 hover:text-gold-500 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-8 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                       text-cream-50 hover:text-gold-500 transition-colors"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-7xl max-h-[85vh] mx-auto px-4 sm:px-8 md:px-16 lg:px-24"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[85vh] object-contain"
              />

              {/* Image Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-16 left-0 right-0 text-center"
              >
                <h3 className="text-2xl font-light text-cream-50 mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-500">
                  {galleryImages[selectedImage].category}
                </p>
              </motion.div>
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-cream-50/60 font-light tracking-wider"
            >
              {String(selectedImage + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
