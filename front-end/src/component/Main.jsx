import React from 'react'
import Header from './Header'
import Formulario from './Formulario'
import './Main.css'
import Detalhe from './Detalhe'

const Main = () => {

    return (
        <main className = 'main'>
            <Header />
            <Detalhe />
            <div className = 'content'>
                <div className = 'contentTexto'>
                    <h1>Find Your <br/> <span className = 'contentTextoSpan'> BEST TEACHER </span> </h1>
                    <h4>Whether you are a student trying to find your ideal private language teachers/tutors
                        or a teacher trying to find great students for your customised private lessons!</h4>
                </div>
                 <Formulario />
            </div>
        </main>
    )
}

export default Main;