import React from 'react'
import './banner.css'
import bannerImage from '../images/bannerImageTest.jpg'
export default function Banner() {
  function tronca(string, n){ // tronca la stringa aggiungendo ... alla fine se è troppo lunfa
    return string?.length > n ? string.substr(0, n-1) + '...': string;
  }
  return (
    <header 
    className='banner'
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center center'
    }}
    >
        <div className="banner__contents">
          <h1 className="banner__title">
            OZARK
          </h1>
          <div className="banner__buttons">
            <button className='banner__button'>Riproduci</button>
            <button className='banner__button'>Aggiungi alla lista</button>
          </div>
          <h1 className="banner__description">
            {tronca('Copenaghen, Seconda guerra mondiale: i destini di molti abitanti si incrociano quando un bombardamento colpisce per errore una scuola piena di bambini. Da una storia vera.')}
          </h1>
        </div>
        <div className="banner--fadeBottom"/>
    </header>
  )
}
