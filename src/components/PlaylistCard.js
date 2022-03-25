import React from 'react'
import './playlistCard.css'
export default function PlaylistCard({nome, setOpened, setOpenedPlaylistName}) {
  return (
    <div className="playlistcard" onClick={() => {setOpened(true); setOpenedPlaylistName(nome)}}>
        <div className="image">

        </div>
        <div className="info">
            {nome}
        </div>
    </div>
  )
}
