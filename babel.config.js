module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@common': './src/common',
          '@enum': './src/enum',
          '@queries': './src/queries',
          '@hooks': './src/hooks',
          '@styles': './src/styles',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
