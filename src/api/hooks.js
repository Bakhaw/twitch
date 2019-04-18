import { useEffect, useState } from 'react';
import API from './index';

export function useFetch(method, methodParams = [], initialState = []) {
  const [data, setData] = useState(initialState);
  const fetchData = async () => {
    const request = await API[method](...methodParams);
    if (!request) return;
    await setData(request.data);
  };

  useEffect(() => {
    fetchData();
    // TODO cleanup function here
    // TODO return () => data;
  }, [...methodParams]);

  return { data };
}
