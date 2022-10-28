import {createModel} from '@rematch/core';
import {RootModel} from './index';
import {Item} from '@/types/types';

export interface CartState {
  items: {[id: number]: Item};
}

export const cart = createModel<RootModel>()({
  state: {
    items: {},
  } as CartState,
  reducers: {
    incrementQuantity(state, item: Item) {
      return {
        ...state,
        items: {
          ...state.items,
          [item?.id]: {
            ...item,
            quantity: (state.items?.[item?.id]?.quantity || 0) + 1,
          },
        },
      };
    },
    decrementQuantity(state, item: Item) {
      if (item?.quantity && item?.quantity > 1) {
        return {
          ...state,
          items: {
            ...state.items,
            [item?.id]: {
              ...item,
              quantity: (state.items?.[item?.id]?.quantity || 0) - 1,
            },
          },
        };
      } else {
        delete state?.items?.[item?.id];
      }
    },
  },
});
