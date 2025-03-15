import "./App.css";
import githubIcon from "./assets/github-mark.svg";
import Header from "./components/Title";
import History from "./components/History";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-neutral-100 min-h-screen text-black font-mono">
      <Projects />
      <h1 className="absolute top-5 right-5">
        <a href="https://github.com/drewbrownie21">
          <img className="w-10 h-10" src={githubIcon} />
        </a>
      </h1>
      <Header />
      <History />
    </div>
  );
}

export default App;
