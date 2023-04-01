import React from 'react';
import { Login } from '../componentes/Login'
import { Header } from '../componentes/Header';


const PaginaHome = () => {
    return (
        <React.Fragment>
            <Header />
            <Login />
        </React.Fragment>
    )
}

export { PaginaHome }