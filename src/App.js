import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Router from './Router';
import UpdateApp from './components/UpdateApp';

const GlobalStyle = createGlobalStyle`
 body {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
      <UpdateApp />
    </>
  );
}

export default App;
