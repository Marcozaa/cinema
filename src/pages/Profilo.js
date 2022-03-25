import React from 'react'
import './profilo.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, setLoginData } from '../counterSlice'
import { useState, useEffect } from 'react';
import './profilo.css'
import HeaderProfilo from '../components/HeaderProfilo';
import LabelBottomNavigation from '../components/ProfileNavigationBar';
import { motion } from "framer-motion"
import axios from 'axios';
import loginRequests from '../LoginRequests';
import PlaylistProfile from '../components/PlaylistProfile';
export default function Profilo() {
  const [value, setValue] = React.useState('playlists'); // Valore mini navbar profilo
  const emailUtente = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [datiUtente, setDatiUtente] = useState() // Per ora c'è solo il nome nella query


  /**
   *  axios
      .get( // Controlliamo che le credenziali siano corrette inviando una richiesta GET alla nostra api
        'https://87.250.73.22/html/Zanchin/ProgettoCinema' + loginRequests.fetchUserData +
        '?emailInserita=' + emailUtente
      )
      .then(res => {
        setDatiUtente(res.data)
      })
   */

      useEffect(() => {
    async function fetchUserData(){
      const request = await axios.get('https://87.250.73.22/html/Zanchin/ProgettoCinema' + loginRequests.fetchUserData +
        '?emailInserita=' + emailUtente);
      setDatiUtente(
        request.data
      )
      return request
    }

        fetchUserData()
  }, []);
  
  return (
    <>
    <div>

      {/*
        <button
          aria-label="Increment value"
          onClick={() => dispatch(setLoginData("hi"))}
        >
          Increment
        </button>
  */}

     
        <HeaderProfilo datiUtente={datiUtente}  />
        <LabelBottomNavigation value={value} setValue={setValue}/>

        { value == 'playlists' ? (
          <motion.div
            animate={{
              opacity: [0,1],
            }}
            transition={{ duration: 0.5 }}
          >
          <PlaylistProfile />
          </motion.div>
        ): null}     


        

      </div>
</>
  )
}