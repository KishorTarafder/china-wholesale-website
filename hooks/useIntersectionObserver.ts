/**
 * useIntersectionObserver Hook
 * 
 * Custom hook for handling intersection observer functionality
 * Used for scroll animations and lazy loading throughout the website
 * 
 * @author China Wholesale Dev Team
 * @version 1.0.0
 */

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>;
  isInView: boolean;
  hasBeenInView: boolean;
}

/**
 * Hook to observe when an element enters/exits the viewport
 * 
 * @param options - Configuration options for the intersection observer
 * @returns Object containing ref, isInView state, and hasBeenInView state
 * 
 * @example
 * const { ref, isInView } = useIntersectionObserver({
 *   threshold: 0.2,
 *   triggerOnce: true
 * });
 * 
 * return (
 *   <div 
 *     ref={ref} 
 *     className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
 *   >
 *     Content
 *   </div>
 * );
 */
export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverProps = {}): UseIntersectionObserverReturn => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!window.IntersectionObserver) {
      // Fallback for unsupported browsers
      setIsInView(true);
      setHasBeenInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        
        setIsInView(inView);
        
        if (inView && !hasBeenInView) {
          setHasBeenInView(true);
        }
        
        // If triggerOnce is true and element has been in view, disconnect
        if (triggerOnce && hasBeenInView && !inView) {
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasBeenInView]);

  return {
    ref,
    isInView: triggerOnce ? hasBeenInView : isInView,
    hasBeenInView,
  };
};

/**
 * Hook for animating multiple elements with staggered delays
 * 
 * @param count - Number of elements to animate
 * @param delay - Delay between each element animation (in ms)
 * @param options - Intersection observer options
 * @returns Array of refs and their corresponding in-view states
 * 
 * @example
 * const animations = useStaggeredAnimation(3, 100);
 * 
 * return (
 *   <div>
 *     {animations.map((item, index) => (
 *       <div
 *         key={index}
 *         ref={item.ref}
 *         className={`transition-all duration-500 ${
 *           item.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
 *         }`}
 *         style={{ transitionDelay: `${index * 100}ms` }}
 *       >
 *         Item {index + 1}
 *       </div>
 *     ))}
 *   </div>
 * );
 */
export const useStaggeredAnimation = (
  count: number,
  delay: number = 100,
  options: UseIntersectionObserverProps = {}
) => {
  const refs = useRef<(HTMLElement | null)[]>(Array(count).fill(null));
  const [inViewStates, setInViewStates] = useState<boolean[]>(Array(count).fill(false));
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Check if IntersectionObserver is supported
    if (!window.IntersectionObserver) {
      // Fallback: trigger all animations immediately
      setInViewStates(Array(count).fill(true));
      setHasTriggered(true);
      return;
    }

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasTriggered) {
            // Trigger staggered animations
            setTimeout(() => {
              setInViewStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });
            }, index * delay);
            
            if (index === 0) {
              setHasTriggered(true);
            }
          }
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px',
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [count, delay, hasTriggered, options.threshold, options.rootMargin]);

  return Array(count).fill(null).map((_, index) => ({
    ref: (element: HTMLElement | null) => {
      refs.current[index] = element;
    },
    isInView: inViewStates[index],
  }));
};

/**
 * Hook for scroll-triggered counter animations
 * 
 * @param end - Target number to count to
 * @param duration - Animation duration in milliseconds
 * @param options - Intersection observer options
 * @returns Object with ref, current count value, and animation state
 * 
 * @example
 * const { ref, count } = useCounterAnimation(1000, 2000);
 * 
 * return (
 *   <div ref={ref}>
 *     <span className="text-4xl font-bold">{Math.floor(count)}</span>
 *   </div>
 * );
 */
export const useCounterAnimation = (
  end: number,
  duration: number = 2000,
  options: UseIntersectionObserverProps = {}
) => {
  const { ref, isInView } = useIntersectionObserver(options);
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isInView || isAnimating) return;

    setIsAnimating(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = startValue + (end - startValue) * easeOut;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, isAnimating]);

  return {
    ref,
    count,
    isAnimating,
    isInView,
  };
};

export default useIntersectionObserver; 