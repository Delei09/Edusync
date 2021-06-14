import React from 'react'
import './Header.css'
import Logo from './Logo'
import buttonMenu from '../img/hamburger.png'
import Modal from './Modal'
import ModalMenu from './ModalMenu'

const Header = () => {

    function modal(){
        const tag = document.querySelector('.compModal')
        tag.classList.remove('modalSumir')
        tag.classList.add('modalAparecer')
    }
    function menu(){
        const tag = document.querySelector('.containerModalMenu')
        tag.classList.remove('modalMenuSumir')
        tag.classList.add('modalMenuAparecer')
    }

    return (
       
        <header className = 'header '>
             <Modal />
             <ModalMenu />
            <div className = 'buttonMenu'>
                <a href = ' #' onClick = {menu} > <img className = 'hamb' src = {buttonMenu} alt = 'botao menu' />    </a>  
                <Logo />
            </div>
            <div className = ' menuHidden   '>
                <div className= 'headerLink'>
                    <Logo />
                    <a className = 'link'  href = '#' >How it works</a>
                    <a className = 'link' href = '#' >About US</a>
                 </div>
                <button className = 'buttonGet'onClick = {modal} >
                    Get Started
                </button>
            </div>
        </header>
    )
}

export default Header;