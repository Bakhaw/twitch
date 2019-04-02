import { useEffect, useState } from 'react';
import API from './index';

export function useFetch(method, methodParams = [], initialState = []) {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    await setIsLoading(true);
    const { data } = await API[method](...methodParams);
    await setData(data);
    await setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      fetchData();
    }
  }, [...methodParams]);

  return { data, isLoading };
}
