module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@domains': './src/domains',
          '@hooks': './src/hooks',
          '@locales': './src/locales',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@states': './src/states',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
