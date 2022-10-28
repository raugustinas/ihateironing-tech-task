import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import Text from '@/components/text';

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<{disabled?: boolean}>`
  padding-horizontal: 8px;
  border-radius: 47px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 64px;
  opacity: ${({disabled}) => (disabled ? 0.6 : 1)};
  background-color: ${({theme}) => theme.colors.primary};
`;

const TitleText = styled(Text).attrs({
  type: 'label1',
  color: 'white',
  numberOfLines: 1,
})``;

interface ButtonProps extends Partial<TouchableOpacityProps> {
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({children, loading, ...restProps}) => (
  <Container disabled={loading} {...restProps}>
    {loading ? <ActivityIndicator /> : <TitleText>{children}</TitleText>}
  </Container>
);
