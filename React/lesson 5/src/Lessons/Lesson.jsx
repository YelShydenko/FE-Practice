import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent';

const Lesson = () => {
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const [values, setValues] = useState("");

    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    // console.log("render")

    // useEffect(()=>{
    //     console.log("useEffect 1");
    // },[]);

    // useEffect(()=>{
    //     console.log("useEffect 2");
    // })

    // useEffect(()=>{
    //     console.log("useEffect 3");
    // }, [isShow])

    useEffect(()=>{
        if(values === "hello"){
            alert("Hello John!")
        }
    },[values])

    return (
        <>
            <button onClick={increment}>Increment</button>

            <button onClick={() => setIsShow(!isShow)}>{isShow ? "Hide" : "Show"}</button>

            <input type="text" onChange={(e) => setValues(e.target.value)} value={values}/>

            <h2>{values}</h2>

            {
                isShow && <ChildComponent />
            }

            <h2>{count}</h2>
        </>
    )
}

export default Lesson