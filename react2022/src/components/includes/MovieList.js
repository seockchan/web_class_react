import React from 'react'
import MovieItem from "./MovieItem";

function MovieList(props) {
    // console.log(props)
  return (
    <div className={`youtube__list ${props.color}`} >
        <ul>           
            {props.results.map((video, index)=>(
                <MovieItem key={index} video={video} />
            ))}
        </ul>
    </div>
)
}

export default MovieList