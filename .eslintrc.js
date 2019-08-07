module.exports = {
  "plugins": ["node", "react"],
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "rules": {
    "strict": "off",
    "no-underscore-dangle": [
      "error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-var": "error"
  },
  "overrides": [
    {
      "files": ["*.spec.js", "*.ispec.js"]
    }
  ],
  "env": {
    "jest": true,
    "node": true,
    "browser": true,
  }
}
