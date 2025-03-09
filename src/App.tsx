import './App.css'
import Education from './components/Education';
import React from 'react';
import myHeadshot from './assets/drew.png';


function App(){

  return(
    <div className='bg-gray-900 min-h-screen text-white'>
      <div className='mx-auto w-150  text-xl font-medium text-black dark:text-white'>
        Hello! I am Drew Brown, a Frontend Web Developer
      </div>
      <h2>
        <Education />
      </h2>
      <h3
        className='absolute top-10 right-10'
      >
        <img 
        height={150}
        width={150}
        src={myHeadshot}
        />
      </h3>
      
    </div>
  )
}

export default App;
