import React from 'react'
import './ModalMenu.css'
import Logo from '../img/logo.png'

const ModalMenu =  () => {

    function fechar(){
        const tag = document.querySelector('.containerModalMenu')
        tag.classList.add('modalMenuSumir')

    }
    function modal(){
        const tag = document.querySelector('.compModal')
        tag.classList.remove('modalSumir')
        tag.classList.add('modalAparecer')
        console.log('o nommodal')
    }

    return(
        <div className = ' containerModalMenu'>
            <header>
                <img src = {Logo} alt = ' logo' />
                <button onClick = {fechar} className = 'containerModalMenuButton'>X</button>
            </header>

            <div className = ' modalMenuOpcao'>
                <ul>
                    <li> <a href = ' #'>How it works</a> </li>
                    <li> <a href = ' #'>About Us</a> </li>
                </ul>
                <button onClick ={modal} className = ' '>Get Started</button>
            </div>
        </div>
   
    )
}

export default ModalMenu