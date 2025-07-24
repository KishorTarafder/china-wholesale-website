/**
 * API Utility Service for China Wholesale Website
 * 
 * This file handles all API communications with the backend services.
 * Currently configured with demo endpoint: https://chwh.store/backend/api/health
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

// API Configuration
const API_BASE_URL = 'https://chwh.store/backend/api';
const REQUEST_TIMEOUT = 10000; // 10 seconds

/**
 * API Client Configuration
 * Creates an axios instance with default headers and interceptors
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

/**
 * Request Interceptor
 * Adds authentication token and request logging
 */
apiClient.interceptors.request.use(
  (config) => {
    // Add authentication token if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
    }
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * Handles global error responses and success logging
 */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log successful responses in development
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ API Response:', response.status, response.config.url);
    }
    
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error);
    
    // Handle different error types
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const message = error.response.data?.message || 'An error occurred';
      
      switch (status) {
        case 401:
          toast.error('Authentication required. Please log in.');
          // Redirect to login or clear auth state
          localStorage.removeItem('auth_token');
          break;
        case 403:
          toast.error('Access denied. You do not have permission.');
          break;
        case 404:
          toast.error('Resource not found.');
          break;
        case 500:
          toast.error('Server error. Please try again later.');
          break;
        default:
          toast.error(message);
      }
    } else if (error.request) {
      // Network error
      toast.error('Network error. Please check your connection.');
    } else {
      // Other error
      toast.error('An unexpected error occurred.');
    }
    
    return Promise.reject(error);
  }
);

/**
 * API Response Types
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

export interface HealthCheckResponse {
  status: string;
  timestamp: string;
  version: string;
  uptime: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  file?: File;
}

export interface ServiceQueryFormData extends ContactFormData {
  serviceType: string;
  urgency: 'low' | 'medium' | 'high';
  budget?: string;
  quantity?: string;
}

export interface QuoteRequestData {
  productName: string;
  quantity: number;
  targetPrice?: number;
  description: string;
  urgency: 'standard' | 'urgent';
  contactInfo: {
    name: string;
    phone: string;
    email: string;
    company?: string;
  };
}

/**
 * API Service Functions
 */

/**
 * Health Check - Test API connectivity
 */
export const healthCheck = async (): Promise<HealthCheckResponse> => {
  try {
    const response = await apiClient.get<HealthCheckResponse>('/health');
    return response.data;
  } catch (error) {
    throw new Error('Health check failed');
  }
};

/**
 * Contact Form Submission
 */
export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  try {
    const formData = new FormData();
    
    // Append form fields
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'file' && value instanceof File) {
        formData.append('file', value);
      } else if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });
    
    const response = await apiClient.post<ApiResponse>('/contact', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    toast.success('Message sent successfully! We will contact you soon.');
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit contact form');
  }
};

/**
 * Service Query Form Submission
 */
export const submitServiceQuery = async (data: ServiceQueryFormData): Promise<ApiResponse> => {
  try {
    const formData = new FormData();
    
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'file' && value instanceof File) {
        formData.append('file', value);
      } else if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });
    
    const response = await apiClient.post<ApiResponse>('/service-query', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    toast.success('Service query submitted! Our team will review and contact you.');
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit service query');
  }
};

/**
 * Quote Request Submission
 */
export const submitQuoteRequest = async (data: QuoteRequestData): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post<ApiResponse>('/quote-request', data);
    
    toast.success('Quote request submitted! We will send you a detailed quote soon.');
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit quote request');
  }
};

/**
 * Newsletter Subscription
 */
export const subscribeNewsletter = async (email: string): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post<ApiResponse>('/newsletter/subscribe', { email });
    
    toast.success('Successfully subscribed to our newsletter!');
    return response.data;
  } catch (error) {
    throw new Error('Failed to subscribe to newsletter');
  }
};

/**
 * File Upload Utility
 */
export const uploadFile = async (file: File, type: 'contact' | 'service-query' = 'contact'): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    
    const response = await apiClient.post<ApiResponse<{ url: string }>>('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data.data.url;
  } catch (error) {
    throw new Error('Failed to upload file');
  }
};

/**
 * Authentication Functions (for future my-account implementation)
 */
export const login = async (email: string, password: string): Promise<ApiResponse<{ token: string; user: any }>> => {
  try {
    const response = await apiClient.post<ApiResponse<{ token: string; user: any }>>('/auth/login', {
      email,
      password,
    });
    
    // Store token in localStorage
    if (response.data.success && response.data.data.token) {
      localStorage.setItem('auth_token', response.data.data.token);
      toast.success('Login successful!');
    }
    
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const logout = async (): Promise<void> => {
  try {
    await apiClient.post('/auth/logout');
    localStorage.removeItem('auth_token');
    toast.success('Logged out successfully!');
  } catch (error) {
    // Even if logout fails on server, clear local token
    localStorage.removeItem('auth_token');
    console.error('Logout error:', error);
  }
};

/**
 * Utility Functions
 */

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('auth_token');
};

/**
 * Get current user info
 */
export const getCurrentUser = async (): Promise<any> => {
  try {
    const response = await apiClient.get('/auth/me');
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to get user info');
  }
};

/**
 * Export the configured API client for custom requests
 */
export { apiClient };

/**
 * Default export for common usage
 */
const api = {
  healthCheck,
  submitContactForm,
  submitServiceQuery,
  submitQuoteRequest,
  subscribeNewsletter,
  uploadFile,
  login,
  logout,
  isAuthenticated,
  getCurrentUser,
};

export default api; 