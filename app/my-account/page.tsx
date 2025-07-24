import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { User, Package, Clock, Settings, FileText, Bell } from 'lucide-react';

/**
 * My Account Page
 * 
 * Purpose: Placeholder client dashboard for future client portal functionality
 * Following the reference structure with basic layout for user account management
 * 
 * Features:
 * - Account overview placeholder
 * - Order history placeholder
 * - Settings placeholder
 * - Navigation structure for future development
 * 
 * Note: This is a placeholder implementation as specified in the reference
 */

export const metadata: Metadata = {
  title: 'My Account - China Wholesale | Client Dashboard',
  description: 'Access your China Wholesale client dashboard to track orders, manage account settings, and view your sourcing history.',
  keywords: [
    'client dashboard',
    'my account china wholesale',
    'order tracking',
    'client portal',
    'account management',
    'sourcing history'
  ],
  openGraph: {
    title: 'My Account - China Wholesale Client Dashboard',
    description: 'Manage your China Wholesale account and track your sourcing projects.',
  },
  robots: {
    index: false, // Don't index account pages
    follow: false,
  },
  alternates: {
    canonical: 'https://chinawholesale.com.bd/my-account',
  },
};

const MyAccountPage: React.FC = () => {
  const dashboardItems = [
    {
      icon: User,
      title: "Account Overview",
      description: "Manage your profile and contact information",
      status: "Coming Soon"
    },
    {
      icon: Package,
      title: "Order History",
      description: "View your past and current sourcing projects",
      status: "Coming Soon"
    },
    {
      icon: Clock,
      title: "Active Orders",
      description: "Track ongoing orders and shipments",
      status: "Coming Soon"
    },
    {
      icon: FileText,
      title: "Documents",
      description: "Access invoices, certificates, and reports",
      status: "Coming Soon"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Stay updated with order status and news",
      status: "Coming Soon"
    },
    {
      icon: Settings,
      title: "Account Settings",
      description: "Manage preferences and security settings",
      status: "Coming Soon"
    }
  ];

  return (
    <main className="relative min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="container">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
              My Account
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to your China Wholesale client dashboard. This section is under development 
              and will provide comprehensive account management features.
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dashboardItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-primary/10 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-brand-secondary">
                        {item.title}
                      </h3>
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
                        {item.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Development Notice */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="text-center">
                <div className="inline-flex p-4 bg-blue-50 rounded-full mb-6">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                
                <h2 className="text-2xl font-bold text-brand-secondary mb-4">
                  Client Portal Coming Soon
                </h2>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We're developing a comprehensive client dashboard that will allow you to:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      Track your orders in real-time
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      View detailed order history
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      Access important documents
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      Manage account preferences
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      Receive instant notifications
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      Submit new service requests
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-brand-primary/5 rounded-lg">
                  <p className="text-brand-primary font-medium mb-4">
                    Meanwhile, you can always reach us directly:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:support@chinawholesale.com.bd"
                      className="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      📧 Email Support
                    </a>
                    <a 
                      href="https://wa.me/8801XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      💬 WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default MyAccountPage; 