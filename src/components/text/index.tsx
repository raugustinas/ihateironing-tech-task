import React, {FC} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import styled from 'styled-components/native';
import theme, {Color, Typography} from '@/utils/theme';

const TextStyled = styled(RNText)<{color: Color}>`
  color: ${({color, theme: {colors}}) => colors[color]};
`;

interface TextProps extends Partial<RNTextProps> {
  type: Typography;
  color: Color;
}

const Text: FC<TextProps> = ({type, style, ...props}) => (
  <TextStyled style={[theme?.typography?.[type], style]} {...props} />
);

export default Text;
