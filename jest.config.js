const { getJestProjects } = require("@nrwl/jest");

/** @type {import('jest').Config} */
const config = {
  projects: getJestProjects(),
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": "babel-jest",
  },
};

module.exports = config;
