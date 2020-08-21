import React from 'react';
import { Fragment } from 'react';

const Tarea = ( {dato, eliminarTarea} ) => {
    return ( 
        <Fragment>
            <div className='tarea'>
                <div>
                    <p>Nombre tarea: <span> {dato.nombreTask} </span>  </p>
                    <p>Descripcion: <span> {dato.descTaask} </span>  </p>
                    <p>Fecha tarea: <span> {dato.diaTask} </span>  </p>

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
 
export default Tarea;