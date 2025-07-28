/**
 * Stats Section Component for China Wholesale Website
 * 
 * Displays key statistics and metrics with animated counters
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Package, 
  Clock, 
  Star, 
  Globe, 
  Shield 
} from 'lucide-react';
import { StatCard } from '@/components/ui/Card';
import { useIntersectionObserver, useCounterAnimation } from '@/hooks/useIntersectionObserver';

// Statistics data
const stats = [
  {
    icon: Users,
    value: 200,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Businesses trust our services',
    color: 'text-blue-600',
  },
  {
    icon: Package,
    value: 50,
    suffix: 'K+',
    label: 'Orders Delivered',
    description: 'Successfully completed projects',
    color: 'text-green-600',
  },
  {
    icon: Clock,
    value: 15,
    suffix: ' Days',
    label: 'Average Delivery',
    description: 'From China to Bangladesh',
    color: 'text-orange-600',
  },
  {
    icon: Star,
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Excellent service rating',
    color: 'text-yellow-600',
  },
  {
    icon: Globe,
    value: 1000,
    suffix: '+',
    label: 'Verified Suppliers',
    description: 'Trusted manufacturing partners',
    color: 'text-purple-600',
  },
  {
    icon: Shield,
    value: 100,
    suffix: '%',
    label: 'Quality Guaranteed',
    description: 'Products meet specifications',
    color: 'text-red-600',
  },
];

/**
 * Animated Counter Component for Stats
 */
interface AnimatedStatProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  delay?: number;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  suffix,
  label,
  description,
  icon: Icon,
  color,
  delay = 0,
}) => {
  const { ref, count } = useCounterAnimation(value, 2000, {
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-16 h-16 ${color} bg-current/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" />
        </div>

        {/* Value */}
        <div className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-2">
          {Math.floor(count)}{suffix}
        </div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-brand-secondary mb-2">
          {label}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-secondary dark:text-white mb-6">
            Our <span className="text-gradient">Track Record</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for themselves. See why businesses across Bangladesh trust us for their sourcing needs.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              icon={stat.icon}
              color={stat.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-brand-primary to-red-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join the Success Stories
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Be part of our growing community of successful businesses who have transformed their sourcing with China Wholesale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-all duration-200">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats; 