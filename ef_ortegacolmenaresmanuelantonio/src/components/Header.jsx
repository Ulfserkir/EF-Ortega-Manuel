import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/logo.png'


function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="header">
      <img 
        src={Logo}
        alt="Deli Pizza Logo" 
        className='Logo'
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      />
      <CurrentDateTime />
    </header>
  );
}

function CurrentDateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className='time'>
      <span> <p>Fecha: </p>{currentTime.toLocaleDateString()}</span>
      <span> <p>Hora: </p>{currentTime.toLocaleTimeString()}</span>
    </div>
  );
}

export default Header;
