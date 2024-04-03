import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const CrearUsuario = () => {
  const valorInicial = {
    nombre: '',
    apellido: '',
    edad: 18,
    telefono: 0,
    correo: ''
  }

  let { id } = useParams();

  const [usuario, setUsuario] = useState(valorInicial);
  const [subId, setSubId] = useState(id);

  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  }

  const guardarDatos = async (e) => {
    e.preventDefault();
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
    }

    await axios.post(`http://localhost:4001/api/usuario`, newUser);
    setUsuario({ ...valorInicial });
  }

  const actualizarUser = async (e) => {
    e.preventDefault();
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo
    }

    await axios.put(`http://localhost:4001/api/usuario/${subId}`, newUser);
    setUsuario({ ...valorInicial });
    setSubId('');
  }

  const obtUno = async (id) => {
    const res = await axios.get(`http://localhost:4001/api/usuario/${id}`);
    setUsuario({
      nombre: res.data.nombre,
      apellido: res.data.apellido,
      telefono: res.data.telefono,
      edad: res.data.edad,
      correo: res.data.correo
    });
  }

  useEffect(() => {
    if (id) {
      setSubId(id);
      obtUno(id);
    }
  }, [id]);

  return (
    <div className='col-md-6 offset-md-3'>
       <div className='card card-body'>

        <form onSubmit={guardarDatos}>
            <h2 className='text-center'>Crear Usuario</h2>
          <div className='mb-3'>
            <label>nombre:</label>

            <input type='text' className='form-control' placeholder='ingresar el nombre del usuario'
             required 
             name="nombre"
             value={usuario.nombre}
             onChange={capturarDatos}
             />
          </div>

          <div className='mb-3'>
            <label>apellido:</label>

            <input type='text' className='form-control' placeholder='ingresar el apellido del usuario'
             required
             name="apellido"
             value={usuario.apellido}
             onChange={capturarDatos}
             />
          </div>

          <div className='mb-3'>
            <label>edad:</label>
            <input type='number' className='form-control' placeholder='ingresar la edad del usuario' 
            required
            name="edad"
            value={usuario.edad}
            onChange={capturarDatos}
             />
          </div>

          <div className='mb-3'>
            <label>Telefono:</label>
            <input type='number' className='form-control' placeholder='ingresar el telefono del usuario' 
            required
            name="telefono"
            value={usuario.telefono}
            onChange={capturarDatos}
             />
          </div>

          <div className='mb-3'>
            <label>Correo:,</label>
            <input type='text' className='form-control' placeholder='ingresar el correo del usuario'
             required
             name="correo"
             value={usuario.correo}
             onChange={capturarDatos}
             />
          </div>

          <button className='btn btn-primary form-control'>
              Guardar usuario
          </button>
        </form>

        <form onSubmit={actualizarUser}>
        <button className='btn btn-primary form-control mt-2'>
            Actualizar informacion 
          </button>
        </form>
          
       </div>
    </div>
  )
}

export default CrearUsuario
