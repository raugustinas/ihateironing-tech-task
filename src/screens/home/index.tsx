import React, {FC, useEffect} from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, waitForPersistor} from '@/redux/store';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Item} from '@/types/types';
import {useFetch} from '@/hooks/useFetch';
import Loading from '@/components/loading';
import {AppState} from '@/redux/models/app';

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  const {ready} = useSelector<RootState, AppState>(({app}) => app);

  const {data, loading} = useFetch<Item>('/items');

  useEffect(() => {
    async function init() {
      await waitForPersistor();
      dispatch?.app?.setAppReady(true);
    }
    init();
  }, []);

  if (!ready || loading) {
    return <Loading />;
  }

  return <Container />;
};

export default HomeScreen;
