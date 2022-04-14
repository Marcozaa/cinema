import React from 'react'
import './HeaderProfilo.css'
/**
 * Forked from components/HeaderProfilo
 */
import './headerPlaylist.css'
import { Textarea, TextInput } from '@mantine/core';
import { Dots } from 'tabler-icons-react';
export default function HeaderPlaylist({setNomePlaylist, setImmaginePlaylist}) {
  return (
    <div className='headerPlaylist'>
        <div className="image">
            
        </div>
        <div className="info">
            <div className="name">
             
            <TextInput
              placeholder="La mia playlist n 1"
              label="Nome playlist"
              size="md"
              onChange={e => setNomePlaylist(e.target.value)}
            />
            <Textarea
              label="Immagine"
              placeholder="Aggiungi un'immagine opzionale della tua playlist tramite un link"
              autosize
              minRows={2}
              maxRows={4}
              onChange={e => setImmaginePlaylist(e.target.value)}
            />
            </div>
        
        </div>
  
    </div>
  )
}

