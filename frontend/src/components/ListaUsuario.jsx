import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'


function ListaUsuario() {

  const [lista, setLista] = useState([])

  useEffect(() => {
      const getUsuario = async() => {
        const res = await axios.get(`http://localhost:4001/api/usuario`);
        setLista(res.data)
      }
      getUsuario();
  }, [lista])
  
  const eliminarUsuario = async (id) => {
    await axios.delete(`http://localhost:4001/api/usuario/${id}`);
  };
  

  return (
    
    <div className='row'>
      {
        lista.map(list => (
          <div className='col-md-4 p-2' key={list._id}>
            <div className='card'>
              <div className='card-header'>
                <h5>Nombre: {list.nombre}</h5>

                <div className='card-body'>
                    <p>apellido: {list.apellido}</p>
                    <p>edad: {list.edad}</p>
                    <p>telefono: {list.telefono}</p>
                    <p>correo: {list.correo}</p>
                </div>

                <div className='card-footer'>
                    <button className='btn btn-danger' onClick={()=>eliminarUsuario(list._id)}>
                      Eliminar
                    </button>

                    <Link className='btn btn-primary m-1' to={`/edit/${list._id}`}>
                    Editar
                    </Link>
                </div>

              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ListaUsuario
