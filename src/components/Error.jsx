

const Error = ({mensaje}) => {
  return (
    <div className=' bg-red-600 text-white p-3 text-center rounded mb-5 font-bold uppercase'>
        <p> {mensaje} </p>
    </div>
  )
}

export default Error