import React, { useState } from "react";
import Home from '../src/components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg from 'particles-bg'
import DarkModeToggle from "react-dark-mode-toggle";
import './App.css';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <div>
      <div className='dark-light'>
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={40}
      />
      </div>
      <div className={isDarkMode?"background":""}>
      <ParticlesBg color={isDarkMode?"#C0C0C0":"#000000"} num={45} type="cobweb" bg={true} />
      </div>
      <Home theme={isDarkMode}/>
    </div>
  );
}

export default App;
