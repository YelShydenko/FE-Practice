import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setZero } from './store/features/counter/counterSlice';
import { createPost, deletePost } from './store/features/post/postSlice';
import { v4 as uuidv4 } from 'uuid';
import PostItem from './Components/PostItem/PostItem';

const App = () => {
    const dispatch = useDispatch();

    const [inputValue, setValue] = useState("")

    const { count } = useSelector(state => state.counter)

    const data = useSelector(state => state.post.data)

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleSetZero = () => {
        dispatch(setZero())
    }

    const handleCreatePost = () => {
        dispatch(createPost(
            {
                id: uuidv4(),
                name: inputValue
            }
        ))

        setValue("");
    }

    return (
        <>
            <div>
                <button onClick={handleIncrement}>increment</button>
                <button onClick={handleDecrement}>decrement</button>
                <button onClick={handleSetZero}>Set Zero</button>

                <h2>{count}</h2>
            </div>


            <div>
                <input type="text" value={inputValue} onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleCreatePost}>Add Post</button>
            </div>

            <div>
                <ul>
                    {data && data.map((item, index) => <PostItem key={item.id} post={item} setValue={setValue} value={inputValue}/>)}
                </ul>
            </div>
        </>
    )
}

export default App


