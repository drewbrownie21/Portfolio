import './App.css'
import Education from './components/Education';

function App(){

  return(
    <div>
      <div className='main-header'>
        Drew's Portfolio
      </div>
      <h2>
        <strong>
          Education
        </strong>
        <Education />
      </h2>
      
    </div>
  )
}

export default App;