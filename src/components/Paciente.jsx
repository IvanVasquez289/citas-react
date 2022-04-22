import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
const Paciente = ({paciente,setPaciente, eliminarPaciente}) => {
  const {nombre,propietario,email,alta,sintomas, id} = paciente

  function handleEliminar(){
      Swal.fire({
        title: 'Estás seguro de eliminar?',
        text: "No puedes revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarPaciente(id);  //llamar el prop y enviar el id
            Swal.fire(
            'Eliminado!',
            'Tu cita se ha eliminado.',
            'success'
            )
        }
    })
  }

  return (
    <div className=" bg-white rounded md:mx-5 shadow-md py-10 px-5 mb-5">
      <p className="block text-gray-700 uppercase font-bold">
        Mascota: {" "}
        <span className="font-normal normal-case"> {nombre} </span>
      </p>
      <p className="block text-gray-700 uppercase font-bold">
        Propietario: {" "}
        <span className="font-normal normal-case"> {propietario} </span>
      </p>
      <p className="block text-gray-700 uppercase font-bold">
        Email:{" "}
        <span className="font-normal normal-case"> {email} </span>
      </p>
      <p className="block text-gray-700 uppercase font-bold">
        Fecha de alta:{" "}
        <span className="font-normal normal-case"> {alta} </span>
      </p>
      <p className="block text-gray-700 uppercase font-bold">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-around ">
        <button 
          type="button"
          className=" bg-indigo-600 mt-5 mx-2 px-10 py-2 hover:bg-indigo-800 text-white font-bold uppercase rounded shadow-md"
          // asi ya esta a la espera del click para obtener el paciente
          onClick={()=> setPaciente(paciente)}
          >
          Editar
        </button>
        <button 
          type="button"
          className=" bg-red-600 mt-5 mx-2 px-10 py-2 hover:bg-red-800 text-white font-bold uppercase rounded shadow-md"
          onClick={ handleEliminar }
          >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
