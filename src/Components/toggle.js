import React, { useState } from 'react';
function Apps() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className={`App ${theme}`}>
      {/* <button onClick={()=>setTheme()}>Toggle Theme</button> */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Hello, world!</h1>
    </div>
  );
}
export default Apps;