import React from 'react'
import YoutubeItem from "./YoutubeItem";

function YoutubeList(props) {
    // console.log(props)
  return (
    <div className={`youtube__list ${props.color}`} >
        <ul>           
            {props.videos.map((video, index)=>(
                <YoutubeItem key={index} video={video} />
            ))}
        </ul>
    </div>
)
}

export default YoutubeList