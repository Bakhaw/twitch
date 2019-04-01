import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem('appTheme');
  const [theme, setTheme] = useState(defaultTheme || 'Light');

  const toggleTheme = () => {
    const newTheme = theme === 'Light' ? 'Dark' : 'Light';
    localStorage.setItem('appTheme', newTheme);
    setTheme(newTheme);
  };

  return (
    <StateContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </StateContext.Provider>
  );
};
