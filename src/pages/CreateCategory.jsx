/* eslint-disable indent */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import { PageTitle } from "../components";
import { createCategory } from "./../store/categories/actions";

const TITLE = "Create Category - xWallet";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const [typeName, setTypeName] = useState("Expense");
  const [type, setType] = useState(1);
  const dispatch = useDispatch();
  const types = [
    { name: "Expense", value: 1 },
    { name: "Income", value: 2 },
  ];
  const onTypeChangeHandler = (e) => {
    // const name = ;
    setType(e.target.value);
    // console.log(name);
    setTypeName(types.find((x) => x.value == e.target.value).name);
  };

  let typesInputList = types.map((item, idx) => (
    <div key={idx}>
      <input
        type="radio"
        name="type"
        id={`category-type-${item.value}`}
        value={item.value}
        onChange={onTypeChangeHandler}
        defaultChecked={item.value === type}
      />
      <label htmlFor={`category-type-${item.value}`}>{item.name}</label>
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <PageTitle title="Create category" goBack={true} />

      <div className="categories page-content">
        <div className="categories-item">
          <div className="category">
            <div className="category-inner">
              <div className="category-name">
                <p>{name || "***"}</p>
              </div>
              <div className="category-type">
                <p>{typeName}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="categories-item categories-inputs">
          <input
            type="text"
            value={name}
            placeholder="Category name"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="categories-inputs-radio">{typesInputList}</div>
          <button onClick={() => dispatch(createCategory({ name, type }))}>
            Create
          </button>
        </div>
      </div>
    </>
  );
}
