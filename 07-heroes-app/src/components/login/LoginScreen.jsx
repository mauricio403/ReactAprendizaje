import React from 'react'
import Button from '@material-ui/core/Button'

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
       history.push('/')
    }


    return (
        <div className="nrainer mt-5">
            <h1>Login </h1>

            <hr />

            <Button 
            variant="contained" 
            color="primary"
            onClick={handleLogin}
            >
              Login
            </Button>

        </div>
    )
}
