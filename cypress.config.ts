const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "64y54w", // ID del proyecto
  e2e: {
    baseUrl: "http://localhost:5173", // URL base para pruebas E2E
    supportFile: false, // Desactiva el archivo de soporte
    video: true, // Habilita grabación de videos
    videoCompression: 32, // Compresión de videos para reducir tamaño
    screenshots: true, // Habilita capturas de pantalla
  },
  component: {
    devServer: {
      framework: "react", // Framework utilizado
      bundler: "vite", // Bundler utilizado
    },
    specPattern: "src/**/*.cy.tsx", // Patrón para archivos de pruebas de componentes
  },
});
