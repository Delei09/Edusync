import React from 'react'
import './ModalMenu.css'
import Logo from '../img/logo.png'

const ModalMenu =  () => {

    return(
        <div className = ' containerModalMenu'>
            <header>
                <img src = {Logo} alt = ' logo' />
                <button className = 'containerModalMenuButton'>X</button>
            </header>

            <div className = ' modalMenuOpcao'>
                <ul>
                    <li> <a href = ' #'>How it works</a> </li>
                    <li> <a href = ' #'>About Us</a> </li>
                </ul>
                <button type = ' submit ' className = ' '>Get Started</button>
            </div>
        </div>
   
    )
}

export default ModalMenu