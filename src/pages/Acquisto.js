import React from 'react'
import { useParams } from 'react-router-dom';
import Steps from '../components/CheckOutFilm/StepPagamentoBar.tsx'
export default function Acquisto() {
    let { nome } = useParams();
  return (
      <>
      <Steps nomeFilmAcquisto={nome}></Steps>
    <div>{nome}</div>
    </>
  )
}
