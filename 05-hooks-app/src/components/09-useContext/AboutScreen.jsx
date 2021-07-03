import React from 'react'
import { UserContext } from './Usercontext'
import { useContext } from 'react'
import Button from '@material-ui/core/Button'


export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext)

    const handleClick = () => {
        setUser({})
    }


    return (
        <div>
            <h1>About Screen</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null , 3)}
            </pre>

            <Button 
            variant="contained" 
            color="primary"
            onClick={handleClick}
            >
              Logaut
            </Button>

        </div>
    )
}
