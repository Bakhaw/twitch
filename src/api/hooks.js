import { useEffect, useState } from 'react';
import API from './index';

export function useFetch(
  method,
  methodParams = [],
  initialState = [],
  refresh = false
) {
  let timeoutID;
  const [data, setData] = useState(initialState);
  const fetchData = async () => {
    const request = await API[method](...methodParams);
    if (!request) return;
    await setData(request.data);
    if (refresh) {
      timeoutID = setTimeout(fetchData, 5000); // recursive timeout to refresh viewers count every 10sec (ty Lord reduce) :^)
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      if (refresh) clearTimeout(timeoutID);
    };
    // TODO cleanup function here
    // TODO return () => data;
  }, [...methodParams]);

  return { data };
}
