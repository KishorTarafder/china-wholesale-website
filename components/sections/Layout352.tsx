'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * Layout352 Component - Timeline & Journey Section (Placeholder)
 * 
 * Purpose: Placeholder component for company timeline and journey section
 * This component will be fully developed in future iterations
 */

export const Layout352: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section bg-gray-50 dark:bg-transparent">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-brand-secondary mb-6">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Timeline and company journey section - Coming Soon
          </p>
          <div className="mt-8 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:backdrop-blur-md">
            <p className="text-sm text-gray-500 dark:text-gray-100/70">Layout352 Component - Timeline & Journey (In Development)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Layout352; 