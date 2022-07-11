import React from 'react';
import ResidentInfo from './ResidentInfo';

const Residents = ({listResidents}) => {
    return (
        <div>
            <p className='title'>RESIDENTS</p>
            {/* <p>---{listResidents.residents?.[0]}</p> */}

            <div className='content-character'>
             { listResidents.residents?.map((strUrl,index) => ( 
                        <ResidentInfo itemUrl={strUrl} key={strUrl} />
                    
                    ) ) }

            </div> 

        </div>
    );
};

export default Residents;