import React from 'react'
import './banner.css'
import bannerImage from '../images/bannerImageTest.jpg'
export default function Banner({movie}) {
  function tronca(string, n){ // tronca la stringa aggiungendo ... alla fine se è troppo lunfa
    return string?.length > n ? string.substr(0, n-1) + '...': string;
  }
  return (
    <header 
    className='banner'
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center'
    }}
    >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.name || movie?.title|| movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className='banner__button'>Riproduci</button>
            <button className='banner__button'>Aggiungi alla lista</button>
          </div>
          <h1 className="banner__description">
            {tronca(`${movie?.overview}`)}
          </h1>
        </div>
        <div className="banner--fadeBottom"/>
    </header>
  )
}
