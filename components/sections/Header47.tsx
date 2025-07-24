'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Users, Target, Heart } from 'lucide-react';

/**
 * Header47 Component - About Us Hero Section
 * 
 * Purpose: Main hero section for the About Us page featuring company introduction,
 * mission statement, and key values with engaging visuals and animations
 * 
 * Features:
 * - Animated entrance effects using Framer Motion
 * - Company introduction with mission statement
 * - Key values visualization with icons
 * - Call-to-action for engagement
 * - Responsive design for all screen sizes
 * 
 * Used on: /about-us page
 */

interface ValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const companyValues: ValueItem[] = [
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Your success is our priority. We build lasting relationships through exceptional service.",
    color: "text-blue-600"
  },
  {
    icon: Target,
    title: "Quality Focused",
    description: "We ensure every product meets the highest standards through rigorous quality control.",
    color: "text-green-600"
  },
  {
    icon: Heart,
    title: "Trust & Transparency",
    description: "Honest communication and transparent pricing in every business interaction.",
    color: "text-brand-primary"
  }
];

export const Header47: React.FC = () => {
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

  return (
    <section 
      ref={ref} 
      className="section-lg bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-medium">
                <span className="w-2 h-2 bg-brand-primary rounded-full mr-2 animate-pulse"></span>
                About China Wholesale
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-secondary leading-tight">
                Your Trusted Bridge Between 
                <span className="block text-brand-primary">China & Bangladesh</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our inception, <strong>China Wholesale</strong> has been dedicated to simplifying 
                international trade for Bangladeshi businesses. We combine deep market knowledge with 
                innovative logistics solutions to make global sourcing accessible, reliable, and profitable.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experts bridges cultural and business gaps, ensuring that every transaction 
                is smooth, transparent, and delivers exceptional value to our clients.
              </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div variants={fadeInUp} className="p-6 bg-white border-l-4 border-brand-primary rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-brand-secondary mb-2">Our Mission</h3>
              <p className="text-gray-600 italic">
                "To empower Bangladeshi entrepreneurs and businesses by providing seamless access to global 
                markets through trusted sourcing, quality assurance, and reliable logistics."
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                icon={<ArrowRight size={20} />} 
                iconPosition="right"
                className="shadow-brand hover:shadow-brand-lg"
              >
                Learn Our Story
              </Button>
            </motion.div>
          </motion.div>

          {/* Values Side */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="text-center lg:text-left mb-8">
              <h2 className="text-2xl font-bold text-brand-secondary mb-3">Our Core Values</h2>
              <p className="text-gray-600">The principles that guide everything we do</p>
            </motion.div>

            <div className="space-y-6">
              {companyValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gray-50 ${value.color}`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-brand-secondary mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
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

export default Header47; 