import { Component } from "react";

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }
        
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    
    sumar(e){
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar(e){
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render(){
        return(
            <div>
                <h2>Manejo de Eventos en componentes de CLase con ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

// Properties Initializer
export class EventosES7 extends Component {
    state = {
        contador: 0,
    }
    //Arrow Functions 
    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render(){
        return(
            <div>
                <h2>Manejo de Eventos en componentes de CLase con ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}