import {useEffect, useState} from 'react';
import Config from 'react-native-config';

export const useFetch = <TData>(endpoint: string) => {
  const [data, setData] = useState<TData[]>([]);
  const [error, setError] = useState<String | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(Config.API_BASE_URL + endpoint);
        if (response?.ok) {
          const json = await response.json();
          setError(undefined);
          setData(json);
        } else {
          setError('Network request failed');
        }
      } catch (e) {
        setError(String(e));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return {data, loading, error};
};
