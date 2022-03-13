import React from 'react'
import MovieBanner from './MovieBanner'
import cinepanettoni from '../images/cinepanettoniIMG.jpg'
import marvel from '../images/marvel.jpg'
import fantascienza from '../images/fantascienza.jpg'
import './playlistPresentationHome.css'
export default function PlaylistPresentationHome() {
  return (
   
        
        <div className='playlistPresentationHome'>
            <MovieBanner img={cinepanettoni} title={'Cinepanettoni'} number={16}/>
            <MovieBanner img={marvel} title={'Marvel Universe'} number={24}/>
            <MovieBanner img={fantascienza} title={'Fantascienza'} number={3}/>

        </div>
    
  )
}
