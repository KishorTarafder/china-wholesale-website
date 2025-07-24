/**
 * Client Logos Section Component for China Wholesale Website
 * 
 * Displays trusted client logos and partner companies
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Client data - Replace with actual client logos
const clients = [
  { name: 'M.S. Traders', logo: 'MS' },
  { name: 'Arif Trading', logo: 'AT' },
  { name: 'Diva Store BD', logo: 'DS' },
  { name: 'TechLab Bangladesh', logo: 'TL' },
  { name: 'Fashion Point', logo: 'FP' },
  { name: 'Smart Electronics', logo: 'SE' },
  { name: 'Globe Imports', logo: 'GI' },
  { name: 'Style Zone', logo: 'SZ' },
];

// Industry sectors served
const sectors = [
  'Fashion & Apparel',
  'Electronics & Gadgets',
  'Home & Kitchen',
  'Cosmetics & Health',
  'Corporate Gifts',
  'E-commerce & F-commerce',
];

export const ClientLogos: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-secondary mb-6">
            Trusted by <span className="text-gradient">200+ Businesses</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startups to established enterprises, businesses across Bangladesh rely on us for their sourcing needs.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 text-center group-hover:-translate-y-2">
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-lg flex items-center justify-center text-xl font-bold mb-4 mx-auto group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    {client.logo}
                  </div>
                  {/* Client Name */}
                  <h3 className="text-sm font-semibold text-gray-700 group-hover:text-brand-primary transition-colors duration-300">
                    {client.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-brand-secondary mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white px-6 py-3 rounded-full shadow-soft border border-gray-100 text-gray-700 font-medium hover:bg-brand-primary hover:text-white transition-all duration-300 cursor-default"
              >
                {sector}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">200+</div>
                <div className="text-gray-600">Trusted Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">50K+</div>
                <div className="text-gray-600">Orders Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">15 Days</div>
                <div className="text-gray-600">Average Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">99%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <blockquote className="text-xl md:text-2xl text-gray-700 italic max-w-4xl mx-auto leading-relaxed">
            "China Wholesale has been our reliable sourcing partner for over two years. 
            Transparent, fast, and dependable."
          </blockquote>
          <cite className="block mt-4 text-brand-primary font-semibold">
            — Rahman Ahmed, CEO of M.S. Traders
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos; 