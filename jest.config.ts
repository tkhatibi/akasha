import { getJestProjects } from "@nrwl/jest";

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  projects: getJestProjects(),
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
