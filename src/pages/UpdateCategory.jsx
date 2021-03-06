/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../store/categories/actions";
import { PageTitle } from "../components";

const TITLE = "Edit Category - xWallet";

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
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <PageTitle title="Edit category" goBack={true} />

      <div className="categories page-content">
        <div className="categories-item">
          <div className="category">
            <div className="category-inner">
              <div className="category-name">
                <p>{name || "***"}</p>
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
          <button onClick={() => dispatch(updateCategory({ name }, id))}>
            Update
          </button>

          <button
            onClick={() => dispatch(deleteCategory(id))}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
