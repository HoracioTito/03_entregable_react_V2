import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Residents from './residents/Residents';

const SearchBox = ({fnChangeTv}) => {


/* Ricki Morty  person 0 - 126  */
const [character , setCharacter] = useState({})
/* Var Change */
const [searchValue , setSearchValue ]  = useState("")

  useEffect(() =>{
        const random = Math.floor(Math.random() * 126 ) +1   
   
         axios.get(`https://rickandmortyapi.com/api/location/${random}`) // ${ramdom}
              .then(res=>{
                setCharacter(res.data)
                console.log(character)
          })

     },[])
     console.log(character)

    /* Function search */ 
    const searchValueInput=() =>{
      // alert(searchValue)
      axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`) // ${ramdom}
      .then(res=>{
        setCharacter(res.data)
        fnChangeTv()
        console.log(character)
  })
    }
    
     
    return (
      <>
        <div>
          <div>
            <input type='text'  value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="ID 1 to 126"/>
           <button onClick={() => searchValueInput() } >Search</button>
          </div>
          <p className='search-text'>{searchValue}</p>
          
          <h2>{character.name}</h2>
          <div className='characters'>
            <p>Type : {character.type}</p>
            <p>Dimension : {character.dimension}</p>
            <p>Population : {character.residents?.length}</p>
          </div>
        </div>

        <div>

            <Residents listResidents={character} />
            {/* character.residents?.map((url)=> (
                <p>{url}</p>
            )) */}
        </div>
      </> 

    );
};

export default SearchBox;