module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['babel-plugin-module-resolver', {root: ['./src'], alias: {'@': './src'}}],
  ],
};
