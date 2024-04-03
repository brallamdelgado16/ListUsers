import './App.css';
import {Routes, Route} from 'react-router-dom';

import  Navegacion  from "./components/Navegacion.jsx";
import CrearUsuario from './components/CrearUsuario.jsx';
import ListaUsuario from './components/ListaUsuario.jsx';



function App() {
  return (
    <div className="containerApp">
      <Navegacion/>
      <div className='container p-4'>
        <Routes>
          <Route path="/" element={<ListaUsuario/>} />
          <Route path="/CrearUsuario" element={<CrearUsuario/>}/>
          <Route path="/edit/:id" element={<CrearUsuario/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

