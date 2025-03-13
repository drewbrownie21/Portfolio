import "./App.css";
import myHeadshot from "./assets/drew.png";
import githubIcon from "./assets/github-mark.svg";
import Header from "./components/Header";
import History from "./components/History";

function App() {
  return (
    <div className="bg-neutral-100 min-h-screen text-black font-mono">
      <h1>
        <a href="https://github.com/drewbrownie21">
          <img className="w-10 h-10" src={githubIcon} />
        </a>
      </h1>
      <div className="flex items-center justify-center space-x-10 p-30">
        <Header />
        <img className="w-100 h-100 rounded-full" src={myHeadshot} />
      </div>
      <History />
    </div>
  );
}

export default App;
