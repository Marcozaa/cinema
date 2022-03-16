import React from 'react'
import { useState } from 'react'
import './caroselloFilm.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from './MovieCard';
export default function CaroselloFilm({films}) {
  
  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div className='caroselloFilm'>
      <h3>I nostri film</h3>
    {films &&  // Controlliamo che lo state non sia vuoto
    <Carousel 
    focusOnSelect={true} 
    responsive={responsive}>
          {films.items.map ( film => ( // Loop all'interno dello state, per ogni oggetto stampo alcune informazioni
          <div className='film'>
          <MovieCard immagine={film.film.locandina} titolo={film.film.titolo}/>
  
          </div>
        ))}
    </Carousel>

      }
      
    </div>
  )
 
}
