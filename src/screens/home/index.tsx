import React, {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, waitForPersistor} from '@/redux/store';
import {AppState} from '@/redux/models/app';
import {useFetch} from '@/hooks/useFetch';
import {Item} from '@/types/types';

const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  const {ready} = useSelector<RootState, AppState>(({app}) => app);

  const {data, loading, error} = useFetch<Item>('/items');

  useEffect(() => {
    async function init() {
      await waitForPersistor();
      dispatch?.app?.setAppReady(true);
    }
    init();
  }, []);

  if (!ready) {
    return null;
  }

  return <SafeAreaView />;
};

export default HomeScreen;
