import {DefaultTheme} from 'styled-components/native';

const typography = {
  h1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    lineHeight: 28,
  },
  label1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    lineHeight: 22,
  },
  label2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 20,
  },
};

const colors = {
  primary: '#007EEC',
  black: '#2F384E',
  white: '#FFFFFF',
};

const theme: DefaultTheme = {
  typography,
  colors,
};

export default theme;

export type Color = keyof DefaultTheme['colors'];
export type Typography = keyof DefaultTheme['typography'];
