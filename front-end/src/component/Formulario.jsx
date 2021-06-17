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
        
    }


    function borda(){
        const radio1 = document.querySelector('.bordaRadio1')
        const radio2 = document.querySelector('.bordaRadio2')
        const inputRadio1 =document.querySelector('.input-radio1')
        const inputRadio2 =document.querySelector('.input-radio2')

        console.log(inputRadio1)

        if(radio2.classList.contains('sumirBorda')){

            setRadio('student')

            radio2.classList.remove('sumirBorda')
            radio2.classList.add('aparecerBorda')

            radio1.classList.remove('aparecerBorda')
            radio1.classList.add('sumirBorda')

            inputRadio2.classList.add('checkOk')
            inputRadio2.classList.remove('check')

            inputRadio1.classList.add('check')
            inputRadio1.classList.remove('checkOk')

          
        }else{
            setRadio('teacher')
            radio1.classList.remove('sumirBorda')
            radio1.classList.add('aparecerBorda')

            radio2.classList.remove('aparecerBorda')
            radio2.classList.add('sumirBorda')

            inputRadio1.classList.add('checkOk')
            inputRadio1.classList.remove('check')

            inputRadio2.classList.add('check')
            inputRadio2.classList.remove('checkOk')
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
                                className= 'input-radio1 checkOk'
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
                                className= 'input-radio2 check'
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