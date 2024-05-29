import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    const [postsData, setPostsData] = useState([])

    const fetchData = async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");

        let data = await res.json();

        setPostsData(data)
    }

    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div className='posts'>
        {
            postsData && postsData.map(post => <p key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></p>)
        }
    </div>
  )
}

export default Posts