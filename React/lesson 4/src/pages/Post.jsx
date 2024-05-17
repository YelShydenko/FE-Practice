import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams(); // 1
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const fetchPost = async () => {
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      let post = await res.json();

      setData(post);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  return (
    <>
      <button onClick={handleBack}>Back</button>

      <div className="post">
        <img src="../post-item.png" alt="" className="post__image" />

        <h2 className="post__title">{data.title}</h2>
        <p className="post__desc">{data.body}</p>
      </div>
    </>
  );
};

export default Post;
