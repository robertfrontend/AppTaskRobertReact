import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Formulario from './components/Formulario'
import Tarea from './components/Tarea';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  // datos en el localstorage 
  let datosIniciales = JSON.parse(localStorage.getItem('datos'))
  // verificar que haigan datos en el localstorage
  if(!datosIniciales) {
    // si no hay datos
    datosIniciales = []
  }

  // arreglo de tareas
  const [datos, guardarDatos] = useState(datosIniciales)

  // useEffects
  useEffect(() => {

    // si hay datos iniciales
    if(datosIniciales) {
      localStorage.setItem('datos', JSON.stringify(datos))
    }else {
      localStorage.setItem('datos', JSON.stringify([]))
    }

  }, [datos, datosIniciales])


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

  // mensaje condicional
  const tiulo = datos.length === 0 ? 'No hay Tareas, agrega una' : 'Administra tus tareas'


  return (

    <Fragment>
      <Header />
      <div className="app">
          <div className="container">
            <div className='row row-cols-2 p-4'>
              <div className="col text-left ">
                <h2>Escribe una tarea</h2>
                <Formulario 
                  crearTarea={crearTarea}
                />
              </div>
              <div className='col'>
                <h2> {tiulo} </h2>
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
      <Footer />
    </Fragment>

  );
}

export default App;
