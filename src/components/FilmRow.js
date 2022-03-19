import React from 'react'
import { useState} from 'react'

import './filmRow.css'

import { motion } from 'framer-motion';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';
import axios from '../axios';

// Libreria effetto caricamento film
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import RecipeReviewCard from './MovieCardExpand';
export default function FilmRow({title, listaFilm, isLargeRow = false, fetchURL, emoji}) {

  console.log(fetchURL)
  const base_url = "https://image.tmdb.org/t/p/original/"
  const [movies, setMovies] = useState([])

  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results)
      return request
    }
    console.log(fetchData().data)

  }, [fetchURL])
  return (
    
    <div className='row'>
      <h2>{title}</h2>
          <div className="row__posters">
            {movies.map(film => (
              <RecipeReviewCard 
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={film.name} 
              name= {film.name}
              isLargeRow={isLargeRow}
              immagine={`${base_url}${isLargeRow ? film.poster_path : film.backdrop_path}`} 
              alt="" />
            ))}
      </div>
    </div>
    
  )
}
