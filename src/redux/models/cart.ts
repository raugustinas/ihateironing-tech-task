import {createModel} from '@rematch/core';
import {RootModel} from './index';
import {Item} from '@/types/types';

export interface CartState {
  items: Item[];
}

export const cart = createModel<RootModel>()({
  state: {
    items: [],
  } as CartState,
  reducers: {
    addToCart(state, item: Item) {
      return {
        ...state,
        items: [...state.items, item],
      };
    },
  },
});
