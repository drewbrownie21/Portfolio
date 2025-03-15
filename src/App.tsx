import "./App.css";
import Title from "./Title/Title";
import Header from "./Header/Header";
import History from "./History/History";

function App() {
  return (
    <div className="bg-neutral-100 min-h-screen text-black font-mono">
      <Header />
      <Title />
      <History />
    </div>
  );
}

export default App;
