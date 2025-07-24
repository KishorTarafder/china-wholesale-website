'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Package, Shield, Truck, Search, Settings, CheckCircle } from 'lucide-react';

/**
 * Header44 Component - Services Page Hero Section
 * 
 * Purpose: Hero section for the Services page introducing our comprehensive
 * sourcing and logistics solutions with visual service highlights
 * 
 * Features:
 * - Animated service icons with hover effects
 * - Service introduction with key benefits
 * - Responsive grid layout
 * - Scroll-triggered animations
 * 
 * Used on: /services page and /service-query-form page
 */

interface ServiceHighlight {
  icon: React.ElementType;
  title: string;
  color: string;
}

const serviceHighlights: ServiceHighlight[] = [
  { icon: Search, title: "Product Sourcing", color: "text-blue-600" },
  { icon: Shield, title: "Quality Control", color: "text-green-600" },
  { icon: Package, title: "Consolidation", color: "text-purple-600" },
  { icon: Truck, title: "Shipping Solutions", color: "text-brand-primary" },
  { icon: Settings, title: "Custom Orders", color: "text-orange-600" },
  { icon: CheckCircle, title: "End-to-End Service", color: "text-emerald-600" }
];

export const Header44: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

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
      className="section-lg bg-gradient-to-br from-brand-primary/5 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-medium mb-6">
              <Package className="w-4 h-4 mr-2" />
              Complete Sourcing Solutions
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-secondary leading-tight">
              Comprehensive Services for 
              <span className="block text-brand-primary">Seamless Global Trade</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From product discovery to doorstep delivery, we handle every aspect of your 
              China-to-Bangladesh sourcing journey with expertise, transparency, and care.
            </p>
          </motion.div>

          {/* Service Highlights Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16"
          >
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100 group-hover:border-brand-primary/20">
                    <div className={`inline-flex p-4 rounded-xl bg-gray-50 ${service.color} group-hover:scale-110 transition-transform duration-300 mb-4`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-sm font-semibold text-brand-secondary group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeInUp} className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">200+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">50K+</div>
                <div className="text-gray-600">Products Sourced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">99%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeInUp} className="pt-8">
            <p className="text-gray-600 text-lg">
              Ready to streamline your sourcing process? 
              <span className="text-brand-primary font-semibold"> Let's discuss your requirements.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header44; 