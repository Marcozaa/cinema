import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import loginRequests from '../../LoginRequests'
import FilmInSala from './FilmInSala'
export default function SelezionaCinema({nomeFilm,setSala}) {
    const [sale, setSale] = useState([null])
    useEffect(() => {
    async function fetchSaleData(){ 
      const request = await axios.get('https://87.250.73.22/html/Zanchin/ProgettoCinema' + loginRequests.getSalaFromFilm +
        '?film=' + nomeFilm)
      setSale(request.data)
      return request
    }
     fetchSaleData()
    }, [])
    
  
  return (
      <>
    {sale && (
        sale.map(sala=>(
          sala && (
          <div onClick={setSala(sala.nomeSala)}>
            <FilmInSala sala={sala} />
          </div>
          )
        ))

    )}
    </>
  )
}
