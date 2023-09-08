import "./App.css";
import Componente from "./components/componente";
import Propiedades from "./components/propiedades";

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Componente msg = "Hola soy una función"/>
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
      </header>
    </div>
  );
}

export default App;
