import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {

  const [turno, setTurno] = useState({
    doctor: {},
    form: false
  })

  let medicos = [
    {id: 1, nombre: 'Wandulo Smithers', especializacion: 'Cardiologo'},
    {id: 2, nombre: 'Robert Plant', especializacion: 'Dermatologo'},
    {id: 3, nombre: 'Jesse Pinkman', especializacion: 'Otorrinonaringologo'},
  ]

  return (
    <>
      {medicos.map((medico) => <Card medico={medico} key={medico.id} setTurno={setTurno}/>)}
      {turno.form && <Form doctor={turno.doctor}/>}
    </>
  )
}

export default App
