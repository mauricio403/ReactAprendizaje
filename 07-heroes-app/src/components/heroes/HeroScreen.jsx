import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroById'
import Button from '@material-ui/core/Button'
import { useMemo } from 'react'

export const HeroScreen = ({history}) => {

    // const params = useParams()
    const {heroeId} = useParams()
    // console.log(heroeId)

   const hero =  useMemo(() => getHeroesById(heroeId), [heroeId])
    // const hero = getHeroesById(heroeId)

    if(!hero){
        return <Redirect to ='/'></Redirect>
    }

    const handleReturn = () => {
        history.goBack();

    }


    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className='row mt-5'> 
            <div className='col-4'>
                <img 
                src={`../assets/heroes/${heroeId}.jpg`}
                className='img-thumbnail'
                alt={superhero} />
            </div>

            <div className='col-8'>
                <h3>{superhero}</h3>

                <ul className='list-group list-group-flush'>
                    
                        <li className='list-group-item'>Alter ego : {alter_ego}</li>
                        <li className='list-group-item'>Publisher : {publisher}</li>
                        <li className='list-group-item'>first appearance : {first_appearance}</li>
                    
                </ul>

                <h5>characters</h5>
                <p>characters: {characters}</p>

                <Button 
                variant="contained" 
                color="primary"
                onClick={ handleReturn }
                >
                  Return
                </Button>
            </div>
        </div>
    )
}
