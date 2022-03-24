import React from 'react'
import './profilo.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../counterSlice'
export default function Profilo() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(22))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
</>
  )
}
