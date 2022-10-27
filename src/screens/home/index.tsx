import React, {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, waitForPersistor} from '@/redux/store';
import {AppState} from '@/redux/models/app';

const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  const {ready} = useSelector<RootState, AppState>(({app}) => app);

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
