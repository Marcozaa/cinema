import { CheckboxIcon, Divider } from '@mantine/core'
import React from 'react'
import './featurehomepage.css'

export default function FeatureHomepage({titolo, paragrafo}) {
  return (
    <div>
    <div className='featureHomepage'>
      <div className="plusButton">+</div>
        <h1 className='title'>{titolo}</h1>
        <h1 className='paragraph'>{paragrafo}</h1>
        
        <div className="features">
          
          <CheckedFeature 
          content={'Costruisci playlist per trovare facilmente i tuoi titoli preferiti'}/>
          <CheckedFeature 
          content={'Ottieni notifiche quando nuovi titoli sono disponibili'}/>
          <CheckedFeature 
          content={'Condividi le playlist con amici'}/>
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
