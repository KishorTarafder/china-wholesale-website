import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Header46 from '@/components/sections/Header46';
import Contact13 from '@/components/sections/Contact13';
import ContactForm from '@/components/forms/ContactForm';
import Faq1 from '@/components/sections/Faq1';
import Contact16 from '@/components/sections/Contact16';

/**
 * Contact Page
 * 
 * Purpose: Complete contact page with multiple contact methods, forms,
 * office information, FAQs, and map integration
 * 
 * Components Used:
 * - Header46: Contact hero section with contact methods
 * - Contact13: Detailed contact info, business hours, and map
 * - ContactForm: Main contact form with file upload capability
 * - Faq1: Frequently asked questions section
 * - Contact16: Additional contact information and support
 * 
 * SEO: Optimized for local search and contact-related queries
 */

export const metadata: Metadata = {
  title: 'Contact Us - China Wholesale | Get Your Free Quote Today',
  description: 'Contact China Wholesale for all your China-to-Bangladesh sourcing needs. Multiple contact methods, free quotes, and expert consultation available.',
  keywords: [
    'contact china wholesale',
    'sourcing consultation',
    'free quote bangladesh',
    'china sourcing contact',
    'dhaka office location',
    'whatsapp sourcing',
    'import consultation',
    'sourcing support'
  ],
  openGraph: {
    title: 'Contact China Wholesale - Get Your Free Quote',
    description: 'Ready to source from China? Contact our expert team for consultation, quotes, and personalized sourcing solutions.',
    images: [
      {
        url: '/images/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact China Wholesale - Office and Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact China Wholesale - Expert Sourcing Consultation',
    description: 'Get in touch for professional China sourcing services and free consultation.',
  },
  alternates: {
    canonical: 'https://chinawholesale.com.bd/contact',
  },
};

const ContactPage: React.FC = () => {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Contact Hero Section */}
      <Header46 />
      
      {/* Contact Information & Location */}
      <Contact13 />
      
      {/* Main Contact Form */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">
              Ready to Start Sourcing?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fill out the form below with your requirements and we'll get back to you 
              within 24 hours with a detailed quote and consultation.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      
      {/* Frequently Asked Questions */}
      <Faq1 />
      
      {/* Additional Contact Support */}
      <Contact16 />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ContactPage; 