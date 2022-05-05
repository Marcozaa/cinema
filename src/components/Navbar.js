import './Navbar.css';
import { Avatar, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Autocomplete } from '@mantine/core';
import axios from 'axios';
function Navbar () {
    return(
    <div className="navbar">
       <h1 className="title">Cinema</h1>

        <div className="buttons">
            <Link to="browse"><Button variant="light" size='md'>Browse</Button></Link>
          {sessionStorage.getItem("email")!= null?(
            <Link to='profilo'> <Avatar radius="xl" /></Link>
          ):(
            sessionStorage.getItem("idUtenteSala")!= null?(
            <Link to={`dashBoardSala/${sessionStorage.getItem("idUtenteSala")}`}> <Avatar radius="xl" /></Link>

            ):(
            <>
            <Link to="login"><Button variant="light" size='md'>Login in</Button></Link>
            <Link to="registrati"><Button variant="light" color={'teal'} size='md'>Registrati</Button></Link>
          </>
            )
          
          )}

            </div>
    </div>)
}

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