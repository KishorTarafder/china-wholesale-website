'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

/**
 * Cta7 Component - Service Inquiry CTA (Placeholder)
 * 
 * Purpose: Call-to-action component for service inquiries and conversions
 * Basic implementation for immediate functionality
 */

export const Cta7: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const handleWhatsAppContact = () => {
    const phoneNumber = "8801XXXXXXXXX";
    const message = "Hello! I'm interested in your services. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={ref} className="section bg-brand-primary dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900">
      <div className="container">
        {/* Dark mode electric blue accent overlay */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-cyan-500/10 rounded-xl"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Sourcing Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with our expert team and let's bring your product ideas to life with our reliable sourcing services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="bg-white text-brand-primary hover:bg-gray-100 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              icon={<MessageCircle size={20} />}
              onClick={handleWhatsAppContact}
              className="border-white text-white hover:bg-white hover:text-brand-primary dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
            >
              WhatsApp Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta7; 