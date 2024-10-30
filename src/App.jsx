import React from 'react';
import { useEffect, useState } from 'react';
import PopkeyRoute from './routing/PopkeyRoute'; 
import PopoutRoute from './routing/PopoutboxRoute'; 

const App = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
      setCurrentUrl(window.location.href);
  }, []);


  return (
    
    <>
        {currentUrl.includes('https://popkey.in/') ? (<PopkeyRoute />) : ( <PopoutRoute />) }


    </>
  );
};

export default App;
