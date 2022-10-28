import React, {FC} from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {Item} from '@/types/types';
import Text from '@/components/text';
import ChevronIcon from '@/assets/images/chevron-icon.png';

const Container = styled.TouchableOpacity`
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
})`
  margin-top: 2px;
`;

const ChevronImage = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
  source: ChevronIcon,
})`
  width: 7px;
  height: 12px;
`;

interface Props {
  item?: Item;
  onPress?: (item?: Item) => void;
}

const HomeListItem: FC<Props> = ({item, onPress}) => {
  return (
    <Container onPress={() => onPress?.(item)}>
      <ItemImage source={{uri: item?.image}} />
      <TextContainer>
        <TitleText>{item?.name}</TitleText>
        <PriceText>{`$${item?.price}`}</PriceText>
      </TextContainer>
      <ChevronImage />
    </Container>
  );
};

export default HomeListItem;
