/**
 * How We Work Page for China Wholesale Website
 * 
 * Displays the complete process and workflow of China Wholesale services
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { Header44 } from '@/components/sections/Header44';
import { Testimonials } from '@/components/sections/Testimonials';
import { CallToAction } from '@/components/sections/CallToAction';
import { Stats } from '@/components/sections/Stats';

// Page metadata for SEO
export const metadata: Metadata = {
  title: 'How We Work | China Wholesale - Step-by-Step Process',
  description: 'Learn about our 6-step process for sourcing, quality control, and delivery from China to Bangladesh. Transparent workflow with regular updates.',
  keywords: [
    'how we work',
    'sourcing process',
    'china to bangladesh',
    'step by step',
    'workflow',
    'quality control',
    'shipping process',
    'transparent service'
  ],
  openGraph: {
    title: 'How We Work | China Wholesale Process',
    description: 'Discover our proven 6-step process for reliable sourcing and delivery from China to Bangladesh.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Work | China Wholesale Process',
    description: 'Discover our proven 6-step process for reliable sourcing and delivery from China to Bangladesh.',
  },
};

/**
 * How We Work Page Component
 */
export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <Header44 />

      {/* How We Work Process */}
      <section id="process">
        <HowWeWork />
      </section>

      {/* Quality Assurance (Statistics) */}
      <section id="quality">
        <Stats />
      </section>

      {/* Timeline & Success Stories (Testimonials) */}
      <section id="timeline">
        <Testimonials />
      </section>

      {/* Success Stories */}
      <section id="testimonials">
        <CallToAction />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
} 