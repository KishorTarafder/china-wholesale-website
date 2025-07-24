'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * Layout24 Component - Sourcing Services (Placeholder)
 * 
 * Purpose: Placeholder component for detailed sourcing and procurement services
 * This component will be fully developed in future iterations
 */

export const Layout24: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-brand-secondary mb-6">Product Sourcing Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detailed sourcing and procurement services section - Coming Soon
          </p>
          <div className="mt-8 p-8 bg-gray-50 rounded-2xl">
            <p className="text-sm text-gray-500">Layout24 Component - Sourcing Services (In Development)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Layout24; 