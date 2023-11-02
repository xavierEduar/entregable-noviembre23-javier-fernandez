
import React, { useState } from 'react'
import Card from './Card'

const Formulario = (data) => {

    const [nombre , setNombre] = useState("")
    const [apellido , setApellido] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        
        if([nombre,apellido].includes("")){
            console.log("“Por favor chequea que la información sea correcta”");
        }else{

           return(Card);
        }
    }

  return (
    <>
        <h2>Formulario Ingreso</h2>
    
        <form
            onSubmit={handleSubmit}
        >
            
            <label>Nombre:</label>
            <input
                type='text'
                placeholder='Ingresar Nombre'
                id='nombre'
                value={nombre}
                onChange={e=>{setNombre(e.target.value)}}
            />

            <label>Apellido:</label>
            <input
                type='text'
                placeholder='Ingresar Apellido'
                id='apellido'
                value={apellido}
                onChange={e=>{setApellido(e.target.value)}}
            />
            
            <input 
            type="submit" 
            value="Enviar"
            />
            
        </form>

    </>
  )
}

export default Formulario