module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "globals": {
    "document": false,
    "window": true
  },
  "rules": {
    "semi": 0,
    "strict": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-console": 0,
    "import/prefer-default-export": "off",
    "comma-dangle": ["error", {"functions": "ignore"}]
  },
};
