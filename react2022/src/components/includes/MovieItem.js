import React from 'react'

function MovieItem(props){
    return (
        <li>
            <a href={`#`}>
                <img src={`http://image.tmdb.org/t/p/w500/${props.video.poster_path}`} alt={props.video.title} />
                <p>{props.video.title}</p>
            </a>
        </li>
    )
}

export default MovieItem
