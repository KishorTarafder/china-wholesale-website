/**
 * Testimonials Section Component for China Wholesale Website
 * 
 * Displays client testimonials and reviews in a carousel format
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TestimonialCard } from '@/components/ui/Card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Testimonials data
const testimonials = [
  {
    content: "China Wholesale has been our reliable sourcing partner for over two years. Their transparent communication and quality service have helped us grow our business significantly.",
    author: {
      name: "Rahman Ahmed",
      role: "CEO",
      company: "M.S. Traders",
    },
    rating: 5,
  },
  {
    content: "Fast delivery, professional updates, and zero product issues. They handle everything from sourcing to customs clearance perfectly. Highly recommended!",
    author: {
      name: "Fatima Khan",
      role: "Owner",
      company: "Arif Trading",
    },
    rating: 5,
  },
  {
    content: "Thanks to China Wholesale, we now import confidently every month. Their team is knowledgeable and always available to answer our questions.",
    author: {
      name: "Shahid Hassan",
      role: "Manager",
      company: "Diva Store BD",
    },
    rating: 5,
  },
  {
    content: "Trustworthy service for our large corporate orders. They maintain quality standards and deliver on time, every time.",
    author: {
      name: "Nasir Uddin",
      role: "Procurement Head",
      company: "TechLab Bangladesh",
    },
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-brand-secondary ml-3">4.9</span>
            <span className="text-gray-600">from 150+ reviews</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TestimonialCard
                content={testimonial.content}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">50K+</div>
                <div className="text-gray-600">Orders Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Join our satisfied clients and experience reliable sourcing today
          </p>
          <button className="btn-primary">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 