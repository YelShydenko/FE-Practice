import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  fetchPostsById,
  removePost,
  removePostAll,
} from "../../store/features/postsSlice";

const Post = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const { data, loading, foundPost } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return "Loading .........";
  }

  const handleDispatchPost = () => {
    dispatch(fetchPostsById(inputValue));
  };

  const deletePost = (id) => {
    dispatch(removePost(id));
  };
   
   const handleRemoveAll = () => {
      dispatch(removePostAll())
   }
   
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleDispatchPost}>Find By ID</button>
        <button onClick={handleRemoveAll}>Remove All</button>
      </div>

      <p>Post Count: {data.length}</p>

      {foundPost && (
        <div>
          <h2>{foundPost.title}</h2>
          <p>{foundPost.body}</p>
        </div>
      )}
      <div>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <button onClick={() => deletePost(item.id)}>Remove</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Post;
