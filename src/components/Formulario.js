import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

import Error from './Error.js'

const Formulario = ( { crearTarea } ) => {


    // estado para el formulario
    const [dato, setDatos ] = useState({
        nombreTask: '',
        descTaask: '',
    })

    // estado error
    const [error, setError] = useState(false)
    // estado para numerar las tareas
    const [ count, setCount ] = useState(1)

    // cambiar estado
    const handleStado = (e) => {
        // agregar los datos al estado
        setDatos({
            // crear copia del estado
            ...dato,
            //obtener datos del name input
            [e.target.name] : e.target.value
        })
    }

    const {nombreTask, diaTask, descTaask} = dato

    // click para crear tarea
    const handleTarea = (e) => {
        e.preventDefault();

        // validar formulario
        if(nombreTask.trim() === '' || diaTask.trim() === '' || descTaask.trim() === '' ) {
            console.log('error');
            setError(true)
            return
        }

        // si no hay errores ejecuta todo esto
        setError(false)
        
        // asignar id
        dato.id = uuid()

        setCount(count + 1)
        dato.numeral = count

        // crear tarea
        crearTarea(dato)

        // reiniciar formulario
        setDatos({
            nombreTask: '',
            descTaask: '',
            diaTask: ''
        })

    }


    return ( 
        <Fragment>
            <form
                onSubmit={handleTarea}
            >
                <div className='divError'>
                    {/* ternario error */}
                    {
                        error ? ( 
                                <Error />
                                )
                        : null
                    }
                    </div>
                <div className='form-group'>
                    <label className='formGroupExampleInput'>
                        Nombre tarea
                    </label>
                    <input type="text" 
                        className='form-control'
                        name='nombreTask'
                        placeholder='Tarea1'
                        onChange={handleStado}
                        value={nombreTask}
                    />
                </div>
                <div className='form-group'>
                    <label className='formGroupExampleInput'>
                        Descripcion tarea
                    </label>
                    <input type="text" 
                        className='form-control'
                        name='descTaask'
                        placeholder='lavar los platos'
                        onChange={handleStado}
                        value={descTaask}
                    />
                </div>
                <div className='form-group'>
                    <label className='formGroupExampleInput'>
                        Cuando realizar
                    </label>
                    <input type="date" 
                        className='form-control'
                        name='diaTask'
                        onChange={handleStado}
                        value={diaTask}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary'
                        type='submit'
                    >
                        Crear Tarea
                    </button>
                </div>
            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
    crearTarea: PropTypes.func.isRequired
}
 
export default Formulario;