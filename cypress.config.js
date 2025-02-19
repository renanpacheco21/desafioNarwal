const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: "https://www.narwalsistemas.com.br",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
