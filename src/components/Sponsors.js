import React from 'react'
import './sponsors.css'

import { Divider } from '@mantine/core'
export default function Sponsors({paragraph, first, second, third, fourth, fifth}) {
  return (
    <div className="sponsors">
      
      <div className="sponsorsCointainer">
         <img className='sponsor' src={first}/>
        <img className='sponsor' src={second}/>
        <img className='sponsor' src={third}/>
        <img className='sponsor' src={fourth}/>
        <img className='sponsor' src={fifth}/>
      </div>
      <div className="bottom">
        <p className="paragraph">{paragraph}</p>
      </div>
     
    </div>
  )
}
