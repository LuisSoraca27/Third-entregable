import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const BarSearch = ({ getLocation }) => {

    const [text, setText] = useState('')
    const [locationsSearched, setLocationsSearched] = useState([])

    const getLocationByName = () => {
        const url = 'https://rickandmortyapi.com/api/location/?name=' + text
        axios.get(url)
            .then(res => { setLocationsSearched(res.data.results) })
    }
    console.log(locationsSearched)

    return (
        <div className='my-5'>
            <div>
                <input value={text} placeholder='Search a Location' type="text" className='rounded-2 search-bar' onChange={
                    (e) => {
                        setText(e.target.value)
                        getLocationByName()
                    }
                } />
                
                {locationsSearched.map(location => {
                    return (
                        <div key={location.id} className='bg-dark '>
                            <button onClick={() => {
                                getLocation(location.url)
                                setLocationsSearched([])
                                setText('')
                            }}
                                className='resultSearch'>
                                <span>{location.name}</span>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>


    );
};

export default BarSearch;