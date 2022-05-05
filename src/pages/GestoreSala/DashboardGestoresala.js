import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import loginRequests from '../../LoginRequests'
import { CardSala } from './CardSala'
export default function DashboardGestoresala() {
    let {idUtenteSala} = useParams()
    const [datiUtente, setDatiUtente] = useState(null)
    const [filmInProgrammazione, setFilmInProgrammazione] = useState(null)
    useEffect(() => {

      function fetchSalaUserData(){
        var risultato=""
      axios
      .get( // Controlliamo che le credenziali siano corrette inviando una richiesta GET alla nostra api
        'https://87.250.73.22/html/Zanchin/ProgettoCinema' + loginRequests.getSalaUserData+
        '?email='+idUtenteSala
      )
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("nomeCinema", res.data[0].cinema); 
        sessionStorage.setItem("sala", res.data[0].nome);
        sessionStorage.setItem("idUtenteSala",idUtenteSala);
        getFilmInSala(res.data[0].nome, res.data[0].cinema)
        setDatiUtente(res.data)
        risultato = res.data
      } )
      return risultato
      }

      function getFilmInSala(sala, cinema){
      axios
      .get( // Controlliamo che le credenziali siano corrette inviando una richiesta GET alla nostra api
        'https://87.250.73.22/html/Zanchin/ProgettoCinema' + loginRequests.getFilmSala+
        '?sala='+sala +"&cinema="+cinema
      )
      .then(res => {
        console.log(res.data)
        setFilmInProgrammazione(res.data)
      } )
      return 0
      }
    
    fetchSalaUserData()
    }, [])
    
  return (
    <>
    <h1>ji</h1>
    {datiUtente && (
      <>
    <div className="infoUtente">
      <p>{datiUtente[0].email}</p>
    </div>
    <div className="sala"
    style={{
      width: '30%'
    }}
    >
    <CardSala 
    image={datiUtente[0].immagine_sala}
    cinema ={datiUtente[0].cinema}
    nomeSala ={datiUtente[0].nome}
    numeroPosti ={datiUtente[0].numero_posti}
    fotoSala={'https://www.repstatic.it/content/nazionale/img/2021/05/02/115615635-8736a359-8ebd-4896-a594-6a453df689b2.jpg'}
    />
    </div>
          <h1>Film in programmazione:</h1>
    <div className='filmInProgrammazione'
    style={{width:'60%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}
    >

    {filmInProgrammazione && (
    filmInProgrammazione.map(film=>(
      <CardSala 
        cinema ={film.salaCinema}
        nomeSala ={film.salaNome}
        nomeFilm = {film.film}
      />
    ))
    )}
    </div>
    </>
    )
    }
    </>
  )
}
