import React from 'react'
import { useState } from 'react'

const Form = ({doctor}) => {

    const [paciente, setPaciente] = useState({
        nombre: '',
        obraSocial: ''
    })
    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    console.log(paciente)
    
    const handleSubmit = () => {
        if(paciente.nombre.length > 3 && paciente.obraSocial.length > 2) {
            setEnviado(true)
            setError(false)
        } else {
            setError(true)
        }
    }

  return (
    <div>
        <h3>Sacar turno con {doctor.nombre}</h3>
        <label>Nombre del paciente</label>
        <input type="text" onChange={(event) => setPaciente({...paciente, nombre: event.target.value})}/>
        <label>Obra social</label>
        <input type="text" onChange={(event) => setPaciente({...paciente, obraSocial: event.target.value})}/>
        <button onClick={handleSubmit}>Enviar</button>
        {enviado && <h3>Sacaste turno para el día 21/08/2024 con la obra social {paciente.obraSocial}</h3>}
        {error && <h3 style={{color: 'red'}}>Por favor llene todos los campos</h3>}
    </div>
  )
}

export default Form