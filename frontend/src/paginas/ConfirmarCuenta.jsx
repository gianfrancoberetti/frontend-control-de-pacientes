import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import Alerta from '../components/Alerta.jsx';
import clienteAxios from '../../CONFIG/axios.jsx';



const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(true);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({})

  const params = useParams();
  const {id} = params;
  useEffect(()=> {
    const confirmarCuenta = async () => {
      try {

        const {data} = await clienteAxios(`veterinarios/confirmar/${id}`);
        setCuentaConfirmada(true)
        setAlerta({
          msg: data.msg,
          error: false
        })
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        },
          )
      }


      setCargando(false)
    }
    confirmarCuenta()
  }, [])

  return (
    <>
    <div>
      <h1 className='text-indigo-600 font-black text-6xl'>
        Confirma tu cuenta y comienza a administrar tus pacientes 
        <span className='text-black'> pacientes</span>
      </h1>
    </div>
    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
      {!cargando &&  
      <Alerta 
        alerta = {alerta}
        />}
        {cuentaConfirmada && (
          <Link to="/" className="block text-center my-5 text-gray-500"> Iniciar Sesion</Link>
        )}
    </div>
    </>
  )
}

export default ConfirmarCuenta