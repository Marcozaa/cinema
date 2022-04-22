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
import CheckboxListSecondary from './PlaylistRows'
import { setPlaylistUtente} from '../playlistSlice'
export default function PlaylistProfile() {
  var idUtente = useSelector((state) => state.idUtente.value)
  const [playlist, setPlaylist] = useState([]) // The retrieved playlists are stored in this state
  const [opened, setOpened] = useState(false); // State per apertura playlist a schermo
  const [openedPlaylistName, setOpenedPlaylistName] = useState(""); // State per apertura playlist a schermo
  const [locandine, setLocandine] = useState([]) // STate per locandine

 const dispatch = useDispatch() // Set dati con REDUX

  
  useEffect(() => {
    
    async function fetchPlaylist(){
      const request = await axios.get(loginRequests.fetchPlaylist+
        "?cliente="+idUtente);
        console.log(request.data)
      setPlaylist(
        request.data
      )
      dispatch(setPlaylistUtente(request.data)) // Inserisco le playlist nello store di redux
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
        
        {locandine && (
        <CheckboxListSecondary locandine={locandine}/>
        )}
      </Modal>
        <div className="header">
        <h1 style={{marginLeft: '1rem'}}>Le tue playlists</h1>
        <SwipeableEdgeDrawer />
        </div>
      <div class="playlists">
        {playlist && (
        playlist.map(playlist => (
            <PlaylistCard 
            setOpened={setOpened} 
            setOpenedPlaylistName={setOpenedPlaylistName} 
            id={playlist.ID} 
            nome={playlist.nome} 
            immagine={playlist.immagine}
            setLocandine={setLocandine}
            />
        ))
        )}

      </div>
  
      </div>
  )
}



