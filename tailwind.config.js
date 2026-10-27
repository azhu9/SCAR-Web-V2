/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        line: '#26282C',
        field: '#3A3D42',
        muted: '#9EA2A8',
        soft: '#B8BBC0',
        dim: '#C2C5CA',
        faint: '#7A7E84',
        scarlet: '#D91E3A',
        'scarlet-light': '#FF6B7E',
        surface: '#111214',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        // 1180px of content plus the 24px side gutters.
        content: '1228px',
      },
      letterSpacing: {
        eyebrow: '0.16em',
      },
    },
  },
  plugins: [],
};
