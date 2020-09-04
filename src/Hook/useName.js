import React, { Fragment, useState } from 'react';

const useName = (eligName, stateInicial ) => {

    // state de nuestro custom hook
    const [ state, actualizarState ] = useState(stateInicial)

    const SelecName = () => (
        <Fragment>
            <h1> {eligName} </h1>
        </Fragment>
    )

    return [ state, SelecName, actualizarState ]

}

export default useName;