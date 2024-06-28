import React, { memo, useEffect } from 'react'

const Color = ({ color }) => {

  //  useEffect(() => {
  //    console.log("COLOR COMPONENT");
  //  });
  
  return (
    <div>
      This color: {color}
    </div>
  )
}

export default memo(Color)
