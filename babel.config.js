module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          app: './app',
          '@axios': './app/utils/axios',
        },
      },
    ],
  ],
};
