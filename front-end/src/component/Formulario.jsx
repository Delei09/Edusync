import React, { useState } from 'react'
import './Formulario.css'

const Formulario = () => {

    const [input, setInput] = useState('')
    const [radio, setRadio] = useState('teacher')

    function inputForm(e){
        const dados = e.target.value 
        setInput(dados)
    }
    function radioForm(e){
        const dados = e.target.value
        console.log(dados)
    }


    function borda(){
        const radio1 = document.querySelector('.bordaRadio1')
        const radio2 = document.querySelector('.bordaRadio2')

        if(radio2.classList.contains('sumirBorda')){

            setRadio('student')

            radio2.classList.remove('sumirBorda')
            radio2.classList.add('aparecerBorda')

            radio1.classList.remove('aparecerBorda')
            radio1.classList.add('sumirBorda')
        }else{
            setRadio('teacher')
            radio1.classList.remove('sumirBorda')
            radio1.classList.add('aparecerBorda')

            radio2.classList.remove('aparecerBorda')
            radio2.classList.add('sumirBorda')
        }
        
    }

    return (
        <form>
                <input type = "text" className = " input"
                placeholder = 'Type here what are you looking for'
                onChange = {e => inputForm(e)}
               
                />
                <div className = 'formOpcao'>
                    <div class="bordaRadio1 " >
                        <input class="radio1"   type="radio" 
                                name="opcao" id="teacher"
                                value = ' radio1'
                                checked = {true}
                                onClick = {borda}
                                />
                        <label class="labelRadio" htmlFor ="teacher">
                            I'M A TEACHER
                        </label>
                    </div>
                    <div class="bordaRadio2 sumirBorda " >
                        <input class="radio2" type="radio" name="opcao" 
                        value = ' radio2'
                                id="student"
                                onClick = {borda}
                                />
                        <label class="labelRadio" for="student">
                            I'M A STUDENT
                        </label>
                    </div>
                    <button className="buttonSearch">SEARCH</button>
                </div>
        </form>
    )
}

export default Formulario;