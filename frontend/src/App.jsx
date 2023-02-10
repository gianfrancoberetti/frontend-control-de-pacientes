import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout.jsx';
import Login from './paginas/Login.jsx';
import Registrar from './paginas/registrar.jsx';
import RecoveryPassword from './paginas/RecoveryPassword.jsx';
import ConfirmarCuenta from './paginas/ConfirmarCuenta.jsx';
import newPassword from './paginas/newPassword.jsx';
function App() {

  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<Login />}/>
          <Route path='registrar' element={<Registrar />}/>
          <Route path='recovery' element={<RecoveryPassword />}/>
          <Route path='recovery/:token' element={<newPassword />}/>
          <Route path='Confirmar-cuenta/:id' element={<ConfirmarCuenta />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
