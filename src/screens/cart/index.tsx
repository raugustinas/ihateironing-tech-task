import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {Item} from '@/types/types';
import {RootState} from '@/redux/store';
import {CartState} from '@/redux/models/cart';
import {DefaultNavigationProps} from '@/types/navigation';
import CartListItem from '@/screens/cart/components/list-item';

const FlatListStyled = styled(FlatList as new () => FlatList<Item>).attrs({
  indicatorStyle: 'black',
  contentContainerStyle: {
    flexGrow: 1,
    padding: 15,
  },
})`
  flex: 1;
`;

const Separator = styled.View`
  height: 10px;
`;

interface Props {
  navigation: DefaultNavigationProps<'default'>;
}

const CartScreen: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {items} = useSelector<RootState, CartState>(({cart}) => cart);

  const handleItemPress = async (item?: Item) => {
    navigation?.navigate('Details', {id: item?.id});
  };

  const handleIncrement = (item?: Item) => {
    dispatch?.cart?.incrementQuantity(item);
  };

  const handleDecrement = (item?: Item) => {
    dispatch?.cart?.decrementQuantity(item);
  };

  return (
    <FlatListStyled<any>
      data={Object.values(items)}
      ItemSeparatorComponent={Separator}
      keyExtractor={(item: Item, index: number) => `${item.id}_${index}`}
      renderItem={({item}: {item: Item}) => (
        <CartListItem
          item={item}
          onPress={handleItemPress}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      )}
    />
  );
};

export default CartScreen;
