import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const PostItem = () => {
    let {postId} = useParams(); // 1

    const [postData, setPostData] = useState(null);

    const fetchData = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

        let data = await res.json();

        setPostData(data)
    }

    useEffect(()=>{
        fetchData();
    },[postId])

    if(!postData) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            <h2>{postData.title}</h2>
            <p>{postData.body}</p>
        </div>
    )
}

export default PostItem