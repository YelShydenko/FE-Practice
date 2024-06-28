import React, { useEffect } from 'react'

const Count = ({ updateOne, updateTwo }) => {
   
   useEffect(() => {
      updateOne()
   }, [updateOne])
   
   useEffect(() => {
     updateTwo();
   }, [updateTwo]);

  return (
    <div>
      Count
    </div>
  )
}

export default Count

