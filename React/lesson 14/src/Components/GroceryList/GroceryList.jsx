import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./GroceryList.scss";

const GroceryList = () => {
  const { register, handleSubmit, reset } = useForm();
  const [itemList, setItemList] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const onSubmit = (data) => {
    setItemList([...itemList, data.name]);
    reset();
  };

  const filteredItems = itemList.filter((elem) => elem.includes(searchItem));

  const data = filteredItems.length > 0 ? filteredItems : itemList;

  return (
    <div className="grocery-list__container">
      <input
        type="text"
        onChange={(e) => setSearchItem(e.target.value)}
        value={searchItem}
        placeholder="Search"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grocery-list__container-form"
      >
        <input
          type="text"
          {...register("name", { required: "This field is required" })}
          placeholder="Add item"
        />
        <button type="submit">Add to list</button>
      </form>
      <div>
        <h3>Элементы</h3>
        <ul>
          {data.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroceryList;
