import React from "react";
import PT from "prop-types";

export default function CategoriesItem(props) {
  const { test } = props;
  return (
    <div>
      <h1>{test}</h1>
    </div>
  );
}
CategoriesItem.propTypes = {
  test: PT.string,
};
