/**
 * Root Layout Component for China Wholesale Website
 * 
 * This is the main layout that wraps all pages and provides:
 * - Global metadata and SEO configuration
 * - Font loading and optimization
 * - Global providers (toast, etc.)
 * - Common layout elements
 * - Analytics and tracking setup
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

// Website metadata for SEO
export const metadata: Metadata = {
  title: {
    default: 'China Wholesale | Trusted China-to-Bangladesh Sourcing Partner',
    template: '%s | China Wholesale',
  },
  description: 'Your reliable partner for seamless sourcing and logistics from China to Bangladesh. We make global procurement easy, affordable, and risk-free with verified suppliers and fast delivery.',
  
  keywords: [
    'China sourcing Bangladesh',
    'Product sourcing China',
    'China to Bangladesh shipping',
    'Import from China',
    'Wholesale sourcing',
    'China supplier verification',
    'Bangladesh import service',
    'China wholesale marketplace',
    'Taobao sourcing',
    'Alibaba sourcing service',
  ],
  
  authors: [{ name: 'China Wholesale Team' }],
  creator: 'China Wholesale',
  publisher: 'China Wholesale',
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chinawholesale.com.bd',
    siteName: 'China Wholesale',
    title: 'China Wholesale - Trusted China-to-Bangladesh Sourcing Partner',
    description: 'Your reliable partner for seamless sourcing and logistics from China to Bangladesh. Verified suppliers, quality products, fast delivery.',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'China Wholesale - Sourcing Partner',
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'China Wholesale - Trusted Sourcing Partner',
    description: 'Seamless sourcing and logistics from China to Bangladesh',
    images: ['/twitter-image.jpg'], // Add your Twitter image
    creator: '@chinawholesalebd',
  },
  
  // Additional metadata
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification codes for search consoles
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    yandex: 'your-yandex-verification-code', // Replace with actual code
  },
  
  // Contact and business information
  category: 'business',
  
  // Structured data
  other: {
    'business:contact_data:locality': 'Dhaka',
    'business:contact_data:region': 'Bangladesh',
    'business:contact_data:country_name': 'Bangladesh',
  },
};

/**
 * Root Layout Component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#E3431F" />
        <meta name="msapplication-TileColor" content="#E3431F" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'China Wholesale',
              url: 'https://chinawholesale.com.bd',
              logo: 'https://chinawholesale.com.bd/logo.png',
              description: 'Trusted sourcing and logistics partner from China to Bangladesh',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '3rd Floor, Ramzannessa Super Market, Pallabi',
                addressLocality: 'Mirpur 12, Dhaka',
                addressCountry: 'Bangladesh',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+880-1XXX-XXXXXX',
                contactType: 'customer service',
                availableLanguage: ['English', 'Bengali'],
              },
              sameAs: [
                'https://facebook.com/chinawholesalebd',
                'https://instagram.com/chinawholesalebd',
                'https://linkedin.com/company/chinawholesalebd',
              ],
              founder: {
                '@type': 'Person',
                name: 'China Wholesale Team',
              },
              foundingDate: '2020',
              serviceArea: {
                '@type': 'Country',
                name: 'Bangladesh',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Sourcing Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Product Sourcing',
                      description: 'Finding and verifying suppliers from China',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Quality Control',
                      description: 'Product inspection and quality assurance',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Shipping & Logistics',
                      description: 'International shipping and customs clearance',
                    },
                  },
                ],
              },
            }),
          }}
        />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'China Wholesale',
              image: 'https://chinawholesale.com.bd/logo.png',
              '@id': 'https://chinawholesale.com.bd',
              url: 'https://chinawholesale.com.bd',
              telephone: '+880-1XXX-XXXXXX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '3rd Floor, Ramzannessa Super Market, Pallabi',
                addressLocality: 'Mirpur 12, Dhaka',
                postalCode: '1216',
                addressCountry: 'BD',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 23.7985,
                longitude: 90.3656,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '16:00',
                },
              ],
              sameAs: [
                'https://facebook.com/chinawholesalebd',
                'https://instagram.com/chinawholesalebd',
                'https://linkedin.com/company/chinawholesalebd',
              ],
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '150',
              },
            }),
          }}
        />
      </head>
      
      <body 
        className="min-h-screen bg-brand-background text-brand-secondary antialiased"
        suppressHydrationWarning
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-white px-4 py-2 rounded-lg z-50 transition-all duration-200"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="main-content" className="relative">
          {children}
        </div>
        
        {/* Toast notification container */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: '12px',
              background: '#fff',
              color: '#333',
              fontSize: '14px',
              padding: '16px',
              boxShadow: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.04)',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
            },
          }}
        />
        
        {/* Development helpers */}
        {process.env.NODE_ENV === 'development' && (
          <>
            {/* Viewport size indicator */}
            <div className="fixed bottom-4 left-4 bg-black text-white text-xs px-2 py-1 rounded z-50 font-mono">
              <span className="sm:hidden">XS</span>
              <span className="hidden sm:inline md:hidden">SM</span>
              <span className="hidden md:inline lg:hidden">MD</span>
              <span className="hidden lg:inline xl:hidden">LG</span>
              <span className="hidden xl:inline 2xl:hidden">XL</span>
              <span className="hidden 2xl:inline">2XL</span>
            </div>
          </>
        )}
        
        {/* Analytics Scripts - Add your tracking codes here */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />
            
            {/* Facebook Pixel */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', 'YOUR_PIXEL_ID');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
} 