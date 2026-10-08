/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f4f6f9',
        surface: '#ffffff',
        'surface-alt': '#f8fafb',
        navy: {
          dark: '#0f1923',
          text: '#17212b',
        },
        text: {
          primary: '#111827',
          muted: '#6b7280',
        },
        border: '#e3e7eb',
        primary: {
          DEFAULT: '#16a34a',
          strong: '#009b3a',
          light: '#4ade80',
          soft: '#eaf8ef',
        },
        info: {
          DEFAULT: '#2563eb',
          soft: '#edf4ff',
        },
        purple: {
          DEFAULT: '#8154d8',
        },
        success: {
          DEFAULT: '#087a2f',
          soft: '#eaf8ef',
        },
        warning: {
          DEFAULT: '#d69b00',
          soft: '#fff8df',
        },
        danger: {
          DEFAULT: '#dc3545',
          soft: '#fff5f5',
        },
        neutral: {
          50: '#f8fafb',
          100: '#f4f6f9',
          200: '#e5e7eb',
          300: '#e3e7eb',
          400: '#cbd5e1',
          500: '#6b7280',
          600: '#475569',
          700: '#334155',
          800: '#17212b',
          900: '#111827',
          950: '#0f1923',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Segoe UI',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 2px 6px rgba(0,0,0,0.025)',
        panel: '0 6px 18px rgba(0,0,0,0.06)',
        soft: '0 10px 24px rgba(15,25,35,0.05)',
        focus: '0 0 0 3px rgba(22, 163, 74, 0.15)',
      },
      borderRadius: {
        dashboard: '12px',
        panel: '16px',
        xl: '18px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0f1923 0%, #17212b 35%, #1d3557 100%)',
      },
    },
  },
  plugins: [],
};
