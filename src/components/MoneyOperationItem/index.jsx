import React from "react";
import PT from "prop-types";

export default function MoneyOperationItem(props) {
  const { test } = props;
  return (
    <div>
      <h1>{test}</h1>
    </div>
  );
}
MoneyOperationItem.propTypes = {
  test: PT.string,
};
