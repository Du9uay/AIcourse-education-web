/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 赛博朋克主色调 - 霓虹粉紫
        'cyber-pink': {
          900: '#831843',
          800: '#9f1239',
          700: '#be123c',
          600: '#e11d48',
          500: '#f43f5e',
          400: '#fb7185',
          300: '#fda4af',
          200: '#fecdd3',
          100: '#ffe4e6',
          50: '#fff1f2',
        },
        // 赛博朋克霓虹蓝
        'neon-blue': {
          900: '#1e3a8a',
          800: '#1e40af',
          700: '#1d4ed8',
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
          200: '#bfdbfe',
          100: '#dbeafe',
          50: '#eff6ff',
        },
        // 赛博朋克霓虹紫
        'neon-purple': {
          900: '#581c87',
          800: '#6b21a8',
          700: '#7c3aed',
          600: '#9333ea',
          500: '#a855f7',
          400: '#c084fc',
          300: '#d8b4fe',
          200: '#e9d5ff',
          100: '#f3e8ff',
          50: '#faf5ff',
        },
        // 赛博朋克霓虹青
        'neon-cyan': {
          900: '#164e63',
          800: '#155e75',
          700: '#0e7490',
          600: '#0891b2',
          500: '#06b6d4',
          400: '#22d3ee',
          300: '#67e8f9',
          200: '#a5f3fc',
          100: '#cffafe',
          50: '#ecfeff',
        },
        // 赛博朋克暗黑背景
        'cyber-dark': {
          950: '#030712',
          900: '#0a0a0a',
          800: '#171717',
          700: '#262626',
          600: '#404040',
          500: '#525252',
          400: '#737373',
          300: '#a3a3a3',
          200: '#d4d4d4',
          100: '#f5f5f5',
          50: '#fafafa',
        },
        // 赛博朋克霓虹黄
        'neon-yellow': {
          900: '#713f12',
          800: '#854d0e',
          700: '#a16207',
          600: '#ca8a04',
          500: '#eab308',
          400: '#facc15',
          300: '#fde047',
          200: '#fef08a',
          100: '#fef3c7',
          50: '#fefce8',
        },
        // 保留旧色系用于快速迁移
        base: { 
          50: '#E5DFD7',
          800: '#8A9B8F',
          900: 'color-mix(in oklab, #7A9E9F 86%, #000 14%)'
        },
        accent: { 
          500: '#D4B483'
        },
        'surf-tundra': {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        'accent-sand': {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      backdropSaturate: {
        150: '150%',
        175: '175%',
        200: '200%',
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(244, 63, 94, 0.5), 0 0 40px rgba(244, 63, 94, 0.3), 0 0 60px rgba(244, 63, 94, 0.1)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(168, 85, 247, 0.1)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
        'glass-hover': '0 12px 48px rgba(0, 0, 0, 0.5), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset',
        'glass-sm': '0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 0.5px rgba(255, 255, 255, 0.08) inset',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset',
        'inner-light': '0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 2s infinite alternate',
        'glitch': 'glitch 1s infinite',
        'scan-line': 'scanLine 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        neonFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}