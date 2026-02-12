const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: false,
    json: true,
    code:true,

    
  },
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,  
  video: false,


  e2e: {
    baseUrl: "https://kaushalam.ap.gov.in",
    video: true,
    videosFolder:'cypress/videos',
    videouploadonpasses:true,

    env: {
      validUsername: "yabajidileep@gmail.com",
      validPassword: "1234dileeA@"
    },
    setupNodeEvents(on, config) {

      return config;
    }
  }
});
