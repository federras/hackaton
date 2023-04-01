import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import './Login.css'


function Profile() {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
 
  if (isConnected) return <div>Connected to {ensName ?? address}</div>
  return <button onClick={() => connect()}>Connect Wallet</button>
}

export { Profile };


const Login = () => {

    const { address, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
        connector: new InjectedConnector(),
        });

    if (isConnected) {
        return <div>Connected to {ensName ?? address}</div>
    }

    return (
        <body>
            <section>
                <button onClick={() => connect()}>Connect Wallet</button>
            </section>
        </body>
    )
}

export { Login };