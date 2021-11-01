import React from 'react';
import { Card } from './Card'


const music = [{
    artist: "Eminem", song: "Not Afraid"
}, {
    artist: "50 Cent", song: "21 Questions"
}, {
    artist: "Rihanna", song: "Umberalla"
}]



export const Summary = () => {
    const renderMusic = () => music.map((m, i) => <Card key={i} artist={m.artist} song={m.song} />)
    return (
        <div>
            <h2>Summary</h2>
            <ol>{renderMusic()}</ol>

        </div>
    )
}


