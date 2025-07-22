// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base:'/one-website/',
//   plugins: [react()],
// })







import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // change this to '/one-website/' if deploying to GitHub Pages
  plugins: [react()],
});
