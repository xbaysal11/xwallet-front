/* eslint-disable indent */
import React, { useState, useEffect } from "react";

import {
  getWalletById,
  updateWallet,
  deleteWallet,
} from "../store/wallets/actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function UpdateWallet() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [name, setName] = useState();
  const [balance, setBalance] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(getWalletById(id));
      setName(result.name);
      setBalance(result.balance);
    };
    fetchData();
  }, []);

  return (
    <div className="wallets">
      <div className="wallets-item">
        <div className="wallet">
          <div className="wallet-name">
            <p>{name}</p>
          </div>
          <div className="wallet-balance">
            <p>{balance}</p>
          </div>
        </div>
      </div>
      <input
        type="text"
        value={name}
        placeholder="Category name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={balance}
        placeholder="Category balance"
        onChange={(e) => setBalance(e.target.value)}
      />
      <button onClick={() => dispatch(updateWallet({ name, balance }, id))}>
        Update
      </button>

      <button onClick={() => dispatch(deleteWallet(id))}>Delete</button>
    </div>
  );
}
