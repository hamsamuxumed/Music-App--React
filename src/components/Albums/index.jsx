import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LikeButton } from '../LikeButton';
import './style.css';
const token = "Bearer BQDIxTfIBT0AU8hRmzYaMZsV_7yi-wKb6c-uX2dtzIxlISRrP6IqPc-20xUxG0qbDe7wD9wRTrnN10OqOOhCPg49DAKXuZMkJlvhozUZvuppq_WAhLgp8IaBQCZg5NUB5-DlQ4nMOSBXh9V9JO2YxmXCmSa4jhfY5O0"

export const Albums = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        let { data } = await axios.get('https://api.spotify.com/v1/artists/7M1FPw29m5FbicYzS2xdpi/albums?include_groups=album&market=GB&limit=20&offset=10', {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `${token}`
          }
        });
        for (const album of data.items) {
          let albumId = album.uri.split(":")[2]
          let tracklist = await axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks?offset=0&limit=20&market=GB`, {
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": `${token}`
            }
          });
          album.tracklist = tracklist.data.items
        }
        setAlbums(data.items)
      } catch (err) {
        console.log(`Error ${err}. If this is a get failed i attempted to resolve this the nice way using a spotify app but its giving me issues. Will hopefully fix soon`)
      }
    }
    fetchAlbums()





    //
  }, [])


  return (

    <div className="album-reader">
      {
        albums.map(st => (
          <div className="album">
            <ul key={st.id}>
              <LikeButton /> <strong role="heading" aria-label="title">{st.name}</strong>
              <p>Released: {st.release_date}</p>
              <p>Total tracks: {st.total_tracks}</p>
              <p>On spotify: {st.external_urls.spotify}</p>
              {/* <ol>
                          {st.tracklist.map(tr => (<li>{tr.name}</li>))}
                        </ol> */}
            </ul>
          </div>
        ))
      }

    </div>

  );

};