import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ExpenseTab, IncomeTab, TransferTab } from "../components";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
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
