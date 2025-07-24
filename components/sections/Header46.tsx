'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MessageCircle, Phone, Mail, MapPin, Clock, Headphones } from 'lucide-react';

/**
 * Header46 Component - Contact Page Hero Section
 * 
 * Purpose: Hero section for the Contact page featuring multiple ways to reach us
 * and emphasizing our commitment to responsive customer service
 * 
 * Features:
 * - Multiple contact methods with icons
 * - Business hours and availability
 * - Animated contact cards
 * - Responsive design with mobile-first approach
 * 
 * Used on: /contact page
 */

interface ContactMethod {
  icon: React.ElementType;
  title: string;
  description: string;
  value: string;
  color: string;
  action?: () => void;
}

export const Header46: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const handleWhatsAppContact = () => {
    const phoneNumber = "8801XXXXXXXXX"; // Replace with actual number
    const message = "Hello! I'm interested in your sourcing services. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+8801XXXXXXXXX";
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:support@chinawholesale.com.bd";
  };

  const contactMethods: ContactMethod[] = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Instant messaging for quick queries",
      value: "Available 24/7",
      color: "text-green-600",
      action: handleWhatsAppContact
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct phone support",
      value: "+880 1XXX-XXXXX",
      color: "text-blue-600",
      action: handlePhoneCall
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries & documentation",
      value: "support@chinawholesale.com.bd",
      color: "text-brand-primary",
      action: handleEmailContact
    }
  ];

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
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
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
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-medium">
              <Headphones className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-secondary leading-tight">
              Let's Start Your 
              <span className="block text-brand-primary">Sourcing Journey</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to source your next product from China? Our expert team is here to guide you 
              through every step. Reach out through your preferred communication channel.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  onClick={method.action}
                  className="group cursor-pointer"
                >
                  <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group-hover:border-brand-primary/20 group-hover:scale-105">
                    <div className={`inline-flex p-4 rounded-xl bg-gray-50 ${method.color} group-hover:scale-110 transition-transform duration-300 mb-6`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {method.description}
                    </p>
                    <p className="text-brand-primary font-semibold text-sm">
                      {method.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={fadeInUp} className="mt-16">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-brand-primary mr-3" />
                <h3 className="text-xl font-semibold text-brand-secondary">Business Hours</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-brand-secondary mb-2">Office Hours</h4>
                  <p className="text-gray-600 text-sm">Sunday - Thursday</p>
                  <p className="text-brand-primary font-semibold">9:00 AM - 6:00 PM (BST)</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-brand-secondary mb-2">WhatsApp Support</h4>
                  <p className="text-gray-600 text-sm">Available Daily</p>
                  <p className="text-brand-primary font-semibold">24/7 Response</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Location */}
          <motion.div variants={fadeInUp} className="pt-8">
            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="w-5 h-5 text-brand-primary mr-2" />
              <span className="text-sm">
                3rd Floor, Ramzannessa Super Market, Pallabi, Mirpur 12, Dhaka, Bangladesh
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header46; 