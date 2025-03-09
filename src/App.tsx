import './App.css'
import Education from './components/Education';

function App(){

  return(
    <div>
      <div className='mx-auto w-150  text-xl font-medium text-black dark:text-white'>
        Hello! I am Drew Brown, a Frontend Web Developer
      </div>
      <h2>
        <Education />
      </h2>
      
    </div>
  )
}

export default App;
