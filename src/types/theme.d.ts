import 'styled-components/native';
import {TextStyle} from 'react-native';

interface Font extends TextStyle {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    typography: {
      h1: Font;
    };
    colors: {
      primary: string;
    };
  }
}
