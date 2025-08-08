import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
const Header47 = dynamic(() => import('@/components/sections/Header47'), { ssr: true });
const Layout41 = dynamic(() => import('@/components/sections/Layout41'));
const Layout352 = dynamic(() => import('@/components/sections/Layout352'));
const Gallery7 = dynamic(() => import('@/components/sections/Gallery7'));
const Logo4 = dynamic(() => import('@/components/sections/Logo4'));
const Logo1 = dynamic(() => import('@/components/sections/Logo1'));

/**
 * About Us Page
 * 
 * Purpose: Complete about us page showcasing company story, values, team,
 * timeline, and trusted partnerships following the reference structure
 * 
 * Components Used:
 * - Header47: Hero section with company introduction and values
 * - Layout41: Company story and mission section
 * - Layout352: Timeline and journey section with animations
 * - Gallery7: Team photos and office gallery
 * - Logo4: Client testimonials and success stories
 * - Logo1: Trusted brands and partnerships
 * 
 * SEO: Optimized for "about china wholesale", "company profile", "sourcing team"
 */

export const metadata: Metadata = {
  title: 'About Us - China Wholesale | Your Trusted Sourcing Partner',
  description: 'Learn about China Wholesale - Bangladesh\'s leading China-to-BD sourcing company. Our mission, values, team, and journey to simplify global trade for businesses.',
  keywords: [
    'about china wholesale',
    'company profile',
    'sourcing team bangladesh',
    'china bangladesh trade',
    'company mission',
    'sourcing expertise',
    'team profile',
    'company values'
  ],
  openGraph: {
    title: 'About China Wholesale - Your Trusted Sourcing Partner',
    description: 'Discover the story behind China Wholesale, our mission to connect Bangladesh with global markets, and the expert team that makes it possible.',
    images: [
      {
        url: '/images/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'China Wholesale Team and Office',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About China Wholesale - Your Trusted Sourcing Partner',
    description: 'Meet the team behind Bangladesh\'s most trusted China sourcing and logistics company.',
  },
  alternates: {
    canonical: 'https://chinawholesale.com.bd/about-us',
  },
};

const AboutUsPage: React.FC = () => {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section - Company Introduction */}
      <Header47 />
      
      {/* Company Story & Mission */}
      <Layout41 />
      
      {/* Timeline & Journey */}
      <Layout352 />
      
      {/* Team Gallery */}
      <Gallery7 />
      
      {/* Client Success Stories */}
      <Logo4 />
      
      {/* Trusted Partnerships */}
      <Logo1 />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default AboutUsPage; 