import React, {FC} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacityProps, ActivityIndicator} from 'react-native';
import {TouchableScale} from '@/components/touchable-scale';

const Container = styled(TouchableScale)<{
  size: number;
}>`
  align-items: center;
  justify-content: center;
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: ${({size}) => size / 2}px;
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
`;

interface ButtonSize {
  medium: number;
}

const sizes = {
  medium: 20,
};

interface Props extends TouchableOpacityProps {
  loading?: boolean;
  size: keyof ButtonSize;
}

const ButtonRound: FC<Props> = ({children, style, size, loading, onPress}) => (
  <Container
    style={style}
    size={sizes[size]}
    disabled={loading}
    onPress={onPress}>
    {loading ? <ActivityIndicator /> : children}
  </Container>
);

export default ButtonRound;
