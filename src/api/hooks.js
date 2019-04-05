import { useEffect, useState } from 'react';
import API from './index';

export function useFetch(method, methodParams = [], initialState = []) {
  const [data, setData] = useState(initialState);

  const fetchData = async () => {
    const { data } = await API[method](...methodParams);
    await setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [...methodParams]);

  return { data };
}
