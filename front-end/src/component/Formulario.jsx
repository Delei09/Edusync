import React, { useState } from 'react'
import './Formulario.css'

const Formulario = () => {

    const [radio , setRadio] = useState('teacher');

    function radioSelecionado(e){
        console.log('to aqui')
    }

    return (
        <form>
                <input type = "text" className = " input"
                placeholder = 'Type here what are you looking for'
               
                />
                <div className = 'formOpcao'>
                    <div class="bordaRadio1">
                        <input class="radio1"  checked type="radio" 
                                name="opcao" id="teacher"
                                value = ' radio1'
                                onChange = {e => console.log('to aqui')}
                                />
                        <label class="labelRadio" htmlFor ="teacher">
                            I'M A TEACHER
                        </label>
                    </div>
                    <div class="bordaRadio2">
                        <input class="radio2"type="radio" name="opcao" 
                        value = ' radio2'
                                id="student"
                               
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