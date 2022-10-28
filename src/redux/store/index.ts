import logger from 'redux-logger';
import immerPlugin from '@rematch/immer';
import selectPlugin from '@rematch/select';
import persistPlugin, {getPersistor} from '@rematch/persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loadingPlugin, {ExtraModelsFromLoading} from '@rematch/loading';
import {models, RootModel} from '@/redux/models';
import Reactotron from '@/utils/reactotron';
import {
  init,
  InitConfigRedux,
  RematchDispatch,
  RematchRootState,
} from '@rematch/core';

const redux: InitConfigRedux = {
  middlewares: [],
  enhancers: [],
};

if (__DEV__) {
  redux.middlewares?.push(logger);
  redux.enhancers?.push(Reactotron.createEnhancer!());
}

const store = init<RootModel, ExtraModelsFromLoading<RootModel>>({
  models,
  plugins: [
    immerPlugin(),
    selectPlugin(),
    loadingPlugin(),
    persistPlugin({
      key: 'tech-task-perist-storage',
      storage: AsyncStorage,
      whitelist: ['cart'],
    }),
  ],
  redux,
});

export const persistor = getPersistor();

export const persistorBootstrapped = () => {
  return persistor.getState().bootstrapped;
};

export const waitForPersistor = () => {
  return new Promise<void>(resolve => {
    if (persistorBootstrapped()) {
      resolve();
    } else {
      const unsubscribe = persistor.subscribe(async () => {
        if (persistorBootstrapped()) {
          unsubscribe();
          resolve();
        }
      });
    }
  });
};

export default store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
