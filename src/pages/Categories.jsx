/* eslint-disable indent */
import React, { useEffect } from "react";
import { CategoriesItem } from "../components";

import { getCategories } from "./../store/categories/actions";
import { useSelector, useDispatch } from "react-redux";
import { statuses } from "./../config";
import { Link } from "react-router-dom";

export default function Categories() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const addButton = (
    <Link to="/categories/create-category">
      <div className="categories-item">
        <div className="category">
          <div className="category-name">
            <p>+</p>
          </div>
        </div>
      </div>
    </Link>
  );
  let content;
  const categories = store.categories.categories;
  categories.status === statuses.SUCCESS
    ? ((content = categories.categories.map((item, idx) => (
        <div className="categories-item" key={idx}>
          <CategoriesItem values={item} />
        </div>
      ))),
      content.push(addButton))
    : categories.status === statuses.LOADING
    ? (content = <h2>loading</h2>)
    : (content = addButton);

  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-list">{content}</div>
    </div>
  );
}
