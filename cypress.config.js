const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.narwalsistemas.com.br",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
