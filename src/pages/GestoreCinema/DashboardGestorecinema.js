import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import loginRequests from '../../LoginRequests'
import BarchartCinema from './BarchartCinema'
import { CardSalaCinema } from './CardSalaCinema'
export default function DashboardGestorecinema() {
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
        //console.log(res.data)
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
        //console.log(res.data)
        setFilmInProgrammazione(res.data)
      } )
      return 0
      }
    
    fetchSalaUserData()
    }, [])
    
  return (
    <>
    {datiUtente && (
      <>
    <div className="infoUtente" style={{marginLeft: '2rem'}}>
      <p>{datiUtente[0].email}</p>
    </div>
    <div className="sala"
    style={{width: '30%', margin: 'auto'}}
    >
      <h1 style={{width: '17rem', margin: 'auto', marginTop: '4rem', marginBottom: '1rem'}}>Sala del cinema</h1>
    <CardSalaCinema 
    image={datiUtente[0].immagine_sala}
    cinema ={datiUtente[0].cinema}
    nomeSala ={datiUtente[0].nome}
    numeroPosti ={datiUtente[0].numero_posti}
    fotoSala={'https://www.repstatic.it/content/nazionale/img/2021/05/02/115615635-8736a359-8ebd-4896-a594-6a453df689b2.jpg'}
    />
    </div>

          <h1 style={{width: '26rem', margin: 'auto', marginTop: '3rem'}}>Film in programmazione:</h1>
    <div className='filmInProgrammazione'
    style={{width:'60%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: 'auto', marginTop: '1rem', marginBottom: '3rem'}}
    >

    {filmInProgrammazione && (
    filmInProgrammazione.map((film, index, filmArray)=>(
      <>
      <CardSalaCinema 
        cinema ={film.salaCinema}
        nomeSala ={film.salaNome}
        nomeFilm = {film.film}
      />


      </>
    ))
    )}
    </div>

    <h1 style={{width: '28rem', margin: 'auto', marginTop: '3rem'}}>Andamento prenotazioni:</h1>
      <div className='chartPrenotazioni'
      style={{width:'60%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: 'auto', marginTop: '1rem', marginBottom: '3rem'}}
      >

        <BarchartCinema/>

      </div>


    </>
    )
    }
    </>
  )
}
