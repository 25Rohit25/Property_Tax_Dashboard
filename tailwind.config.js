/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        apple: {
          bg: '#fbfbfd',
          card: '#ffffff',
          text: '#1d1d1f',
          textMuted: '#86868b',
          blue: '#0071e3',
          blueHover: '#0077ed',
          border: '#d2d2d7',
          chatUser: '#007aff',
          chatBot: '#e9e9eb',
        }
      },
      boxShadow: {
        'apple': '0 2px 12px rgba(0, 0, 0, 0.04)',
        'apple-hover': '0 10px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
