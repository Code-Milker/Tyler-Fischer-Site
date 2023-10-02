/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#040D12',
        secondary: '#183D3D',
        secondaryComplement: '#3d1818',
        teritary: '#5c8374',
        lastColor: '#93B1A6',

      }
    }
  },
  plugins: []
};

