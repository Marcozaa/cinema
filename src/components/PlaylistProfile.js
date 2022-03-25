import React from 'react'
import PlaylistCard from './PlaylistCard'
import './playlistProfile.css'
import SwipeableEdgeDrawer from './SwipableMenu'
import { useSelector, useDispatch } from 'react-redux'
import axios from '../axiosLogin'
import { useState } from 'react'
import loginRequests from '../LoginRequests'
import { useEffect } from 'react'
import { Modal, Button, Group } from '@mantine/core';
export default function PlaylistProfile() {
  var idUtente = useSelector((state) => state.idUtente.value)
  const [playlist, setPlaylist] = useState() // The retrieved playlists are stored in this state
  const [opened, setOpened] = useState(false); // State per apertura playlist a schermo
  const [openedPlaylistName, setOpenedPlaylistName] = useState(""); // State per apertura playlist a schermo
  useEffect(() => {
    async function fetchPlaylist(){
      const request = await axios.get(loginRequests.fetchPlaylist+
        "?cliente="+idUtente);
      setPlaylist(
        request.data
      )
      return request
    }

     fetchPlaylist()
  }, []);
  return (
      <div className='playlistContainer'> 
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={openedPlaylistName}
      >
        {openedPlaylistName}
      </Modal>
      <div className="header">
      <h1 style={{marginLeft: '1rem'}}>Le tue playlists</h1>
      <SwipeableEdgeDrawer />
      </div>
      <div class="playlists">
        {playlist && (
        playlist.map(playlist => (
            <PlaylistCard setOpened={setOpened} setOpenedPlaylistName={setOpenedPlaylistName} nome={playlist.nome} />
        ))
        )}

      </div>
  
      </div>
  )
}



