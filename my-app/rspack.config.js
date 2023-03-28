const { composePlugins, withNx } = require('@nrwl/rspack');

module.exports = composePlugins(withNx(), (config) => {
  delete config.builtins.html;
  config.externals = [
    '@nestjs/common',
    '@nestjs/microservices',
    '@nestjs/websockets',
    '@nestjs/platform-express',
    'class-transformer',
    'class-validator',
    'cache-manager',
    'util',
    'repl',
  ];
  return config;
});