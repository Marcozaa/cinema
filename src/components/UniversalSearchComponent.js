import React from 'react'
import { TextInput, Loader } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import './universalSearchComponent.css'
import RisultatiInputShowcase from './RisultatiInputShowcase';
import { useState } from 'react';
export default function UniversalSearchComponent() {
  const [showCase, setShowcase] = useState(false)
  const film = [
    "Shutter Island",
    "Interstellar",
    "Star Wars IV",
    "Fight Club"
  ]
  var i = 0;
  return (
    <div className="universalSearchComponent">
      <div className="input">
     <Typewriter
     options={{
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter.typeString("Interstellar")
      .callFunction(() => {
        console.log('Stringaa scritta');
        setShowcase(true)
      })
      .pauseFor(5000)
      .deleteAll()
      .callFunction(() => {
        console.log('Stringhe cancellate');
        setShowcase(false)
      })
      .start();
  }}
/>
<FaSearch />
        
      </div>
      <div className="results">
        {showCase == true ? <RisultatiInputShowcase /> : null}
        
      </div>
  </div>
  )
}
