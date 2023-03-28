const { composePlugins, withNx } = require('@nrwl/rspack');

module.exports = composePlugins(withNx(), (config) => {
  delete config.builtins.html;
  // config.externals = {
  //   '@nestjs/common': '@nestjs/common',
  //   '@nestjs/microservices': '@nestjs/microservices',
  //   '@nestjs/websockets': '@nestjs/websockets',
  //   '@nestjs/platform-express': '@nestjs/platform-express',
  //   'class-transformer': 'class-transformer',
  //   'class-validator': 'class-validator',
  //   'cache-manager': 'cache-manager',
  //   util: 'util',
  //   repl: 'repl',
  //   os: 'os',
  //   '@nestjs/microservices/microservices-module':
  //     '@nestjs/microservices/microservices-module',
  //   '@nestjs/websockets/socket-module': '@nestjs/websockets/socket-module',
  //   crypto: 'crypto',
  //   perf_hooks: 'perf_hooks',
  //   stream: 'stream',
  // };
  // config.externalsPresets = { node: true };
  config.externals = {
    '@nestjs/common': '"@nestjs/common"',
    '@nestjs/core': '"@nestjs/core"',
    tslib: '"tslib"',
  };
  config.externalsPresets = { node: true };

  return config;
});
