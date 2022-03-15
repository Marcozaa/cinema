import React from 'react'
import { TextInput, Loader } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

export default function UniversalSearchComponent() {
  const film = [
    "Shutter Island",
    "Interstellar",
    "Star Wars IV",
    "Fight Club"
  ]
  var i = 0;
  return (
    <>
     <Typewriter
     options={{
   strings: ["Shutter Island",
    "Interstellar",
    "Star Wars IV",
    "Fight Club"],
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter.typeString()
      .callFunction(() => {
        console.log('Stringhe scritte');
        i++;
      })
      .pauseFor(5000)
      .deleteAll()
      .callFunction(() => {
        console.log('Stringhe cancellate');
      })
      .start();
  }}
/>
    <TextInput placeholder="Cerca un film..." rightSection={<FaSearch />} />
    </>
  )
}
