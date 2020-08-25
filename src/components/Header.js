import React, { Fragment } from 'react'
import Fecha from './Fecha'

const Header = () => {
    return ( 
        <Fragment>
            <header className="fecha bg-dark text-white" >
                <h1>App Task Robert</h1>
                <Fecha />
            </header>
        </Fragment>
     );
}
 
export default Header;