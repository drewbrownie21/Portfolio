import "./App.css";
import Title from "./Title/Title";
import Header from "./Header/Header";
import History from "./History/History";
import Projects from "./Projects/Projects";
import { useRef } from "react";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-neutral-100 min-h-screen text-black font-mono">
      <Header projectsRef={projectsRef}/>
      <Title />
      <History />
      <Projects ref={projectsRef}/>
    </div>
  );
}

export default App;
