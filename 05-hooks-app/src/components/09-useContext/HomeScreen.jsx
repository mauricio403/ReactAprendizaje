import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Usercontext'

export const HomeScreen = () => {

    const {user} = useContext(UserContext)

    console.log(user)


    return (
        <div>
            <h1>Home Screen</h1>
            <hr />


            <pre className='container'>
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
