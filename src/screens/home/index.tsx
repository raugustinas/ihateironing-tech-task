import {FlatList} from 'react-native';
import React, {FC, useEffect} from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, waitForPersistor} from '@/redux/store';
import {Item} from '@/types/types';
import {useQuery} from '@/hooks/useQuery';
import Loading from '@/components/loading';
import {AppState} from '@/redux/models/app';
import {DefaultNavigationProps} from '@/types/navigation';
import HomeListItem from '@/screens/home/components/list-item';

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

const HomeScreen: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {ready} = useSelector<RootState, AppState>(({app}) => app);
  const {isLoading, data} = useQuery<Item>('items', ['items']);

  useEffect(() => {
    async function init() {
      await waitForPersistor();
      dispatch?.app?.setAppReady(true);
    }
    init();
  }, []);

  const handleItemPress = async (item?: Item) => {
    navigation?.navigate('Details', {id: item?.id});
  };

  if (!ready || isLoading) {
    return <Loading />;
  }

  return (
    <FlatListStyled<any>
      data={data}
      ItemSeparatorComponent={Separator}
      keyExtractor={(item: Item, index: number) => `${item.id}_${index}`}
      renderItem={({item}: {item: Item}) => (
        <HomeListItem item={item} onPress={handleItemPress} />
      )}
    />
  );
};

export default HomeScreen;
