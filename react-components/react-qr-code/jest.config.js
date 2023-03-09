/** @type {import('jest').Config} */
const config = {
  // preset: "../../jest.preset.js",
  setupFilesAfterEnv: ["../../jest-setup.react.js"],
  coverageDirectory: "../../coverage/libs/ui/theme-switch",
  testEnvironment: "jsdom",
};

module.exports = config;
