import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'mh2s2d',
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl:"http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
