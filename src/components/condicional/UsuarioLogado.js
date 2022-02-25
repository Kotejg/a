import React from 'react'
import If from './If'

function Logado(props) {

    const usuario = props.usuario || {}

    return (
        <>
        <If test={usuario && usuario.nome && usuario.email}>
                <h2>Usuário Logado:</h2>
                <h3>
                    Nome: {usuario.nome}  Email: {usuario.email}
                </h3>
            </If>
            <If test={!usuario || !usuario.nome || !usuario.email}>
                <h2>
                    Bem vindo, faça seu login <a href="#">aqui.</a>
                </h2>
            </If>
        </>
    );
}

export default Logado;