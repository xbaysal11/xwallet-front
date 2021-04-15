/* eslint-disable indent */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import { createWallet } from "../store/wallets/actions";
import { CardLogo, Logo24 } from "../components/icons";
import { PageTitle } from "../components";

const TITLE = "Create Wallet - xWallet";

export default function CreateWallet() {
  const [name, setName] = useState("");
  // const [type, setType] = useState("");
  const [balance, setBalance] = useState();
  const dispatch = useDispatch();

  // const onTypeChangeHandler = (e) => {
  //   setType(e.target.value);
  // };

  // const types = [
  //   { name: "Cash", value: "cash" },
  //   { name: "Card", value: "card" },
  // ];
  // let typesInputList = types.map((item, idx) => (
  //   <input
  //     type="radio"
  //     key={idx}
  //     name="type"
  //     id={`wallet-type-${item.value}`}
  //     value={item.value}
  //     onChange={onTypeChangeHandler}
  //   />
  // ));

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <PageTitle title="Create wallet" goBack={true} />

      <div className="wallets page-content">
        <div className="wallets-item">
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
                  <p className="wallet-name__text">{name || "***"}</p>
                </div>
                <div className="wallet-balance">
                  <p className="wallet-balance__title">Balance</p>
                  <p className="wallet-balance__text">
                    {balance
                      ? balance
                          .toString()
                          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                      : "0"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wallets-item wallets-inputs">
          <input
            type="text"
            value={name}
            placeholder="Card name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={balance}
            placeholder="Balance"
            onChange={(e) => setBalance(e.target.value)}
          />
          {/* {typesInputList} */}
          <button
            onClick={() =>
              dispatch(
                createWallet({ name, type: "card", balance: balance || 0 })
              )
            }
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
