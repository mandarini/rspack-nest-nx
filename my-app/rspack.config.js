const { composePlugins, withNx } = require('@nrwl/rspack');

module.exports = composePlugins(withNx(), (config) => {
  delete config.builtins.html;
  config.externals = {
    '@nestjs/common': '"@nestjs/common"',
    '@nestjs/core': '"@nestjs/core"',
  };
  config.externalsPresets = { node: true };

  return config;
});
