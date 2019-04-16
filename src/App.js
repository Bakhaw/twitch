import React from 'react';

import Router from './Router';
import UpdateApp from './components/UpdateApp';
import { StateProvider } from './Context';

function App() {
  return (
    <StateProvider>
      <Router />
      <UpdateApp />
    </StateProvider>
  );
}

export default App;
