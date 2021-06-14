import React from 'react'
import Header from './Header'
import Formulario from './Formulario'
import './Main.css'
import Detalhe from './Detalhe'
import Modal from './Modal'
import ModalMenu from './ModalMenu'

const Main = () => {

    return (
        <main className = 'main'>
            <Header />
            <ModalMenu />
            <Detalhe />
            <div className = 'content'>
                <div className = 'contentTexto'>
                    <h1>Find Your</h1>
                    <span className = 'contentTextoSpan'> BEST TEACHER </span>
                    <h4>Whether you are a student trying to find your ideal private language teachers/tutors
                        or a teacher trying to find great students for your customised private lessons!</h4>
                </div>
                 <Formulario />
            </div>
        </main>
    )
}

export default Main;