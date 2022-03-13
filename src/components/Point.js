import React from 'react'
import './Point.css'
export default function Point({left,color}) {
  return (
    <div  style={{left: `${left}`, background : `${color}`}} className='point'>Point</div>
  )
}
