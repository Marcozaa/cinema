import React from 'react'
import './login.css'
import {LoginContainer} from '../components/LoginContainer.tsx'
import axios from 'axios';
import loginRequests from '../LoginRequests';
import { useState, useEffect } from 'react';
export default function Login() {

  const [risultato, setRisultato] = useState(null)

  
  useEffect(() => {
    async function fetchData() {
      var risultato;
      axios
      .get(
        'https://87.250.73.22/html/Zanchin/ProgettoCinema' + loginRequests.userAuth+
        '?emailInserita=crisitan@gmail.com&passwordInserita=pass'
      )
      .then(res => {
        setRisultato(res.data)
      } )
      return risultato
    }
    console.log(fetchData())

  }, [])
  return (
    <div className='loginPage'>
      <LoginContainer />
    </div>
  )
}
