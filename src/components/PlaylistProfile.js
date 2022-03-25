import React from 'react'
import PlaylistCard from './PlaylistCard'
import './playlistProfile.css'
import SwipeableEdgeDrawer from './SwipableMenu'


export default function PlaylistProfile() {
  
  return (
      <div className='playlistContainer'> 
      <div className="header">
      <h1 style={{marginLeft: '1rem'}}>Le tue playlists</h1>
      <SwipeableEdgeDrawer />
      </div>
      <div class="playlists">
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />

      </div>
  
      </div>
  )
}



