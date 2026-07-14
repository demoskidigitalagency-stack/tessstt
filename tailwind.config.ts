import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'black': '#0a0e27',
          'navy': '#0f1535',
          'blue': '#0099ff',
          'purple': '#9333ea',
          'white': '#f8fafc',
          'gray': '#1e293b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a0e27 0%, #0f1535 50%, #1a1f4d 100%)',
        'glow': 'radial-gradient(circle, rgba(0, 153, 255, 0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(0, 153, 255, 0.2)',
        'glow-purple': '0 0 40px rgba(147, 51, 234, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'xl': '20px',
        '2xl': '40px',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Cal Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 153, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 153, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
