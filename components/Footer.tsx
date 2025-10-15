'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer className="bg-charcoal-900 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-800 opacity-50" />

      <div className="relative z-10 px-6 md:px-16 lg:px-32 py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-24">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-extralight text-cream-50 mb-4">
                  L'art du cheveu
                </h3>
                <div className="w-12 h-px bg-gold-500 mb-6" />
                <p className="text-sm text-cream-200 font-light leading-relaxed">
                  Quinze ans d'expertise au service de votre élégance naturelle.
                  Un savoir-faire d'exception pour révéler votre personnalité.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h4 className="text-xs uppercase tracking-[0.3em] text-gold-500 font-light mb-8">
                  Contact
                </h4>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@coiffeur.fr"
                    className="flex items-center gap-3 text-sm text-cream-200 hover:text-cream-50 transition-colors duration-300 font-light group"
                  >
                    <Mail className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
                    contact@coiffeur.fr
                  </a>
                  <a
                    href="tel:+33123456789"
                    className="flex items-center gap-3 text-sm text-cream-200 hover:text-cream-50 transition-colors duration-300 font-light group"
                  >
                    <Phone className="w-4 h-4 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
                    +33 1 23 45 67 89
                  </a>
                  <div className="flex items-start gap-3 text-sm text-cream-200 font-light">
                    <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>
                      123 Avenue de l'Élégance
                      <br />
                      75008 Paris
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Hours & Social */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <h4 className="text-xs uppercase tracking-[0.3em] text-gold-500 font-light mb-8">
                  Horaires
                </h4>
                <div className="space-y-2 text-sm text-cream-200 font-light mb-12">
                  <p>Lundi – Vendredi: 9h – 19h</p>
                  <p>Samedi: 9h – 18h</p>
                  <p className="text-cream-300/50">Dimanche: Fermé</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 flex items-center justify-center border border-cream-50/20 hover:border-gold-500 text-cream-50 hover:text-gold-500 transition-colors duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 flex items-center justify-center border border-cream-50/20 hover:border-gold-500 text-cream-50 hover:text-gold-500 transition-colors duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-12 border-t border-cream-50/10"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-cream-300/50 font-light">
                  © {currentYear} L'art du cheveu — Tous droits réservés
                </p>
                <div className="flex gap-8 text-xs text-cream-300/50 font-light">
                  <a href="#" className="hover:text-cream-50 transition-colors duration-300">
                    Mentions légales
                  </a>
                  <a href="#" className="hover:text-cream-50 transition-colors duration-300">
                    Confidentialité
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
