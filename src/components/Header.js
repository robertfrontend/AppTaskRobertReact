import React, { Fragment } from 'react'
import Fecha from './Fecha'

import useName from '../Hook/useName'

const Header = () => {

    const [ name, SelecName ] = useName('App Task Robert', '')

    return ( 
        <Fragment>
            <header className="hedaer bg-dark text-white" >
                <SelecName />
                <Fecha />
            </header>
        </Fragment>
     );
}
 
export default Header;