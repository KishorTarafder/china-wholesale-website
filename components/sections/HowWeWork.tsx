/**
 * How We Work Section Component for China Wholesale Website
 * 
 * Displays the 6-step process of how China Wholesale operates
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Search, 
  CheckCircle, 
  Package, 
  Plane, 
  MapPin 
} from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Process steps data
const processSteps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Requirement Collection',
    description: 'Share your product details, budget, and timeline with our team.',
  },
  {
    number: 2,
    icon: Search,
    title: 'Supplier Search & Quotation',
    description: 'We source from verified platforms and provide detailed quotations with images and specs.',
  },
  {
    number: 3,
    icon: CheckCircle,
    title: 'Order Confirmation & Payment',
    description: 'Once you approve, we proceed with procurement and inspection.',
  },
  {
    number: 4,
    icon: Package,
    title: 'Packaging & Shipping',
    description: 'Your goods are consolidated and shipped via your preferred method.',
  },
  {
    number: 5,
    icon: Plane,
    title: 'Customs Clearance',
    description: 'We manage all import formalities and updates during transit.',
  },
  {
    number: 6,
    icon: MapPin,
    title: 'Delivery to You',
    description: 'Your package is delivered to your doorstep or preferred pickup location in Bangladesh.',
  },
];

export const HowWeWork: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-secondary mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined 6-step process ensures quality and timely delivery from China to Bangladesh
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start space-x-6 group"
            >
              {/* Step Number & Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-brand-primary" />
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-primary to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience Our Process?
            </h3>
            <p className="text-white/90 mb-6">
              Start your sourcing journey today with a free consultation
            </p>
            <button className="bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork; 