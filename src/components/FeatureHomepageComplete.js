import React from 'react'
import FeatureHomepage from './FeatureHomepage'
import './featureHomepageComplete.css'
import PlaylistPresentationHome from './PlaylistPresentationHome'

export default function FeatureHomepageComplete({icon, titolo, paragrafo, imageComponent}) {
  return (
    <div className='featureHomepageComplete'>
    <div className="imageContent">
        {imageComponent}
    </div>
    <div className="feature">
         <FeatureHomepage 
    icon={icon}
    titolo={titolo} 
    paragrafo={paragrafo}/>
    </div>
    </div>
  )
}
