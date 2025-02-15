const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "64y54w",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: 'src/**/*.cy.tsx',
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