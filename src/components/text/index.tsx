import React, {FC} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import styled from 'styled-components/native';
import {Color, Typography} from '@/utils/theme';

const TextStyled = styled(RNText)<{color: Color; type: Typography}>`
  color: ${({color, theme}) => theme.colors[color]};
  font-size: ${({type, theme}) => theme?.typography?.[type]?.fontSize}px;
  font-family: ${({type, theme}) => theme?.typography?.[type]?.fontFamily};
  line-height: ${({type, theme}) => theme?.typography?.[type]?.lineHeight}px;
`;

interface TextProps extends Partial<RNTextProps> {
  type: Typography;
  color: Color;
}

const Text: FC<TextProps> = ({...props}) => <TextStyled {...props} />;

export default Text;
