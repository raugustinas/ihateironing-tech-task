import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Config from 'react-native-config';

export const useFetch = <TData>(endpoint: string) => {
  const [data, setData] = useState<TData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(Config.API_BASE_URL + endpoint);
        if (response?.ok) {
          const json = await response?.json();
          setData(json);
        } else {
          Alert.alert('Error', 'Network request failed');
        }
      } catch (e) {
        console.log('[useFetch]', e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return {data, loading};
};
