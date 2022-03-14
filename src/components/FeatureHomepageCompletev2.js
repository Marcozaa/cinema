import React from 'react'
import CinemaOrHomeImage from './CinemaOrHomeImage'
import FeatureHomepage from './FeatureHomepage'
import './featureHomepageComplete.css'
import PlaylistPresentationHome from './PlaylistPresentationHome'
import { FaAngellist } from 'react-icons/fa';
export default function FeatureHomepageCompletev2() {

  return (
    <div className='featureHomepageComplete'>
    <div className="feature">
        <FeatureHomepage 
        color={'#FAFF65'}
        icon ={<FaAngellist />}
    titolo={'Goditi i film da casa o nelle nostre sale'} 
    paragrafo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '}
    />
    </div>
    <div className="imageContent">
        <CinemaOrHomeImage />
          </div>
    </div>
  )
}
