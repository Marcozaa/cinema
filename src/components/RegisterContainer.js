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
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { NumberInput, Box } from '@mantine/core';
import { useState, useEffect } from 'react';
 import { Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

const schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  age: z.number().min(18, { message: 'You must be at least 18 to create an account' }),
});


export function RegisterContainer() {

   const [risultato, setRisultato] = useState(null)
 const [email, setEmail] = useState(null)
 const [password, setPassword] = useState(null)
 const [nome, setNome] = useState(null)
async function insertData() {
      var risultato;
      axios
      .get( // Controlliamo che le credenziali siano corrette inviando una richiesta GET alla nostra api
        'https://87.250.73.22/html/Zanchin/ProgettoCinema' + loginRequests.userCreation+
        '?email='+email +'&password='+password +'&nome=' +nome
      )
      .then(res => {
        setRisultato(res.data)
      } )
      return risultato
    }


    const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18,
    },
  });
  return (
      
    <>
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        style={{
          textShadow: '2px 2px 8px #0000007b'
        }}
      >
        Benvenuto.
      </Title>
      <Text color="dimmed" 
      style={{
          textShadow: '2px 2px 8px #0000007b'
        }}
      size="sm" 
      align="center" mt={5}>
        Guarda film in qualsiasi momento. Cancella la tua iscrizione quando vuoi.
      </Text>
      
<Paper  shadow="md" p={30} mt={30} radius="md"  >
       <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Email"
          onChange={e => setEmail(e.target.value)}
          placeholder="esempio@mail.com"
         
        />
        <TextInput
          required
          label="Nome"
          onChange={e => setNome(e.target.value)}
          placeholder="John Doe"
          mt="sm"
       
        />
        <TextInput
          required
          label="Password"
          onChange={e => setPassword(e.target.value)}
          mt="sm"
          
        />
        <NumberInput
          required
          label="Età"
          placeholder="La tua età"
          mt="sm"
        
        />

        <Group position="right" mt="xl">
          <Button type="submit"
          onClick={insertData}
          >Iscriviti</Button>
        </Group>
      </form>
    </Box>
    </Paper>
    </Container>
    </>
  );
}