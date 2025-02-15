import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "64y54w",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: 'src/test/**/*.cy.{js,jsx,ts,tsx}', // Ajustar el patrón a la ubicación real
    supportFile: false, 
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false,
    video: true,
    videoCompression: 32,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});