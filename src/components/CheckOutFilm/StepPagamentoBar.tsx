import React, { useRef } from 'react';
import SeatchartJS, { Options } from 'seatchart';
import Seatchart from './Seatchart.tsx';
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import 'seatchart/dist/seatchart.min.css';
import './mappaPosti.css'

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

export default function Steps() {


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
          <Seatchart ref={seatchartRef} options={options} />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
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


