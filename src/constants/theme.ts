/**
 * UNIQUE SMP - VISUAL IDENTITY GUIDELINES
 * 
 * Design Philosophy:
 * - Premium, cinematic gaming brand aesthetic
 * - Apple-like minimalism meets Minecraft voxel geometry
 * - Deep black base with glowing red accents
 * - Clean hierarchy, generous spacing, high contrast
 * 
 * Color Psychology:
 * - Black/Charcoal: Premium, mysterious, immersive
 * - Red Accents: Energy, passion, YouTuber brand association
 * - Subtle gradients: Depth without noise
 */

export const colors = {
  // Primary Background Palette
  background: {
    primary: '#0a0a0a',      // Deep black - main background
    secondary: '#121212',    // Charcoal - surface elements
    tertiary: '#1a1a1a',     // Elevated surfaces
    elevated: '#1f1f1f',     // Hover states, cards
  },
  
  // Red Accent System (YouTuber-inspired)
  accent: {
    primary: '#dc2626',      // Deep crimson - primary CTA
    secondary: '#ef4444',    // Bright red - hover states
    glow: '#ff0000',         // Pure red - glow effects
    muted: '#991b1b',        // Dark red - subtle highlights
  },
  
  // Neutral Grays
  surface: {
    dark: '#0d0d0d',
    medium: '#262626',
    light: '#404040',
  },
  
  // Text Hierarchy
  text: {
    primary: '#ffffff',      // Pure white - headings
    secondary: '#d4d4d4',    // Light gray - body text
    muted: '#737373',        // Medium gray - captions
    disabled: '#525252',     // Dark gray - disabled states
  },
  
  // Minecraft-inspired Accents
  minecraft: {
    grass: '#7cb342',        // Subtle green accent
    stone: '#6b7280',        // Gray stone
    diamond: '#3b82f6',      // Blue accent (rare use)
    gold: '#fbbf24',         // Gold highlights
  },
  
  // Semantic Colors
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Gradient Definitions
  gradients: {
    hero: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
    redGlow: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, rgba(10, 10, 10, 0) 70%)',
    card: 'linear-gradient(145deg, #1a1a1a 0%, #121212 100%)',
  },
} as const;

/**
 * Typography System
 * 
 * Primary: Inter - Modern, clean sans-serif for body and UI
 * Display: Custom pixel-inspired font for headings (to be loaded)
 * 
 * Scale: Based on 1.25 ratio (Major Third)
 */
export const typography = {
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: "'Minecraft', 'Press Start 2P', monospace", // Pixel-inspired for headings
    mono: "'Fira Code', 'Consolas', monospace",
  },
  
  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
  },
  
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

/**
 * Spacing System
 * Based on 4px grid for perfect alignment
 */
export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
  '6xl': '12rem',   // 192px
} as const;

/**
 * Animation Timings
 * Following Apple's animation curves for smooth, natural motion
 */
export const animations = {
  durations: {
    fast: 150,
    normal: 300,
    slow: 500,
    verySlow: 800,
  },
  
  easings: {
    standard: [0.4, 0.0, 0.2, 1],
    decelerate: [0.0, 0.0, 0.2, 1],
    accelerate: [0.4, 0.0, 1, 1],
    sharp: [0.4, 0.0, 0.6, 1],
  },
} as const;

/**
 * Breakpoints for Responsive Design
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Z-Index Scale
 * Consistent layering system
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  modal: 1200,
  popover: 1300,
  toast: 1400,
} as const;
