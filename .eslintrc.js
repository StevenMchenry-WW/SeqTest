module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-console": 0,
    "no-param-reassign": [2, { "props": false }],
    "treatUndefinedAsUnspecified": true,
    "comma-dangle": 0,
    "semi": "never"
  },
  "env": {
    "commonjs": true,
    "node": true,
    "mocha": true
  },
};