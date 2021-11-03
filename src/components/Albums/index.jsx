import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LikeButton } from '../LikeButton';
import './style.css';

export const Albums = () => {

  const [ albums, setAlbums ] = useState([])

  useEffect(() => {
      const fetchAlbums = async () => {
          try {
              let { data } = await axios.get('https://api.spotify.com/v1/artists/7M1FPw29m5FbicYzS2xdpi/albums?include_groups=album&market=GB&limit=20&offset=10', { headers: {
                "Accept": "application/json",
                "Content-Type": "application/json", 
                "Authorization" : "Bearer BQBZzj2gnfxAb6d2nJlbxKXWr2hAOyPqoXZ5v4xmIoSR6ZdBptdfinwuz5BhkFapihkiBw0Zunhdhbr6FsHQEZfmKTquc51lJ7X8mxhFUbXKCyDc5WcIncO9kvQEiSJ4CiuR8Q-6gGwuHUEHUQ4fCyxiw_daeY80HdY"  
              }});
              setAlbums(data.items)
              console.log(data.items)
          } catch(err) {
              console.warn(err);
          }
      }
      fetchAlbums()
  }, [])

  
  return(

    <div className="album-reader">
            {
                albums.map(st =>  (
                  <div className="album">
                    <ul key={st.id}>
                    <LikeButton /> <strong role="heading" aria-label="title">{st.name}</strong>
                    <p>Released: {st.release_date}</p>
                    <p>Total tracks: {st.total_tracks}</p>
                        <p>On spotify: {st.external_urls.spotify}</p>
                        {/* <ol>
                          {st.tracklist.map(tr => (<li>{tr}</li>))}
                        </ol> */}
                    </ul>
                  </div>
                ))
            }
    
    </div>

  );

};