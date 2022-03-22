import React from 'react'
import './login.css'
import {LoginContainer} from '../components/LoginContainer.tsx'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
export default function Login() {
    const count = useSelector((state) => state.counter.value)

  
  useEffect(() => {
    

  }, [])
  return (
    <div className='loginPage'>
      {count}
      <LoginContainer />
    </div>
  )
}
