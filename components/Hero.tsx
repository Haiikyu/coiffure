'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeroProps {
  onBookingClick?: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  const { scrollY } = useScroll();
  const [useVideo] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Advanced parallax
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only enable parallax on desktop (width > 768px)
      if (window.innerWidth > 768) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal-900">
      {/* Layered Parallax Background */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        {useVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop')",
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          />
        )}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/50 to-charcoal-900 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 via-transparent to-charcoal-900/60 z-10" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-cream-50/5 blur-3xl"
        />
      </motion.div>

      {/* Immersive Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Animated Title - Staggered Reveal */}
        <div className="space-y-4 md:space-y-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="overflow-hidden"
          >
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tighter text-cream-50 leading-[0.9]"
            >
              L'art
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="overflow-hidden"
          >
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-[0.9]"
            >
              <span className="text-cream-50">du </span>
              <span className="italic text-gold-500">cheveu</span>
            </motion.h1>
          </motion.div>

          {/* Subtitle with Fade */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.4 }}
            className="text-sm md:text-base text-cream-200 font-light tracking-[0.3em] uppercase mt-12"
          >
            Une expérience unique
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.8 }}
            className="pt-12"
          >
            <motion.button
              onClick={onBookingClick}
              className="group relative px-12 sm:px-16 py-4 sm:py-5 overflow-hidden"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-cream-50"
                initial={{ scaleX: 0 }}
                variants={{
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
              <span className="relative z-10 text-xs uppercase tracking-[0.3em] font-light text-cream-50 group-hover:text-charcoal-900 transition-colors duration-300">
                Découvrir
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator - Enhanced */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 group"
          aria-label="Défiler"
        >
          <div className="flex flex-col items-center gap-3">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-16 bg-gradient-to-b from-transparent via-cream-50/50 to-transparent"
            />
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream-50/60 font-light">
              Scroll
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none z-30 shadow-[inset_0_0_200px_rgba(0,0,0,0.7)]" />
    </section>
  );
}
