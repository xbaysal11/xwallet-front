/* eslint-disable indent */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { RotateSpinner } from "react-spinners-kit";
import { useSelector, useDispatch } from "react-redux";

import { WalletsItem, PageTitle } from "../components";
import { getWallets } from "./../store/wallets/actions";
import { statuses } from "./../config";
import { CardLogo, Logo24, PlusIcon } from "../components/icons";

const TITLE = "Wallets - xWallet";

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
              <div className="plus-container">
                <PlusIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  let content;
  const wallets = store.wallets.wallets;
  wallets.status === statuses.SUCCESS
    ? (content = (
        <div className="wallets-list">
          {wallets.wallets.wallet.map((item, idx) => (
            <div className="wallets-item" key={idx}>
              <WalletsItem values={item} />
            </div>
          ))}
          {addButton}
        </div>
      ))
    : wallets.status === statuses.LOADING
    ? (content = (
        <div className="spinner-container">
          <RotateSpinner size={30} color="#157CE3" loading={true} />
        </div>
      ))
    : (content = addButton);

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <PageTitle title="Wallets" goBack={true} />

      <div className="wallets page-content">{content}</div>
    </>
  );
}
