import React from 'react'
import './Header.css'
import Logo from './Logo'

const Header = () => {

    return (
        <header className = 'header container'>
           <div className= 'headerLink'>
                <Logo />
                <a className = 'link'  href = '#' >How it works</a>
                <a className = 'link' href = '#' >About US</a>
           </div>
                <button className = 'btn btn-warning'>
                    Get Started
                </button>

        </header>
    )
}

export default Header;