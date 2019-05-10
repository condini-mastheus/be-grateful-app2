const { addBabelPlugin, override, disableEsLint } = require('customize-cra');

module.exports = override(
  process.env.NODE_ENV === 'development' ? disableEsLint() : null,
  addBabelPlugin([
    'root-import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  ]),
);
