import React, { useEffect } from 'react'
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItme } from './GifGridItme';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images,loading} = useFetchGifs(category);

   


    return (
        <>
            <h3 className='card animate__animated animate__fadeIn '>{category}</h3>

            {loading && <p className="card animate__animated animate__flash ">Loading</p>}
         
            <div className='card-grid'>
            
                    {
                        images.map( img => {
                            return <GifGridItme 
                            key = {img.id}
                            {...img } ></GifGridItme>
                        })
                    }
                
            </div>
        </>
    )
}
