import React, { useEffect } from 'react';
import API from './api';
import UpdateApp from './components/UpdateApp';

export default function App() {
  const fetch = async () => {
    console.log('fired');
    const req = await API.getUserById('59584981');
    console.log('done', req);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <header>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <UpdateApp />
    </header>
  );
}
