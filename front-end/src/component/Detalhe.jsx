import React from 'react'
import './Detalhe.css'
import img1 from '../img/detail.png'
import img2 from '../img/detalhe2.png'

const Detalhe1 =  () => {
    return(
        <>
        <img className = 'detalhe1' src = {img1} alt = ' detalhe 1 ' />
        <img className = ' detalhe2' src = {img2} alt = ' detalhe 2' />
        </>
    )
}

export default Detalhe1