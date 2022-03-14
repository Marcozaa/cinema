import { CheckboxIcon, Divider } from '@mantine/core'
import React from 'react'
import './featurehomepage.css'

export default function FeatureHomepage({titolo, paragrafo, color, icon}) {
   const vantaggi = [
    "Per gli abbonati il prezzo del biglietto è ridotto",
    "Nessuna coda all'entrata. Non esistono casse",
    "Streaming 4K su dispositivi illimitati"
  ]
  return (
    <div>
    <div className='featureHomepage'>
      <div className="plusButton" style={{background: `${color}`}}>{icon}</div>
        <h1 className='title'>{titolo}</h1>
        <h1 className='paragraph'>{paragrafo}</h1>
        
        <div className="features">
          {vantaggi.map(vantaggio=> (
            <CheckedFeature 
          content={vantaggio}/>
          ))}
        </div>
    </div>
    </div>
  )
}

 export function CheckedFeature({content}){

  return(
    <div className='checkedfeature'>
      <CheckboxIcon width={'1rem'} />
      <p>{content}</p>
      
    </div>
  )

}
