import React, { Component } from "react";

class CadastroNome extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: ''
        }

    }


    //metodo especifico que retorna jsx
    render() {
        return (
            <div>
                <h2>{this.state.nome}</h2>
                <input type="text"
                    placeholder="digite seu nome"
                    value={ this.state.nome}
                    onChange={(event) => this.setState({nome : event.target.value}) }
                    />
            </div>
        );
    }
}


export default CadastroNome;