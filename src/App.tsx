import './App.css'
import Education from './components/Education';
import myHeadshot from './assets/drew.png';
import Experience from './components/Experience';


function App(){

  return(
    <div className='bg-gray-900 min-h-screen text-white'>
      <div className='mx-auto text-center  text-xl font-medium text-black dark:text-white font-mono'>
        Drew Brown, Frontend Web Developer
      </div>
      <h2>
        <Education />
        <Experience />
      </h2>
      <h3
        className='absolute top-15 right-20'
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
