'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Target, Users, Globe, Lightbulb } from 'lucide-react';

/**
 * Layout41 Component - Company Story & Mission Section
 * 
 * Purpose: Displays the company's founding story, mission statement,
 * and core business philosophy with engaging visuals
 * 
 * Features:
 * - Company founding story with timeline
 * - Mission and vision statements
 * - Core business values
 * - Call-to-action for engagement
 * 
 * Used on: /about-us page
 */

export const Layout41: React.FC = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  const companyValues = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To simplify global trade for Bangladeshi businesses by providing reliable, transparent, and efficient China-to-Bangladesh sourcing solutions."
    },
    {
      icon: Users,
      title: "Our Vision",
      description: "To become the most trusted bridge between China and Bangladesh, empowering local businesses to compete globally."
    },
    {
      icon: Globe,
      title: "Our Purpose",
      description: "Breaking down barriers in international trade and making global sourcing accessible to businesses of all sizes."
    },
    {
      icon: Lightbulb,
      title: "Our Innovation",
      description: "Continuously improving our processes and technology to deliver faster, safer, and more cost-effective sourcing solutions."
    }
  ];

  return (
    <section 
      ref={ref} 
      className="section bg-white dark:bg-transparent"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium dark:bg-blue-500/20 dark:text-blue-400 dark:border dark:border-white/10 dark:backdrop-blur-md">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Our Story
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-secondary leading-tight">
                Building Bridges Between 
                <span className="block text-brand-primary">Markets & Dreams</span>
              </h2>
            </motion.div>

            {/* Story Content */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-100/90">
                Founded with a simple yet powerful vision, <strong>China Wholesale</strong> emerged from 
                the recognition that Bangladeshi businesses needed a reliable partner to navigate the 
                complexities of international sourcing.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-100/90">
                What started as a small operation has grown into Bangladesh's most trusted 
                China-to-BD sourcing company, serving over 200+ businesses across diverse industries. 
                Our success is built on relationships, trust, and an unwavering commitment to 
                our clients' success.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-100/90">
                Today, we continue to innovate and expand our services, always staying true to our 
                founding principle: <em>making global trade simple, transparent, and accessible for everyone.</em>
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 py-8 border-t border-b border-gray-100 dark:border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary mb-1 dark:text-blue-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-100/90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary mb-1 dark:text-blue-400">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-100/90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary mb-1 dark:text-blue-400">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-100/90">Products Sourced</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                icon={<ArrowRight size={20} />} 
                iconPosition="right"
                className="shadow-brand hover:shadow-brand-lg"
              >
                Start Your Journey
              </Button>
            </motion.div>
          </motion.div>

          {/* Values Side */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            {/* Values Header */}
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                What Drives Us Forward
              </h3>
              <p className="text-gray-600 dark:text-gray-100/90">
                Our core values and principles that guide every decision and interaction
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="space-y-6">
              {companyValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 dark:bg-white/10 dark:hover:bg-white/15 dark:border dark:border-white/10 dark:shadow-none dark:backdrop-blur-md"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm dark:bg-white/10">
                        <Icon className="w-6 h-6 text-brand-primary dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-brand-secondary mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-100/90">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Layout41; 