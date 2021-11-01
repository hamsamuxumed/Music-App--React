import React, { useState } from 'react'
import './style.css'

export const Card = ({ size, artist, song }) => {
    const [showSong, setShowSong] = useState(false)

    const handleClick = () => {
        return setShowSong(true)
    }
    return (
        <div onMouseEnter={handleClick} className={`card ${size}`} >
            <h3>{artist}</h3>
            <em>{showSong ? song : "See More ..."}</em>
        </div>
    )
}

