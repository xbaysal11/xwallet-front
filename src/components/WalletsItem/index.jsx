import React from "react";
import PT from "prop-types";

export default function WalletsItem(props) {
  const { test } = props;
  return (
    <div>
      <h1>{test}</h1>
    </div>
  );
}
WalletsItem.propTypes = {
  test: PT.string,
};
