import type { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'primary' | 'secondary' | 'gradient';
}

/**
 * Section Component
 * 
 * Wraps content sections with consistent spacing
 * - Generous vertical padding for breathing room
 * - Optional background variants
 * - Semantic HTML structure
 */
export function Section({ 
  children, 
  id, 
  className = '', 
  containerSize = 'xl',
  background = 'primary'
}: SectionProps) {
  const backgrounds = {
    primary: 'bg-black',
    secondary: 'bg-neutral-950',
    gradient: 'bg-gradient-to-b from-black via-neutral-950 to-black',
  };
  
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 lg:py-32 ${backgrounds[background]} ${className}`}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}
