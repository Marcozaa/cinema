import React from 'react'
import { useParams } from 'react-router-dom';
import Steps from '../components/CheckOutFilm/StepPagamentoBar.tsx'
import { useSelector } from 'react-redux';

export default function Acquisto() {
    let { nome } = useParams();
      var idUtente = useSelector((state) => state.idUtente.value)

  return (
      <>
      <Steps nomeFilmAcquisto={nome} idUtente={idUtente}></Steps>
    <div>{nome}</div>
    </>
  )
}
