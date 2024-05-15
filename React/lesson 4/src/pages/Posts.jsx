import React, { useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([
    {
      id: "1",
      title: "Post 1",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi est sequi facere dignissimos nisi nesciunt libero earum nihil pariatur?",
    },
    {
      id: "2",
      title: "Post 2",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi est sequi facere dignissimos nisi nesciunt libero earum nihil pariatur?",
    },
    {
      id: "3",
      title: "Post 3",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi est sequi facere dignissimos nisi nesciunt libero earum nihil pariatur?",
    },
    {
      id: "4",
      title: "Post 4",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi est sequi facere dignissimos nisi nesciunt libero earum nihil pariatur?",
    },
  ]);

  return (
    <div>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <Link to={item.id}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Posts;
