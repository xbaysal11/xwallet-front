import React from "react";
import PT from "prop-types";
import { Link } from "react-router-dom";

export default function WalletsItem(props) {
  const { values } = props;
  return (
    <Link to={`/wallets/${values.id}`}>
      <div className="wallet">
        <div className="wallet-name">
          <p>{values.name}</p>
        </div>
        <div className="wallet-balance">
          <p>{values.balance}</p>
        </div>
      </div>
    </Link>
  );
}
WalletsItem.propTypes = {
  values: PT.object,
};
