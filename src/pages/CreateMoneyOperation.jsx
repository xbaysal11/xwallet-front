/* eslint-disable indent */
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import { statuses } from "./../config";

import { CreateTransfer, CreateExpInc } from "../components";

export default function CreateMoneyOperation() {
  return (
    <div>
      <h1>Create MO</h1>

      <Tabs>
        <TabList>
          <Tab>ExpenseTab</Tab>
          <Tab>IncomeTab</Tab>
          <Tab>TransferTab</Tab>
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
  );
}
