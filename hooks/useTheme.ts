/**
 * useTheme Hook for Dark Mode Management
 * 
 * Custom hook for managing dark/light theme with localStorage persistence
 * and system preference detection
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface UseThemeReturn {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * Custom hook for theme management
 * 
 * @returns Object containing theme state and methods
 * 
 * @example
 * const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
 * 
 * return (
 *   <div className={resolvedTheme === 'dark' ? 'dark' : ''}>
 *     <button onClick={toggleTheme}>
 *       {resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
 *     </button>
 *   </div>
 * );
 */
export const useTheme = (): UseThemeReturn => {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  /**
   * Get system theme preference
   */
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  /**
   * Resolve the actual theme to apply
   */
  const resolveTheme = (currentTheme: Theme): 'light' | 'dark' => {
    if (currentTheme === 'system') {
      return getSystemTheme();
    }
    return currentTheme;
  };

  /**
   * Apply theme to document
   */
  const applyTheme = (actualTheme: 'light' | 'dark') => {
    if (typeof window === 'undefined') return;
    
    const root = window.document.documentElement;
    
    if (actualTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    setResolvedTheme(actualTheme);
  };

  /**
   * Set theme and persist to localStorage
   */
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    
    const actualTheme = resolveTheme(newTheme);
    applyTheme(actualTheme);
  };

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  /**
   * Initialize theme on mount
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Get saved theme from localStorage or default to system
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = savedTheme || 'system';
    
    setThemeState(initialTheme);
    
    const actualTheme = resolveTheme(initialTheme);
    applyTheme(actualTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        const systemTheme = getSystemTheme();
        applyTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  };
};

export default useTheme; 