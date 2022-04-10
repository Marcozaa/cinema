import './Navbar.css';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Autocomplete } from '@mantine/core';
import axios from 'axios';
function Navbar () {
    return(
    <div className="navbar">
       <h1 className="title">Cinema</h1>

        <div className="buttons">
            <Demo />
            <Link to="browse"><Button variant="light" size='md'>Browse</Button></Link>
            <Link to="login"><Button variant="light" size='md'>Login in</Button></Link>
            <Link to="registrati"><Button variant="light" color={'teal'} size='md'>Registrati</Button></Link>
        </div>
    </div>)
}
/*https://developers.themoviedb.org/3/search/
search-movies#:~:text=https%3A//
api.themoviedb.org/3/search/movie%3Fapi_key%3D0f441200379c274a067c935d56625bc4
%26language%3Dit%26query%3D + carattere da cercare + %26page%3D1%26include_adult%3Dfalse*/

function Demo() {
  const [input, setInput] = useState(null)
  const [movies, setMovies] = useState(null)
  var nomiFilm=[]
  async function fectchMovies(e){
    const request = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=0f441200379c274a067c935d56625bc4&language=it&query="+e+"&page=1&include_adult=false")
    setMovies(request.data)
    for(var i=0; i< movies.results.length; i++){
      nomiFilm[i] = movies.results[i].original_title
    }
    console.log(nomiFilm)
}

  
  return (
    <>
    {movies && (
    <Autocomplete
      placeholder="Cerca un film..."
      data={nomiFilm}
      onChange={(e)=>fectchMovies(e)}
      
    />
    )}
    </>
  );
}
export default Navbar;