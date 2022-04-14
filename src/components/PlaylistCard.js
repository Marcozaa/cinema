import React from 'react'
import './playlistCard.css'
import axios from '../axiosLogin'
import { useState } from 'react'
import loginRequests from '../LoginRequests'
import { useEffect } from 'react'
export default function PlaylistCard({nome, setOpened, setOpenedPlaylistName, id, setLocandine,immagine}) {
  const [movieNames, setMovieNames] = useState("")
  useEffect(() => {
    async function fetchPlaylist(){
      const request = await axios.get(loginRequests.getMoviesInPlaylist+
        "?playlist="+id);
      setMovieNames(request.data)
      return request
    }
     fetchPlaylist()
  }, []);
  return (
    <>
    {nome && (
    <div className="playlistcard" 
    onClick={() => {setOpened(true); 
    setOpenedPlaylistName(nome); 
    setLocandine(movieNames)}}
    >
    
        <div className="image" style={{background: `url(${immagine})`, backgroundPosition: 'center', backgroundSize: 'cover'}} >
          {/*thumbnails && (
            thumbnails.map(thumbnail =>(
              <img className='locandina' src={thumbnail.locandina} />
            ))
          )*/}

        </div>
        <div className="info">
            {nome}
        </div>
    </div>
    )}
    </>
  )
}
