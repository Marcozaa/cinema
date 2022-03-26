import React from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import axios from 'axios';
import loginRequests from '../LoginRequests';
import { useState, useEffect } from 'react';
 import { Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';
import { decrement, increment, incrementByAmount, setLoginData} from '../counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

export function LoginContainer() {
 const [risultato, setRisultato] = useState(null)
 const [email, setEmail] = useState(null)
 const [password, setPassword] = useState(null)
 const dispatch = useDispatch() // Set dati con REDUX
 const navigate = useNavigate(); // caricare path dinamicamente, senza fare il reload delle pagine.

  async function fetchData() {
      var risultato;
      axios
      .get( // Controlliamo che le credenziali siano corrette inviando una richiesta GET alla nostra api
        'https://87.250.73.22/html/Zanchin/ProgettoCinema' + loginRequests.userAuth+
        '?emailInserita='+email +'&passwordInserita='+password
      )
      .then(res => {
        setRisultato(res.data)
        dispatch(setLoginData(email)) // Inserisco la mail nello store di redux
      } )
      return risultato
    }

    useEffect(() => {
      if(risultato){ // Se l'utente inserisce credenziali corrette viene portato al profilo
        navigate('/profilo');
      }
    }, [risultato])
  return (
    <>
    <Container size={420} my={40}>
      {
        risultato == false ? ( // Se le credenziali inserite sono sbagliate
          <Alert icon={<AlertCircle size={16} />} title="Errore!" color="red" >
          Le credenziali inserite sono errate! Ricontrolla.
          </Alert>
        ): null
      }
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        style={{
          textShadow: '2px 2px 8px #0000007b'
        }}
      >
        Bentornato!
      </Title>
      <Text color="dimmed" 
      style={{
          textShadow: '2px 2px 8px #0000007b'
        }}
      size="sm" 
      align="center" mt={5}
>
        Non hai ancora un account?{' '}
        <Anchor<'a'> href="/registrati" size="sm" >
          Crea account
        </Anchor>
      </Text>

      <Paper  shadow="md" p={30} mt={30} radius="md"  >
        <TextInput label="Email" placeholder="you@gmail.com" 
        onChange={e => setEmail(e.target.value)}
        required />
        <PasswordInput label="Password" placeholder="La tua password" 
        onChange={e => setPassword(e.target.value)}
        required mt="md" />
        <Group position="apart" mt="md">
          <Checkbox label="ricordami" />
          <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
            Password dimenticata?
          </Anchor>
        </Group>
        <Button 
        fullWidth mt="xl" 
        onClick={()=> fetchData()} >
          Entra
        </Button>
      </Paper>
    </Container>
    </>
  );
}