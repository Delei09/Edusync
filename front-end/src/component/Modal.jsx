import React from 'react'
import './Modal.css'
import olho from '../img/icon-eye.png'
import olhoMostrar from '../img/icon-eye-show.png'

const Modal = (props) => {
    
    function fechar(){
        const tag = document.querySelector('.compModal')
        tag.classList.add('modalSumir')
    }

     function  aparecerSenha(){
        const olho = document.querySelector('.olho')
        const olhoMostrar = document.querySelector('.olhoMostrar')
        const password = document.querySelector('.password')

        if(olho.classList.contains('modalSumir') ){

            olho.classList.add('modalMostrar')
            olho.classList.remove('modalSumir')

            olhoMostrar.classList.add('modalSumir')
            olhoMostrar.classList.remove('modalMostrar')

            password.setAttribute('type' , 'text')

            
        }else{

            olho.classList.add('modalSumir')
            olho.classList.remove('modalMostrar')

            olhoMostrar.classList.add('modalMostrar')
            olhoMostrar.classList.remove('modalSumir')

            password.setAttribute('type' , 'password')
           

        }



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
                    <img src = {olho} className = ' olho modalSumir' onClick = {aparecerSenha} />
                    <img src = {olhoMostrar} className = ' olhoMostrar '  onClick = {aparecerSenha} />
                <input  type = 'password' className = ' password'  id = ' password'  />
                <button type = ' submit ' className = ' buttonLogin'>login</button>
            </div>
        </section>
    )
}

export default Modal