import React, { useState } from 'react';
import { Fragment } from 'react';
import Formulario from './components/Formulario'
import Tarea from './components/Tarea';
import Footer from './components/Footer';


function App() {

  // arreglo de tareas
  const [datos, guardarDatos] = useState([])

  // funcion crear tarea
  const crearTarea = dato => {
      guardarDatos([
        ...datos, 
        dato
      ])
  }

  // eliminar cita 
  const eliminarTarea = (id) => {
    const nuevasTareas = datos.filter(dato => dato.id !== id)
    guardarDatos(nuevasTareas)
  }

  return (

    <Fragment>
      <div className="app">
        <div className='text-center'>
          <h1>App Task Robert</h1>
          <div className="container">
            <div className='row row-cols-2 p-4'>
              <div className="col text-left ">
                <h2>Escribe una tarea</h2>
                <Formulario 
                  crearTarea={crearTarea}
                />
              </div>
              <div className='col'>
                <h2>Tareas para realizar</h2>
                {
                    datos.map(dato => (
                      <Tarea 
                        key={dato.id}
                        dato={dato}
                        eliminarTarea={eliminarTarea}
                      />
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>

  );
}

export default App;
