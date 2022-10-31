import {Alert} from 'react-native';
import Config from 'react-native-config';
import {useQuery as useReactQuery, QueryKey} from 'react-query';

export const useQuery = <TData>(endpoint: string, queryKey: QueryKey) => {
  return useReactQuery<TData, Error>(
    queryKey,
    () => fetch(Config.API_BASE_URL + endpoint).then(res => res.json()),
    {onError: error => Alert.alert('Error', error.message)},
  );
};
