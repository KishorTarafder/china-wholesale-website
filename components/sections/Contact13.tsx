'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/Button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ArrowRight,
  Building,
  Users,
  Shield,
  CheckCircle
} from 'lucide-react';

/**
 * Contact13 Component - Contact Information & Location
 * 
 * Purpose: Displays comprehensive contact information, office location,
 * business hours, and embedded map for the contact page
 * 
 * Features:
 * - Complete contact information with clickable actions
 * - Business hours and availability
 * - Office location with map integration
 * - WhatsApp quick contact
 * - Company credentials and certifications
 * 
 * Used on: /contact page
 */

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  details: string[];
  action?: () => void;
  color: string;
}

export const Contact13: React.FC = () => {
  const { ref, isInView } = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  const handleWhatsAppContact = () => {
    const phoneNumber = "8801XXXXXXXXX"; // Replace with actual number
    const message = "Hello! I found your contact information on your website. I'm interested in your sourcing services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+8801XXXXXXXXX";
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:support@chinawholesale.com.bd";
  };

  const handleDirections = () => {
    const address = "Ramzannessa Super Market, Pallabi, Mirpur 12, Dhaka, Bangladesh";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+880 1XXX-XXXXX", "Direct line available", "9:00 AM - 6:00 PM (BST)"],
      action: handlePhoneCall,
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["support@chinawholesale.com.bd", "24-hour email response", "Detailed inquiries welcome"],
      action: handleEmailContact,
      color: "text-brand-primary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      details: ["+880 1XXX-XXXXX", "Instant messaging", "Available 24/7"],
      action: handleWhatsAppContact,
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["3rd Floor, Ramzannessa Super Market", "Pallabi, Mirpur 12", "Dhaka, Bangladesh"],
      action: handleDirections,
      color: "text-purple-600"
    }
  ];

  const businessHours = [
    { day: "Sunday - Thursday", time: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Friday", time: "2:00 PM - 6:00 PM", status: "Limited" },
    { day: "Saturday", time: "Closed", status: "Closed" }
  ];

  const certifications = [
    "Licensed Import/Export Business",
    "Verified Supplier Network",
    "ISO Quality Standards",
    "Customs Clearance Certified"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      ref={ref} 
      className="section bg-gray-50"
    >
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-16"
        >
          
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Choose your preferred method of communication. Our team is ready to assist you 
              with any questions about our sourcing and logistics services.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={contact.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  onClick={contact.action}
                  className="group cursor-pointer"
                >
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full group-hover:border-brand-primary/20">
                    <div className={`inline-flex p-4 rounded-xl bg-gray-50 ${contact.color} group-hover:scale-110 transition-transform duration-300 mb-6`}>
                      <Icon size={28} />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors">
                      {contact.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {contact.details.map((detail, idx) => (
                        <p key={idx} className={`text-sm ${idx === 0 ? 'font-semibold text-brand-secondary' : 'text-gray-600'}`}>
                          {detail}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center text-brand-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Contact Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Business Hours & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Business Hours */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-brand-primary mr-3" />
                <h3 className="text-xl font-semibold text-brand-secondary">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-brand-secondary">{schedule.day}</p>
                      <p className="text-sm text-gray-600">{schedule.time}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      schedule.status === 'Open' 
                        ? 'bg-green-100 text-green-700'
                        : schedule.status === 'Limited'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {schedule.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-brand-primary/5 rounded-lg">
                <p className="text-sm text-brand-primary font-medium">
                  📞 Emergency Support: WhatsApp available 24/7 for urgent inquiries
                </p>
              </div>
            </motion.div>

            {/* Certifications & Trust Indicators */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-brand-primary mr-3" />
                <h3 className="text-xl font-semibold text-brand-secondary">Licensed & Certified</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{cert}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-brand-secondary">200+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Building className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-brand-secondary">3+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-brand-secondary mb-2">Visit Our Office</h3>
              <p className="text-gray-600">
                Come visit us in person for a detailed consultation about your sourcing needs.
              </p>
            </div>
            
            {/* Embedded Map */}
            <div className="relative h-64 md:h-80 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0847!2d90.3623!3d23.7985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzU0LjYiTiA5MMKwMjEnNDQuMyJF!5e0!3m2!1sen!2sbd!4v1234567890!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="China Wholesale Office Location"
              />
              
              {/* Map Overlay */}
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-secondary text-sm">China Wholesale</p>
                    <p className="text-xs text-gray-600">
                      3rd Floor, Ramzannessa Super Market<br />
                      Pallabi, Mirpur 12, Dhaka
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="mt-2 text-xs"
                      onClick={handleDirections}
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                Ready to Start Your Sourcing Journey?
              </h3>
              <p className="text-gray-600 mb-8">
                Get in touch with us today and let's discuss how we can help bring your 
                product ideas to life with our reliable China-to-Bangladesh sourcing services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppContact}
                  icon={<MessageCircle size={20} />}
                  className="shadow-brand hover:shadow-brand-lg"
                >
                  WhatsApp Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handlePhoneCall}
                  icon={<Phone size={20} />}
                >
                  Call Us
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact13; 