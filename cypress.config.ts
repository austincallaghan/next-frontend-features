import { defineConfig } from "cypress";
import happoTask from "happo-cypress/task";

export default defineConfig({
  projectId: "your project id",
  video: true,
  videoCompression: true,
  retries: {
    openMode: 0,
    runMode: 3,
  },
  e2e: {
    baseUrl: "https://localhost:3000",
    scrollBehavior: "nearest",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      happoTask.register(on);
      return config;
    },
  },
});
