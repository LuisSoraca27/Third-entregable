import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BarSearch from './BarSearch';
import Residentinfo from './Residentinfo';

const Location = () => {

    const [location, setlocation] = useState({})
   

    const randomlocation = Math.floor(Math.random() * 126) + 1;

    const getLocation = (url) => {
        axios.get(url)
            .then(res => {
                setlocation(res.data)
            })
    }
    useEffect(() => {
        const url = 'https://rickandmortyapi.com/api/location/' + randomlocation
        getLocation(url)

    }, [])
    // console.log(location)



    return (
        <div>
            <div className='portada'>
            </div>
            <h1>Rick and Morty wiki</h1>
            <BarSearch getLocation={getLocation} />
            <div className='cardLocation'>
                <div className='helpercard'>
                    <span>Name:</span>
                    <p>{location.name}</p>
                </div>
                <div className='helpercard'>
                    <span>Type:</span>
                    <p>{location.type}</p>
                </div>
                <div className='helpercard'>
                    <span>Dimension:</span>
                    <p>{location.dimension}</p>
                </div>
                <div className='helpercard'>
                    <span>Population:</span>
                    <p>{location.residents?.length}</p>
                </div>
            </div>
            <h1>Residents</h1>
            <div className='content-resident'>
                {location.residents?.map(resident => (
                    <Residentinfo resident={resident} residentlength={location.residents?.length} key={resident} />
                ))}
            </div>
        </div>
    );
};

export default Location;