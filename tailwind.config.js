/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        primary: {
          50: '#FFE5F3',
          100: '#FFCBE7',
          200: '#FFA2D5',
          300: '#FF78C3',
          400: '#FF4FB1',
          500: '#FF269F',
          600: '#E3007B',
          700: '#B0005F',
          800: '#7D0043',
          900: '#4D002D',
          DEFAULT: '#E3007B',
        },
        neutral: {
          50: '#F9F9FB',
          100: '#F2F2F5',
          200: '#E4E5EB',
          300: '#C9CBD5',
          400: '#A7ABBB',
          500: '#7B8094',
          600: '#5B6070',
          700: '#3D4150',
          800: '#252835',
          900: '#161822',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #E3007B 0%, #F472B6 45%, #C084FC 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02))',
      },
      boxShadow: {
        glow: '0 20px 50px rgba(227, 0, 123, 0.25)',
        card: '0 12px 30px rgba(15, 23, 42, 0.12)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 5s ease-in-out infinite',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
