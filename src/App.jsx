import "./App.css";
import Greeting from "./components/pure/greeting";

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        {/* Componente propio Greting.jsx */}
        <Greeting></Greeting>
      </header>
    </div>
  );
}

export default App;
