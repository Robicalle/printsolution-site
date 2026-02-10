import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#33BBFF',
          500: '#00AAFF',
          600: '#0088CC',
          700: '#006699',
        },
        magenta: {
          400: '#FF33FF',
          500: '#E91E8C',
          600: '#CC0077',
        },
        yellow: {
          400: '#FFE033',
          500: '#FFD600',
          600: '#CCB000',
        },
        green: {
          400: '#33FF99',
          500: '#00E676',
          600: '#00C853',
        },
        primary: {
          50: '#E6F6FF',
          100: '#CCE9FF',
          200: '#99D4FF',
          300: '#66BFFF',
          400: '#33AAFF',
          500: '#00AAFF',
          600: '#0088CC',
          700: '#006699',
          800: '#004466',
          900: '#002233',
        },
        accent: {
          400: '#FF33FF',
          500: '#E91E8C',
          600: '#CC0077',
        },
        dark: {
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
        surface: {
          50: '#FAFBFC',
          100: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #0D2B45 40%, #00AAFF 100%)',
        'cta-gradient': 'linear-gradient(135deg, #00AAFF 0%, #E91E8C 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,170,255,0.05) 0%, rgba(233,30,140,0.05) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.08)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 6px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 20px 48px rgba(0,0,0,0.1)',
        'glow': '0 0 60px rgba(0,170,255,0.15)',
        'glow-magenta': '0 0 60px rgba(233,30,140,0.15)',
        'glow-yellow': '0 0 40px rgba(255,214,0,0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.6s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.6s ease-out 0.4s forwards',
        'counter': 'counter 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
