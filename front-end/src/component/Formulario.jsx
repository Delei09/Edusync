import React from 'react'
import './Formulario.css'

const Formulario = () => {

    return (
        <form>
                <input type = "text" className = " input"
                placeholder = 'Type here what are you looking for'
                />
                <div className = 'formOpcao'>
                    <div class="radio1">
                        <input class="radio" type="radio" 
                                name="opcao" id="teacher" />
                        <label class="labelRadio" htmlFor ="teacher">
                            I'M A TEACHER
                        </label>
                    </div>
                    <div class="radio2">
                        <input class="radio" type="radio" name="opcao" 
                                id="student" />
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