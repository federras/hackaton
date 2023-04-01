import { useDisconnect } from 'wagmi'
import './LogoutButton.css'

const LogoutButton = ({ensName, address = ''}) => {

    // const disconnect = () => {
    //     console.log("desconectar")
    // }
    const { disconnect } = useDisconnect()
    
    const shortAddress1 = address.slice(0,6);
    const total = address.length;
    const shortAddress2 = address.slice(total-4, total); 


    return (  
            <section className="logoutSection">
                <section className='conteiner-connected'>
                    <p className='conected-to'>Connected to</p>
                    <p className='address'>{shortAddress1 + "..." + shortAddress2}</p>
                </section>
                <section className='conteiner-button'>
                    <button onClick={() => disconnect()}>Disconnect</button>
                </section>
            </section>
    )
}

export { LogoutButton };