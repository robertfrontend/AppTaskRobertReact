import React, { Fragment, useEffect, useState  } from 'react';

const Fecha = () => {
      // mostrar fecha actual
  const [ datoFecha, actualizarDia ] = useState({
      dia: '',
      mes: '',
      year: ''
  })


  useEffect(() => {
    // actualizamos el state para guardar la fecha
    const actualizarStateFecha = () => {
        // obtener las fecha
        const day = new Date()

        let miMes = day.getMonth()+1
        let miDia = day.getDate()
        let miYear = day.getFullYear()

        actualizarDia( {
            ...datoFecha,
            dia: miDia,
            mes: miMes,
            year: miYear
        })

    } 
      actualizarStateFecha();
      // eslint-disable-next-line
  }, [] ) 

  // destructuring fecha

  const {dia, mes, year } = datoFecha

    return ( 
        <Fragment>
            <div >
                <h3 className='text-light' >
                    {dia}/{mes}/{year}
                </h3>
            </div>
        </Fragment>
     );
}
 
export default Fecha;