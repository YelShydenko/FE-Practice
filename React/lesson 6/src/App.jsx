import React, { useState } from 'react'
import FirstComponent from './components/FirstComponent/FirstComponent'
import SecondComponent from './components/SecondComponent/SecondComponent'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstComponent increment={() => setCount(prevState => prevState + 1)}/>

      <SecondComponent count={count}/>
    </>
  )
}

export default App