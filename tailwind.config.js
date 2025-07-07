/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1c1c1c', // Ritz-Carlton text color
        'primary-foreground': '#FFFFFF', // white
        
        // Secondary Colors
        'secondary': '#1c1c1c', // same as primary for now
        'secondary-foreground': '#FFFFFF', // white
        
        // Accent Colors
        'accent': '#1c1c1c', // Ritz-Carlton text color
        'accent-foreground': '#FFFFFF', // white
        
        // Background Colors
        'background': '#FFFFFF', // white background
        'surface': '#FFFFFF', // white surface
        
        // Text Colors
        'text-primary': '#1c1c1c', // Ritz-Carlton text color
        'text-secondary': '#1c1c1c', // same as primary
        
        // Status Colors
        'success': '#2D5A27', // deep-forest-green
        'success-foreground': '#FEFEFE', // soft-white
        
        'warning': '#8B5A2B', // warm-amber
        'warning-foreground': '#FEFEFE', // soft-white
        
        'error': '#7A2E2E', // muted-burgundy
        'error-foreground': '#FEFEFE', // soft-white
        
        // Border Colors
        'border': 'rgba(0, 0, 0, 0.08)', // subtle-border
        'border-hover': 'rgba(0, 0, 0, 0.12)', // subtle-border-hover
      },
      fontFamily: {
        'sans': ['Swiss-721', 'Arial', 'Helvetica', 'sans-serif'],
        'heading': ['Swiss-721', 'Arial', 'sans-serif'],
        'body': ['Swiss-721', 'Arial', 'sans-serif'],
        'caption': ['Swiss-721', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
      },
      boxShadow: {
        'luxury-subtle': '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'luxury-pronounced': '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'luxury': '8px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '400ms',
      },
      zIndex: {
        'navigation': '100',
        'dropdown': '200',
        'overlay': '300',
        'carousel-nav': '150',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'slide-down': 'slideDown 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-in-right': 'slideInRight 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-out-right': 'slideOutRight 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'fade-in': 'fadeIn 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'fade-out': 'fadeOut 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}