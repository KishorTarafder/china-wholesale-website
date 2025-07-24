/**
 * Homepage Component for China Wholesale Website
 * 
 * The main landing page featuring:
 * - Hero section with value proposition
 * - Services overview
 * - How we work process
 * - Client testimonials
 * - Trust indicators and statistics
 * - Call-to-action sections
 * - Company highlights
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

import React from 'react';
import { Metadata } from 'next';

// Layout Components
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Section Components
import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import HowWeWork from '@/components/sections/HowWeWork';
import Testimonials from '@/components/sections/Testimonials';
import Stats from '@/components/sections/Stats';
import CallToAction from '@/components/sections/CallToAction';
import ClientLogos from '@/components/sections/ClientLogos';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

// Page-specific metadata
export const metadata: Metadata = {
  title: 'China Wholesale | Trusted China-to-Bangladesh Sourcing Partner',
  description: 'Your reliable partner for seamless sourcing and logistics from China to Bangladesh. We make global procurement easy, affordable, and risk-free with verified suppliers and fast delivery.',
  keywords: [
    'China sourcing Bangladesh',
    'Product sourcing China',
    'China to Bangladesh shipping',
    'Import from China',
    'Wholesale sourcing',
    'China supplier verification',
    'Bangladesh import service',
  ],
  openGraph: {
    title: 'China Wholesale - Trusted China-to-Bangladesh Sourcing Partner',
    description: 'Your reliable partner for seamless sourcing and logistics from China to Bangladesh.',
    type: 'website',
    url: 'https://chinawholesale.com.bd',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Wholesale - Trusted Sourcing Partner',
    description: 'Seamless sourcing and logistics from China to Bangladesh',
  },
  alternates: {
    canonical: 'https://chinawholesale.com.bd',
  },
};

/**
 * Homepage Component
 */
const HomePage: React.FC = () => {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Client Logos / Trust Indicators */}
      <ClientLogos />

      {/* How We Work Process */}
      <HowWeWork />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Statistics Section */}
      <Stats />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default HomePage; 