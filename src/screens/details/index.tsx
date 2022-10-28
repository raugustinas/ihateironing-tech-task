import React, {FC} from 'react';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Item} from '@/types/types';
import {useFetch} from '@/hooks/useFetch';
import Loading from '@/components/loading';
import {DefaultNavigationProps} from '@/types/navigation';

const Container = styled(SafeAreaView)`
  flex: 1;
`;

interface Props {
  id?: number;
  navigation: DefaultNavigationProps<'Details'>;
}

const DetailsScreen: FC<Props> = ({navigation, id}) => {
  const {data, loading} = useFetch<Item>(`/items/${id}`);

  if (loading) {
    return <Loading />;
  }

  return <Container />;
};

export default DetailsScreen;
