/* eslint-disable indent */
import React, { useEffect } from "react";
import { RotateSpinner } from "react-spinners-kit";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { CategoriesItem } from "../components";
import { getCategories } from "./../store/categories/actions";
import { statuses } from "./../config";
import { PlusIcon } from "../components/icons";

const TITLE = "Categories - xWallet";

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
          <div className="category-inner">
            <div className="category-name">
              <div className="plus-container">
                <PlusIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
  let content;
  const categories = store.categories.categories;
  categories.status === statuses.SUCCESS
    ? (content = (
        <div className="categories-list">
          {categories.categories.map((item, idx) => (
            <div className="categories-item" key={idx}>
              <CategoriesItem values={item} />
            </div>
          ))}
          {addButton}
        </div>
      ))
    : categories.status === statuses.LOADING
    ? (content = (
        <div className="spinner-container">
          <RotateSpinner size={30} color="#157CE3" loading={true} />
        </div>
      ))
    : (content = addButton);

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="categories">
        <h2>Categories</h2>
        {content}
      </div>
    </>
  );
}
