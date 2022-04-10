import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { useState,useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Accordion, Button } from '@mantine/core';
import './moviePage.css'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { DateRange, KeyTwoTone, MovieSharp, Opacity, PlayArrow, TvOffOutlined, TvOutlined } from '@mui/icons-material';
import { Badge } from '@mantine/core';
import { ActorGrid } from '../components/ActorGrid.js';
import ActionAreaCard from '../components/SimilarMovieCard';

export default function Movie() {
      let { nome } = useParams();
      const [film,setFilm] = useState([null]) // Basic info about a movie
      const [faq,setFAQ] = useState([null]) // Question & Answers from IMDB.com api
      const [cast, setCast] = useState(null) // full cast and crew
      const [similarMovies, setSimilarMovies] = useState(null) // Similar movies based on genres
      const [paroleChiave, setParoleChiave] = useState(null) // Similar movies based on genres

     
const pairs = ["Action",28, "Adventure",12, "Animation",16, "Comedy",35, "Crime", 80, "Documentary", 99, "Drama", 18, "Family", 10751, "Fantasy", 14, "History", 36, "Horror", 27, "Music", 10402, "Mystery", 9648, "Romance", 10749, "Science Fiction" , 878, "TV Movie", 10770, "Thriller", 53, "War", 10752, "Western", 37, "Action & Adventure", 10759, "Animation", 16, "Comedy", 35, "Crime", 80, "Documentary", 99, "Drama", 18, "Family", 10751, "Kids", 10762, "Mystery", 9648, "News", 10763, "Reality", 10764, "Sci-Fi & Fantasy", 10765, "Soap", 10766, "Talk", 10767, "War & Politics", 10768, "Western", 37, ]

function getNamefromID(id){
  for(var i=0;i <pairs.length; i++){
    if(pairs[i] == id){
      return pairs[i-1]    
    }
  }
}
useEffect(() => {
    async function fetchDataForBanners(){ // Get all the basic info about a movie
      const request = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=0f441200379c274a067c935d56625bc4&language=it&query="+nome+"&page=1&include_adult=false")
      setFilm(request.data)
      setFAQ(await axios.get("https://imdb-api.com/en/API/FAQ/k_8fc0bzoo/"+request.data.results[0].id))
      return request
    }
     fetchDataForBanners()
  }, []);

  useEffect(() => {
    async function fetchActors(){ // Get the cast & crew for a movie
      const request = await axios.get("https://api.themoviedb.org/3/movie/"+film.results[0].id+"/credits?api_key=0f441200379c274a067c935d56625bc4&language=it")
      setCast(request.data)
      return request
    }

    async function fetchSimilarMovies(){ // Ricerca film simili in base al genere
      const request = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=0f441200379c274a067c935d56625bc4&language=it&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+film.results[0].genre_ids+"&with_watch_monetization_types=flatrate")
      setSimilarMovies(request.data)
      return request
     }


    async function fetchParoleChiave(){
      const request = await axios.get("https://api.themoviedb.org/3/movie/"+film.results[0].id+"/keywords?api_key=0f441200379c274a067c935d56625bc4")
      setParoleChiave(request.data)
      return request
    }
     fetchSimilarMovies()
     fetchActors()
     fetchParoleChiave()
  }, [film]);
  return (
    <>
         {film.results &&(
    <div className="movieContent" >

    <div className="duotoneBackground"
    style={{
      background: `url(${'https://image.tmdb.org/t/p/original'+film.results[0].backdrop_path})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
   
      }}>

    </div>
     
    
    <div className="left">


    <img src={'https://image.tmdb.org/t/p/w500'+film.results[0].poster_path}  style={{width: '14rem'}}/>


    </div>
    <div className="right">
      <div className='nome'>{film.results[0].title}</div>

      <div className="tags" style={{display: 'flex', gap: '1rem'}}>
      {film.results[0].genre_ids.map(genre => (
        <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>{getNamefromID(genre)}</Badge>
      ))}
      </div>
      
      <div className="descrizione"><h1>Descrizione</h1>{film.results[0].overview}</div>
      <div className="infos1">
      <div className="data"><DateRange /> {film.results[0].release_date}</div>
      <div className="watchTrailer">Guarda Trailer <PlayArrow /></div>
      </div>
      <div className="buttons">
      <Button variant="gradient" style={{margin: '0'}} gradient={{ from: 'darkblue', to: 'red' }}> <MovieSharp /> Guarda al cinema</Button>

      <Button variant="gradient"  gradient={{ from: 'darkblue', to: 'red' }}> <TvOutlined />  Guarda in streaming</Button>

      </div>
    </div>

        
    </div>
)||  <CircularProgress />}
<div className="bottom-part">
  <div className="left">
{cast && (
  <>

      <ActorGrid 
        cast={cast.cast}
        crew={cast.crew}
        option={true} // Attori
      />
       <ActorGrid 
        cast={cast.cast}
        crew={cast.crew}
        option={false} // Registi

      />

      </>
      
)}


</div>
<div className="right">
 <div className="titleKeywords" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}} ><p style={{fontSize: '1.4rem', fontWeight: '400', marginBottom: '0'}}>Parole chiave</p> <KeyTwoTone/></div> 
  <div className="keywords">
  {paroleChiave && (
    paroleChiave.keywords.map(parola => (
        <Badge variant="gradient" size='md' style={{margin: '0.4rem'}} gradient={{ from: 'indigo', to: 'cyan' }}>{parola.name}</Badge>
      ))
  )}
  </div>
</div>

</div>
{similarMovies && (
  <div className="SimilarMovieSuggestions">
    <div className="top">
      <h5 style={{fontSize: '1.4rem', fontWeight: '400', marginBottom: '0'}}>Contenuti simili</h5>
    </div>
    <div className="bottom">
    {similarMovies.results.map(movie =>(
      <ActionAreaCard 
      image={'https://image.tmdb.org/t/p/original'+movie.poster_path} 
      title={movie.title}
      overview={movie.overview}
      />
    ))}
    </div>
  </div>
)}
    {/*{faq.data &&(
   } <Demo questions={faq.data.items}/>
    )}*/}
    
    </>
  )
}


function Demo({questions}) {
  return (
    <Accordion>
      {questions.map((question) =>(
          <Accordion.Item label={question.question}>
            {question.answer}
          </Accordion.Item>
      ))}
    </Accordion>
  );
}
