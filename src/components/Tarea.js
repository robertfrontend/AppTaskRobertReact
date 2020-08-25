import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types'

const Tarea = ( { dato, eliminarTarea } ) => {
    return ( 
        <Fragment>
            <div className='tarea'>
                <div>
                    <h2 className='numeral'>
                         #<span>{dato.numeral} </span>  
                    </h2>
                </div>
                <div>
                    <p>Nombre tarea: <span> {dato.nombreTask} </span>  </p>
                    <p>Descripcion: <span> {dato.descTaask} </span>  </p>
                    <p>Cuando realizar: <span> {dato.diaTask} </span>  </p>
                </div>
                <div>
                    <button className='btn btn-danger'
                        onClick={ () => eliminarTarea(dato.id) }
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