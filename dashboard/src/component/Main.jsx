import React, { useEffect, useState } from 'react'
import './Main.css'
import Imagem from '../img/re.png'
import EstrelaA from '../img/estrela.png'
import EstrelaB from '../img/estrelaB.png'

const Main = () => {

    const [lista, setLista] = useState([])
    const [pagina, setPagina] = useState([])

    useEffect( () => {
        const arra = []

        for(let i = 0; i < 6; i++){
            arra.push(
                <div className="item">
                    <img src = {Imagem} alt = ' imagem' className = ' imagem-item-mesa' />
                    <div className="item-button">
                        <div className="div-estrelas">
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaB} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaB} alt = ' imagem' className = ' imagem-item' />
                        </div>
                        <button className = 'buttonEstrela' > 10 LESSONS</button>
                    </div>
                    <h2> Master English: Improve Your Speaking </h2>
                </div>)
        }

        for(let i = 0; i < 6; i++){
            arra.push(
                <div className="item">
                    <img src = {Imagem} alt = ' imagem' className = ' imagem-item-mesa' />
                    <div className="item-button">
                        <div className="div-estrelas">
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaB} alt = ' imagem' className = ' imagem-item' />
                        </div>
                        <button className = 'buttonEstrela' > 15 LESSONS</button>
                    </div>
                    <h2> Master English: Improve Your Speaking </h2>
                </div>)
        }

        for(let i = 0; i < 6; i++){
            arra.push(
                <div className="item">
                    <img src = {Imagem} alt = ' imagem' className = ' imagem-item-mesa' />
                    <div className="item-button">
                        <div className="div-estrelas">
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                            <img src = {EstrelaA} alt = ' imagem' className = ' imagem-item' />
                        </div>
                        <button className = 'buttonEstrela' > 20 LESSONS</button>
                    </div>
                    <h2> Master English: Improve Your Speaking </h2>
                </div>)
        }
       setLista(arra)
       const pagina1 = arra.slice(0,6)
       setPagina(pagina1)

    } ,[])



    function paginacao(e){
        const pagina1 = lista.slice(0,6)
        const pagina2 = lista.slice(6,12)
        const pagina3 = lista.slice(12,18)

        const button1 = document.querySelector('.bt1')
        const button2 = document.querySelector('.bt2')
        const button3 = document.querySelector('.bt3')

        const valor = e.target.value
        if(valor === '1'){
            setPagina(pagina1)

            button1.classList.add('botaoClicado')
            button2.classList.remove('botaoClicado')
            button3.classList.remove('botaoClicado')
        }
        if(valor === '2'){
            setPagina(pagina2)
            button2.classList.add('botaoClicado')
            button1.classList.remove('botaoClicado')
            button3.classList.remove('botaoClicado')
        }
        if(valor === '3'){
            setPagina(pagina3)
            button3.classList.add('botaoClicado')
            button1.classList.remove('botaoClicado')
            button2.classList.remove('botaoClicado')
        }

      
    }

    return(
        <>
        <main className = ' main'>
            {pagina}

        </main>
        <div className = 'opcaoPagina'>
            <button className = ' bt1 botaoClicado'  value = '1' onClick = {e => paginacao(e)} >1</button>
            <button className = 'bt2'  value = '2' onClick = {e => paginacao(e)} >2</button>
            <button className = 'bt3'  value = '3' onClick = {e => paginacao(e)} >3</button>
        </div>
    </>
    )
}

export default Main