module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: { '@': './src/' },
        extensions: ['.tsx', '.ts', '.js', '.json']
      }],
      ["inline-import", { "extensions": [".sql"] }]
    ]
  };
};
