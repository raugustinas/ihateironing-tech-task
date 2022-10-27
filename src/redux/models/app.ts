import {createModel} from '@rematch/core';
import {RootModel} from './index';

export interface AppState {
  ready: boolean;
}

export const app = createModel<RootModel>()({
  state: {
    ready: false,
  } as AppState,
  reducers: {
    setAppReady(state, isAppReady: boolean) {
      return {
        ...state,
        ready: isAppReady,
      };
    },
  },
});
