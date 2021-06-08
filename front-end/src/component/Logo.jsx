import React from 'react'
import './Logo.css'
import LogoImg from '../img/logo.png'

const Logo = () => {
    return (
        <a href = '#' > <img className= 'logo' src = {LogoImg} alt= 'Logo' /> </a>
    )
}

export default Logo;