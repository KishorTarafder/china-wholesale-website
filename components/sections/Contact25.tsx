'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * Contact25 Component - Service Query Introduction (Placeholder)
 * 
 * Purpose: Placeholder component for service query form introduction
 * This component will be fully developed in future iterations
 */

export const Contact25: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-brand-secondary mb-6">Service Query Form</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Service query introduction and benefits section - Coming Soon
          </p>
          <div className="mt-8 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Contact25 Component - Service Query Introduction (In Development)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact25; 