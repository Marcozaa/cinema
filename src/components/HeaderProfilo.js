import React from 'react'
import './HeaderProfilo.css'
import { useState } from 'react';
export default function HeaderProfilo({datiUtente}) {
console.log(datiUtente)
  return (
    <div className='headerProfilo'>
        <div className="image">
            
        </div>
        <div className="info">
            <div className="name">
              {datiUtente && (
            <h3>{datiUtente[0].nome} {datiUtente[0].cognome} </h3>
              )}
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam. 
                </p>
            </div>
        </div>
    </div>
  )
}
