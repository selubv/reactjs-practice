import "./App.css";
import TaskListComponent from "./components/container/task_list";
{/* import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF"; */}

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        {/* Componente propio Greting.jsx */}
        {/*<Greeting name="Sergio"></Greeting>*/}
        {/*<GreetingF name = "Luis"></GreetingF>*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
