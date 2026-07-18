module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#c84f3d',
        teal: '#2f6f68',
        ochre: '#b88635'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
      }
    }
  },
  plugins: []
}
