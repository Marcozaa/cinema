import React from 'react'
import './homepageFirst.css'
import Navbar from '../components/Navbar';
import ImmagineFilmHeader from '../components/ImmagineFilmHeader';
import Hero from '../components/Hero';
import RettangoloHero from '../components/RettangoloHero';
import Point from '../components/Point';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react';

export default function HomepageFirst() {
  return (
    <div className='homepageFirst'>
        <ImmagineFilmHeader  data-scroll-section top="30vh" left="80vw" immagine= "https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg"/>
      <ImmagineFilmHeader  top="200px" left= "-60px" immagine= "https://m.media-amazon.com/images/I/81FNja+9-iL._SL1500_.jpg"/>
        <ImmagineFilmHeader top="100px" left= "85vw" immagine= "https://mr.comingsoon.it/imgdb/locandine/big/47397.jpg"/>
      <ImmagineFilmHeader top="50vh" left= "4rem" immagine= "https://m.media-amazon.com/images/I/61gtGlalRvL._AC_SY679_.jpg"/>

      <div className="content">
        <div className="titolone">
          <Hero 
          title={'Tutte le novità cinematografiche, \n finalmente in un unico posto.'}
          paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
          button={'scopri'}
          />
        </div>
        <div className="rettangolo">
          <RettangoloHero />
        </div>

     
      </div>
       <Point left={'30rem'} color={'#155985'}/>
       <Point left={'10rem'} color={'#155985'}/>
       <Point left={'50rem'} color={'#155985'} />
    </div>
  )
}
