import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Router from './Router';
import UpdateApp from './components/UpdateApp';
import { StateProvider } from './Context';

const GlobalStyle = createGlobalStyle`
 * {
   transition: all 0.2s ease-in-out;
   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
 }
 body, ul {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`;

function App() {
  return (
    <StateProvider>
      <Router />
      <GlobalStyle />
      <UpdateApp />
    </StateProvider>
  );
}

export default App;
