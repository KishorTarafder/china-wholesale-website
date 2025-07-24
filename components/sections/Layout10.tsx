'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/Card';
import { 
  Search, 
  Shield, 
  Package, 
  Truck, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Globe
} from 'lucide-react';

/**
 * Layout10 Component - Core Services Overview
 * 
 * Purpose: Comprehensive overview of all China Wholesale services with
 * detailed descriptions, benefits, and process information
 * 
 * Features:
 * - Six main service categories
 * - Detailed service descriptions
 * - Benefits and process highlights
 * - Call-to-action for service inquiry
 * 
 * Used on: /services page, homepage
 */

export const Layout10: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const coreServices = [
    {
      icon: Search,
      title: "Product Sourcing",
      description: "We find the perfect suppliers and products for your needs across China's vast marketplace.",
      features: [
        "1688, Taobao, Alibaba sourcing",
        "Supplier verification & background check",
        "Price negotiation & comparison",
        "Sample procurement & testing"
      ],
      process: "Share requirements → We source options → You choose → We procure",
      timeframe: "1-3 days",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: Shield,
      title: "Quality Control",
      description: "Rigorous quality inspection to ensure every product meets your standards before shipping.",
      features: [
        "Pre-shipment inspection with photos",
        "Product testing & verification",
        "Packaging quality check",
        "Compliance verification"
      ],
      process: "Product arrival → Quality inspection → Photo/video report → Your approval",
      timeframe: "1-2 days",
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      icon: Package,
      title: "Consolidation & Packaging",
      description: "Smart consolidation of multiple orders into secure, cost-effective shipping packages.",
      features: [
        "Multi-supplier order consolidation",
        "Professional packaging materials",
        "Weight & volume optimization",
        "Fragile item special handling"
      ],
      process: "Collect orders → Consolidate → Secure packaging → Ship together",
      timeframe: "1-3 days",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      icon: Truck,
      title: "Shipping Solutions",
      description: "Flexible shipping options tailored to your timeline, budget, and product requirements.",
      features: [
        "Air freight (3-7 days)",
        "Sea freight (15-30 days)", 
        "Luggage service (5-10 days)",
        "Express delivery options"
      ],
      process: "Choose shipping method → We arrange → Track shipment → Receive delivery",
      timeframe: "3-30 days",
      color: "bg-orange-50 text-orange-600 border-orange-200"
    },
    {
      icon: Settings,
      title: "Custom Orders",
      description: "Specialized handling for custom products, OEM orders, and unique business requirements.",
      features: [
        "Custom product development",
        "OEM/ODM coordination",
        "Prototype & sample management",
        "Private labeling support"
      ],
      process: "Discuss requirements → Find manufacturers → Prototype → Production → Delivery",
      timeframe: "7-30 days",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    },
    {
      icon: CheckCircle,
      title: "End-to-End Service",
      description: "Complete sourcing solution from product discovery to doorstep delivery in Bangladesh.",
      features: [
        "Full project management",
        "Customs clearance handling",
        "Documentation support",
        "After-delivery support"
      ],
      process: "Consultation → Sourcing → Shipping → Customs → Delivery → Support",
      timeframe: "Complete journey",
      color: "bg-brand-primary/10 text-brand-primary border-brand-primary/20"
    }
  ];

  const additionalBenefits = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden costs, detailed quotes, competitive rates"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround times, efficient workflows"
    },
    {
      icon: Globe,
      title: "Local Support",
      description: "Bangladesh-based team, easy communication"
    }
  ];

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
      className="section bg-gray-50"
    >
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-16"
        >
          
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-medium mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Complete Service Portfolio
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">
              Everything You Need for Successful Sourcing
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              From initial product discovery to final delivery, our comprehensive services 
              cover every aspect of China-to-Bangladesh sourcing and logistics.
            </p>
          </motion.div>

          {/* Core Services Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-brand-primary/20">
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className={`inline-flex p-3 rounded-xl ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="flex items-center text-xs text-brand-primary font-medium mb-4">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.timeframe}
                      </div>
                    </div>

                    {/* Service Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-brand-secondary mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process Overview */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="text-xs font-semibold text-brand-secondary mb-2">Process:</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {service.process}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Benefits */}
          <motion.div variants={fadeInUp}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                  Why Choose Our Services?
                </h3>
                <p className="text-gray-600">
                  Additional benefits that make us your ideal sourcing partner
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {additionalBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex p-4 bg-brand-primary/10 rounded-xl mb-4">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-brand-secondary mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Service CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                Ready to Start Your Sourcing Project?
              </h3>
              <p className="text-gray-600 mb-8">
                Let us know your requirements and we'll provide a detailed quote and 
                consultation for your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  className="shadow-brand hover:shadow-brand-lg"
                >
                  Request Service Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                >
                  Download Service Guide
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Layout10; 