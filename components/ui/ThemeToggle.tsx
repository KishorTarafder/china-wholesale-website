/**
 * Theme Toggle Component for China Wholesale Website
 * 
 * A beautiful dark/light mode toggle button with smooth animations
 * and multiple style variants
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

interface ThemeToggleProps {
  variant?: 'default' | 'minimal' | 'floating';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
}

/**
 * Theme Toggle Button Component
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'default',
  size = 'md',
  className,
  showLabel = false,
}) => {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();

  /**
   * Get size styles
   */
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8 text-sm';
      case 'lg':
        return 'w-12 h-12 text-lg';
      default:
        return 'w-10 h-10 text-base';
    }
  };

  /**
   * Get variant styles
   */
  const getVariantStyles = () => {
    switch (variant) {
      case 'minimal':
        return 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border-0';
      case 'floating':
        return 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700';
      default:
        return 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600';
    }
  };

  /**
   * Get current theme icon
   */
  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="w-5 h-5" />;
      case 'system':
        return <Monitor className="w-5 h-5" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  /**
   * Cycle through themes: light -> dark -> system -> light
   */
  const cycleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('system');
        break;
      case 'system':
        setTheme('light');
        break;
    }
  };

  /**
   * Animation variants
   */
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    initial: { rotate: 0, opacity: 1 },
    animate: { rotate: 360, opacity: 1 },
    exit: { rotate: -360, opacity: 0 },
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Theme Toggle Button */}
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={cycleTheme}
        className={cn(
          'relative flex items-center justify-center rounded-lg transition-all duration-200',
          'text-gray-700 dark:text-gray-200',
          'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800',
          getSizeStyles(),
          getVariantStyles()
        )}
        title={`Current theme: ${theme} (${resolvedTheme}). Click to cycle themes.`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 dark:from-blue-600 dark:to-purple-600"
          animate={{ opacity: resolvedTheme === 'dark' ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon with Animation */}
        <motion.div
          key={theme}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {getThemeIcon()}
        </motion.div>

        {/* Active Theme Indicator */}
        <motion.div
          className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full"
          animate={{
            backgroundColor: resolvedTheme === 'dark' ? '#3B82F6' : '#F59E0B',
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Theme Label (Optional) */}
      {showLabel && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize"
        >
          {theme} {theme === 'system' && `(${resolvedTheme})`}
        </motion.span>
      )}
    </div>
  );
};

/**
 * Simple Toggle Button (for minimal use cases)
 */
export const SimpleThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-lg transition-colors duration-200',
        'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        className
      )}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 