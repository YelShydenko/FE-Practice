import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deposit, receiveAll, withdraw } from '../../store/reducers/accountReducer';

const FirstComponent = ({ increment }) => {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState(0);

    const handleDeposit = () => {
        // const deposit = (x) => ({type: "DEPOSIT", payload: x })
        
        dispatch(deposit(inputValue))
        setInputValue(0)
    }

    

    const handleWithdraw = () => {
        dispatch(withdraw(inputValue))
        setInputValue(0)
    }

    const handleChange = (e) => {
        let value = Number(e.target.value)

        setInputValue(value);
    }

    const getAll = () => {
        dispatch(receiveAll())
    }

    return (
        <>
            {/* <button onClick={increment}>Increment</button> */}
            <div>
                <input type="text" value={inputValue} onChange={handleChange}/>
                <button onClick={handleDeposit}>Deposit</button>
                <button onClick={handleWithdraw}>Withdraw</button>
                <button onClick={getAll}>Get All</button>
            </div>
        </>
    )
}

export default FirstComponent