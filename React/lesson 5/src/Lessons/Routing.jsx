import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import "./lesson.scss";
import Posts from './Posts';
import PostItem from './PostItem';

const Routing = () => {
  return (
    <>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
        </ul>

        <Routes>
            <Route path="/" element={<h1>Home Page</h1>}/>
            <Route path="/about" element={<h1>About Page</h1>}/>
            <Route path="/posts" element={<Posts />}/>

            {/* <Route path="/posts/1" element={<h1>Post 1</h1>}/>
            <Route path="/posts/2" element={<h1>Post 2</h1>}/>
            <Route path="/posts/3" element={<h1>Post 3</h1>}/>
            <Route path="/posts/4" element={<h1>Post 4</h1>}/> */}

            <Route path="/posts/:postId" element={<PostItem />}/>
        </Routes>
    
    </>
  )
}

export default Routing