import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  // nomas era un reto
  // useEffect(()=>{
  //   if(pacientes.length > 0){
  //     console.log("Nuevo paciente")
  //   }

  // },[pacientes])


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      {pacientes.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className=" text-lg mt-3 text-center mb-5">
            Administra tus{" "}
            <span className=" text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
    
          {pacientes.map( paciente =>(
            <Paciente
            key={paciente.id}
            paciente = {paciente}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
            />
          ))}
        </>
      ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className=" text-lg mt-3 text-center mb-5">
              Comienza agregando uno{" "}
              <span className=" text-indigo-600 font-bold">y aparecerá en este lugar</span>
            </p>
          </>
        ) }
    </div>
  );
};

export default ListadoPacientes;



