const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "64y54w",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: 'src/test/*/.{cy,test}.{js,jsx,ts,tsx}',
    supportFile: false, 
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false,
    video: true,
    videoCompression: 32,
    screenshots: true,
  },
});