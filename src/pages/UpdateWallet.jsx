/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getWalletById,
  updateWallet,
  deleteWallet,
} from "../store/wallets/actions";
import { CardLogo, Logo24 } from "../components/icons";

const TITLE = "Update Wallet - xWallet";

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
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="wallets">
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

          <button
            onClick={() => dispatch(deleteWallet(id))}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
