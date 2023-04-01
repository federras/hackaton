import React, { useEffect, useState } from 'react';
import { LoginButton } from '../componentes/LoginButton'
import { Header } from '../componentes/Header';
import { useAccount } from 'wagmi'



import './PaginaHome.css'
import { SeccionUsuario } from '../componentes/SeccionUsuario';

import { settings } from "./contrato/settings";
import { useContract, useContractRead } from 'wagmi'


// import { useContractReads } from 'wagmi'
// import { useContract } from 'wagmi'

const PaginaHome = () => {
    const { address2, isConnecting, isDisconnected } = useAccount()


    const { addressContract, abi } = settings;

    const contract = useContract({
        address: addressContract,
        abi
    })

    const { balance, isError, isLoading } = useContractRead({
        address: addressContract,
        abi,
        functionName: 'getAddress',
      })
  
    const [estaConectado, setEstaConectado] = useState(false);

    console.log(address2)

    
    return (

        <React.Fragment>
            <body>
                <section className='bodyBorder'>
                    <Header />
                    <LoginButton
                            setEstaConectado={setEstaConectado}
                            />
                    {estaConectado && <SeccionUsuario />}
                    
                <div>{isLoading ? <p>Loading...</p> : <p>BALANCE: {balance} {contract.functions['getBalance']}</p>}</div> 
                <div>{address2}</div>
                </section>
            </body>
        </React.Fragment>
    )
}

export { PaginaHome }