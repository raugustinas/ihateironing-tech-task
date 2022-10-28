import React, {FC} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import Text from '@/components/text';
import ButtonRound from '@/components/button-round';
import PlusIcon from '@/assets/images/plus-icon.png';
import MinusIcon from '@/assets/images/minus-icon.png';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ButtonRoundStyled = styled(ButtonRound).attrs({
  size: 'medium',
})`
  background-color: ${({theme}) => theme.colors.primary};
`;

const ImageStyled = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  width: 10px;
  height: 10px;
`;

const TextStyled = styled(Text).attrs({
  type: 'label2',
  color: 'black',
})`
  margin-horizontal: 10px;
`;

interface Props extends ViewStyle {
  value?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantitySelector: FC<Props> = ({
  value,
  onIncrement,
  onDecrement,
  ...props
}) => (
  <Container {...props}>
    <ButtonRoundStyled disabled={value === 0} onPress={onDecrement}>
      <ImageStyled source={MinusIcon} />
    </ButtonRoundStyled>
    <TextStyled>{value}</TextStyled>
    <ButtonRoundStyled onPress={onIncrement}>
      <ImageStyled source={PlusIcon} />
    </ButtonRoundStyled>
  </Container>
);

export default QuantitySelector;
