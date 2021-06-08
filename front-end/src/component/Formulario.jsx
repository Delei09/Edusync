import React from 'react'
import './Formulario.css'

const Formulario = () => {

    return (
        <form>
                <input type = "text" className = "form-control input"
                placeholder = 'Type here what are you looking for'
                />
                <div className = 'formOpcao'>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" 
                                name="opcao" id="teacher" />
                        <label class="form-check-label" htmlFor ="teacher">
                            I'M A TEACHER
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="opcao" 
                                id="student" />
                        <label class="form-check-label" for="student">
                            I'M A STUDENT
                        </label>
                    </div>
                    <button className="btn btn-warning">SEARCH</button>
                </div>
        </form>
    )
}

export default Formulario;