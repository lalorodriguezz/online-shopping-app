const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "64y54w",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})