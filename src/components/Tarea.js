import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types'
import Fecha from './Fecha';

const Tarea = ( { dato, eliminarTarea } ) => {

    const { diaTask, nombreTask, descTaask, id } = dato

    return ( 
        <Fragment>
            <div className='tarea'>
                <div>
                    <h4>Nombre Tarea:</h4>
                    <p>{nombreTask}</p>
                    <h4>Descripcion:</h4>
                    <p> {descTaask} </p>
                </div>
                <div className="fecha">
                    <Fecha />
                </div>
                <div>
                    <button className='btn btn-danger'
                        onClick={ () => eliminarTarea(id) }
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </Fragment>
     );
}

Tarea.propTypes = {
    dato: PropTypes.object.isRequired,
    eliminarTarea: PropTypes.func.isRequired
}
 
export default Tarea;