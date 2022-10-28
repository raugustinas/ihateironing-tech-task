import {Models} from '@rematch/core';
import {app} from '@/redux/models/app';
import {cart} from '@/redux/models/cart';

export interface RootModel extends Models<RootModel> {
  app: typeof app;
  cart: typeof cart;
}

export const models: RootModel = {
  app,
  cart,
};
