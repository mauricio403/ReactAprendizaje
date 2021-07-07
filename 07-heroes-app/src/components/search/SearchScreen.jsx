import React from 'react'
import queryString from 'query-string'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import { heroes } from '../data/Heroes'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../Hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../selectors/getHeroesByName'
import { useMemo } from 'react'

export const SearchScreen = ({history}) => {

//    const location =  useLocation();
   const {search} = useLocation()

      const {q = ''} = queryString.parse(search)
    //   console.log(q)

      
      const [formValues, handleInputChange] = useForm({
          searchText:q
        })
        
        const { searchText } = formValues
        
       const heroesFilter =  useMemo(() => getHeroesByName(q), [q])
        // const heroesFilter = getHeroesByName(searchText);

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${ searchText}`)
    }

    return (
        <>
            <h1>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <TextField
                          label="Find your hero"
                          name ="searchText"
                          value ={searchText}
                          autoComplete='off'
                          onChange={handleInputChange}
                          
                        />

                        <Button 
                        variant="outlined" 
                        color="primary"
                        className='m-1'
                        type='submit'>
                          Search
                        </Button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        heroesFilter.map(hero => (
                                <HeroCard
                                key = {hero.id}
                                {...hero}
                                
                                ></HeroCard>
                        ))
                    }

                </div>
            </div>

        </>
    )
}
