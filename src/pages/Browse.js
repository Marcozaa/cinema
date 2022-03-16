import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import CaroselloFilm from '../components/CaroselloFilm';
export default function Browse() {
  /**
   * Effettuiamo una richiesta all'api che ci siamo "creati"
   * 
   * 
   * Creiamo uno state come prima cosa ( POi approfondiremo)
   * Esattamente come un oggetto che rappresenta un utente 
   * {nome:”Paolo”, cognome”Dell’Aguzzo”}, 
   * lo state contiene tutte quelle informazioni necessarie al componente React 
   * per stabilire il render dell’interfaccia
   * 
   * Il metodo setState permette a ReactJS di ascoltare cambiamenti dello stato 
   * di un componente. 
   * Per questo motivo al cambio di stato vengono richiamati alcuni metodi del lifecycle 
   * tra cui il metodo render.
   */

  const [listaFilm, setListaFilm] = useState(null);
  var c = 0;
  let items = [];
  useEffect(() => {
    axios
      .get('https://87.250.73.22/html/diCastri/ProgettoCinema/selectFilm.php')
      .then(res => { // Funzione asincrona. Dopo aver preso i dati dall'api
        res.data.map(film => // Li inseriamo in un array di oggetti
          items.push({
            film: film,
          })
        );
        setListaFilm({ items: items }); // E li carichiamo nello state.  
        console.log(listaFilm)
      }); 
  }, []);
  return (
    <div>
      {listaFilm &&  // Controlliamo che lo state non sia vuoto
        <CaroselloFilm films={listaFilm}/>
      }
      
    </div>
  )
}
