/**
 * Card Component for China Wholesale Website
 * 
 * A flexible card component with:
 * - Multiple variants (default, elevated, bordered, glass)
 * - Hover effects and animations
 * - Different padding sizes
 * - Image support
 * - Header, body, and footer sections
 * - Click handling for interactive cards
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

// Card variant types
type CardVariant = 'default' | 'elevated' | 'bordered' | 'glass' | 'outline';

// Card padding sizes
type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

// Base Card component props
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  hover?: boolean;
  interactive?: boolean;
  children: React.ReactNode;
}

/**
 * Get card variant styles
 */
const getVariantStyles = (variant: CardVariant): string => {
  const variants = {
    default: 'bg-white border border-gray-200 shadow-soft',
    elevated: 'bg-white shadow-medium border border-gray-100',
    bordered: 'bg-white border-2 border-gray-200',
    glass: 'bg-white/70 backdrop-blur-md border border-white/20 shadow-soft',
    outline: 'bg-transparent border-2 border-brand-primary',
  };
  
  return variants[variant];
};

/**
 * Get card padding styles
 */
const getPaddingStyles = (padding: CardPadding): string => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };
  
  return paddings[padding];
};

/**
 * Card animation variants
 */
const cardVariants = {
  initial: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.02 },
  tap: { scale: 0.98 },
};

/**
 * Main Card Component
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hover = false,
      interactive = false,
      className,
      children,
      onClick,
      onAnimationStart,
      onAnimationEnd,
      ...restProps
    },
    ref
  ) => {
    const cardClasses = cn(
      'rounded-xl overflow-hidden transition-all duration-300',
      getVariantStyles(variant),
      padding !== 'none' && getPaddingStyles(padding),
      (hover || interactive) && 'hover:shadow-large cursor-pointer',
      interactive && 'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
      className
    );

    if (hover || interactive) {
      return (
        <motion.div
          ref={ref}
          className={cardClasses}
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          whileTap={interactive ? "tap" : undefined}
          tabIndex={interactive ? 0 : undefined}
          role={interactive ? 'button' : undefined}
          onClick={onClick}
          style={restProps.style}
          id={restProps.id}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={cardClasses} onClick={onClick} style={restProps.style} id={restProps.id}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card Header Component
 */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4 border-b border-gray-100', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

/**
 * Card Body Component
 */
interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

/**
 * Card Footer Component
 */
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4 border-t border-gray-100 bg-gray-50/50', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

/**
 * Card Image Component
 */
interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspect?: 'square' | 'video' | 'wide' | 'tall';
  objectFit?: 'cover' | 'contain' | 'fill';
}

export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ aspect = 'video', objectFit = 'cover', className, alt, ...props }, ref) => {
    const aspectClasses = {
      square: 'aspect-square',
      video: 'aspect-video',
      wide: 'aspect-[21/9]',
      tall: 'aspect-[3/4]',
    };

    const objectFitClasses = {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
    };

    return (
      <div className={cn('overflow-hidden', aspectClasses[aspect])}>
        <img
          ref={ref}
          className={cn(
            'w-full h-full transition-transform duration-300 hover:scale-105',
            objectFitClasses[objectFit],
            className
          )}
          alt={alt}
          {...props}
        />
      </div>
    );
  }
);

CardImage.displayName = 'CardImage';

/**
 * Service Card Component
 * Specialized card for service items
 */
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  onClick?: () => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features = [],
  onClick,
  className,
}) => {
  return (
    <Card
      variant="elevated"
      hover
      interactive={!!onClick}
      onClick={onClick}
      className={cn('group', className)}
    >
      <CardBody className="text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-xl mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-1 text-xs text-gray-500">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1 h-1 bg-brand-primary rounded-full mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardBody>
    </Card>
  );
};

/**
 * Testimonial Card Component
 * Specialized card for customer testimonials
 */
interface TestimonialCardProps {
  content: string;
  author: {
    name: string;
    role?: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  rating,
  className,
}) => {
  return (
    <Card variant="elevated" padding="lg" className={cn('relative', className)}>
      {/* Quote mark */}
      <div className="absolute top-4 left-4 text-brand-primary/20 text-4xl font-bold leading-none">
        "
      </div>

      <CardBody className="pt-8">
        {/* Rating */}
        {rating && (
          <div className="flex space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </div>
            ))}
          </div>
        )}

        {/* Content */}
        <p className="text-gray-700 italic mb-6 leading-relaxed">
          {content}
        </p>

        {/* Author */}
        <div className="flex items-center">
          {author.avatar ? (
            <img
              src={author.avatar}
              alt={author.name}
              className="w-10 h-10 rounded-full mr-3 object-cover"
            />
          ) : (
            <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center mr-3">
              <span className="text-brand-primary font-medium text-sm">
                {author.name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-medium text-brand-secondary text-sm">
              {author.name}
            </p>
            {(author.role || author.company) && (
              <p className="text-xs text-gray-500">
                {author.role}
                {author.role && author.company && ', '}
                {author.company}
              </p>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

/**
 * Stat Card Component
 * For displaying statistics and metrics
 */
interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    direction: 'up' | 'down';
  };
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  icon,
  trend,
  className,
}) => {
  return (
    <Card variant="elevated" padding="lg" className={className}>
      <CardBody className="text-center">
        {/* Icon */}
        {icon && (
          <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-lg mb-4">
            {icon}
          </div>
        )}

        {/* Value */}
        <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">
          {value}
        </div>

        {/* Label */}
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
          {label}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs text-gray-500 mb-3">
            {description}
          </p>
        )}

        {/* Trend */}
        {trend && (
          <div className={`flex items-center justify-center space-x-1 text-xs ${
            trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            <span>{trend.direction === 'up' ? '↗' : '↘'}</span>
            <span>{trend.value}% {trend.label}</span>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default Card; 