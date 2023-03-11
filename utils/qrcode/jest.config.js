/** @type {import('jest').Config} */
const config = {
  // preset: "../../jest.preset.js",
  // setupFilesAfterEnv: ["../../jest-setup.react.js"],
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageThreshold: {
    global: {
      statements: 90,
    },
  },
  // testEnvironment: "jsdom",
};

module.exports = config;
