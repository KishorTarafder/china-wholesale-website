/**
 * Footer Component for China Wholesale Website
 * 
 * A comprehensive footer with:
 * - Company information and contact details
 * - Quick navigation links
 * - Social media links
 * - Newsletter subscription
 * - Service highlights
 * - Legal information
 * - Mobile-responsive design
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Truck,
  Globe,
  Users,
} from 'lucide-react';
import { subscribeNewsletter } from '@/utils/api';

// Footer navigation links
const footerLinks = {
  services: [
    { label: 'Product Sourcing', href: '/services#sourcing' },
    { label: 'Quality Control', href: '/services#quality' },
    { label: 'Shipping Solutions', href: '/services#shipping' },
    { label: 'Custom Orders', href: '/services#custom' },
    { label: 'Consolidation', href: '/services#consolidation' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Our Team', href: '/about-us#team' },
    { label: 'Success Stories', href: '/about-us#testimonials' },
    { label: 'Careers', href: '/careers' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Get Quote', href: '/service-query-form' },
    { label: 'Track Order', href: '/track-order' },
    { label: 'FAQ', href: '/contact#faq' },
    { label: 'Help Center', href: '/help' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
    { label: 'Shipping Policy', href: '/shipping-policy' },
  ],
};

// Social media links
const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/chinawholesalebd',
    icon: Facebook,
    color: 'hover:text-blue-600',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/chinawholesalebd',
    icon: Instagram,
    color: 'hover:text-pink-600',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/chinawholesalebd',
    icon: Linkedin,
    color: 'hover:text-blue-700',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/chinawholesalebd',
    icon: Twitter,
    color: 'hover:text-blue-400',
  },
];

// Key features for footer highlight
const keyFeatures = [
  {
    icon: Shield,
    text: 'Verified Suppliers',
  },
  {
    icon: Clock,
    text: '7-15 Days Delivery',
  },
  {
    icon: Users,
    text: '200+ Happy Clients',
  },
  {
    icon: Globe,
    text: 'Global Sourcing',
  },
];

/**
 * Newsletter Subscription Component
 */
const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      await subscribeNewsletter(email);
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200"
      >
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-green-800">
            Thanks for subscribing!
          </p>
          <p className="text-xs text-green-600">
            You'll receive updates about our services and offers.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="space-y-3">
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white text-brand-secondary placeholder-gray-400"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-brand-primary text-white rounded-r-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="spinner" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </div>
      <p className="text-xs text-gray-500">
        Get updates on new services, special offers, and sourcing tips.
      </p>
    </form>
  );
};

/**
 * Footer Link Section Component
 */
interface FooterSectionProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-semibold text-brand-secondary uppercase tracking-wider mb-4">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm text-gray-600 hover:text-brand-primary transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Main Footer Component
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  /**
   * Handle WhatsApp contact
   */
  const handleWhatsAppContact = () => {
    const phoneNumber = '+8801XXXXXXXXX'; // Replace with actual number
    const message = encodeURIComponent('Hi! I would like to know more about your sourcing services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-brand-secondary text-white">
      {/* Main Footer Content */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            {/* Logo and Description */}
            <div className="mb-6">
              <Link href="/" className="flex items-center space-x-3 group mb-4">
                <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">CW</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">China Wholesale</h3>
                  <p className="text-xs text-gray-400">Trusted Sourcing Partner</p>
                </div>
              </Link>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Your reliable partner for seamless sourcing and logistics from China to Bangladesh. 
                We make global procurement easy, affordable, and risk-free.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-xs text-gray-300"
                >
                  <feature.icon className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-800 text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FooterSection title="Services" links={footerLinks.services} />
            <FooterSection title="Company" links={footerLinks.company} />
            <FooterSection title="Support" links={footerLinks.support} />
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>3rd Floor, Ramzannessa Super Market</p>
                  <p>Pallabi, Mirpur 12, Dhaka</p>
                  <p>Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +880 1XXX-XXXXXX
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a
                  href="mailto:support@chinawholesale.com.bd"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  support@chinawholesale.com.bd
                </a>
              </div>
              
              <button
                onClick={handleWhatsAppContact}
                className="flex items-center space-x-3 group"
              >
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300 group-hover:text-green-400 transition-colors duration-200">
                  WhatsApp Chat
                </span>
              </button>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-sm font-medium mb-3">Stay Updated</h4>
              <NewsletterSubscription />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} China Wholesale. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/service-query-form"
              className="flex items-center space-x-2 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 text-sm font-medium"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button for Mobile */}
      <button
        onClick={handleWhatsAppContact}
        className="fixed bottom-6 right-6 lg:hidden z-40 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer; 