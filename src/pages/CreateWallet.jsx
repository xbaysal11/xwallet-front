/* eslint-disable indent */
import React, { useState } from "react";

import { createWallet } from "../store/wallets/actions";
import { useDispatch } from "react-redux";

export default function CreateWallet() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [balance, setBalance] = useState(0);
  const dispatch = useDispatch();

  const onTypeChangeHandler = (e) => {
    setType(e.target.value);
  };

  const types = [
    { name: "Cash", value: "cash" },
    { name: "Card", value: "card" },
  ];
  let typesInputList = types.map((item, idx) => (
    <input
      type="radio"
      key={idx}
      name="type"
      id={`wallet-type-${item.value}`}
      value={item.value}
      onChange={onTypeChangeHandler}
    />
  ));

  return (
    <div className="wallets">
      <div className="wallets-item">
        <div className="wallet">
          <div className="wallet-name">
            <p>{name}</p>
          </div>
        </div>
      </div>
      <input
        type="text"
        value={name}
        placeholder="wallet name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={balance}
        placeholder="wallet balance"
        onChange={(e) => setBalance(e.target.value)}
      />
      {typesInputList}
      <button onClick={() => dispatch(createWallet({ name, type, balance }))}>
        Create
      </button>
    </div>
  );
}
