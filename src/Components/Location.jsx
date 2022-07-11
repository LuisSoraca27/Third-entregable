import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Residentinfo from './Residentinfo';

const Location = () => {

    const [location, setlocation] = useState({})
    const [text, setText] = useState('escribe aqui')

    useEffect(() => {
        const randomlocation = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomlocation}`)
            .then(res => {
                setlocation(res.data)
            })

    }, [])
    // console.log(location)

    const getLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${text}`)
        .then(res => {
            setlocation(res.data)
        })
        console.log(text)
    }
        
    return (
        <div>
            <div className='portada'>
            </div>
            <h1>Rick and Morty wiki</h1>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={getLocation}>Search</button>
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
                        <Residentinfo resident={resident} residentlength ={location.residents?.length} key={resident} />
                    ))}
            </div>
        </div>
    );
};

export default Location;