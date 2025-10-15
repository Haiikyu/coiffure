'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import Loader from '@/components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <>
          {/* Navbar */}
          <Navbar onBookingClick={handleBookingClick} />

          {/* Booking Modal */}
          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={handleCloseBookingModal}
          />

          {/* Page Sections */}
          <main className="min-h-screen">
            <Hero onBookingClick={handleBookingClick} />
            <About />
            <Process />
            <Gallery />
            <Services />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
