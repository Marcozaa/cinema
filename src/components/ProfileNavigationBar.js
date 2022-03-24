import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Bookmark, Movie, Playlist, Presentation, UserPlus } from 'tabler-icons-react';
import { useState } from 'react';
export default function LabelBottomNavigation({value, setValue}) {


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value}  onChange={handleChange}>
      <BottomNavigationAction
        label="Playlists"
        value="playlists"
        icon={<Movie />}
      />
      <BottomNavigationAction
        label="Mi piace"
        value="mipiace"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Salvati"
        value="salvati"
        icon={< Bookmark/>}
      />
      <BottomNavigationAction 
      label="Seguiti" 
      value="seguiti" 
      icon={<UserPlus />} 
      />
    </BottomNavigation>
  );
}
