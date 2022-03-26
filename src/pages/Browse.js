import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../axios';
import axiosLogin from '../axiosLogin'
import requests from '../Requests';
import CaroselloFilm from '../components/CaroselloFilm';
import Banner from '../components/Banner';
import './browse.css'
import FilmRow from '../components/FilmRow';
import { motion } from 'framer-motion';
import loginRequests from '../LoginRequests'
import RecipeReviewCard from '../components/MovieCardExpand';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

  import { useSelector, useDispatch } from 'react-redux'
  const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
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



var idUtente = useSelector((state) => state.idUtente.value)
  const [playlist, setPlaylist] = useState([]) // The retrieved playlists are stored in this state
  var c = 0;
  let items = [];
  const [open, setOpen] = React.useState(false);
const [severity, setSeverity] = useState("success")
const [messaggioAlert, setMessaggioAlert] = useState( `Test`)
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {




    async function fetchDataForBanners(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBanner(
        request.data.results[ // Scelgo randomicamente un immagine da mettere come banner
          Math.floor(Math.random()* request.data.results.length - 1)
        ]
      )
      return request
    }
    async function fetchPlaylist(){
      const request = await axiosLogin.get(loginRequests.fetchPlaylist+
        "?cliente="+idUtente);
      setPlaylist(
        request.data
      )
      return request
    }

     fetchPlaylist()

     fetchDataForBanners()
  }, []);


  return (
    <>
    {playlist && (
    <div className='browseScreen'>
      <motion.div // animazione semplice
        animate={{
          opacity: [0,1],
        }}
        transition={{ duration: 0.4 }}
      >
      <Banner movie={banner}/>
      </motion.div>
        {idUtente}
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
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {messaggioAlert}
        </Alert>
      </Snackbar>
      </>
    </div>
    )}
    </>
  )
}
