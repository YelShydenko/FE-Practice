import React, { useEffect, useState } from "react";

const PostsApi = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [data, setData] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(PostsApi);
      if (!res.ok) {
        throw new Error(`Error! Status: ${res.status}`);
      }
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deleteItem = (postId) => {
    const updateData = data.filter((elem) => elem.id !== postId);
    setData(updateData);
  };

  return (
    <div className="container">
      <div className="posts">
        {data &&
          data.map((elem) => (
            <section className="item" key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
              <button className="delete__btn" onClick={() => deleteItem(elem.id)}>Delete</button>
            </section>
          ))}
      </div>
    </div>
  );
};

export default App;
