/**
 * Services Overview Section Component for China Wholesale Website
 * 
 * Displays an overview of core services with icons and descriptions
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Shield, 
  Package, 
  Truck, 
  Settings, 
  CheckCircle 
} from 'lucide-react';
import { ServiceCard } from '@/components/ui/Card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Services data
const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'Find verified suppliers from 1688, Taobao, Alibaba, and WeChat with competitive pricing.',
    features: ['Supplier verification', 'Price negotiation', 'MOQ flexibility'],
  },
  {
    icon: Shield,
    title: 'Quality Control',
    description: 'Comprehensive inspection and quality assurance before shipment.',
    features: ['Pre-shipment inspection', 'Photo verification', 'Sample approval'],
  },
  {
    icon: Package,
    title: 'Consolidation',
    description: 'Combine multiple orders for cost-effective shipping solutions.',
    features: ['Multi-supplier orders', 'Safe packaging', 'Volume optimization'],
  },
  {
    icon: Truck,
    title: 'Shipping Solutions',
    description: 'Flexible shipping options via air, sea, or hand-carry delivery.',
    features: ['Air freight (7-10 days)', 'Sea freight (20-30 days)', 'Hand-carry (urgent)'],
  },
  {
    icon: Settings,
    title: 'Custom Orders',
    description: 'Handle custom designs, OEM products, and special requirements.',
    features: ['Custom manufacturing', 'Private labeling', 'Special specifications'],
  },
  {
    icon: CheckCircle,
    title: 'End-to-End Support',
    description: 'Complete service from sourcing to delivery with local support.',
    features: ['Customs clearance', 'Local delivery', '24/7 support'],
  },
];

export const ServicesOverview: React.FC = () => {
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From sourcing to delivery, we handle every aspect of your China procurement needs 
            with transparency and reliability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={<service.icon className="w-8 h-8" />}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to start your sourcing journey?
          </p>
          <button className="btn-primary">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview; 