import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Posts = () => {
  const [data, setData] = useState([]);
  const fetchPosts = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let posts = await res.json();
      setData(posts);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="posts">
      {data &&
        data.map((item) => (
          <section key={item.id} className="item">
            <img
              src="./post-item.png"
              alt={item.title}
              className="item__image"
            />
            <Link to={`/posts/${item.id}`} className="item__title">
              {item.title}
            </Link>
          </section>
        ))}
    </div>
  );
};
export default Posts;
