import './SeccionUsuario.css'

const UserInexistente = () => {
    return(
        <section className='seccion-usuario'>
            <span>Usuario Inexistente</span>
        </section>
    )
}

const UserInquilino = ({user}) => {
    const pagarExpensa = () => {
        console.log("pagar expensa")
    }

    return (
        <section className="seccion-usuario">
            <span className='user'>Bienvenido {user._name}</span>
            <span className='user'>
                Monto: {user._amount}
            </span>
            <button onClick={pagarExpensa}>
                Pagar Expensas
            </button> 
        </section>
    )
}


const UserAdmin = ({user}) => {
    const cobrarSueldo = () => {
        console.log("Cobrar Sueldo")
    }

    return (
        <section className="seccion-usuario">
            <span className='user'>Bienvenido {user._name}</span>
            <span className='user'>
                Monto: {user._amount}
            </span>
            <button onClick={cobrarSueldo}>
                Cobrar Sueldo
            </button> 
        </section>
    )
}


const SeccionUsuario = ({address}) => {
   
    const users = require('../users/users.json')
    let user = users.find((user) => {
        return user._userAddress === address;
    })

    if (user) {
        // TODO: ver que rol tiene este user
        user.rol = "admin";
    }
   
    return (
        <section>
            {!user && <UserInexistente />}
            {(user && user.rol === "inquilino") && <UserInquilino user={user}/>}
            {(user && user.rol === "admin") && <UserAdmin user={user}/>}

         </section>
   )
     
}

export { SeccionUsuario }