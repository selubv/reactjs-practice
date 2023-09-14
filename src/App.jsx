import "./App.css";
import Componente from "./components/componente";
import Propiedades from "./components/propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7 } from "./components/Eventos";

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Componente msg = "Hola soy una función"/>
        <hr/>
        <Propiedades
          cadena = "Esto es una cadena"
          numero = {24}
          booleano = {true}
          arreglo = {[1,2,3]}
          objeto = {{nombre: "Sergio", correo: "selubv0111bonilla@gmail.com"}}
          funcion = {(num) => num * num}
          elementoReact = {<i>Esto es un elemento React</i>}
          componenteReact = {<Componente msg = "Soy un componente pasado como props"></Componente>}
        />
        <hr/>
        <Estado></Estado>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <EventosES7/>
      </header>
    </div>
  );
}

export default App;
