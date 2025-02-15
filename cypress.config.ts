const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "64y54w",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: 'cypress/component/*/.cy.{js,jsx,ts,tsx}',
    supportFile: false, // Agregar esto para evitar el error
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false,

    // Record screenshots and videos
    video: true,
    videoCompression: 32,
    screenshots: true,
  },
})