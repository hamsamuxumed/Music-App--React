import React, { useState } from 'react';
import './style.css';

export const Albums = () => {

  const [ albums, ] = useState([
    { id: 1, title: '1 Strikes', description: 'It was a dark and stormy night...', tracklist: ["track 1","track 2","track 3"]},
    { id: 2, title: '2 Strikes', description: 'It was a dark and stormy night...', tracklist: ["track 1","track 2","track 3"]},
    { id: 3, title: '3 Strikes', description: 'It was a dark and stormy night...', tracklist: ["track 1","track 2","track 3"]}
  ])


  return(

    <div className="album-reader">

    
            {
                albums.map(st =>  (
                  <div className="album">
                    <ul key={st.id}>
                        <strong role="heading" aria-label="title">{st.title}</strong>
                        <p>{st.description}</p>
                        <ol>
                          {st.tracklist.map(tr => (<li>{tr}</li>))}
                        </ol>
                    </ul>
                  </div>
                ))
            }
    
    </div>

  );

};