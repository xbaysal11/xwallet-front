/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelector, useDispatch } from "react-redux";
import { statuses } from "./../config";
import { Link } from "react-router-dom";

import { ExpenseTab, IncomeTab, TransferTab, Carousel } from "../components";
import { getWallets } from "../store/wallets/actions";

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
    ? (content = <h2>loading</h2>)
    : (content = <h2>no data</h2>);

  return (
    <div>
      <Link to="/money-operations/create-money-operation">create MO</Link>
      <h1>home</h1>
      <Link to="/wallets/create-wallet">Add wallet</Link>

      <h1>total: {store.wallets.wallets.wallets.total}</h1>
      {content}
      <Tabs>
        <TabList>
          <Tab>ExpenseTab</Tab>
          <Tab>IncomeTab</Tab>
          <Tab>TransferTab</Tab>
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
  );
}
