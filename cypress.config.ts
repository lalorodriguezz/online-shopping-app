import { defineConfig } from 'cypress'

export default defineConfig({

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: 'src/**/*.cy.tsx',
  },
  projectId: "64y54w",
  e2e: {
    baseUrl: 'http://localhost:1234',
    supportFile: false,
  },
})