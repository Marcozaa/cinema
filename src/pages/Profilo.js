import React from 'react'
import './profilo.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, setLoginData } from '../counterSlice'
import { useState, useEffect } from 'react';
import './profilo.css'
import HeaderProfilo from '../components/HeaderProfilo';
import LabelBottomNavigation from '../components/ProfileNavigationBar';
import { motion } from "framer-motion"
export default function Profilo() {
  const [value, setValue] = React.useState('playlists'); // Valore mini navbar profilo
  const emailUtente = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
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

     
        <HeaderProfilo  />
        <span>{emailUtente}</span> 
        <LabelBottomNavigation value={value} setValue={setValue}/>

        { value == 'playlists' ? (
          <motion.div
    animate={{
      opacity: [0,1],
    }}
    transition={{ duration: 0.5 }}
  >
          <h1>Le tue playlists</h1>
          </motion.div>
        ): null}     


        

      </div>
</>
  )
}
