import React, {FC, useEffect} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, waitForPersistor} from '@/redux/store';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Item} from '@/types/types';
import {useFetch} from '@/hooks/useFetch';
import Loading from '@/components/loading';
import {AppState} from '@/redux/models/app';
import {DefaultNavigationProps} from '@/types/navigation';
import HomeListItem from '@/screens/home/components/list-item';

const FlatListStyled = styled(FlatList as new () => FlatList<Item>).attrs(
  ({insets}: {insets: EdgeInsets}) => ({
    indicatorStyle: 'black',
    contentContainerStyle: {
      flexGrow: 1,
      paddingVertical: 15,
      paddingLeft: insets.left || 15,
      paddingRight: insets.right || 15,
    },
  }),
)<{insets: EdgeInsets}>`
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
  const insets = useSafeAreaInsets();
  const {ready} = useSelector<RootState, AppState>(({app}) => app);
  const {data, loading} = useFetch<Item[]>('/items');

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

  if (!ready || loading) {
    return <Loading />;
  }

  return (
    <FlatListStyled<any>
      data={data}
      insets={insets}
      ItemSeparatorComponent={Separator}
      keyExtractor={(item: Item, index: number) => `${item.id}_${index}`}
      renderItem={({item}: {item: Item}) => (
        <HomeListItem item={item} onPress={handleItemPress} />
      )}
    />
  );
};

export default HomeScreen;
