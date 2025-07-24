/**
 * Call to Action Section Component for China Wholesale Website
 * 
 * Final CTA section to encourage visitors to take action
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Mail, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const CallToAction: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  /**
   * Handle WhatsApp contact
   */
  const handleWhatsAppContact = () => {
    const phoneNumber = '+8801XXXXXXXXX';
    const message = encodeURIComponent('Hi! I would like to get a quote for my sourcing requirements.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section ref={ref} className="section-lg">
      <div className="container">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-red-600 rounded-3xl overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-16 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6 }}
            >
              {/* Sparkle Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Sourcing?
              </h2>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 200+ successful businesses who trust China Wholesale for reliable, 
                cost-effective sourcing from China to Bangladesh.
              </p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
              >
                {[
                  'Free Consultation & Quote',
                  'Verified Suppliers Only',
                  '7-15 Days Fast Delivery',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span className="text-white/90 font-medium">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link href="/service-query-form">
                  <button className="bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 group">
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </Link>

                <button
                  onClick={handleWhatsAppContact}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-brand-primary transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </button>
              </motion.div>

              {/* Contact Options */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="border-t border-white/20 pt-8"
              >
                <p className="text-white/80 mb-6">
                  Or reach out to us directly:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  {/* Phone */}
                  <a
                    href="tel:+8801XXXXXXXXX"
                    className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+880 1XXX-XXXXXX</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:support@chinawholesale.com.bd"
                    className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                    <span>support@chinawholesale.com.bd</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>Trusted by 200+ businesses across Bangladesh</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 