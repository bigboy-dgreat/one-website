/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        marquee: 'marquee 30s linear infinite',         // base speed
        'marquee-md': 'marquee 20s linear infinite',     // faster on md+
        'marquee-lg': 'marquee 20s linear infinite',     // faster on lg+
      
      },
    },
  },
  plugins: [],
}
