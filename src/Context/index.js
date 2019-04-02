import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem('appTheme');
  const [currentTheme, setTheme] = useState(defaultTheme || 'Light');

  const toggleTheme = () => {
    const newTheme = currentTheme === 'Light' ? 'Dark' : 'Light';
    localStorage.setItem('appTheme', newTheme);
    setTheme(newTheme);
  };

  return (
    <StateContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </StateContext.Provider>
  );
};
