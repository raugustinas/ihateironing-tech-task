import React, {FC} from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Item} from '@/types/types';
import Text from '@/components/text';
import ChevronIcon from '@/assets/images/chevron-icon.png';
import QuantitySelector from '@/components/quantity-selector';

const Container = styled(TouchableOpacity)`
  flex: 1;
  padding: 15px;
  border-radius: 14px;
  flex-direction: row;
  align-items: center;
  background-color: white;
`;

const ItemImage = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
})`
  width: 65px;
  height: 65px;
  border-radius: 6px;
`;

const TextContainer = styled.View`
  flex: 1;
  margin: 0px 15px;
`;

const TitleText = styled(Text).attrs({
  type: 'label1',
  color: 'black',
})``;

const PriceText = styled(Text).attrs({
  type: 'label2',
  color: 'primary',
})``;

const ChevronImage = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
  source: ChevronIcon,
})`
  width: 7px;
  height: 12px;
`;

interface Props {
  item?: Item;
  onIncrement: (item?: Item) => void;
  onDecrement: (item?: Item) => void;
  onPress?: (item?: Item) => void;
}

const CartListItem: FC<Props> = ({item, onPress, onIncrement, onDecrement}) => (
  <Container onPress={() => onPress?.(item)}>
    <ItemImage source={{uri: item?.image}} />
    <TextContainer>
      <TitleText>{item?.name}</TitleText>
      <PriceText>{`$${item?.price}`}</PriceText>
      <QuantitySelector
        value={item?.quantity}
        onIncrement={() => onIncrement(item)}
        onDecrement={() => onDecrement(item)}
      />
    </TextContainer>
    <ChevronImage />
  </Container>
);

export default CartListItem;
