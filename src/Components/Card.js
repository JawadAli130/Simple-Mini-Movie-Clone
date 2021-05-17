import React from 'react';
import '../index.css';
function Card(props) {
    return(
        <>
            <div className='container'>
                <div className='card' >
                    <img className='image' src={props.imgsrc} alt="loading..." />
                    <div className='content' >
                        <h5 className='title' >{props.title}</h5>
                        <h3 className='movie_name' >{props.movie_name}</h3>
                        <a href="https://www.netflix.com/pk/" target="_blank" rel="noreferrer"><h5 className='watch' >WATCH NOW</h5></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;