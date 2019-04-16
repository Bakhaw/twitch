import React, { createContext, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import theme from '../stylesheets/theme';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem('appTheme');
  const [currentTheme, setTheme] = useState(defaultTheme || 'Light');

  const toggleTheme = () => {
    const newTheme = currentTheme === 'Light' ? 'Dark' : 'Light';
    localStorage.setItem('appTheme', newTheme);
    setTheme(newTheme);
  };

  const GlobalStyle = createGlobalStyle`
 * {
   transition: all 0.2s ease-in-out;
   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
 }
 html {
   background: ${props => props.colors.PageWrapper.background};
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

  return (
    <StateContext.Provider value={{ currentTheme, toggleTheme }}>
      <GlobalStyle colors={theme[currentTheme]} />
      {children}
    </StateContext.Provider>
  );
};
