import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: 'index.html',
        characters: 'src/pages/characters.html',
        episodes: 'src/pages/episodes.html',
        locations: 'src/pages/locations.html'
      }
    }
  }
});