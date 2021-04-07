import React from "react";
import PT from "prop-types";
import { Link } from "react-router-dom";

export default function CategoriesItem(props) {
  const { values } = props;
  let typeName = "";
  if (values.type === 1) {
    typeName = "Expense";
  } else if (values.type === 2) {
    typeName = "Income";
  } else if (values.type === 3) {
    typeName = "Transfer";
  }
  return (
    <Link to={`/categories/${values.id}`}>
      <div className="category">
        <div className="category-name">
          <p>{values.name}</p>
        </div>
        <div className="category-type">
          <p>{typeName}</p>
        </div>
      </div>
    </Link>
  );
}
CategoriesItem.propTypes = {
  values: PT.object,
};
