'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    alert('Merci. Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Floating Background Element */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-24 md:mb-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-gold-500 font-light mb-8"
          >
            Prenons contact
          </motion.div>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="heading-2 text-charcoal-900 mb-6"
          >
            Un projet en tête ?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-16 h-px bg-charcoal-900 mx-auto origin-center"
          />
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Name & Email Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-charcoal-500 font-light mb-4">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-cream-300 text-charcoal-900
                           focus:outline-none focus:border-gold-500 transition-colors duration-500
                           text-base font-light placeholder:text-charcoal-300"
                  placeholder="Votre nom"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-charcoal-500 font-light mb-4">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-cream-300 text-charcoal-900
                           focus:outline-none focus:border-gold-500 transition-colors duration-500
                           text-base font-light placeholder:text-charcoal-300"
                  placeholder="votre@email.com"
                />
              </motion.div>
            </div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-charcoal-500 font-light mb-4">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-0 py-4 bg-transparent border-b border-cream-300 text-charcoal-900
                         focus:outline-none focus:border-gold-500 transition-colors duration-500
                         resize-none text-base font-light placeholder:text-charcoal-300"
                placeholder="Parlez-nous de votre projet..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-8"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-16 py-5 overflow-hidden border border-charcoal-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <motion.div
                  className="absolute inset-0 bg-charcoal-900"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />
                <span className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-light text-charcoal-900 group-hover:text-cream-50 transition-colors duration-300">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </span>
              </motion.button>
            </motion.div>
          </form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="mt-32 pt-16 border-t border-cream-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 font-light mb-4">
                  Adresse
                </h4>
                <p className="text-sm text-charcoal-700 font-light leading-relaxed">
                  123 Avenue de l'Élégance<br />
                  75008 Paris
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 font-light mb-4">
                  Horaires
                </h4>
                <p className="text-sm text-charcoal-700 font-light leading-relaxed">
                  Lundi – Vendredi: 9h – 19h<br />
                  Samedi: 9h – 18h
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
