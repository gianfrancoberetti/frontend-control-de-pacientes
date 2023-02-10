import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
        <div>
            <h1 className='text-indigo-600 font-black text-6xl'>
                Iniciar sesion para administrar tus 
                <span className='text-black'> pacientes</span>
            </h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <form>
                <div>
                    <label className='uppercase text-gray-600 block text-xl font-bold my-5'>
                        email
                    </label>
                    <input
                        type='email'
                        placeholder='email de registro'
                        className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                    />

                </div>
                <div>
                    <label className='uppercase text-gray-600 block text-xl font-bold my-5'>
                        password
                    </label>
                    <input
                        type='password'
                        placeholder='password'
                        className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                    />
                    
                </div>
                <input 
                type="submit"
                value="Iniciar Sesion"
                className='bg-indigo-700 text-white text-xl rounded-xl py-3 px-20 w-full mt-5 uppercase font-bold hover:cursor-pointer hover:bg-indigo-800 md: w-auto'
                />
            </form>
            <div>
                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link to="/registrar" className="block text-center my-5 text-gray-500"> Registrate aqui!</Link>
                    <Link to="/recovery" className="block text-center my-5 text-gray-500"> olvide mi password</Link>

                </nav>
            </div>
        </div>
    </>
  )
}

export default Login