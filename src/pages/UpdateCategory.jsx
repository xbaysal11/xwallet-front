/* eslint-disable indent */
import React, { useState, useEffect } from "react";

import {
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../store/categories/actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function UpdateCategory() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [name, setName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(getCategoryById(id));
      setName(result.name);
    };
    fetchData();
  }, []);

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
      <button onClick={() => dispatch(updateCategory({ name }, id))}>
        Update
      </button>

      <button onClick={() => dispatch(deleteCategory(id))}>Delete</button>
    </div>
  );
}
