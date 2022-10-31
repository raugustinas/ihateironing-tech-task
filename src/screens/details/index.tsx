import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {Alert, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Item} from '@/types/types';
import Text from '@/components/text';
import {useQuery} from '@/hooks/useQuery';
import Loading from '@/components/loading';
import {Button} from '@/components/button';
import {DefaultNavigationProps} from '@/types/navigation';

const Container = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  flex: 1;
`;

const ScrollViewStyled = styled(ScrollView)`
  flex: 1;
`;

const ItemImage = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
})`
  width: 100%;
  aspect-ratio: 1.5;
`;

const BodyContainer = styled.View`
  flex: 1;
  padding: 15px;
`;

const TitleText = styled(Text).attrs({
  type: 'h1',
  color: 'black',
})``;

const PriceText = styled(Text).attrs({
  type: 'h1',
  color: 'primary',
})`
  margin-top: 2px;
`;

const FooterContainer = styled.View`
  padding: 15px;
`;

interface Props {
  id?: number;
  navigation: DefaultNavigationProps<'Details'>;
}

const DetailsScreen: FC<Props> = ({id}) => {
  const {cart} = useDispatch();
  const {isLoading, data} = useQuery<Item>(`items/${id}`, ['items', id]);

  const handleBuyPress = () => {
    cart?.incrementQuantity(data);
    Alert.alert('Thank you!', 'Item added to cart!');
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <ScrollViewStyled>
        <ItemImage source={{uri: data?.image}} />
        <BodyContainer>
          <TitleText>{data?.name}</TitleText>
          <PriceText>{`$${data?.price}`}</PriceText>
        </BodyContainer>
      </ScrollViewStyled>
      <FooterContainer>
        <Button onPress={handleBuyPress}>BUY</Button>
      </FooterContainer>
    </Container>
  );
};

export default DetailsScreen;
