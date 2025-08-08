'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * Gallery7 Component - Team Gallery Section (Placeholder)
 * 
 * Purpose: Placeholder component for team photos and office gallery
 * This component will be fully developed in future iterations
 */

export const Gallery7: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section bg-white dark:bg-transparent">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-brand-secondary mb-6">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Team photos and office gallery section - Coming Soon
          </p>
          <div className="mt-8 p-8 bg-gray-50 rounded-2xl dark:bg-white/10 dark:backdrop-blur-md dark:border dark:border-white/10">
            <p className="text-sm text-gray-500 dark:text-gray-100/70">Gallery7 Component - Team Gallery (In Development)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery7; 