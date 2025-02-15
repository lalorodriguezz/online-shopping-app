const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "64y54w",
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: '**/*.spec.ts',
    supportFile: false,

    // Record screenshots and videos
    video: true,
    videoCompression: 32,
    screenshots: true,
  },
  testFiles: '**/*.spec.ts',
})