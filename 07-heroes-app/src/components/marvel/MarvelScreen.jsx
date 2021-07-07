import React from 'react'
import { HerosList } from '../heroes/HerosList'



export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />

            <HerosList publisher = 'Marvel Comics'></HerosList>            
        </div>
    )
}
