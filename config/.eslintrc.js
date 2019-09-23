module.exports = {
  "extends": "eslint-config-edx",
  "parser": "babel-eslint",
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.config.*",
          "**/*.test.*",
          "**/setupTest.js",
        ]
      }
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/340#issuecomment-338424908
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "label" ],
      "required": {
        "some": [ "nesting", "id" ]
      },
      "allowChildren": false
    }]
  },
  "env": {
    "jest": true
  },
  "globals": {
    "newrelic": false
  }
}
