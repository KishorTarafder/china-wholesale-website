/**
 * Button Component for China Wholesale Website
 * 
 * A flexible button component with:
 * - Multiple variants (primary, secondary, outline, ghost)
 * - Different sizes (sm, md, lg, xl)
 * - Loading states with spinners
 * - Icon support
 * - Hover and focus animations
 * - Full accessibility support
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

// Button variant types
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';

// Button size types
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// Button component props interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

/**
 * Utility function for combining class names
 * Simple implementation if @/utils/cn is not available
 */
const cnFallback = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Get button variant styles
 */
const getVariantStyles = (variant: ButtonVariant): string => {
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-opacity-90 shadow-brand focus:ring-brand-primary',
    secondary: 'bg-brand-secondary text-white hover:bg-gray-800 focus:ring-brand-secondary',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
    ghost: 'text-brand-secondary hover:bg-brand-accent focus:ring-brand-secondary',
    link: 'text-brand-primary hover:text-opacity-80 underline-offset-4 hover:underline p-0 h-auto font-normal',
  };
  
  return variants[variant];
};

/**
 * Get button size styles
 */
const getSizeStyles = (size: ButtonSize): string => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm h-8',
    md: 'px-4 py-2 text-sm h-10',
    lg: 'px-6 py-3 text-base h-12',
    xl: 'px-8 py-4 text-lg h-14',
  };
  
  return sizes[size];
};

/**
 * Get icon size based on button size
 */
const getIconSize = (size: ButtonSize): string => {
  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };
  
  return iconSizes[size];
};

/**
 * Animation variants for button interactions
 */
const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

/**
 * Main Button Component
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      children,
      className,
      disabled,
      asChild,
      onClick,
      type = 'button',
      onAnimationStart,
      onAnimationEnd,
      ...restProps
    },
    ref
  ) => {
    // Combine class names using cn utility or fallback
    const combineClasses = (typeof cn !== 'undefined' ? cn : cnFallback);

    // Base button styles
    const baseStyles = `
      inline-flex items-center justify-center font-medium rounded-lg
      transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden
    `;

    // Combine all styles
    const buttonClasses = combineClasses(
      baseStyles,
      getVariantStyles(variant),
      variant !== 'link' && getSizeStyles(size),
      fullWidth && 'w-full',
      className
    );

    // Handle loading state
    const isDisabled = disabled || loading;

    // Icon size
    const iconSize = getIconSize(size);

    /**
     * Render button content with icon and loading state
     */
    const renderContent = () => {
      if (loading) {
        return (
          <>
            <Loader2 className={`${iconSize} animate-spin mr-2`} />
            {children}
          </>
        );
      }

      if (icon && iconPosition === 'left') {
        return (
          <>
            <span className={`${iconSize} mr-2 flex-shrink-0`}>
              {icon}
            </span>
            {children}
          </>
        );
      }

      if (icon && iconPosition === 'right') {
        return (
          <>
            {children}
            <span className={`${iconSize} ml-2 flex-shrink-0`}>
              {icon}
            </span>
          </>
        );
      }

      return children;
    };

    // If variant is link and asChild is true, render as span
    if (variant === 'link' && asChild) {
      return (
        <span className={buttonClasses} {...restProps}>
          {renderContent()}
        </span>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        className={buttonClasses}
        disabled={isDisabled}
        variants={buttonVariants}
        initial="initial"
        whileHover={!isDisabled ? "hover" : undefined}
        whileTap={!isDisabled ? "tap" : undefined}
        style={restProps.style}
        id={restProps.id}
        name={restProps.name}
        value={restProps.value}
        form={restProps.form}
        formAction={restProps.formAction}
        formEncType={restProps.formEncType}
        formMethod={restProps.formMethod}
        formNoValidate={restProps.formNoValidate}
        formTarget={restProps.formTarget}
        aria-label={restProps['aria-label']}
        aria-describedby={restProps['aria-describedby']}
      >
        {/* Ripple effect background */}
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-lg"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Button content */}
        <span className="relative z-10 flex items-center">
          {renderContent()}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

/**
 * Button Group Component
 * For grouping related buttons together
 */
interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  variant = 'horizontal',
  className,
}) => {
  const combineClasses = (typeof cn !== 'undefined' ? cn : cnFallback);
  
  const groupClasses = combineClasses(
    'flex',
    variant === 'horizontal' ? 'flex-row space-x-2' : 'flex-col space-y-2',
    className
  );

  return (
    <div className={groupClasses}>
      {children}
    </div>
  );
};

/**
 * Icon Button Component
 * For buttons that only contain an icon
 */
interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: React.ReactNode;
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = 'md', className, ...props }, ref) => {
    const combineClasses = (typeof cn !== 'undefined' ? cn : cnFallback);
    
    // Square button styles
    const sizeStyles = {
      sm: 'w-8 h-8 p-1.5',
      md: 'w-10 h-10 p-2',
      lg: 'w-12 h-12 p-2.5',
      xl: 'w-14 h-14 p-3',
    };

    return (
      <Button
        ref={ref}
        size={size}
        className={combineClasses(sizeStyles[size], 'aspect-square', className)}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';

/**
 * Floating Action Button Component
 * For primary actions that float on the page
 */
interface FABProps extends Omit<ButtonProps, 'variant' | 'size'> {
  size?: 'md' | 'lg';
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export const FloatingActionButton: React.FC<FABProps> = ({
  size = 'lg',
  position = 'bottom-right',
  className,
  children,
  ...props
}) => {
  const combineClasses = (typeof cn !== 'undefined' ? cn : cnFallback);
  
  const positionStyles = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6',
  };

  const sizeStyles = {
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  };

  return (
    <Button
      variant="primary"
      className={combineClasses(
        positionStyles[position],
        sizeStyles[size],
        'rounded-full shadow-lg hover:shadow-xl z-50',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

/**
 * Call-to-Action Button Component
 * Special button for important CTAs with enhanced styling
 */
interface CTAButtonProps extends ButtonProps {
  gradient?: boolean;
  pulse?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  gradient = false,
  pulse = false,
  className,
  children,
  ...props
}) => {
  const combineClasses = (typeof cn !== 'undefined' ? cn : cnFallback);
  
  const ctaClasses = combineClasses(
    gradient && 'bg-gradient-to-r from-brand-primary to-red-600 hover:from-red-600 hover:to-brand-primary',
    pulse && 'animate-pulse-slow',
    'transform hover:scale-105 transition-all duration-300',
    className
  );

  return (
    <Button
      variant="primary"
      size="lg"
      className={ctaClasses}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Button; 