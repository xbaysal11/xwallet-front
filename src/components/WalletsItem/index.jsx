import React from "react";
import PT from "prop-types";
import { Link } from "react-router-dom";
import { CardLogo, Logo24 } from "../icons";

export default function WalletsItem(props) {
  const { values } = props;
  return (
    <Link to={`/wallets/${values.id}`}>
      <div className="wallet">
        <div className="wallet-inner">
          <div className="wallet-header">
            <div className="wallet-label">
              <Logo24 />
              <span>xWallet</span>
            </div>
            <div className="wallet-logo">
              <CardLogo />
            </div>
          </div>
          <div className="wallet-body">
            <div className="wallet-name">
              <p className="wallet-name__title">Card name</p>
              <p className="wallet-name__text">{values.name}</p>
            </div>
            <div className="wallet-balance">
              <p className="wallet-balance__title">Balance</p>
              <p className="wallet-balance__text">
                {values.balance &&
                  values.balance
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
WalletsItem.propTypes = {
  values: PT.object,
};
