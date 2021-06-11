import React from 'react'
import './Header.css'
import Logo from './Logo'
import buttonMenu from '../img/hamburger.png'

const Header = () => {

    return (
        <header className = 'header '>
            <div className = 'buttonMenu'>
                <a href = ' #' > <img className = 'hamb' src = {buttonMenu} alt = 'botao menu' />    </a>  
                <Logo />
            </div>
            <div className = ' menuHidden   '>
                <div className= 'headerLink'>
                    <Logo />
                    <a className = 'link'  href = '#' >How it works</a>
                    <a className = 'link' href = '#' >About US</a>
                 </div>
                <button className = 'buttonGet'>
                    Get Started
                </button>
            </div>
          

        </header>
    )
}

export default Header;