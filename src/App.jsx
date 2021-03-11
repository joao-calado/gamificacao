import './App.css'
import React from 'react'

// eslint-disable-next-line no-unused-vars
import Card from './componentes/layout/Card'

import Aluno from './componentes/condicional/Aluno'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div className="App">
            <h1> Projeto Gamificação </h1>

            <div className="Cards">
                <Aluno />
            </div>
        </div>
    )
}