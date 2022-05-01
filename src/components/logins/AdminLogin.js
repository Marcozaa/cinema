import { Button, TextInput } from '@mantine/core'
import React from 'react'
import { FaAt } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import loginRequests from '../../LoginRequests';
export default function AdminLogin({tipoutente}) {
 const [email, setEmail] = useState(null)
 const [password, setPassword] = useState(null)
 const [risultato, setRisultato] = useState(null)


    async function fetchData() { // Se il login va a buon fine salviamo nello state 'true'
      var risultato;
      if(tipoutente="gestoreSala"){
      axios
      .get( // Controlliamo che le credenziali siano corrette inviando una richiesta GET alla nostra api
        'https://87.250.73.22/html/Zanchin/ProgettoCinema' + loginRequests.salaUserAuth+
        '?emailInserita='+email +'&passwordInserita='+password
      )
      .then(res => {
        setRisultato(res.data) // Salviamo il risultato deo login nello state
        //dispatch(setLoginData(email)) // Inserisco la mail nello store di redux
      } )
      return risultato
    }
    }


  return (
    <div>  
   <TextInput 
   label={'La tua email'}
   placeholder="La tua email" 
   onChange={e => setEmail(e.target.value)}
   icon={<FaAt size={14} />} />

    <TextInput
    placeholder="Password"
    label="password"
    onChange={e => setPassword(e.target.value)}
    required
    />

    <Button
    onClick={fetchData}
    >Login</Button>
    </div>
  )
}