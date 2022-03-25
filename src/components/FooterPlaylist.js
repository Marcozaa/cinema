import { TextInput } from '@mantine/core'
import { Search, SearchOffOutlined, SearchSharp } from '@mui/icons-material'
import React from 'react'

export default function FooterPlaylist() {
  return (
    <div>
        <h1>Cerchiamo qualcosa per la tua playlist</h1>
        <TextInput
              placeholder="Cerca film"
              variant='filled'
              size="xl"
              rightSection={<SearchSharp color='white'/>}
            />

    </div>
  )
}
