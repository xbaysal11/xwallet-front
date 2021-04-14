/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useSelector, useDispatch } from "react-redux";
import { RotateSpinner } from "react-spinners-kit";
import { Helmet } from "react-helmet";

import "react-tabs/style/react-tabs.css";
import { statuses } from "./../config";
import { ExpenseTab, IncomeTab, TransferTab, Carousel } from "../components";
import { Up, Down, UpDown } from "../components/icons";
import { getWallets } from "../store/wallets/actions";

const TITLE = "Home - xWallet";

export default function Home() {
  const [walletId, setWalletId] = useState("");

  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWallets());
  }, []);
  console.log({ store, walletId });

  let content;
  const wallets = store.wallets.wallets;
  wallets.status === statuses.SUCCESS
    ? (content = (
        <Carousel
          items={wallets.wallets.wallet}
          active={0}
          onChange={setWalletId}
          type="wallets"
        />
      ))
    : wallets.status === statuses.LOADING
    ? (content = (
        <div className="spinner-container">
          <RotateSpinner size={30} color="#157CE3" loading={true} />
        </div>
      ))
    : (content = (
        <div className="spinner-container">
          <p>No Data</p>
        </div>
      ));

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="home page-content">
        <div className="home-header">
          <div className="home-header-inner">
            <div className="home-header-left">
              <h3>Your total balance:</h3>
            </div>
            <div className="home-header-right">
              <h1>
                {store.wallets.wallets.wallets.total &&
                  store.wallets.wallets.wallets.total
                    .toString()
                    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
              </h1>
            </div>
          </div>
        </div>
        {content}
        <Tabs>
          <TabList>
            <Tab>
              <Up />
              <span>Expenses</span>
            </Tab>
            <Tab>
              <Down />
              <span>Incomes</span>
            </Tab>
            <Tab>
              <UpDown />
              <span>Transfers</span>
            </Tab>
          </TabList>

          <TabPanel>
            <ExpenseTab />
          </TabPanel>
          <TabPanel>
            <IncomeTab />
          </TabPanel>
          <TabPanel>
            <TransferTab />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
