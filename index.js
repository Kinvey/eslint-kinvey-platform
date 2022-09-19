module.exports = {
  extends: [
    './kinvey-rules'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};
