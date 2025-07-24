'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Loader2, Upload, X, CheckCircle, AlertCircle, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { submitContactForm } from '@/utils/api';
import toast from 'react-hot-toast';

/**
 * ContactForm Component - Main Contact Form
 * 
 * Purpose: Complete contact form with validation, file upload capability,
 * and API integration for lead capture and customer inquiries
 * 
 * Features:
 * - Form validation using React Hook Form
 * - File upload with drag & drop support
 * - Real-time validation feedback
 * - Loading states and error handling
 * - Success/error notifications
 * - Responsive design
 * 
 * Used on: /contact page, hero sections
 */

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  file?: File;
}

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  className = '', 
  onSuccess 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    setValue,
    watch 
  } = useForm<ContactFormData>();

  // Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Prepare form data with file if uploaded
      const formData = {
        ...data,
        file: uploadedFile || undefined
      };

      await submitContactForm(formData);
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
      setUploadedFile(null);
      onSuccess?.();
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle file upload
  const handleFileUpload = (file: File) => {
    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size must be less than 10MB');
      return;
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload an image, PDF, or Word document');
      return;
    }

    setUploadedFile(file);
    setValue('file', file);
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setValue('file', undefined);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className={`max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100 ${className}`}
    >
      {/* Form Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-brand-secondary mb-3">
          Get a Free Quote
        </h2>
        <p className="text-gray-600">
          Tell us about your requirements and we'll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-secondary mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Full Name *
          </label>
          <input
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
            type="text"
            id="name"
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-secondary mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number *
          </label>
          <input
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^(\+88)?01[3-9]\d{8}$/,
                message: 'Please enter a valid Bangladeshi phone number'
              }
            })}
            type="tel"
            id="phone"
            placeholder="+880 1XXX-XXXXXX"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-secondary mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
            type="email"
            id="email"
            placeholder="your.email@example.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Requirement Field */}
        <div>
          <label htmlFor="requirement" className="block text-sm font-medium text-brand-secondary mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Your Requirement *
          </label>
          <textarea
            {...register('requirement', { 
              required: 'Please describe your requirement',
              minLength: { value: 10, message: 'Please provide more details (at least 10 characters)' }
            })}
            id="requirement"
            rows={4}
            placeholder="Describe the products you want to source, quantity, budget, timeline, or any specific requirements..."
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors resize-vertical ${
              errors.requirement ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.requirement && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.requirement.message}
            </p>
          )}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-brand-secondary mb-2">
            <Upload className="w-4 h-4 inline mr-2" />
            Upload Sample Image (Optional)
          </label>
          
          {!uploadedFile ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                isDragOver 
                  ? 'border-brand-primary bg-brand-primary/5' 
                  : 'border-gray-300 hover:border-brand-primary hover:bg-gray-50'
              }`}
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 mb-1">
                Drop your file here or <span className="text-brand-primary font-medium">browse</span>
              </p>
              <p className="text-xs text-gray-500">
                Supports: JPG, PNG, PDF, DOC (Max 10MB)
              </p>
            </div>
          ) : (
            <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between bg-gray-50">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="text-sm font-medium text-brand-secondary">{uploadedFile.name}</p>
                  <p className="text-xs text-gray-500">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="p-1 text-gray-400 hover:text-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
            }}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
          className="mt-8"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            'Send Message'
          )}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting this form, you agree to our privacy policy. 
          We'll only use your information to respond to your inquiry.
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm; 