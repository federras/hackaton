import React, { useState } from 'react';
import { LoginButton } from '../componentes/LoginButton'
import { Header } from '../componentes/Header';

import './PaginaHome.css'
import { LogoutButton } from '../componentes/LogoutButton';



const PaginaHome = () => {

    const [estaConectado, setEstaConectado] = useState(false);
    
    return (

        <React.Fragment>
            <body>
                <section className='bodyBorder'>
                    <Header />
                    {!estaConectado
                        ? <LoginButton
                            setEstaConectado={setEstaConectado}/>
                        : <LogoutButton />
                    }
                </section>
            </body>
        </React.Fragment>
    )
}

export { PaginaHome }