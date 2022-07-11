import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentItem = ({itemUrl}) => {

    const [item, setItem] = useState({})
   /*  Load character  */
    useEffect(()=>{
        axios.get(`${itemUrl}`)
           .then(res => {
            setItem(res.data)
            console.log(res.data)
        })
    },[])

    /*  Function Status */
    const fnStatus = (status) => {

        if (status == 'Alive')  {
            return "green pad"
        }else if (status == 'Dead') {
            return 'red pad'
        }else{
            return 'gray pad'
        }
    }

    return (

            <div  className='card space' >
                <>
                <div>
                     <img src={item.image} className='image-photo' alt='photo' />
                </div>
                <div className='info-photo'>
                    {/* ResidentItem itemUrl */}
                    <h3>{item.name}</h3>
                    <div><div className={fnStatus(item.status) } ></div> {item.status}</div>
                    <div className='font-small'>Origin : </div>
                    <p>{item.origin?.name}</p>
                    <div className='font-small' >Episode : </div>
                    <p>{item.episode?.length}</p> 
                </div>
                </>
            </div>
            

    );
};

export default ResidentItem;