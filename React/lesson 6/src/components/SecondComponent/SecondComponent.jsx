import React from 'react'
import { useSelector } from "react-redux";

const SecondComponent = ({ count }) => {
  const balance = useSelector(state => state.account.balance)

  return (
    <>
      {/* <div>Count: {count}</div> */}
      <div>Balance: {balance} $</div>
    </>
  )
}

export default SecondComponent