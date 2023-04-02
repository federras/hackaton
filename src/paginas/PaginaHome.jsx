import React, { useState } from 'react';
import { LoginButton } from '../componentes/LoginButton'
import { Header } from '../componentes/Header';

import './PaginaHome.css'
import { SeccionUsuario } from '../componentes/SeccionUsuario';

import { settings } from "./contrato/settings";
import { useContractRead } from 'wagmi'


// import { useContractRead} from 'wagmi'

const PaginaHome = () => {

    const { addressContract, abi } = settings;

    // const { balance, isError, isLoading } = useContractRead({
    //     address: addressContract,
    //     abi,
    //     functionName: 'getAddress',
    // })
  
    const [estaConectado, setEstaConectado] = useState(false);
   
    return (

        <React.Fragment>
            <body>
                <section className='bodyBorder'>
                    <Header />
                    <LoginButton
                            setEstaConectado={setEstaConectado}
                            />
                    {estaConectado && <SeccionUsuario address={"0xasdkajhfekawyekajshdkjaugwraugsdjkhgawr6543216547"}/>}
                    
                {/* <div>{isLoading ? <p>Loading...</p> : <p>BALANCE: {balance} {contract.functions['getBalance']}</p>}</div> 
                <div>{address2}</div> */}
                </section>
            </body>
        </React.Fragment>
    )
}



export { PaginaHome }