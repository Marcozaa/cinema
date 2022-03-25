import { Button, TextInput } from '@mantine/core'
import { useSelector, useDispatch } from 'react-redux'
import { Search, SearchOffOutlined, SearchSharp } from '@mui/icons-material'
import React from 'react'
import axios from '../axiosLogin'
import loginRequests from '../LoginRequests'
import { useState } from 'react'

export default function FooterPlaylist({nomePlaylist}) {

  var idUtente = useSelector((state) => state.idUtente.value)
  async function createPlaylist(){
      const request = await axios.get(loginRequests.playlistCreation+
        "?nome="+nomePlaylist+
        "&cliente="+idUtente);
      return request
    }
    console.log(useSelector((state) => state.idUtente.value))
  return (
    <div>
        <h1>Cerchiamo qualcosa per la tua playlist</h1>
        <TextInput
              placeholder="Cerca film"
              variant='filled'
              size="xl"
              rightSection={<SearchSharp color='white'/>}
            />


    <Button onClick={createPlaylist}>Crea playlist</Button>

    </div>
  )
}
