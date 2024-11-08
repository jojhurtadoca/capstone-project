module.exports = {
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".js", ".ts"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
