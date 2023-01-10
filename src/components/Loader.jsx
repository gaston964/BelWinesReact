import React from 'react'
import './loader.css'

const Loader = () => {
    return (
        <>
            <div id="loader-container">
                <div id="loader">
                    <div id="circles"></div>
                </div>
                <div id="loader-circle"></div>
            </div>
        </>
    )
}

export default Loader

/* <img className='logoLoader' src='\images\logobel3.JPG' alt="logobel" />

.logoLoader{
    height: 65px;
    width: 65px;
    border-radius: 50%;
}

*/