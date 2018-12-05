module.exports = {
  extends: [
    './kinvey-rules'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  }
};
