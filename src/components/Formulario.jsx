import { useState , useEffect} from 'react'
import Error from './Error'
import React from 'react'


const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [alta, setAlta] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [error, setError] = useState(false)

  // con este codigo cuando damos click en edit se actualiza el state paciente
  // y rellena los inputs con la informacion del paciente
  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      // console.log("Hay algo") 
      // si hay algo es porque ya di click en edit

      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
    
  }, [paciente])
  
  


  const generarId = ()=>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString()
    return random + fecha
  }

  // es mejor ponerlo dentro de la funcion para asi pasarle de una ves los valores
  // const cita = {
  //   nombre: "",
  //   propietario: ""
  // }

  const handleSubmit = (e) =>{
    e.preventDefault()

    // Validacion del form

    if([nombre,propietario,email,alta,sintomas].includes("")){
      console.log("Vacio..")
      setError(true)
      return; 
    }

    setError(false)

    // objeto del paciente 
    const objCita = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      
    }
    
    if(paciente.id){
      // editando registro
      objCita.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id == objCita.id ? objCita : pacienteState)

      // esto le pasa el nuevo arreglo, y sip, no se pushea a los que ya estaban
      setPacientes(pacientesActualizados)
      setPaciente({})

      console.log(paciente) //este es el viejo
      console.log(objCita) // este el actualizado
    } else {
      // nuevo registro
      objCita.id = generarId()
      setPacientes([...pacientes, objCita])
    }


    // una vez enviado, nuestro form aun tiene sus hooks vivos, con valores, los queremos reiniciar
    setNombre("")
    setPropietario("")
    setEmail("")
    setAlta("")
    setSintomas("")

  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes </h2>
        <p className=' text-lg mt-3 text-center mb-5'>
          Añade Pacientes y {" "}
          <span className=' text-indigo-600 font-bold'>Administralos</span>
        </p>

    
        <form 
          className='bg-white shadow-md rounded-lg py-8 px-5 mb-10'
          onSubmit={handleSubmit}
          >
          {error && <Error mensaje="Todos los campos son obligatorios"/> }
          <div className=' mb-4'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='mascota'>
              Nombre Mascota
            </label>
            <input 
              type="text" 
              id='mascota' 
              className="border-2 w-full p-2 mt-4 placeholder-gray-400 rounded"
              value={nombre}
              onChange= {(e)=> setNombre(e.target.value)}
              placeholder='Ingresa un nombre' />
          </div>
          <div className=' mb-4'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='propietario'>
              Nombre Propietario
            </label>
            <input 
              type="text" 
              id='propietario' 
              className="border-2 w-full p-2 mt-4 placeholder-gray-400 rounded"
              value={propietario}
              onChange= {(e)=> setPropietario(e.target.value)}
              placeholder='Nombre del propietario' />
          </div>
          <div className=' mb-4'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>
              Email
            </label>
            <input 
              type="email" 
              id='email' 
              className="border-2 w-full p-2 mt-4 placeholder-gray-400 rounded"
              value={email}
              onChange= {(e)=> setEmail(e.target.value)}
              placeholder='Email contacto' />
          </div>
          <div className=' mb-4'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='date'>
              Alta
            </label>
            <input 
              type="date" 
              id='date' 
              className="border-2 w-full p-2 mt-4 placeholder-gray-400 rounded"
              value={alta}
              onChange= {(e)=> setAlta(e.target.value)}
            />
          </div>
          <div className=' mb-4'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>
              Sintomas
            </label>
            <textarea
              id='sintomas'
              className='border-2 w-full p-2 mt-4 placeholder-gray-400 rounded'
              placeholder='Describe los sintomas'
              value={sintomas}
              onChange= {(e)=> setSintomas(e.target.value)}
            />
          </div>

          <input 
            type="submit" 
            className=' bg-indigo-600 w-full text-white p-2 rounded font-bold hover:bg-indigo-900 cursor-pointer transition-colors'
            value={paciente.id ? "Editar paciente" : "Agregar paciente"}
            />
        </form>
    </div>
  )
}

export default Formulario