import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

}) => {
    return (
        <div className="card ms-3" style={{ maxWidth: 540 }}>
                <Card className="row no-gutters">
                    <CardContent className="col-md-4">
                       <img src={`./assets/heroes/${ id }.jpg`} className="card-img" alt={superhero} />
                    </CardContent>
                    <CardContent className='col-md-8'>

                       <div className="card-body">
                            <h5 className="card-title"> {superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            {
                                (alter_ego !== characters)
                                && <p className='card-text'>{characters}</p>
                            }

                            <p className='card-text'>
                                <small className='text-muted'>{ first_appearance }</small>
                            </p>

                             <Link to ={`./hero/${id}`}>
                                Mas...
                             </Link>   
                            
                       </div>


                    </CardContent>
                </Card>
        </div>

    )
}
