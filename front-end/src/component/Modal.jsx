import React from 'react'
import './Modal.css'
import olho from '../img/icon-eye.png'
import olhoMostrar from '../img/icon-eye-show.png'

const Modal = (props) => {
    function teste(){
        console.log(props.teste)
    }
    function fechar(){
        const tag = document.querySelector('.compModal')
        tag.classList.add('modalSumir')
    }
    
    return(
        <section className = {`modalSumir compModal }` }>
            <div className = 'modal-container' >
                <button className = ' fechar' onClick = {fechar} >X</button>
                <div className = ' modal-texto'> 
                    <h2>Get Started <br/> <span className = ' just'>JUST LOGIN</span>  </h2>
                    
                </div>
                <label htmlFor = ' nome' >Username:</label>
                <input className = ' nome' type = ' text' id = ' nome' />
                <label htmlFor = ' password' >Password:</label>
                <img src = {olho} className = ' olho' />
                <img src = {olhoMostrar} className = ' olhoMostrar' />
                <input  type = 'password' className = ' password'  id = ' password'  />
                <button type = ' submit ' className = ' buttonLogin'>login</button>
            </div>
        </section>
    )
}

export default Modal