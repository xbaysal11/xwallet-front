/* eslint-disable indent */
import React, { useEffect } from "react";
import { WalletsItem } from "../components";
import { Link } from "react-router-dom";

import { getWallets } from "./../store/wallets/actions";
import { useSelector, useDispatch } from "react-redux";
import { statuses } from "./../config";

export default function Wallets() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWallets());
  }, []);
  const addButton = (
    <Link to="/wallets/create-wallet">
      <div className="wallets-item">
        <div className="wallet">
          <div className="wallet-name">
            <p>+</p>
          </div>
        </div>
      </div>
    </Link>
  );

  let content;
  const wallets = store.wallets.wallets;
  wallets.status === statuses.SUCCESS
    ? ((content = wallets.wallets.wallet.map((item, idx) => (
        <div className="wallets-item" key={idx}>
          <WalletsItem values={item} />
        </div>
      ))),
      content.push(addButton))
    : wallets.status === statuses.LOADING
    ? (content = <h2>loading</h2>)
    : (content = addButton);

  return (
    <div className="wallets">
      <h2>Wallets</h2>
      <div className="wallets-list">{content}</div>
    </div>
  );
}
