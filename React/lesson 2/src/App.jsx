import React, { useEffect, useState } from "react";
import Item from "./components/Item";

const USERS_API = "https://randomuser.me/api/?results=10";

const App = () => {
  // const [counter, setCounter] = useState(0);
  // const [isToggle, setIsToggle] = useState(false);

  // useEffect(() => {
  //   console.log("useEffect 1");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect 2");
  // }, [counter]);

  // useEffect(() => {
  //   console.log("useEffect 3");
  // });

  //-------------------------------
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    let res = await fetch(USERS_API);
    let { results } = await res.json();

    setData(
      results.map((item) => ({
        id: item.id.value,
        name: `${item.name.first} ${item.name.last}`,
        phone: item.phone,
        image: item.picture.medium,
      }))
    );
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    // <div>
    //   <button onClick={() => setCounter((prevState) => prevState + 1)}>
    //     Increment
    //   </button>
    //   <button onClick={() => setCounter((prevState) => prevState - 1)}>
    //     Decrement
    //   </button>
    //   <button onClick={() => setIsToggle(!isToggle)}>
    //     {isToggle ? "Close" : "Show"}
    //   </button>
    //   <h2>Count: {counter}</h2>

    //   {isToggle && <Item />}
    // </div>

    // ---------------------------
    <main>
      <section className="contact">
        <h2>Contact</h2>
        <div>
          <input type="text" />
        </div>
        <div>
          <ul className="list">
            {data &&
              data.map((item) => (
                <li className="list__item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.phone}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default App;
