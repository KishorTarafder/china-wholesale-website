import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Header44 from '@/components/sections/Header44';
import Contact25 from '@/components/sections/Contact25';
import Contact2 from '@/components/sections/Contact2';

/**
 * Service Query Form Page
 * 
 * Purpose: Dedicated page for detailed service inquiries with multi-step form,
 * service selection, and requirement specification
 * 
 * Components Used:
 * - Header44: Services introduction and context
 * - Contact25: Service query introduction and benefits
 * - Contact2: Multi-step service query form with detailed options
 * 
 * SEO: Optimized for service inquiry and quote request keywords
 */

export const metadata: Metadata = {
  title: 'Service Query Form - China Wholesale | Detailed Sourcing Request',
  description: 'Submit a detailed service query for your China sourcing needs. Multi-step form to specify requirements, get accurate quotes, and start your sourcing project.',
  keywords: [
    'service query form',
    'sourcing request form',
    'detailed quote request',
    'multi-step sourcing form',
    'custom sourcing inquiry',
    'project requirements',
    'sourcing consultation form',
    'china import request'
  ],
  openGraph: {
    title: 'Service Query Form - Detailed Sourcing Request',
    description: 'Use our comprehensive form to specify your exact sourcing requirements and get a detailed quote for your project.',
    images: [
      {
        url: '/images/service-query-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Service Query Form - China Wholesale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit Detailed Sourcing Request - China Wholesale',
    description: 'Complete form for accurate quotes and professional sourcing consultation.',
  },
  alternates: {
    canonical: 'https://chinawholesale.com.bd/service-query-form',
  },
};

const ServiceQueryFormPage: React.FC = () => {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Services Context Header */}
      <Header44 />
      
      {/* Query Form Introduction */}
      <Contact25 />
      
      {/* Multi-step Service Query Form */}
      <Contact2 />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ServiceQueryFormPage; 