import React from 'react'
import { useState, useEffect } from 'react';

const apiKey= process.env.REACT_APP_NASA_API_KEY;

function NasaPhoto() {

    const [currentPhoto, setPhoto] = useState();

    useEffect( () => {
        getPhoto();

        async function getPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setPhoto( data );
            
        }
    }, []);

    if ( !currentPhoto )
        return <div />;
    return (
        <div className='Nasaphoto-container'>
            <div className="Nasaphoto-img">
                {currentPhoto.media_type === 'image' ?
                (<img className='photo' src={currentPhoto.url} alt="" />):
                (<iframe
                title="space-video"
                src={currentPhoto.url}
                frameborder='0'
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className='photo'/>)}
                </div>
            <div className="Nasaphoto-details">
                <h1>{currentPhoto.title}</h1>
                <h4>{currentPhoto.date}</h4>
                <h3>{currentPhoto.explanation}</h3>
            </div>
        </div>
    );
}

export default NasaPhoto;