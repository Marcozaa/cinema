import React from 'react'
import './cinemaOrHomeImage.css'
import spiderman from '../images/spiderman.jpg'

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import pulpfiction from '../images/pulpfiction.jpg'
import endgame from '../images/endgame.jpg'
import pursuit from '../images/pursuit.jpg'
import fightclub from '../images/fightclub.jpg'


export default function CinemaOrHomeImage() {
  return (
    <div className='cinemaOrHomeImage'>
        <div className="home">
          <div className="top">
          <MovieHomeStreaming />
          </div>
          <div className="bottom">
          <p>La tua lista:</p>
          <div className="list">
            <div className="movieonlist">
            <img className='movie2' src={endgame}/>
            <div className="bar">
              <div className="watched"></div>
              <div className="notwatched"></div>
            </div>
            </div>
            <div className="movieonlist">
            <img className='movie2' src={pursuit}/>
            <div className="bar">
              <div className="watched2"></div>
              <div className="notwatched"></div>
            </div>
            </div>
            <div className="movieonlist">
            <img className='movie2' src={pursuit}/>
            <div className="bar">
              <div className="watched"></div>
              <div className="notwatched"></div>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className="cinema">
        </div>
    </div>
  )
}


const MovieHomeStreaming= () =>{
  return(
    <div className="moviesPresentationHomepage">
      <img className='movie1' data-scroll data-scroll-position="left"  data-scroll-direction="horizontal" data-scroll-speed="0.5" src={spiderman}/>
      <img className='movie1' data-scroll data-scroll-position="left"  data-scroll-direction="horizontal" data-scroll-speed="1" src={pulpfiction}/>
    </div>
  )
}