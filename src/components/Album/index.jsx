import React, { useState } from 'react'
import './style.css'

export const Album = ({ album }) => {
    const [showSong, setShowSong] = useState(false)

    const handleClick = () => {
        return setShowSong(true)
    }
    return (
        <div onMouseEnter={handleClick} className={`album`} >
            <h3>{album}</h3>
            <em>showSong ? song : "See More ..."</em>
        </div>
    )
    // return (
    //     <>
    //         <div
    //         className={`album`}
    //         >
    //         <h3>{album.title}</h3>
    //         <p>{album.description}</p>
    //         <p>{album.tracklist}</p>
    //         </div>
    //     </>
    // )
}
