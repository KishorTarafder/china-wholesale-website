/**
 * Navbar Component for China Wholesale Website
 * 
 * A fully responsive, animated navigation bar with:
 * - Smooth sticky behavior with backdrop blur
 * - Mobile hamburger menu with slide animations
 * - Smooth scroll to sections
 * - Active link highlighting
 * - CTA buttons integration
 * - Accessibility features
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageCircle,
  ArrowRight 
} from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Navigation menu items configuration
const navigationItems = [
  {
    label: 'Home',
    href: '/',
    submenu: [
      { label: 'About China Wholesale', href: '/#about' },
      { label: 'Our Services', href: '/#services' },
      { label: 'How We Work', href: '/#how-we-work' },
      { label: 'Why Choose Us', href: '/#why-us' },
      { label: 'Client Testimonials', href: '/#testimonials' },
      { label: 'Get Quote', href: '/#contact' },
    ],
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { label: 'Product Sourcing', href: '/services#sourcing' },
      { label: 'Quality Control', href: '/services#quality' },
      { label: 'Shipping Solutions', href: '/services#shipping' },
      { label: 'Custom Orders', href: '/services#custom' },
      { label: 'All Services', href: '/services' },
    ],
  },
  {
    label: 'How We Work',
    href: '/how-we-work',
    submenu: [
      { label: 'Our Process', href: '/how-we-work#process' },
      { label: 'Quality Assurance', href: '/how-we-work#quality' },
      { label: 'Timeline & Delivery', href: '/how-we-work#timeline' },
      { label: 'Success Stories', href: '/how-we-work#testimonials' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    submenu: [
      { label: 'Get Quote', href: '/contact#quote' },
      { label: 'Service Inquiry', href: '/service-query-form' },
      { label: 'WhatsApp Chat', href: '#whatsapp' },
      { label: 'Office Visit', href: '/contact#office' },
    ],
  },
];

// Navbar component props interface
interface NavbarProps {
  className?: string;
}

/**
 * Main Navbar Component
 */
export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Next.js hooks
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Handle scroll effect for sticky navbar
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Close mobile menu when route changes
   */
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  /**
   * Handle smooth scroll to section
   */
  const handleSmoothScroll = (href: string) => {
    // Handle WhatsApp special case
    if (href === '#whatsapp') {
      handleWhatsAppContact();
      setIsOpen(false);
      return;
    }

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // If we're on the same page, just scroll to the section
      if (path === '' || path === pathname) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
          });
        }
        setIsOpen(false);
        return;
      }
      
      // If we're on a different page, navigate then scroll
      router.push(href);
    } else {
      router.push(href);
    }
    
    setIsOpen(false);
  };

  /**
   * Check if navigation item is active
   */
  const isNavItemActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  /**
   * Handle dropdown toggle
   */
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  /**
   * Handle WhatsApp contact
   */
  const handleWhatsAppContact = () => {
    const phoneNumber = '8801700000000'; // Replace with actual number
    const message = encodeURIComponent('Hi! I would like to know more about your sourcing services from China Wholesale.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  /**
   * Mobile menu animation variants
   */
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  /**
   * Mobile menu item animation variants
   */
  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <nav
      className={`
        ${isScrolled ? 'navbar-sticky shadow-lg' : 'bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-700'}
        transition-all duration-300 z-50 relative
        ${className}
      `}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              {/* Logo placeholder - Replace with actual logo */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <span className="text-white font-bold text-lg lg:text-xl">CW</span>
              </div>
              {/* Animated dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-brand-secondary dark:text-gray-50">
                China Wholesale
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Trusted Sourcing Partner</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  // Dropdown menu item
                  <button
                    className={`
                      flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${isNavItemActive(item.href)
                        ? 'text-brand-primary bg-brand-primary/10'
                        : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50'
                      }
                    `}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  // Regular menu item
                  <button
                    onClick={() => handleSmoothScroll(item.href)}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${isNavItemActive(item.href)
                        ? 'text-brand-primary bg-brand-primary/10'
                        : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                )}

                {/* Dropdown submenu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800/95 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600/50 py-2 z-50 dark:shadow-gray-900/50"
                      >
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleSmoothScroll(subItem.href)}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Phone Button */}
            <button
              onClick={() => window.open('tel:+8801XXXXXXXXX', '_self')}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary dark:text-gray-300 dark:hover:text-brand-primary transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:block">Call Us</span>
            </button>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppContact}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:block">WhatsApp</span>
            </button>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle variant="minimal" size="md" />
            </div>

            {/* Primary CTA */}
            <Link
              href="/service-query-form"
              className="btn-primary flex items-center space-x-2 text-sm"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <ThemeToggle variant="minimal" size="sm" />
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900/95"
            >
              <div className="py-4 space-y-2">
                {/* Mobile Navigation Items */}
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={menuItemVariants}
                  >
                    {item.submenu ? (
                      // Mobile dropdown
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={`
                            flex items-center justify-between w-full px-4 py-3 text-left font-medium transition-colors duration-200
                            ${isNavItemActive(item.href)
                              ? 'text-brand-primary bg-brand-primary/10'
                              : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50'
                            }
                          `}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-gray-50 overflow-hidden"
                            >
                              {item.submenu.map((subItem) => (
                                <button
                                  key={subItem.label}
                                  onClick={() => handleSmoothScroll(subItem.href)}
                                  className="block w-full text-left px-8 py-3 text-sm text-gray-600 hover:text-brand-primary hover:bg-white transition-colors duration-200"
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Regular mobile menu item
                      <button
                        onClick={() => handleSmoothScroll(item.href)}
                        className={`
                          block w-full text-left px-4 py-3 font-medium transition-colors duration-200
                          ${isNavItemActive(item.href)
                            ? 'text-brand-primary bg-brand-primary/10'
                            : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50'
                          }
                        `}
                      >
                        {item.label}
                      </button>
                    )}
                  </motion.div>
                ))}

                {/* Mobile CTA Buttons */}
                <motion.div
                  custom={navigationItems.length}
                  variants={menuItemVariants}
                  className="pt-4 px-4 space-y-3 border-t border-gray-100"
                >
                  {/* Contact Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => window.open('tel:+8801XXXXXXXXX', '_self')}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </button>
                    
                    <button
                      onClick={handleWhatsAppContact}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                  
                  {/* Primary CTA */}
                  <Link
                    href="/service-query-form"
                    className="btn-primary w-full flex items-center justify-center space-x-2 text-sm"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 