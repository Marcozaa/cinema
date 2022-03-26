import React from 'react';
import { Button, Menu, Text, useMantineTheme } from '@mantine/core';
import { SquareCheck, Package, Users, Calendar, ChevronDown } from 'tabler-icons-react';
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';
import axiosLogin from '../axiosLogin'
import loginRequests from '../LoginRequests'
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export function InserisciInPlaylistButton({nome,setOpen}) {
  
  const theme = useMantineTheme();
  const playlist = useSelector((state) => state.playlistUtente.value)


    async function insertInPlaylist(nomePlaylist){
      const request = await axiosLogin.get(loginRequests.insertMovieInPlaylist+'?playlist='+nomePlaylist +'&film=' +"300");
      
      return request
    }
    

   


  return (
    <Menu
      control={
        <Button rightIcon={<ChevronDown size={18} />} sx={{ paddingRight: 12 }}>
          Inserisci in
        </Button>
      }
      transition="pop-top-right"
      placement="end"
      size="lg"
    >
      {playlist && (
      playlist.map(playlist =>(
          <Menu.Item
        onClick={()=> insertInPlaylist(playlist.ID)}
        icon={<Package size={16} color={theme.colors.blue[6]} />}
        rightSection={
          <Text size="xs" transform="uppercase" weight={700} color="dimmed">
            Ctrl + P
          </Text>
        }
      >
       {playlist.nome}
      </Menu.Item>
      )))}
    </Menu>
  );
}