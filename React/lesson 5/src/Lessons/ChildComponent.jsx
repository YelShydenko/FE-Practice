import React from 'react'
import { useEffect } from 'react'

const ChildComponent = () => {

    useEffect(()=>{
        let time = setTimeout(() => {
            console.log("Timer")
        }, 5000);

        return () => {
            console.log("ComponentWillUnmount")

            clearTimeout(time);
        }
    },[])

  return (
    <h1>This is Count!</h1>
  )
}

export default ChildComponent