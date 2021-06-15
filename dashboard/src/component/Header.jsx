import React from 'react'
import './Header.css'
import Logo from '../img/logo1.png'
import Avatar from '../img/avatar.png'

const Header = () =>  {

    return(
        <header className = 'header'>
            <div className="div-logo">
                <a href = '#' > <img className = ' logo' alt = ' logo' src = {Logo} /> </a>
                <a  href = ' #' > My Classes</a>
            </div>
            <div className="div-avatar">
                <button className = 'button-avatar'>CHANGE TO TEACHER MODE</button>
                <a href = ' #' > <img className = 'avatar' alt = ' avatar' src = {Avatar} /> </a>
            </div>
        </header>
    )
}

export default Header