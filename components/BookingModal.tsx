'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: 'coupe', name: 'Coupe', duration: '1h', price: '45€' },
  { id: 'coloration', name: 'Coloration', duration: '2-3h', price: '80€+' },
  { id: 'soins', name: 'Soins & Traitements', duration: '1h30', price: '60€+' },
  { id: 'barbe', name: 'Barbe & Taille', duration: '30min', price: '30€' },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Réservation soumise:', formData);
    alert(`Merci ${formData.name} ! Votre demande de réservation a été envoyée. Nous vous confirmerons votre rendez-vous par email ou téléphone.`);

    setIsSubmitting(false);
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-900/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-cream-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-cream-200">
              {/* Header */}
              <div className="sticky top-0 bg-cream-50 border-b border-cream-200 p-4 sm:p-6 md:p-8 flex items-center justify-between z-10">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold-500 font-light mb-3">
                    Réservation
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extralight text-charcoal-900 mb-2">
                    Prendre rendez-vous
                  </h2>
                  <p className="text-sm text-charcoal-600 font-light leading-relaxed">
                    Remplissez le formulaire et nous vous confirmerons votre rendez-vous
                  </p>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream-200 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 text-charcoal-700" />
                </motion.button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-light text-charcoal-900 mb-2">
                      <User className="w-4 h-4" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-cream-300 text-charcoal-900
                               focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-light text-charcoal-900 mb-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-cream-300 text-charcoal-900
                               focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-light text-charcoal-900 mb-2">
                    <Phone className="w-4 h-4" />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-cream-300 text-charcoal-900
                             focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="text-sm font-light text-charcoal-900 mb-3 block">
                    Prestation souhaitée *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`relative flex items-center p-4 border cursor-pointer transition-all ${
                          formData.service === service.id
                            ? 'border-gold-500 bg-gold-50'
                            : 'border-cream-300 bg-white hover:border-gold-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                        <div className="flex-1">
                          <div className="font-light text-charcoal-900">{service.name}</div>
                          <div className="text-xs text-charcoal-600 mt-1">
                            {service.duration} • {service.price}
                          </div>
                        </div>
                        {formData.service === service.id && (
                          <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white" />
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="date" className="flex items-center gap-2 text-sm font-light text-charcoal-900 mb-2">
                      <Calendar className="w-4 h-4" />
                      Date souhaitée *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-white border border-cream-300 text-charcoal-900
                               focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="flex items-center gap-2 text-sm font-light text-charcoal-900 mb-2">
                      <Clock className="w-4 h-4" />
                      Heure souhaitée *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-cream-300 text-charcoal-900
                               focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="">Sélectionner une heure</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-light text-charcoal-900 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-cream-300 text-charcoal-900
                             focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Précisions sur votre demande..."
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <motion.button
                    type="button"
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-8 py-4 border border-charcoal-300 text-charcoal-700 hover:bg-cream-100 transition-colors text-xs uppercase tracking-[0.3em] font-light"
                  >
                    Annuler
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="flex-1 px-8 py-4 bg-charcoal-900 text-cream-50 hover:bg-charcoal-800 transition-colors text-xs uppercase tracking-[0.3em] font-light disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Confirmer le rendez-vous'}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
