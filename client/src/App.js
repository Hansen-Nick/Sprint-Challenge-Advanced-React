import React from 'react';
import './App.css';
import PlayerList from './Components/PlayerList'
import { useLocalStorage } from './Components/DarkMode';

const App = () => {

  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <button onClick={() => setDarkMode(!darkMode)}>Enable Dark Mode</button>
      <PlayerList />
    </div>
  ); 
}

export default App;
