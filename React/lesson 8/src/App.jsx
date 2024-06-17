import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { createUser, fetchUsers } from "./store/features/usersSlice";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Post from "./Components/Post/Post";

function App() {
  const dispatch = useDispatch();
   // const data = useSelector((state) => state.users.data);
   // const loading = useSelector((state) => state.users.loading);
   const { data, loading } = useSelector((state) => state.users);

   const [inputValue, setValue] = useState("");
   
  const handleCreateUser = () => {
     dispatch(createUser({
        id: uuidv4(),
        name: inputValue
     }));
  };
   
   useEffect(() => {
     dispatch(fetchUsers());
   }, []);
   
   if (loading) {
      return "Loading ..."
   }
   
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleCreateUser}>Add User</button>
      </div>
        <ul>
           {data && data.map((elem) => <li key={elem.id}>{elem.name}</li> )}
        </ul>
        
        <Post/>
    </>
  );
}

export default App;
