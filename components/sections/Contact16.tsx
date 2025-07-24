'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MessageCircle, Phone, Mail, Clock, MapPin, Headphones } from 'lucide-react';

/**
 * Contact16 Component - Additional Contact Support
 * 
 * Purpose: Secondary contact section providing additional support channels,
 * emergency contact information, and customer service details
 * 
 * Features:
 * - Emergency contact information
 * - Support channels overview
 * - Response time guarantees
 * - Contact preferences
 * 
 * Used on: /contact page
 */

export const Contact16: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const handleWhatsAppContact = () => {
    const phoneNumber = "8801XXXXXXXXX";
    const message = "Hello! I need support with my China Wholesale inquiry.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      ref={ref} 
      className="section bg-white"
    >
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-6xl mx-auto"
        >
          
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm font-medium mb-6">
              <Headphones className="w-4 h-4 mr-2" />
              24/7 Customer Support
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">
              We're Here When You Need Us
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Multiple support channels to ensure you get help exactly when and how you need it. 
              Our commitment is to provide exceptional customer service at every step.
            </p>
          </motion.div>

          {/* Service Commitment */}
          <motion.div variants={fadeInUp}>
            <div className="bg-brand-primary rounded-2xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Our Service Commitment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold mb-2">&lt; 1hr</div>
                  <div className="text-white/80">WhatsApp Response</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24hrs</div>
                  <div className="text-white/80">Email Response</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">Emergency Support</div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-xl">
                <p className="text-white/90 text-sm leading-relaxed">
                  <strong>Quality Guarantee:</strong> If you're not completely satisfied with our service, 
                  we'll work with you until we make it right. Your success is our success.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods Summary */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-brand-secondary mb-6">
                Choose Your Preferred Contact Method
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleWhatsAppContact}
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </button>
                
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
                
                <a
                  href="mailto:support@chinawholesale.com.bd"
                  className="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors font-medium"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
                
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ramzannessa+Super+Market+Pallabi+Mirpur+12+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Office
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact16; 