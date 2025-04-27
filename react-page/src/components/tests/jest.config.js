module.exports = {
  testEnvironment: "jsdom", // Simulates a browser environment for React components
  transform: {
    "^.+\\.jsx?$": "babel-jest" // Use Babel to transform JavaScript and JSX files
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy" // Mock CSS imports
  }
};