import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [darkMode, setDarkMode] = useState (() => {
    const bool = localStorage.getItem(key);
    return bool ?  JSON.parse(bool) : initialValue
  })

  const handleClick = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setDarkMode(value);
  };

  return [darkMode, handleClick];
}