import React from 'react'
import { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './Usercontext'




export const MainApp = () => {

    const [user, setUser] = useState({})

    return (
        <>
            <UserContext.Provider value={{
                user,
                setUser,
            }}>

             <AppRouter></AppRouter>

            </UserContext.Provider>
        </>
    )
}
