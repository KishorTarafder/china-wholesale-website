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
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: true });
const ServicesOverview = dynamic(() => import('@/components/sections/ServicesOverview'));
const HowWeWork = dynamic(() => import('@/components/sections/HowWeWork'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const Stats = dynamic(() => import('@/components/sections/Stats'));
const CallToAction = dynamic(() => import('@/components/sections/CallToAction'));
const ClientLogos = dynamic(() => import('@/components/sections/ClientLogos'));
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'));

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
      <section id="hero">
        <Hero />
      </section>

      {/* Services Overview */}
      <section id="services">
        <ServicesOverview />
      </section>

      {/* Client Logos / Trust Indicators */}
      <ClientLogos />

      {/* How We Work Process */}
      <section id="how-we-work">
        <HowWeWork />
      </section>

      {/* Why Choose Us */}
      <section id="why-us">
        <WhyChooseUs />
      </section>

      {/* About Section (Statistics) */}
      <section id="about">
        <Stats />
      </section>

      {/* Client Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Call to Action */}
      <section id="contact">
        <CallToAction />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default HomePage; 