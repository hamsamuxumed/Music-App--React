import React from 'react';
import { Card } from './Card'


const music = [{
    size: "large", band: "King Crimson", image: "https://media.pitchfork.com/photos/5d0aa73a4b0a62084982689c/2:1/w_2560%2Cc_limit/King-Crimson.jpg", information: "King Crimson are a British progressive rock band formed in November of 1968 in London, England. They exerted a strong influence on the early 1970s progressive rock movement and continue to inspire subsequent generations of artists across multiple genres"
}]



export const Summary = () => {
    const renderMusic = () => music.map((m, i) => <Card key={i} size={m.size} band={m.band} information={m.information} image={m.image} />)
    return (
        <>
            <p>{renderMusic()}</p>
        </>
    )
}


