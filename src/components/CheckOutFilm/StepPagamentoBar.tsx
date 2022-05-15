import React, { useRef } from 'react';
import SeatchartJS, { Options } from 'seatchart';
import Seatchart from './Seatchart.tsx';
import ReactCardPayment from 'react-card-payment';
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import 'seatchart/dist/seatchart.min.css';
import './mappaPosti.css'
import SelezionaCinema from './SelezionaCinema';
import Seat from './Seat';
import PostoCarrello from './PostoCarrello';
import Card from 'react-credit-card'
const options: Options = {
  map: {
    rows: 7,
    columns: 7,
    seatTypes: {
      default: {
        label: 'Economico',
        cssClass: 'economy',
        price: 10,
      },
    },
  },
};

export default function Steps({nomeFilmAcquisto}) {


  const seatchartRef = useRef<SeatchartJS>(); // Mappa posti


  const [active, setActive] = useState(0);
  
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className='steps'
    style={{
        fontWeight: '600' 
    }}>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Primo step" description="Scegli i posti">
        <div className='informazioni'>  
        <div className='info'><p className='testoSchermo'>Schermo</p></div>
        <div className='info'><p className='testoInfo'>Posto</p><p className='testoInfo'>Prezzo</p></div>
        </div>
        <div className='containerStep1'>
          <div className='containerMappa'>
            {['A','B', 'C', 'D', 'E', 'F'].map((i)=>(
              [1,2,3,4,5,6,7,8,9,10,11,12].map((j)=>(
                <Seat row={i} number={j}/>
              ))
            ))
            }
            
          </div>
          <div className='carrello'>
            <PostoCarrello row={'B'} number={4}/>
          </div>
        </div>
        </Stepper.Step>
        <Stepper.Step label="Secondo step" description="Seleziona il cinema">
          <SelezionaCinema nomeFilm={nomeFilmAcquisto}/>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          <h1>huhuuhuhu</h1>
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </div>
  );
}


