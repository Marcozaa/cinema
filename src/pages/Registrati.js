import React from 'react'
import { RegisterContainer } from '../components/RegisterContainer'

import './login.css'

export default function Registrati() {
  /**
   *  TODO _ check se un utente si è gia registrato con la mail inserita
   */
  return (
    <div className='loginPage'>
        <RegisterContainer />
    </div>
  )
}
