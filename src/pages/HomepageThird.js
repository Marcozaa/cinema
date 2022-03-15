import React from 'react'
import Hero from '../components/Hero'
import './homepageThird.css'
export default function HomepageThird() {
  return (
    <div className="homepageThird">
    <Hero 
          title={'La nuova piattaforma \n per il vero intrattenimento.'}
          paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
          button={'scopri'}
          />
    </div>
  )
}
