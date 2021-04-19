/* eslint-disable indent */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RotateSpinner } from "react-spinners-kit";
import { useSelector, useDispatch } from "react-redux";
import { Pie } from "react-chartjs-2";

import { getWallets } from "../store/wallets/actions";
import { PageTitle, ReportsTables } from "../components";
import { statuses } from "./../config";
import { Up, Down } from "../components/icons";

const TITLE = "Reports - xWallet";

export default function Reports() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      await dispatch(getWallets());
    };
    fetch();
  }, []);
  console.log({ store });
  const wallets = store.wallets.wallets;
  let coloR = [];
  const dynamicColors = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  wallets.status === statuses.SUCCESS &&
    wallets.wallets.wallet.forEach(() => {
      // console.log(element);
      coloR.push(dynamicColors());
    });

  const data = {
    labels:
      wallets.status === statuses.SUCCESS &&
      wallets.wallets.wallet.map((item) => item.name),
    datasets: [
      {
        label: "# of Votes",
        data:
          wallets.status === statuses.SUCCESS &&
          wallets.wallets.wallet.map((item) => item.balance),
        backgroundColor: coloR,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Pie Chart",
      },
    },
  };
  let content;
  wallets.status === statuses.SUCCESS
    ? (content = (
        <div>
          <Pie data={data} options={options} width={500} height={350} />
        </div>
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
  let tableData = [];
  store.wallets.wallets.wallets.wallet &&
    store.wallets.wallets.wallets.wallet.map((item) => {
      tableData.unshift(
        <tr>
          <td>{item.name}</td>
          <td>{item.balance}</td>
        </tr>
      );
    });

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <PageTitle title="Reports" goBack={true} />

      <div className="reports page-content">
        <div className="home">
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
        </div>
        <div className="reports-header">
          <table>
            <tr>
              <th>Wallet</th>
              <th>Balance</th>
            </tr>
            {tableData}
          </table>
          <div>{content}</div>
        </div>

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
          </TabList>

          <TabPanel>
            <ReportsTables type={1} label="Expenses" />
          </TabPanel>
          <TabPanel>
            <ReportsTables type={2} label="Incomes" />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
