import React from 'react'
import './playlistCard.css'
import axios from '../axiosLogin'
import { useState } from 'react'
import loginRequests from '../LoginRequests'
import { useEffect } from 'react'
export default function PlaylistCard({nome, setOpened, setOpenedPlaylistName, id}) {
  const [thumbnails, setThumbnails] = useState("")
  useEffect(() => {
    async function fetchPlaylist(){
      const request = await axios.get(loginRequests.getPlaylistThumbnails+
        "?playlist="+id);
      setThumbnails(request.data)
      return request
    }

    console.log(thumbnails.length)
     fetchPlaylist()
  }, []);
  return (
    <>
    {nome && (
    <div className="playlistcard" onClick={() => {setOpened(true); setOpenedPlaylistName(nome)}}>
        <div className="image" >
          {thumbnails && (
            thumbnails.map(thumbnail =>(
              <img className='locandina' src={thumbnail.locandina} />
            ))
          )}

        </div>
        <div className="info">
            {nome}
        </div>
    </div>
    )}
    </>
  )
}
