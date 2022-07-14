import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Residentinfo = ({ resident, residentlength }) => {

    const [residentItem, setResidentItem] = useState({})

    useEffect(() => {
        axios.get(resident)
            .then(res => setResidentItem(res.data))
    }, [])
    console.log(residentItem)
    console.log(residentlength)

    const changeColor = () => {
        if(residentItem.status == 'unknown') {
            return(
                <div className='cardalive'>
                <i className="fa-solid fa-circle colorgrey"></i> <p> {residentItem.status}</p>
                </div>
            )
        } else if (residentItem.status == 'Alive') {
            return(
                <div className='cardalive'>
                <i className="fa-solid fa-circle colorgreen"></i> <p> {residentItem.status}</p>
                </div>
            )
        } else if (residentItem.status == 'Dead') {
            return (
                <div className='cardalive'>
                <i className="fa-solid fa-circle colorred"></i> <p> {residentItem.status}</p>
                </div>
            )
        }
    }

    // const existResident = () => {
    //     if(residentlength) {
    //         return(
    //             <div className='residentcard'>
    //             {changeColor()}
    //             <div className='img-resident'>
    //                 <img src={residentItem.image} alt="" />
    //             </div>
    //             <h2>{residentItem.name}</h2>
    //             <hr />
    //             <div className='cardinfo'>
    //                 <span>Species</span>
    //                 <p>{residentItem.species}</p>
    //                 <br />
    //                 <span>Origin</span>
    //                 <p>{residentItem.origin?.name}</p>
    //                 <br />
    //                 <span>Appearance in episodes</span>
    //                 <p>{residentItem.episode?.length}</p>
    //             </div>
    //         </div>
    //         )
    //     } else  {
    //         return (
    //            <div>
    //              <h2>No hay residents</h2>
    //            </div>
    //         )
    //     }
    // }

    return (
        <div className='residentcard'>
                {changeColor()}
                <div className='img-resident'>
                    <img src={residentItem.image} alt="" />
                </div>
               <div className='residentName'>
               <h2>{residentItem.name}</h2>
               </div>
                <hr />
                <div className='cardinfo'>
                    <span>Species</span>
                    <p>{residentItem.species}</p>
                    <br />
                    <span>Origin</span>
                    <p>{residentItem.origin?.name}</p>
                    <br />
                    <span>Appearance in episodes</span>
                    <p>{residentItem.episode?.length}</p>
                </div>
            </div>
    );
};

export default Residentinfo;