import React from 'react'
import './Header.css'
import Logo from '../img/logo1.png'
import Avatar from '../img/avatar.png'
import Seta from '../img/seta.png'
import SetaFechar from '../img/setaFechar.png'
import SetaOpcao from '../img/setaOpcao.png'

const Header = () =>  {

    function botaoMenu (){
        const tag = document.querySelector('.container-change')
        const seta = document.querySelector('.seta')
        const setaFechar = document.querySelector('.setaFechar')

        if(tag.classList.contains('sumir')){
            
            tag.classList.remove('sumir')
            tag.classList.add('aparecer')

            seta.classList.add('sumir')
            seta.classList.remove('aparecer')
            setaFechar.classList.remove('sumir')
            setaFechar.classList.add('aparecer')

         
        }else{
                tag.classList.remove('aparecer')
                tag.classList.add('sumir')

                seta.classList.add('aparecer')
                seta.classList.remove('sumir')
                setaFechar.classList.remove('aparecer')
                setaFechar.classList.add('sumir')
        }
      
        
    }

    return(
        <>
        <header className = 'header '>
            <div className="menu-mobile ">
                <a href = '#' > <img className = ' logo-mobile' alt = ' logo' src = {Logo} /> </a>
                <div className = 'menu-mobile-opcao'>
                    <a href = ' #' onClick = {botaoMenu} > <img className = 'sumir setaFechar' alt = ' seta' src = {SetaFechar} /> </a>
                    <a href = ' #' onClick = {botaoMenu} > <img className = 'seta' alt = ' seta' src = {Seta} /> </a>
                    <a href = ' #' > <img className = 'avatar-mobile' alt = ' avatar' src = {Avatar} /> </a>
                </div>
            </div>
          
            <div className="div-logo">
                <a href = '#' > <img className = ' logo' alt = ' logo' src = {Logo} /> </a>
                <a  href = ' #' > My Classes</a>
            </div>
            <div className="div-avatar">
                <button className = 'button-avatar'>CHANGE TO TEACHER MODE</button>
                <a href = ' #' > <img className = 'avatar' alt = ' avatar' src = {Avatar} /> </a>
            </div>
        </header>

        <div className = 'sumir container-change'>
            <div className="change">
                <h2>CHANGE TO TEACHER MODE</h2>
                <a href= '#'> <img className = 'setaOpcao' alt = ' seta Opçao' src = {SetaOpcao} />  </a>
            </div>
        </div>

        
        </>
    )
}

export default Header