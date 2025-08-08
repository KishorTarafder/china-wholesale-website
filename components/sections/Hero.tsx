/**
 * Hero Section Component for China Wholesale Website
 * 
 * A stunning hero section featuring:
 * - Animated headline and subheadline
 * - Call-to-action buttons
 * - Background gradient and patterns
 * - Scroll animations
 * - Key statistics
 * - Trust indicators
 * - Mobile-responsive design
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  CheckCircle,
  Truck,
  Shield,
  Clock,
  Star,
  Users,
  Package,
  Globe,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { Button, CTAButton } from '@/components/ui/Button';
import { StatCard } from '@/components/ui/Card';
import { useIntersectionObserver, useCounterAnimation } from '@/hooks/useIntersectionObserver';

// Trust indicators data
const trustIndicators = [
  {
    icon: Shield,
    text: 'Verified Suppliers',
    description: '1000+ vetted partners',
  },
  {
    icon: Clock,
    text: '7-15 Days Delivery',
    description: 'Fast & reliable',
  },
  {
    icon: Users,
    text: '200+ Happy Clients',
    description: 'Trusted by businesses',
  },
  {
    icon: Package,
    text: '50K+ Orders',
    description: 'Successfully delivered',
  },
];

// Key statistics for animated counters
const statistics = [
  {
    value: 200,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Businesses trust us',
    icon: Users,
  },
  {
    value: 50,
    suffix: 'K+',
    label: 'Orders Delivered',
    description: 'Successfully completed',
    icon: Package,
  },
  {
    value: 15,
    suffix: ' Days',
    label: 'Average Delivery',
    description: 'From China to BD',
    icon: Truck,
  },
  {
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Excellent service',
    icon: Star,
  },
];

/**
 * Animated Counter Component
 */
interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  suffix = '', 
  duration = 2000 
}) => {
  const { ref, count } = useCounterAnimation(end, duration, {
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <span ref={ref}>
      {Math.floor(count)}{suffix}
    </span>
  );
};

/**
 * Background Pattern Component
 */
const BackgroundPattern: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 dark:from-transparent dark:via-transparent dark:to-transparent" />
    
    {/* Animated dots pattern */}
    <div className="absolute inset-0 opacity-30 dark:opacity-15">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-brand-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>

    {/* Floating shapes */}
    <motion.div
      className="absolute top-20 right-20 w-20 h-20 bg-brand-primary/10 rounded-full"
      animate={{
        y: [-10, 10, -10],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    
    <motion.div
      className="absolute bottom-32 left-16 w-16 h-16 bg-green-400/10 rounded-full animate-float"
      animate={{
        y: [10, -10, 10],
        x: [-5, 5, -5],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);

/**
 * Main Hero Component
 */
export const Hero: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  /**
   * Handle WhatsApp contact
   */
  const handleWhatsAppContact = () => {
    const phoneNumber = '+8801XXXXXXXXX';
    const message = encodeURIComponent('Hi! I would like to know more about your sourcing services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  /**
   * Animation variants
   */
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-gray-900 dark:to-slate-900"
    >
      {/* Background Pattern */}
      <BackgroundPattern />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Main Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-green-50 dark:bg-white/10 dark:backdrop-blur-md text-green-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 dark:border dark:border-white/10 shadow-xl transition-all duration-200"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Trusted by 200+ Businesses in Bangladesh</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-secondary dark:text-gray-100 leading-tight mb-6 transition-all duration-200"
            >
              From China to Bangladesh —{' '}
              <span className="text-gradient">
                Simplified Sourcing
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-200"
            >
              Your trusted sourcing partner for verified products, smooth logistics, 
              and seamless delivery — from the world's largest marketplace to your doorstep.
            </motion.p>

            {/* Feature Checklist */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {[
                'Verified Suppliers',
                'Quality Guaranteed',
                'Fast Delivery',
                'Local Support',
              ].map((feature, index) => (
              
                <div key={index} className="flex items-center space-x-2 dark:bg-white/10 dark:backdrop-blur-md dark:border dark:border-white/10 dark:px-3 dark:py-2 dark:rounded-lg shadow-xl transition-all duration-200">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-100 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link href="/service-query-form">
                <CTAButton 
                  size="lg" 
                  gradient
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  className="w-full sm:w-auto shadow-xl transition-all duration-200"
                >
                  Get Free Quote
                </CTAButton>
              </Link>

              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppContact}
                icon={<MessageCircle className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-xl transition-all duration-200 dark:border-white/10 dark:text-gray-100 dark:hover:bg-white/10 dark:hover:backdrop-blur-md"
              >
                WhatsApp Chat
              </Button>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400 transition-all duration-200"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 dark:text-blue-400" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 dark:text-blue-400" />
                <span>7-15 Days Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Statistics and Trust Indicators */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="relative"
          >
            {/* Hero Image Placeholder */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gradient-to-br from-brand-primary to-red-600 dark:bg-white/10 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-3xl p-8 mb-8 overflow-hidden shadow-xl transition-all duration-200"
            >
              {/* Replace with actual hero image */}
              <div className="text-center text-white dark:text-gray-100">
                <Globe className="w-20 h-20 mx-auto mb-4 animate-pulse-slow dark:text-blue-400" />
                <h3 className="text-2xl font-bold mb-2 dark:text-gray-100">Global Sourcing</h3>
                <p className="text-brand-primary-50 dark:text-gray-400">
                  Connecting Bangladesh with China's vast marketplace
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/10 rounded-full animate-bounce-gentle" />
            </motion.div>

            {/* Statistics Grid */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-white/10 dark:backdrop-blur-md dark:border-white/10 rounded-xl p-4 shadow-soft border border-gray-100 text-center group hover:shadow-medium transition-all duration-300 shadow-xl"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-brand-secondary dark:text-gray-100 mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </div>
                  <stat.icon className="w-6 h-6 text-brand-primary dark:text-blue-400 mx-auto mt-2 group-hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators Bar */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 lg:mt-20"
        >
          <div className="bg-white/80 dark:bg-white/10 dark:backdrop-blur-md dark:border dark:border-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-gray-100 shadow-xl transition-all duration-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 dark:bg-blue-500/20 text-brand-primary dark:text-blue-400 rounded-xl mb-3 group-hover:bg-brand-primary dark:group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <indicator.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-brand-secondary dark:text-gray-100 text-sm mb-1">
                    {indicator.text}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {indicator.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-400"
          >
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 