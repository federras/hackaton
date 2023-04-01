import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { LogoutButton } from './LogoutButton'

import './LoginButton.css'


// function Profile() {
//   const { address, isConnected } = useAccount()
//   const { data: ensName } = useEnsName({ address })
//   const { connect } = useConnect({
//     connector: new InjectedConnector(),
//   })
 
//   if (isConnected) return <div>Connected to {ensName ?? address}</div>
//   return <button onClick={() => connect()}>Connect Wallet</button>
// }

// export { Profile };


const LoginButton = ({ setEstaConectado }) => {

    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
        connector: new InjectedConnector(),
        });
    
    // setEstaConectado(isConnected);

    // console.log("address: ",address)
    // console.log("isConnected: ",isConnected)
    // console.log("data: ",ensName)
    // console.log("connect: ",connect)
    setEstaConectado(isConnected);
    
    if (isConnected) {
        return <LogoutButton
                    address={address}/>
    }

    

    return (
        <body>
            <section>
                <button onClick={() => connect()}>Connect Wallet</button>
            </section>
        </body>
    )
}

export { LoginButton };