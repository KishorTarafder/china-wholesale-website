'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';

/**
 * Faq1 Component - Frequently Asked Questions
 * 
 * Purpose: Interactive FAQ section with expandable questions and answers
 * covering common sourcing, shipping, and business inquiries
 * 
 * Features:
 * - Accordion-style expandable FAQ items
 * - Smooth animations for expand/collapse
 * - Comprehensive sourcing-related questions
 * - Contact CTA for additional questions
 * 
 * Used on: /contact page, other pages as needed
 */

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const Faq1: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "8801XXXXXXXXX";
    const message = "Hello! I have some questions about your sourcing services that aren't covered in your FAQ.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqData: FaqItem[] = [
    {
      category: "General",
      question: "What is China Wholesale and what services do you provide?",
      answer: "China Wholesale is Bangladesh's leading China-to-BD sourcing and logistics company. We provide end-to-end services including product sourcing, quality control, consolidation, shipping (air/sea/luggage), customs clearance, and doorstep delivery. We help businesses and individuals import products from China safely and efficiently."
    },
    {
      category: "Pricing",
      question: "How much does your sourcing service cost?",
      answer: "Our pricing depends on the specific services you need. We charge a transparent service fee based on order value, plus actual shipping and handling costs. We provide detailed quotes upfront with no hidden charges. Contact us with your requirements for a personalized quote."
    },
    {
      category: "Process",
      question: "How long does it take to source and deliver products?",
      answer: "Typical timeline: Product sourcing (1-3 days), order processing and quality check (2-5 days), shipping (3-15 days depending on method). Air freight takes 3-7 days, sea freight 15-30 days, and luggage service 5-10 days. We provide real-time updates throughout the process."
    },
    {
      category: "Shipping",
      question: "What shipping options do you offer and which is best for me?",
      answer: "We offer three shipping methods: Air freight (fastest, best for urgent/small orders), Sea freight (most economical for large/heavy items), and Luggage service (good balance for medium orders). We'll recommend the best option based on your timeline, budget, and product type."
    },
    {
      category: "Quality",
      question: "How do you ensure product quality before shipping?",
      answer: "We conduct thorough quality inspections at multiple stages: supplier verification, pre-shipment inspection with photos/videos shared with you, product testing when required, and proper packaging verification. We only work with verified suppliers and maintain strict quality standards."
    },
    {
      category: "Payment",
      question: "What are your payment terms and methods?",
      answer: "We accept bank transfer, bKash, Nagad, and cash payments. Typically, we require 50% advance payment to start procurement and 50% before shipping. For regular clients, we offer flexible payment terms. All transactions are secure and documented."
    },
    {
      category: "Minimum Order",
      question: "Is there a minimum order quantity or value?",
      answer: "No strict minimum order value, but we recommend orders above $100 to make shipping economical. We handle everything from small personal orders to large commercial shipments. Our team will advise on the most cost-effective approach for your order size."
    },
    {
      category: "Customs",
      question: "Do you handle customs clearance and import duties?",
      answer: "Yes, we handle all customs clearance procedures and documentation. Import duties and taxes are based on Bangladesh customs regulations and product category. We provide guidance on duty calculations and ensure all legal requirements are met."
    },
    {
      category: "Support",
      question: "What kind of after-delivery support do you provide?",
      answer: "We provide comprehensive after-delivery support including issue resolution, warranty claim assistance, supplier communication, and repeat order facilitation. Our relationship with clients continues long after delivery to ensure complete satisfaction."
    },
    {
      category: "Products",
      question: "What types of products can you source from China?",
      answer: "We can source almost any product available in the Chinese market including electronics, fashion, home goods, machinery, raw materials, and custom products. Some restrictions apply for regulated items. We work with suppliers across major platforms like 1688, Alibaba, Taobao, and direct manufacturers."
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
          className="max-w-4xl mx-auto"
        >
          
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">
              Got Questions? We've Got Answers
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Find answers to the most common questions about our China sourcing and logistics services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div variants={staggerContainer} className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full mr-3">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-brand-secondary group-hover:text-brand-primary transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-4 border-l-2 border-brand-primary/20">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-brand-secondary mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-8">
                Our expert team is here to help with any specific questions about your sourcing needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppContact}
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </button>
                
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors font-medium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq1; 