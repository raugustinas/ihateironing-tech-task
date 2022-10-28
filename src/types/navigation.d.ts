import {StackNavigationProp} from '@react-navigation/stack';

type StackParamList = {
  default: undefined;
  Details: {id?: number};
};

export type DefaultNavigationProps<T extends keyof StackParamList> =
  StackNavigationProp<StackParamList, T>;
