# China Wholesale Website

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-pink?logo=framer)](https://www.framer.com/motion/)

A modern, responsive corporate website for China Wholesale - Bangladesh's trusted China-to-BD product sourcing & logistics company. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## 🌟 Features

### 🎨 **Modern Design & UX**
- Responsive design that works perfectly on all devices
- Smooth animations and micro-interactions
- Clean, corporate aesthetic with brand consistency
- Accessibility-first approach (WCAG 2.1 compliant)
- Dark/light mode support ready

### 🚀 **Performance Optimized**
- Next.js 14 with App Router for optimal performance
- Server-side rendering (SSR) and static generation (SSG)
- Image optimization and lazy loading
- Code splitting and bundle optimization
- Lighthouse score 95+ for Performance, SEO, and Best Practices

### 🛠️ **Developer Experience**
- TypeScript for type safety and better DX
- Modular component architecture
- Comprehensive documentation and comments
- ESLint + Prettier for code quality
- Hot reload and fast refresh

### 📱 **Core Functionality**
- Multi-page website with smooth navigation
- Contact forms with validation and API integration
- Service query system
- Client testimonials and case studies
- Real-time chat integration (WhatsApp)
- Newsletter subscription
- SEO optimized with structured data

## 🏗️ **Project Structure**

```
china-wholesale-website/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with metadata and providers
│   ├── page.tsx                 # Homepage component
│   ├── about-us/                # About Us page
│   ├── services/                # Services page
│   ├── contact/                 # Contact page
│   ├── service-query-form/      # Service query form page
│   └── my-account/              # Client account dashboard (future)
│
├── components/                   # Reusable React components
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx           # Navigation bar with mobile menu
│   │   └── Footer.tsx           # Footer with links and newsletter
│   │
│   ├── sections/                # Page section components
│   │   ├── Hero.tsx             # Homepage hero section
│   │   ├── ServicesOverview.tsx # Services preview section
│   │   ├── HowWeWork.tsx        # Process explanation section
│   │   ├── Testimonials.tsx     # Client testimonials carousel
│   │   ├── Stats.tsx            # Statistics and metrics
│   │   ├── CallToAction.tsx     # CTA sections
│   │   ├── ClientLogos.tsx      # Client logo showcase
│   │   └── WhyChooseUs.tsx      # Value propositions
│   │
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx           # Button variants and styles
│   │   ├── Card.tsx             # Card components with variants
│   │   ├── Input.tsx            # Form input components
│   │   ├── Modal.tsx            # Modal/dialog components
│   │   └── Spinner.tsx          # Loading indicators
│   │
│   └── forms/                   # Form components
│       ├── ContactForm.tsx      # Main contact form
│       ├── ServiceQueryForm.tsx # Service inquiry form
│       └── NewsletterForm.tsx   # Newsletter subscription
│
├── hooks/                       # Custom React hooks
│   ├── useIntersectionObserver.ts # Scroll animations
│   ├── useLocalStorage.ts       # Local storage management
│   └── useApi.ts               # API calls and state management
│
├── utils/                       # Utility functions
│   ├── api.ts                   # API client and endpoints
│   ├── cn.ts                    # Class name utility (clsx wrapper)
│   ├── constants.ts             # App constants and config
│   └── helpers.ts               # Helper functions
│
├── types/                       # TypeScript type definitions
│   ├── api.ts                   # API response types
│   ├── components.ts            # Component prop types
│   └── global.ts                # Global type definitions
│
├── public/                      # Static assets
│   ├── images/                  # Images and graphics
│   ├── icons/                   # Icon files
│   ├── favicon.ico              # Favicon
│   └── manifest.json            # PWA manifest
│
├── docs/                        # Documentation
│   ├── CONTRIBUTING.md          # Contribution guidelines
│   ├── DEPLOYMENT.md            # Deployment instructions
│   └── API.md                   # API documentation
│
├── tailwind.config.js           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🚦 **Getting Started**

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9.0 or later (or **yarn** 3.0+)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chinawholesale/website.git
   cd china-wholesale-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # API Configuration
   NEXT_PUBLIC_API_URL=https://chwh.store/backend/api
   
   # Contact Information
   NEXT_PUBLIC_PHONE=+8801XXXXXXXXX
   NEXT_PUBLIC_EMAIL=support@chinawholesale.com.bd
   NEXT_PUBLIC_WHATSAPP=8801XXXXXXXXX
   
   # Analytics (Optional)
   NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
   NEXT_PUBLIC_FACEBOOK_PIXEL_ID=YOUR_PIXEL_ID
   
   # Social Media Links
   NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/chinawholesalebd
   NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/chinawholesalebd
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/chinawholesalebd
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 **Brand Configuration**

The website uses China Wholesale's brand colors defined in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    primary: '#E3431F',     // Logo Orange-Red
    secondary: '#000000',   // Deep Black
    accent: '#F2F2F2',      // Neutral Gray
    background: '#FFFFFF',  // Clean White
  }
}
```

### Customizing Brand Colors

1. Update colors in `tailwind.config.js`
2. Modify CSS custom properties in `app/globals.css`
3. Update favicon and logo files in `public/`

## 🛠️ **Development Workflow**

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript compiler
npm run format       # Format code with Prettier
```

### Code Quality

The project includes several tools for maintaining code quality:

- **ESLint**: Linting and code quality rules
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Husky**: Git hooks for pre-commit checks

### Component Development Guidelines

1. **Use TypeScript** for all components
2. **Document props** with JSDoc comments
3. **Export components** as both named and default exports
4. **Use consistent naming** (PascalCase for components)
5. **Include accessibility** attributes (ARIA labels, etc.)
6. **Responsive design** mobile-first approach
7. **Performance optimization** (lazy loading, memoization)

#### Example Component Structure:

```typescript
/**
 * Component Name
 * 
 * Brief description of what the component does
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ComponentProps {
  /** Description of prop */
  title: string;
  /** Optional description */
  description?: string;
  /** Handler function */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const Component: React.FC<ComponentProps> = ({
  title,
  description,
  onClick,
  className,
}) => {
  return (
    <div className={cn('base-classes', className)}>
      {/* Component content */}
    </div>
  );
};

export default Component;
```

## 🌐 **API Integration**

The website integrates with a backend API for:

- Contact form submissions
- Service query forms
- Newsletter subscriptions
- File uploads
- User authentication (future)

### API Configuration

API endpoints are configured in `utils/api.ts`:

```typescript
// Base URL from environment
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://chwh.store/backend/api';

// Example usage
import api from '@/utils/api';

// Submit contact form
const response = await api.submitContactForm(formData);

// Health check
const health = await api.healthCheck();
```

### Adding New API Endpoints

1. Define the endpoint in `utils/api.ts`
2. Add TypeScript types in `types/api.ts`
3. Create appropriate error handling
4. Update documentation

## 🎭 **Animation & Interactions**

The website uses Framer Motion for smooth animations:

### Custom Animation Hooks

```typescript
// Scroll-triggered animations
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const { ref, isInView } = useIntersectionObserver({
  threshold: 0.2,
  triggerOnce: true,
});

// Counter animations
import { useCounterAnimation } from '@/hooks/useIntersectionObserver';

const { ref, count } = useCounterAnimation(100, 2000);
```

### Animation Best Practices

1. **Respect user preferences** (reduced motion)
2. **Use meaningful animations** that enhance UX
3. **Optimize performance** with CSS transforms
4. **Progressive enhancement** (graceful fallbacks)

## 📱 **Responsive Design**

The website is built mobile-first with Tailwind CSS breakpoints:

```css
/* Tailwind Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Responsive Development Tips

1. **Start with mobile** design and scale up
2. **Test on real devices** and different screen sizes
3. **Use relative units** (rem, em, %) when appropriate
4. **Optimize images** for different screen densities
5. **Consider touch interactions** on mobile devices

## 🔍 **SEO Optimization**

The website includes comprehensive SEO optimization:

### Features Included

- **Meta tags** and Open Graph data
- **Structured data** (JSON-LD) for search engines
- **XML sitemap** generation
- **Robots.txt** configuration
- **Canonical URLs** for all pages
- **Image optimization** with alt tags
- **Page speed optimization**

### SEO Best Practices

1. **Unique titles** and descriptions for each page
2. **Proper heading hierarchy** (H1, H2, H3...)
3. **Descriptive alt text** for images
4. **Fast loading times** (Core Web Vitals)
5. **Mobile-friendly** design
6. **HTTPS** and security headers

## 🔒 **Security**

Security measures implemented:

- **Content Security Policy** (CSP) headers
- **XSS protection** and input sanitization
- **CSRF protection** for forms
- **Secure cookies** and session management
- **Environment variable** protection
- **Regular dependency updates**

## 📊 **Analytics & Tracking**

Analytics setup for monitoring website performance:

- **Google Analytics 4** for user behavior tracking
- **Facebook Pixel** for advertising insights
- **Core Web Vitals** monitoring
- **Custom event tracking** for business metrics

## 🚀 **Deployment**

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Test the production build**
   ```bash
   npm run start
   ```

3. **Deploy to your platform**
   - **Vercel**: Connect GitHub repo and auto-deploy
   - **Netlify**: Drag and drop build folder or Git integration
   - **AWS/DigitalOcean**: Use Docker or traditional hosting

### Environment Configuration

**Development**:
```env
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

**Production**:
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://chwh.store/backend/api
```

## 🤝 **Contributing**

We welcome contributions from the development team! Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) before getting started.

### Development Process

1. **Create a feature branch** from `main`
2. **Make your changes** following coding standards
3. **Test thoroughly** on different devices
4. **Submit a pull request** with detailed description
5. **Code review** and approval process
6. **Merge to main** and deploy

### Code Review Checklist

- [ ] TypeScript types are properly defined
- [ ] Components are responsive and accessible
- [ ] Code is well-documented with comments
- [ ] Performance optimizations are in place
- [ ] Error handling is implemented
- [ ] Tests pass (when available)

## 🐛 **Troubleshooting**

### Common Issues

**Build Errors**:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript Errors**:
```bash
# Check for type errors
npm run type-check
```

**Styling Issues**:
```bash
# Rebuild Tailwind CSS
npm run dev
```

**API Connection Issues**:
- Check environment variables
- Verify API endpoint URLs
- Test API health endpoint: `https://chwh.store/backend/api/health`

### Performance Issues

1. **Check bundle size**: Use `npm run build` and review output
2. **Optimize images**: Use Next.js Image component
3. **Code splitting**: Use dynamic imports for large components
4. **Lighthouse audit**: Test performance scores

## 📞 **Support**

For technical support or questions:

- **Email**: dev@chinawholesale.com.bd
- **Documentation**: Check the `/docs` folder
- **Issues**: Create a GitHub issue for bugs or feature requests

## 📄 **License**

This project is proprietary and belongs to China Wholesale. All rights reserved.

---

## 🔄 **Changelog**

### Version 1.0.0 (Initial Release)
- ✅ Complete website structure and design
- ✅ Responsive layout for all devices
- ✅ Contact and service query forms
- ✅ API integration setup
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Accessibility compliance
- ✅ Documentation and developer guides

### Roadmap

**Version 1.1.0** (Next Quarter):
- [ ] Client dashboard (My Account)
- [ ] Order tracking system
- [ ] Multi-language support (Bengali)
- [ ] Advanced analytics dashboard
- [ ] Live chat integration
- [ ] Blog/news section

**Version 1.2.0** (Future):
- [ ] PWA capabilities
- [ ] Offline functionality
- [ ] Push notifications
- [ ] Advanced search and filtering
- [ ] Payment gateway integration

---

**Built with ❤️ by the China Wholesale Development Team**

*Last updated: December 2024* 