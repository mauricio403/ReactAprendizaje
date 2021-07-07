import React from 'react'
import { useMemo } from 'react';

import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


export const HerosList = ({ publisher }) => {

  const heroes =   useMemo(() => getHeroesByPublisher(publisher), [ publisher ])

    // const heroes = getHeroesByPublisher(publisher);


    return (
        <div>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}  {...hero}>
                        
                    </HeroCard>
                ))
            }


        </div>
    )
}
