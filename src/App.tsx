import "./App.css";
import Title from "./Title/Title";
import Header from "./Header/Header";
import Background from "./Background/Background";
import Projects from "./Projects/Projects";
import { useRef } from "react";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="bg-neutral-100 min-h-screen text-black font-mono">
      <Header projectsRef={projectsRef} />
      <Title />
      <Background />
      <Projects ref={projectsRef} />
    </main>
  );
}

export default App;
