import React from 'react'
import FeatureHomepage from '../components/FeatureHomepage'
import FeatureHomepageComplete from '../components/FeatureHomepageComplete'
import FeatureHomepageCompletev2 from '../components/FeatureHomepageCompletev2'
import './homepageSecond.css'
export default function HomepageSecond() {
  return (
    <div className='homePageSecond'>
        <FeatureHomepageComplete/>
        <FeatureHomepageCompletev2 />
    </div>
  )
}
