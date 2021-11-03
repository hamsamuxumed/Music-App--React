import React from 'react'
import './style.css'

export const Card = ({ size, band, information, image }) => {
    // const [showSong, setShowSong] = useState(false)

    // const handleClick = () => {
    //     return setShowSong(true)
    // }

    return (
        <div className={`card ${size}`} >
            <h2>{band}</h2>
            <em>{information}</em>
            <img src={image} alt="Pic of King Crimson" />
        </div>
    )
}

