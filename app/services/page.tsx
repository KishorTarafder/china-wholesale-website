import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
const Header44 = dynamic(() => import('@/components/sections/Header44'), { ssr: true });
const Layout10 = dynamic(() => import('@/components/sections/Layout10'));
const Layout24 = dynamic(() => import('@/components/sections/Layout24'));
const Layout6 = dynamic(() => import('@/components/sections/Layout6'));
const Layout192 = dynamic(() => import('@/components/sections/Layout192'));
const Layout3 = dynamic(() => import('@/components/sections/Layout3'));
const Cta7 = dynamic(() => import('@/components/sections/Cta7'));

/**
 * Services Page
 * 
 * Purpose: Comprehensive services page showcasing all China Wholesale offerings
 * including sourcing, quality control, logistics, and custom solutions
 * 
 * Components Used:
 * - Header44: Services hero section with service highlights
 * - Layout10: Core services overview with detailed descriptions
 * - Layout24: Sourcing and procurement services
 * - Layout6: Quality control and inspection processes
 * - Layout192: Shipping and logistics solutions
 * - Layout3: Custom orders and specialized services
 * - Cta7: Final call-to-action for service inquiry
 * 
 * SEO: Optimized for service-related keywords and local search
 */

export const metadata: Metadata = {
  title: 'Our Services - China Wholesale | Complete Sourcing Solutions',
  description: 'Comprehensive China-to-Bangladesh sourcing services including product sourcing, quality control, consolidation, shipping, and custom orders. End-to-end solutions for your business.',
  keywords: [
    'china sourcing services',
    'product sourcing bangladesh',
    'quality control inspection',
    'shipping from china',
    'consolidation services',
    'custom order sourcing',
    'logistics services',
    'import services bangladesh'
  ],
  openGraph: {
    title: 'Our Services - Complete China Sourcing Solutions',
    description: 'From product discovery to doorstep delivery - explore our comprehensive range of China-to-Bangladesh sourcing and logistics services.',
    images: [
      {
        url: '/images/services-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'China Wholesale Services Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete China Sourcing Solutions - China Wholesale',
    description: 'Professional sourcing, quality control, and logistics services for Bangladesh businesses.',
  },
  alternates: {
    canonical: 'https://chinawholesale.com.bd/services',
  },
};

const ServicesPage: React.FC = () => {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Services Hero Section */}
      <Header44 />
      
      {/* Core Services Overview */}
      <Layout10 />
      
      {/* Product Sourcing Services */}
      <section id="sourcing">
        <Layout24 />
      </section>
      
      {/* Quality Control & Inspection */}
      <section id="quality">
        <Layout6 />
      </section>
      
      {/* Shipping & Logistics Solutions */}
      <section id="shipping">
        <Layout192 />
      </section>
      
      {/* Custom Orders & Specialized Services */}
      <section id="custom">
        <Layout3 />
      </section>
      
      {/* Service Inquiry CTA */}
      <Cta7 />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ServicesPage; 