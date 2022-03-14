import React from 'react'
import FeatureHomepage from './FeatureHomepage'
import './featureHomepageComplete.css'
import PlaylistPresentationHome from './PlaylistPresentationHome'
export default function FeatureHomepageComplete() {
  return (
    <div className='featureHomepageComplete'>
    <div className="imageContent">
        <PlaylistPresentationHome />
    </div>
    <div className="feature">
         <FeatureHomepage 
    icon={'+'}
    titolo={'Crea e condividi playlists'} 
    paragrafo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '}/>
    </div>
    </div>
  )
}
