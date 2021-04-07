/* eslint-disable indent */
import React, { useState } from "react";

// import { login, authRegisterRequest } from "../store/auth/actions";
import { createCategory } from "./../store/categories/actions";
import { useDispatch } from "react-redux";
// import { statuses } from "./../config";
// import { Link } from "react-router-dom";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const [type, setType] = useState(1);
  // const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const onTypeChangeHandler = (e) => {
    setType(e.target.value);
  };

  const types = [
    { name: "Expense", value: 1 },
    { name: "Income", value: 2 },
    { name: "Transfer", value: 3 },
  ];
  let typesInputList = types.map((item, idx) => (
    <input
      type="radio"
      key={idx}
      name={item.name}
      id={`category-type${item.value}`}
      value={item.value}
      onChange={onTypeChangeHandler}
    />
  ));

  return (
    <div className="categories">
      <div className="categories-item">
        <div className="category">
          <div className="category-name">
            <p>{name}</p>
          </div>
        </div>
      </div>
      <input
        type="text"
        value={name}
        placeholder="Category name"
        onChange={(e) => setName(e.target.value)}
      />
      {typesInputList}
      <button onClick={() => dispatch(createCategory({ name, type }))}>
        Create
      </button>
    </div>
  );
}
