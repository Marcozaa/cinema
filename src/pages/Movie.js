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
import { Accordion } from '@mantine/core';

import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
export default function Movie() {
      let { nome } = useParams();
      const [film,setFilm] = useState([null])
      const [faq,setFAQ] = useState([null])

useEffect(() => {




    async function fetchDataForBanners(){
      const request = await axios.get("https://imdb-api.com/en/API/SearchMovie/k_8fc0bzoo/"+nome)
      setFilm(request.data)
      setFAQ(await axios.get("https://imdb-api.com/en/API/FAQ/k_8fc0bzoo/"+request.data.results[0].id))
      return request
    }

    



     fetchDataForBanners()
  }, []);
  return (
    <>
    <div>{nome}</div>
    {film.results &&(

    <img src={film.results[0].image}  style={{width: '14rem'}}/>

    )||  <CircularProgress />}
    <p>Le domande degli utenti</p>
    {faq.data &&(
    <Demo questions={faq.data.items}/>
    )}
    
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
