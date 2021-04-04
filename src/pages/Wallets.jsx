/* eslint-disable indent */
import React, { useEffect } from "react";
import { WalletsItem } from "../components";

// import { login, authRegisterRequest } from "../store/auth/actions";
import { getWallets } from "./../store/wallets/actions";
import { useSelector, useDispatch } from "react-redux";
import { statuses } from "./../config";

export default function Wallets() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getWallets({
        filters: {
          // type: 2,
        },
      })
    );
  }, []);
  console.log(store);

  let content;
  const wallets = store.wallets.wallets;
  wallets.status === statuses.SUCCESS
    ? (content = wallets.wallets.wallet.map((item, idx) => (
        <WalletsItem key={idx} test={item.balance} />
        // <div key={idx}>
        //   <span>{item.amount}</span>
        //   <br />
        // </div>
      )))
    : wallets.status === statuses.LOADING
    ? (content = <h2>loading</h2>)
    : (content = <h2>no data</h2>);

  return (
    <div>
      <h2>Wallets</h2>
      <div>{content}</div>
    </div>
  );
}
