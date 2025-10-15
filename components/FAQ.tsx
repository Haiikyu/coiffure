'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Comment prendre rendez-vous ?',
    answer: 'Vous pouvez prendre rendez-vous directement via le formulaire de réservation sur le site, par téléphone au +33 1 23 45 67 89, ou par WhatsApp. Je vous confirmerai votre créneau dans les plus brefs délais.',
  },
  {
    question: 'Combien de temps dure une séance de coloration ?',
    answer: 'La durée varie selon la technique choisie : entre 2h pour une coloration simple et 4h pour une décoloration complète ou un balayage élaboré. Je prends toujours le temps nécessaire pour un résultat impeccable.',
  },
  {
    question: 'Utilisez-vous des produits respectueux des cheveux ?',
    answer: 'Absolument. Je travaille exclusivement avec des marques professionnelles haut de gamme (L\'Oréal Professionnel, Kérastase, Olaplex) qui respectent la santé de vos cheveux tout en offrant des résultats exceptionnels.',
  },
  {
    question: 'Puis-je annuler ou modifier mon rendez-vous ?',
    answer: 'Oui, je vous demande simplement de me prévenir au moins 24h à l\'avance par courtoisie. Cela me permet de proposer le créneau à d\'autres clients.',
  },
  {
    question: 'Proposez-vous des conseils d\'entretien ?',
    answer: 'Bien sûr ! À chaque séance, je vous donne des conseils personnalisés sur l\'entretien de votre coiffure, les produits adaptés à votre type de cheveux, et les gestes à adopter au quotidien.',
  },
  {
    question: 'Acceptez-vous les paiements par carte ?',
    answer: 'Oui, j\'accepte les paiements par carte bancaire, espèces et également les virements. Les tarifs sont communiqués avant chaque prestation.',
  },
  {
    question: 'Faut-il venir avec les cheveux propres ?',
    answer: 'Pour une coloration, il est préférable de venir avec les cheveux non lavés (24-48h). Pour une coupe, vous pouvez venir avec les cheveux propres ou non, je procède toujours à un shampooing avant la coupe.',
  },
  {
    question: 'Proposez-vous des forfaits ou abonnements ?',
    answer: 'Je propose des forfaits sur-mesure pour les clients réguliers. N\'hésitez pas à me contacter pour discuter d\'une formule adaptée à vos besoins et votre budget.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="heading-2 text-charcoal-900 mb-4">Questions fréquentes</h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto" />
          <p className="body-text mt-6 max-w-2xl mx-auto">
            Vous avez des questions ? Retrouvez ici les réponses aux interrogations
            les plus courantes de mes clients.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-cream-200 bg-white overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-cream-50 transition-colors"
              >
                <span className="text-lg font-light text-charcoal-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gold-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gold-600" />
                  )}
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 body-text border-t border-cream-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="body-text mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a href="#contact" className="btn-secondary rounded-none uppercase tracking-widest text-sm">
            Contactez-moi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
