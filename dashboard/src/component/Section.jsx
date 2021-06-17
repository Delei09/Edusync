import React from 'react'
import './Section.css'
import imagemMesa from '../img/image.png'
import Detalhe from '../img/details.png'



const Section = () =>  {

    return(
        <section className = ' section'>
            <img alt = 'detalhe' className = 'detalhe' src = {Detalhe} />
            <div className="section-texto">
                <h2>Hello <span className = 'student'> Student   </span> <span className= 'ponto' >.</span>  </h2>
                <h4>
                Whether you are a student trying to find your ideal private language teachers/tutors
                </h4>
            </div>
            <img className = 'imagemMesa' alt = ' imagemMesa' src = {imagemMesa} />
        </section>
    )
}

export default Section