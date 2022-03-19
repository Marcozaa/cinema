import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../Requests';
import CaroselloFilm from '../components/CaroselloFilm';
import Banner from '../components/Banner';
import './browse.css'
import FilmRow from '../components/FilmRow';
import { motion } from 'framer-motion';
import RecipeReviewCard from '../components/MovieCardExpand';
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
  const [banner, setBanner] = useState([]);
  var c = 0;
  let items = [];
  useEffect(() => {

    /*
    async function fetchData(){

      /*
       * Eseguo una richiesta alla path specificata in request.fetchmovies, ovvero
       * https://87.250.73.22/html/diCastri/ProgettoCinema/selectFilm.php
       *//*
      const request = await axios.get(requests.fetchMovies);
      
      request.data.map(film => // Li inseriamo in un array di oggetti
          items.push({
            film: film,
          })
        );
        setListaFilm({ items: items }); // E li carichiamo nello state.  
        return request // Good pratice, ritornare la richiesta
    }

    async function fetchDataForBanners(){
      const request = await axios.get(requests.fetchMoviesBanner);
      setBanner(
        request.data.results[ // Scelgo randomicamente un immagine da mettere come banner
          Math.floor(Math.random()* request.data.results.length - 1)
        ]
      )
      return request
    }
    */


    async function fetchDataForBanners(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBanner(
        request.data.results[ // Scelgo randomicamente un immagine da mettere come banner
          Math.floor(Math.random()* request.data.results.length - 1)
        ]
      )
      return request
    }

     fetchDataForBanners()
  }, []);
console.log(banner)



  return (
    <div className='browseScreen'>
      <motion.div // animazione semplice
        animate={{
          opacity: [0,1],
        }}
        transition={{ duration: 0.4 }}
      >
      <Banner movie={banner}/>
      </motion.div>

      <>
      <motion.div // animazione semplice
        animate={{
          opacity: [0,1],
          y: [-20, 0],
        }}
        transition={{ duration: 0.5 }}
      >
        <FilmRow 
          title='Originali HMV'
          fetchURL={requests.fetchNetflixOriginals} 
          isLargeRow={true}
        />
      </motion.div>
      <motion.div // animazione semplice
        animate={{
          opacity: [0,1],
          y: [-30, 0],
        }}
        transition={{ duration: 0.7 }}
      >
        <FilmRow 
          title="In tendenza" 
          fetchURL={requests.fetchTrending}
        />
        </motion.div>

      <motion.div // animazione semplice
        animate={{
          opacity: [0,1],
          y: [-40, 0],
        }}
        transition={{ duration: 0.9 }}
      >
        <FilmRow 
          title="Horror" 
          fetchURL={requests.fetchHorrorMovies} 
        />
      </motion.div>

      <motion.div // animazione semplice
        animate={{
          opacity: [0,1],
          y: [-50, 0],
        }}
        transition={{ duration: 0.9 }}
      >
        <FilmRow
          title="Piu recensiti" 
          fetchURL={requests.fetchTopRated}
        />
      </motion.div>
      </>
    </div>
  )
}
