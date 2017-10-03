module.exports = {
    "extends": [
        "react-app",
        "airbnb"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "jest",
    ],
    "env": {
        "jest/globals": true,
    },
    "rules": {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/valid-expect": "error",

        "jsx-a11y/href-no-hash": "off",

        "no-case-declarations": "off",
      }
};