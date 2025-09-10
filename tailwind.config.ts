import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
        '4xl': '1920px',
        // Custom breakpoints for better mobile support
        mobile: { max: '767px' },
        tablet: { min: '768px', max: '1023px' },
        desktop: { min: '1024px' },
        // Touch device support
        touch: { raw: '(hover: none) and (pointer: coarse)' },
        'no-touch': { raw: '(hover: hover) and (pointer: fine)' },
      },
      colors: {
        background: '#1c1c1c',
        foreground: '#f2f2f2',
        accent: {
          DEFAULT: '#ff6600',
          secondary: '#00aaff',
          foreground: '#ffffff',
        },
        primary: {
          DEFAULT: '#ff6600',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#2a2a2a',
          foreground: '#f2f2f2',
        },
        muted: {
          DEFAULT: '#3a3a3a',
          foreground: '#a0a0a0',
        },
        card: {
          DEFAULT: '#2a2a2a',
          foreground: '#f2f2f2',
        },
        border: '#3a3a3a',
        input: '#3a3a3a',
        ring: '#ff6600',
        texture: '#f8f8f8',
      },
      backgroundColor: {
        background: '#1c1c1c',
        foreground: '#f2f2f2',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        distress: "url('/images/texture-overlay.png')",
        'hero-gradient':
          'linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 50%, #1c1c1c 100%)',
      },
      backgroundSize: {
        '300%': '300%',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'pulse-red': 'pulseRed 3s infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        'neon-glow': 'neonGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseRed: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(255, 102, 0, 0.7)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 0 15px rgba(255, 102, 0, 0)',
            transform: 'scale(1.02)',
          },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow:
              '0 0 20px rgba(255, 102, 0, 0.4), 0 0 40px rgba(255, 102, 0, 0.2)',
            filter: 'brightness(1)',
          },
          '50%': {
            boxShadow:
              '0 0 30px rgba(255, 102, 0, 0.8), 0 0 60px rgba(255, 102, 0, 0.4), 0 0 80px rgba(255, 102, 0, 0.2)',
            filter: 'brightness(1.1)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        neonGlow: {
          '0%, 100%': {
            textShadow:
              '0 0 5px #ff6600, 0 0 10px #ff6600, 0 0 15px #ff6600, 0 0 20px #ff6600, 0 0 35px #ff6600',
          },
          '50%': {
            textShadow:
              '0 0 2px #ff6600, 0 0 5px #ff6600, 0 0 8px #ff6600, 0 0 12px #ff6600, 0 0 25px #ff6600, 0 0 40px #ff6600',
          },
        },
      },
      transitionDelay: {
        '300': '300ms',
        '600': '600ms',
        '900': '900ms',
      },
    },
  },
  plugins: [],
};

export default config;
