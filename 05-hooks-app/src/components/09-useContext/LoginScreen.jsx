import React, { useContext } from 'react'
import { UserContext } from './Usercontext'
import Button from '@material-ui/core/Button'




export const LoginScreen = () => {

    const { user, setUser} = useContext(UserContext)

    const prueba = {
        id: 511,
        name: 'Nuestro secreto amor'
    }


    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <pre className='container'>
                {JSON.stringify(user, null, 3)}
            </pre>

            <Button 
            variant="outlined" 
            color="primary" 
            onClick={() =>setUser(prueba)}>
                Login
            </Button>
        </div>
    )
}
