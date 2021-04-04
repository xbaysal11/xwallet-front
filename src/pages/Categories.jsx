/* eslint-disable indent */
import React, { useEffect } from "react";
import { CategoriesItem } from "../components";

// import { login, authRegisterRequest } from "../store/auth/actions";
import { getCategories } from "./../store/categories/actions";
import { useSelector, useDispatch } from "react-redux";
import { statuses } from "./../config";

export default function Categories() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  console.log(store);

  let content;
  const categories = store.categories.categories;
  categories.status === statuses.SUCCESS
    ? (content = categories.categories.map((item, idx) => (
        <CategoriesItem key={idx} test={item.name} />
      )))
    : categories.status === statuses.LOADING
    ? (content = <h2>loading</h2>)
    : (content = <h2>no data</h2>);

  return (
    <div>
      <h2>Categories</h2>
      <div>{content}</div>
    </div>
  );
}
