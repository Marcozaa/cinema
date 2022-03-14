import React from 'react'
import FeatureHomepage from '../components/FeatureHomepage'
import FeatureHomepageComplete from '../components/FeatureHomepageComplete'
import FeatureHomepageCompletev2 from '../components/FeatureHomepageCompletev2'
import './homepageSecond.css'
import { FaSearch } from 'react-icons/fa';
import PlaylistPresentationHome from '../components/PlaylistPresentationHome'
import UniversalSearchComponent from '../components/UniversalSearchComponent'
import Sponsors from '../components/Sponsors'

// Import immagini sponsor
import blockbuster from '../images/blockbuster.png'
import comcast from '../images/comcast (1).png'
import yahoo from '../images/yahoo.png'
import google from '../images/google.png'
import tg from '../images/the-guardian-new-2018 (1).png'
export default function HomepageSecond() {
  return (
    <div className='homePageSecond'>
        <FeatureHomepageComplete     
          icon={'+'}
          titolo={'Crea e condividi playlists'} 
          paragrafo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '}
          imageComponent={<PlaylistPresentationHome />}
          />
        
        <FeatureHomepageCompletev2 />
        <FeatureHomepageComplete
          icon={< FaSearch />}
          titolo={'Motore di ricerca universale'} 
          paragrafo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '}
          imageComponent={<UniversalSearchComponent />}
          />
        <Sponsors 
        first={blockbuster}
        second={comcast}
        third={google}
        fourth={yahoo}
        fifth={tg}
        />
    </div>
  )
}
