import React, { useEffect, useState } from 'react';
import { LoginButton } from '../componentes/LoginButton'
import { Header } from '../componentes/Header';

import './PaginaHome.css'
import { SeccionUsuario } from '../componentes/SeccionUsuario';

import { settings } from "./contrato/settings";
import { useContractRead } from 'wagmi'

// import { useContractReads } from 'wagmi'
// import { useContract } from 'wagmi'

const PaginaHome = () => {

    const { addressContract, abi } = settings;

    const { balance, isError, isLoading } = useContractRead({
        address: addressContract,
        abi: abi,
        functionName: 'getBalance',
      })
  
    const [estaConectado, setEstaConectado] = useState(false);

    
    return (

        <React.Fragment>
            <body>
                <section className='bodyBorder'>
                    <Header />
                    <LoginButton
                            setEstaConectado={setEstaConectado}
                            />
                    {estaConectado && <SeccionUsuario />}
                    
                <div>{isLoading ? <p>Loading...</p> : <p>BALANCE: {balance}</p>}</div> 
                </section>
            </body>
        </React.Fragment>
    )
}

export { PaginaHome }