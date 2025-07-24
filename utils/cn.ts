/**
 * Class Name Utility for China Wholesale Website
 * 
 * A utility function for combining and merging class names
 * Supports conditional classes and deduplication
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

import { type ClassValue, clsx } from 'clsx';

/**
 * Combine multiple class names into a single string
 * Handles conditional classes and removes duplicates
 * 
 * @param inputs - Array of class values (strings, objects, arrays, etc.)
 * @returns Combined class name string
 * 
 * @example
 * cn('base-class', condition && 'conditional-class', { 'active': isActive })
 * // Returns: 'base-class conditional-class active' (if condition and isActive are true)
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Alternative implementation without clsx dependency
 * Use this if you prefer not to install clsx
 */
export function cnSimple(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export default cn; 