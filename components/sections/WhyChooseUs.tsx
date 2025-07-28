/**
 * Why Choose Us Section Component for China Wholesale Website
 * 
 * Highlights unique value propositions and competitive advantages
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  Users, 
  DollarSign, 
  CheckCircle,
  MessageCircle,
  Truck,
  Globe,
  Star,
  Award
} from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Value propositions data
const valueProps = [
  {
    icon: Shield,
    title: 'Verified Sourcing',
    description: 'We source directly from trusted suppliers with a focus on quality and authenticity.',
    features: [
      'Supplier background verification',
      'Quality certification checks',
      'Product authenticity guarantee',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Seamless End-to-End Service',
    description: 'We handle everything — so you don\'t have to worry about the complexities.',
    features: [
      'Complete procurement management',
      'Customs clearance handled',
      'Door-to-door delivery',
    ],
  },
  {
    icon: Truck,
    title: 'Flexible Shipping Options',
    description: 'Air, sea, luggage — we offer what fits your time and budget requirements.',
    features: [
      'Air freight (7-10 days)',
      'Sea freight (20-30 days)',
      'Hand-carry for urgent orders',
    ],
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden charges. What we quote is what you pay — complete cost transparency.',
    features: [
      'Upfront pricing structure',
      'No surprise fees',
      'Competitive rates',
    ],
  },
  {
    icon: Users,
    title: 'Strong BD Support',
    description: 'We\'re based in Bangladesh — easy communication and support even after delivery.',
    features: [
      'Local team in Dhaka',
      'Bengali & English support',
      'Post-delivery assistance',
    ],
  },
  {
    icon: Globe,
    title: 'Global Network Access',
    description: 'Deep supplier network across 1688, Taobao, WeChat, and Alibaba platforms.',
    features: [
      '1000+ verified suppliers',
      'Multi-platform sourcing',
      'Exclusive manufacturing deals',
    ],
  },
];

// Trust indicators
const trustIndicators = [
  {
    icon: Star,
    label: '4.9/5 Rating',
    description: 'From 150+ reviews',
  },
  {
    icon: Award,
    label: 'ISO Certified',
    description: 'Quality management',
  },
  {
    icon: Clock,
    label: '3+ Years',
    description: 'Industry experience',
  },
  {
    icon: MessageCircle,
    label: '24/7 Support',
    description: 'Always available',
  },
];

export const WhyChooseUs: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section bg-white dark:bg-gray-950">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-secondary dark:text-white mb-6">
            Why Choose <span className="text-gradient">China Wholesale</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
            We don't just source products — we build partnerships. Here's what sets us apart 
            from other sourcing companies.
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-medium hover:-translate-y-2 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-xl mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <prop.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  {prop.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {prop.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {prop.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-brand-secondary mb-8">
              Trusted & Certified
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-lg mb-3">
                    <indicator.icon className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-brand-secondary mb-1">
                    {indicator.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {indicator.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-brand-secondary mb-8">
            China Wholesale vs Others
          </h3>
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Features Column */}
              <div className="bg-gray-50 p-6 space-y-4">
                <h4 className="font-semibold text-brand-secondary">Features</h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>Supplier Verification</div>
                  <div>Quality Control</div>
                  <div>Local Support</div>
                  <div>Transparent Pricing</div>
                  <div>Multiple Payment Options</div>
                  <div>Post-Delivery Support</div>
                </div>
              </div>

              {/* China Wholesale Column */}
              <div className="bg-brand-primary p-6 space-y-4 text-white">
                <h4 className="font-semibold">China Wholesale</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    Comprehensive verification
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    Pre-shipment inspection
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    Local BD team
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    No hidden charges
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    Flexible payment terms
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    Long-term partnership
                  </div>
                </div>
              </div>

              {/* Others Column */}
              <div className="p-6 space-y-4">
                <h4 className="font-semibold text-brand-secondary">Others</h4>
                <div className="space-y-3 text-sm text-gray-500">
                  <div>Basic verification</div>
                  <div>Limited quality checks</div>
                  <div>Remote support only</div>
                  <div>Hidden fees common</div>
                  <div>Advance payment required</div>
                  <div>Limited after-sales</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to experience the China Wholesale difference?
          </p>
          <button className="btn-primary">
            Start Your Sourcing Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 