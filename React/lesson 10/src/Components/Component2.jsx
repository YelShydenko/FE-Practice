import React, { useContext } from 'react'
import { CounterContext } from '../context'

const Component2 = () => {
   const {count} = useContext(CounterContext)
  return (
    <>
        <h2>{count}</h2>
    </>
  )
}

export default Component2
