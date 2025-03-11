import "./App.css";
import Education from "./components/Education";
import myHeadshot from "./assets/drew.png";
import Experience from "./components/Experience";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-neutral-100 min-h-screen text-black font-mono">
      <div className="flex items-center justify-center space-x-10 p-30">
        <Header />
        <img className="w-100 h-100 rounded-full" src={myHeadshot} />
      </div>
      <h2>
        <Education />
        <Experience />
      </h2>
    </div>
  );
}

export default App;
