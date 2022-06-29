/** @type {import('tailwindcss').Config} */
module.exports = {
  // 作用：生产环境下，这些类名未用到，就不会打包进去
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
