/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{ejs,html,js}',
    './dist/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      colors: {
        // Primary palette
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Assignment-specific themes
        assignment1: {
          light: '#4facfe',
          DEFAULT: '#0ea5e9',
          dark: '#0369a1',
        },
        assignment2: {
          light: '#f093fb',
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
        },
        home: {
          light: '#667eea',
          DEFAULT: '#7c3aed',
          dark: '#5b21b6',
        }
      },
      backgroundImage: {
        'gradient-home': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-assignment1': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-assignment2': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.06)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}