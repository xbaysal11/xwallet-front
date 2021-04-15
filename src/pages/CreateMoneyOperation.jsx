/* eslint-disable indent */
import React from "react";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import { Up, Down, UpDown } from "../components/icons";
import { CreateTransfer, CreateExpInc, PageTitle } from "../components";

const TITLE = "Create Money Operation - xWallet";

export default function CreateMoneyOperation() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <PageTitle title="Create money operation" goBack={true} />

      <div className="page-content">
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
            <CreateExpInc values={{ type: 1 }} />
          </TabPanel>
          <TabPanel>
            <CreateExpInc values={{ type: 2 }} />
          </TabPanel>
          <TabPanel>
            <CreateTransfer values={{ type: 3 }} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
