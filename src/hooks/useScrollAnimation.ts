import { useEffect } from 'react';

/**
 * Smooth Scroll Hook
 * 
 * Enhances scroll behavior for better UX
 * - Smooth transitions between sections
 * - Performance optimized
 */
export function useScrollAnimation() {
  useEffect(() => {
    // Enable smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      });
    });
  }, []);
}
