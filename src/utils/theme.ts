import {DefaultTheme} from 'styled-components/native';

const typography = {
  h1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    lineHeight: 26,
  },
};

const colors = {
  primary: '#FCCD34',
};

const theme: DefaultTheme = {
  typography,
  colors,
};

export default theme;

export type Color = keyof DefaultTheme['colors'];
export type Typography = keyof DefaultTheme['typography'];
